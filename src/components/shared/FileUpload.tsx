
import { useState, useRef } from 'react';
import { Upload } from 'lucide-react';

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

  return (
    <div className="space-y-2">
      <div 
        className={`border border-teal-100 rounded-md p-4 text-center ${
          dragActive ? 'bg-teal-50' : 'bg-white'
        } ${error ? 'border-red-300' : ''}`}
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
        
        <label htmlFor="file-upload" className="cursor-pointer flex flex-col items-center">
          <Upload size={24} className="text-teal-500 mb-2" />
          <span className="text-sm font-medium text-gray-700">
            Kliknite za nalaganje ali povlecite datoteke sem
          </span>
          <span className="text-xs text-gray-500 mt-1">
            {value.length}/{maxFiles} slik, največ 10MB na sliko
          </span>
        </label>
      </div>
      
      {error && <p className="text-sm text-red-500">{error}</p>}
      
      {value.length > 0 && (
        <div className="flex gap-2 mt-2 flex-wrap">
          {value.map((file, index) => (
            <div key={index} className="text-xs text-gray-500">
              {file.name}
              <button
                type="button"
                onClick={() => removeFile(index)}
                className="ml-2 text-red-500"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FileUpload;
