
import React from "react";

const DogProfileSkeleton = () => {
  return (
    <div className="animate-pulse space-y-6 container py-20">
      <div className="h-4 bg-gray-200 rounded w-1/4"></div>
      <div className="h-8 bg-gray-200 rounded w-1/2"></div>
      <div className="h-64 bg-gray-200 rounded"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="h-48 bg-gray-200 rounded"></div>
        <div className="h-48 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
};

export default DogProfileSkeleton;
