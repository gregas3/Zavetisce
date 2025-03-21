
import { useState, useEffect, useRef } from 'react';
import { Map, Pin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface LocationPickerProps {
  value: { lat: number; lng: number } | null;
  onChange: (location: { lat: number; lng: number } | null) => void;
  error?: string;
}

const LocationPicker = ({ value, onChange, error }: LocationPickerProps) => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [mapInstance, setMapInstance] = useState<google.maps.Map | null>(null);
  const [marker, setMarker] = useState<google.maps.Marker | null>(null);
  const [address, setAddress] = useState("");

  // Load Google Maps script
  useEffect(() => {
    const loadGoogleMapsScript = () => {
      if (window.google && window.google.maps) {
        setMapLoaded(true);
        return;
      }

      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDYpCClgstOxOC6ClvJxS__JHfSJ-QS6vY&libraries=places&callback=initMap`;
      script.async = true;
      script.defer = true;
      window.initMap = () => setMapLoaded(true);
      document.head.appendChild(script);
    };

    loadGoogleMapsScript();
  }, []);

  // Initialize map once script is loaded
  useEffect(() => {
    if (!mapLoaded || !mapRef.current) return;

    // Default to Maribor, Slovenia
    const maribor = { lat: 46.5547, lng: 15.6467 };
    const initialPosition = value || maribor;

    const map = new google.maps.Map(mapRef.current, {
      center: initialPosition,
      zoom: 13,
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: false,
    });

    setMapInstance(map);

    // Create marker if we have a value
    if (value) {
      const newMarker = new google.maps.Marker({
        position: value,
        map: map,
        draggable: true,
      });
      
      setMarker(newMarker);
      
      // Update coordinates when marker is dragged
      newMarker.addListener('dragend', () => {
        const position = newMarker.getPosition();
        if (position) {
          onChange({ lat: position.lat(), lng: position.lng() });
          reverseGeocode(position.lat(), position.lng());
        }
      });
    }

    // Set up click event to place marker
    map.addListener('click', (event: google.maps.MapMouseEvent) => {
      const position = event.latLng;
      
      if (!position) return;
      
      if (marker) {
        marker.setPosition(position);
      } else {
        const newMarker = new google.maps.Marker({
          position,
          map,
          draggable: true,
        });
        
        // Update coordinates when marker is dragged
        newMarker.addListener('dragend', () => {
          const newPosition = newMarker.getPosition();
          if (newPosition) {
            onChange({ lat: newPosition.lat(), lng: newPosition.lng() });
            reverseGeocode(newPosition.lat(), newPosition.lng());
          }
        });
        
        setMarker(newMarker);
      }
      
      onChange({ lat: position.lat(), lng: position.lng() });
      reverseGeocode(position.lat(), position.lng());
    });

    // Setup autocomplete for address input
    const setupAutocomplete = () => {
      if (!mapLoaded) return;
      
      const autocomplete = new google.maps.places.Autocomplete(
        document.getElementById('location-input') as HTMLInputElement,
        { 
          componentRestrictions: { country: 'si' },
          fields: ['geometry', 'formatted_address']
        }
      );
      
      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        if (!place.geometry || !place.geometry.location) return;
        
        const lat = place.geometry.location.lat();
        const lng = place.geometry.location.lng();
        setAddress(place.formatted_address || "");
        
        map.setCenter({ lat, lng });
        map.setZoom(16);
        
        if (marker) {
          marker.setPosition({ lat, lng });
        } else {
          const newMarker = new google.maps.Marker({
            position: { lat, lng },
            map,
            draggable: true,
          });
          
          newMarker.addListener('dragend', () => {
            const position = newMarker.getPosition();
            if (position) {
              onChange({ lat: position.lat(), lng: position.lng() });
              reverseGeocode(position.lat(), position.lng());
            }
          });
          
          setMarker(newMarker);
        }
        
        onChange({ lat, lng });
      });
    };
    
    setupAutocomplete();
  }, [mapLoaded, mapRef]);

  // Reverse geocoding to get address from coordinates
  const reverseGeocode = (lat: number, lng: number) => {
    if (!mapLoaded) return;
    
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ location: { lat, lng } }, (results, status) => {
      if (status === 'OK' && results && results[0]) {
        setAddress(results[0].formatted_address);
      } else {
        setAddress(`${lat.toFixed(6)}, ${lng.toFixed(6)}`);
      }
    });
  };

  // Initialize address if we have a value
  useEffect(() => {
    if (value && mapLoaded) {
      reverseGeocode(value.lat, value.lng);
    }
  }, [value, mapLoaded]);

  const useCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          
          if (mapInstance) {
            mapInstance.setCenter({ lat, lng });
            mapInstance.setZoom(16);
            
            if (marker) {
              marker.setPosition({ lat, lng });
            } else {
              const newMarker = new google.maps.Marker({
                position: { lat, lng },
                map: mapInstance,
                draggable: true,
              });
              
              newMarker.addListener('dragend', () => {
                const position = newMarker.getPosition();
                if (position) {
                  onChange({ lat: position.lat(), lng: position.lng() });
                  reverseGeocode(position.lat(), position.lng());
                }
              });
              
              setMarker(newMarker);
            }
            
            onChange({ lat, lng });
            reverseGeocode(lat, lng);
          }
        },
        (error) => {
          console.error("Napaka pri pridobivanju lokacije: ", error);
        }
      );
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col space-y-1.5">
        <Label htmlFor="location-input">Naslov lokacije</Label>
        <div className="flex gap-2">
          <Input
            id="location-input"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Vnesite naslov lokacije"
            className="flex-1"
          />
          <Button 
            type="button" 
            variant="outline" 
            size="icon" 
            onClick={useCurrentLocation}
            title="Uporabi trenutno lokacijo"
          >
            <Pin size={18} />
          </Button>
        </div>
        {error && <p className="text-sm text-destructive mt-1">{error}</p>}
      </div>
      
      <div 
        ref={mapRef} 
        className="w-full h-[300px] rounded-md border border-input bg-background overflow-hidden"
      >
        {!mapLoaded && (
          <div className="w-full h-full flex items-center justify-center bg-gray-100">
            <div className="flex items-center gap-2">
              <Map className="animate-pulse text-teal-500" />
              <span>Nalaganje zemljevida...</span>
            </div>
          </div>
        )}
      </div>
      
      <p className="text-xs text-muted-foreground">
        Kliknite na zemljevid za izbiro lokacije ali premaknite označevalec
      </p>
    </div>
  );
};

export default LocationPicker;
