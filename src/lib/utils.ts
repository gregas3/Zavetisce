
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getOptimizedImage(url: string, params?: { width?: number; quality?: number }): string {
  const { width = 1200, quality = 90 } = params || {};
  
  // For images hosted on Unsplash, we can use their image optimization API
  if (url.includes('unsplash.com')) {
    // Parse the URL to add quality and width parameters
    const baseUrl = url.split('?')[0];
    return `${baseUrl}?w=${width}&q=${quality}&auto=format`;
  }
  
  // For local images, just return the original URL
  // In a production app, you might want to use a CDN or image optimization service
  return url;
}
