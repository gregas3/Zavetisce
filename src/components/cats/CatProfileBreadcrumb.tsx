
import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

interface CatProfileBreadcrumbProps {
  catName: string;
}

const CatProfileBreadcrumb = ({
  catName
}: CatProfileBreadcrumbProps) => {
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
            <Link to="/posvojitev/mačke">Mačke</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage className="py-2 px-1 truncate max-w-[180px] md:max-w-none">
            {catName}
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default CatProfileBreadcrumb;
