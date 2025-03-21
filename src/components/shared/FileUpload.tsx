
import { useState, useRef } from 'react';
import { Upload, X, Image, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

interface FileUploadProps {
  onChange: (files: File[]) => void;
  value: File[];
  error?: string;
  maxFiles?: number;
  accept?: string;
}

const FileUpload = ({ 
  onChange,
  value = [],
  error,
  maxFiles = 3,
  accept = "image/*"
}: FileUploadProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [dragActive, setDragActive] = useState(false);

  const handleFiles = (files: FileList) => {
    const filesArray = Array.from(files);
    const remainingSlots = maxFiles - value.length;
    
    if (remainingSlots <= 0) {
      return;
    }
    
    const allowedFiles = filesArray.slice(0, remainingSlots);
    onChange([...value, ...allowedFiles]);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      handleFiles(files);
    }
    
    // Reset the input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const removeFile = (index: number) => {
    const newFiles = [...value];
    newFiles.splice(index, 1);
    onChange(newFiles);
  };

  const getFilePreview = (file: File) => {
    if (file.type.startsWith('image/')) {
      return URL.createObjectURL(file);
    }
    return null;
  };

  return (
    <div className="space-y-2">
      <div 
        className={`border-2 border-dashed rounded-lg p-6 text-center ${dragActive ? 'border-teal-500 bg-teal-50' : 'border-gray-300'} ${error ? 'border-destructive' : ''}`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept={accept}
          onChange={handleChange}
          className="hidden"
          id="file-upload"
        />
        
        <Label htmlFor="file-upload" className="cursor-pointer flex flex-col items-center">
          <Upload size={24} className="mb-2 text-teal-500" />
          <span className="text-sm font-medium mb-1">Kliknite za nalaganje ali povlecite datoteke sem</span>
          <span className="text-xs text-muted-foreground">
            {value.length}/{maxFiles} slik, največ 10MB na sliko
          </span>
        </Label>
      </div>
      
      {error && <p className="text-sm text-destructive">{error}</p>}
      
      {value.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-3">
          {value.map((file, index) => (
            <div key={index} className="relative border rounded-md overflow-hidden group">
              {getFilePreview(file) ? (
                <div className="aspect-square bg-gray-100">
                  <img 
                    src={getFilePreview(file)} 
                    alt={`preview ${index}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="aspect-square bg-gray-100 flex items-center justify-center">
                  <Image size={24} className="text-gray-400" />
                </div>
              )}
              
              <div className="p-2 bg-white border-t border-gray-100 text-xs truncate">
                {file.name}
              </div>
              
              <button
                type="button"
                onClick={() => removeFile(index)}
                className="absolute top-1 right-1 bg-white rounded-full p-1 shadow-md opacity-70 hover:opacity-100"
              >
                <X size={14} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FileUpload;
