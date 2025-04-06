
import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

interface DogProfileBreadcrumbProps {
  dogName: string;
}

const DogProfileBreadcrumb = ({
  dogName
}: DogProfileBreadcrumbProps) => {
  return (
    <Breadcrumb className="mb-6 overflow-x-auto max-w-full no-scrollbar">
      <BreadcrumbList className="flex-nowrap whitespace-nowrap min-w-0">
        <BreadcrumbItem>
          <BreadcrumbLink className="py-2 px-1">
            <Link to="/">Domov</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink className="py-2 px-1">
            <Link to="/posvojitev/psi">Psi</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage className="py-2 px-1 truncate max-w-[180px] md:max-w-none">
            {dogName}
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default DogProfileBreadcrumb;
