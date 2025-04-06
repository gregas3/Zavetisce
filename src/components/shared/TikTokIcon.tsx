
import React from "react";

interface TikTokIconProps {
  className?: string;
  size?: number;
}

const TikTokIcon = ({ className, size = 20 }: TikTokIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      strokeWidth="0"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M19.321 5.562a5.124 5.124 0 0 1-3.414-1.267 5.124 5.124 0 0 1-1.55-3.295h-3.375v13.576a2.821 2.821 0 0 1-2.813 2.821 2.821 2.821 0 0 1-2.821-2.821 2.821 2.821 0 0 1 2.821-2.821c.254 0 .509.042.75.119V8.367a6.3 6.3 0 0 0-.75-.046A6.3 6.3 0 0 0 2 14.62 6.3 6.3 0 0 0 8.3 20.92a6.3 6.3 0 0 0 6.3-6.3V8.988a8.246 8.246 0 0 0 4.725 1.472V7.079c-.002 0-.002 0-.004 0z" />
    </svg>
  );
};

export default TikTokIcon;
