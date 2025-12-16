import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol 
        className="flex flex-wrap items-center gap-2 text-sm"
        itemScope 
        itemType="https://schema.org/BreadcrumbList"
      >
        <li 
          className="flex items-center"
          itemProp="itemListElement" 
          itemScope 
          itemType="https://schema.org/ListItem"
        >
          <Link 
            to="/" 
            className="flex items-center text-gray-500 hover:text-[#22c55e] transition-colors"
            itemProp="item"
          >
            <Home size={16} className="mr-1" />
            <span itemProp="name">Home</span>
          </Link>
          <meta itemProp="position" content="1" />
        </li>
        
        {items.map((item, index) => (
          <li 
            key={index}
            className="flex items-center"
            itemProp="itemListElement" 
            itemScope 
            itemType="https://schema.org/ListItem"
          >
            <ChevronRight size={14} className="text-gray-400 mx-1" />
            {item.href ? (
              <Link 
                to={item.href}
                className="text-gray-500 hover:text-[#22c55e] transition-colors"
                itemProp="item"
              >
                <span itemProp="name">{item.name}</span>
              </Link>
            ) : (
              <span className="text-[#0f0f23] font-medium" itemProp="name">
                {item.name}
              </span>
            )}
            <meta itemProp="position" content={String(index + 2)} />
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
