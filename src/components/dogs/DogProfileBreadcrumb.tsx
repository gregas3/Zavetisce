
import React from "react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface DogProfileBreadcrumbProps {
  dogName: string;
}

const DogProfileBreadcrumb = ({ dogName }: DogProfileBreadcrumbProps) => {
  return (
    <Breadcrumb className="mb-6 overflow-x-auto md:overflow-visible">
      <BreadcrumbList className="flex-nowrap whitespace-nowrap min-w-0 pb-2 md:pb-0">
        <BreadcrumbItem>
          <BreadcrumbLink>
            <Link to="/" className="text-sm">Domov</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink>
            <Link to="/posvojitev/psi" className="text-sm">Psi</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage className="text-sm truncate max-w-[150px]">{dogName}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default DogProfileBreadcrumb;
