import React, { useEffect, useState } from 'react';
import { Category, SortOption, ViewMode } from '../contexts/types';
import { CATEGORIES_DATA } from '../dummyData/data';
import { ArrowRightIcon, ListIcon, SquareIcon } from 'lucide-react';


interface CollectionsSectionProps {
  itemsPerPage?: number;
}
const CollectionsSection: React.FC<CollectionsSectionProps> = ({ itemsPerPage = 6 }) => {
  const [sortOption, setSortOption] = useState<SortOption>('popularity');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [categories, setCategories] = useState<Category[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages
  const totalPages = Math.ceil(CATEGORIES_DATA.length / itemsPerPage);

  // Generate page numbers for pagination
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  // Sort categories based on selected option
  const sortCategories = (data: Category[], option: SortOption): Category[] => {
    const sorted = [...data];

    switch (option) {
      case 'popularity':
        return sorted.sort((a, b) => b.popularity - a.popularity);
      case 'price-low':
        return sorted.sort((a, b) => a.price - b.price);
      case 'price-high':
        return sorted.sort((a, b) => b.price - a.price);
      case 'newest':
        return sorted.sort((a, b) =>
          new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
        );
      default:
        return sorted;
    }
  };

  // Apply pagination to sorted categories
  useEffect(() => {
    const sortedCategories = sortCategories(CATEGORIES_DATA, sortOption);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedCategories = sortedCategories.slice(startIndex, startIndex + itemsPerPage);

    setCategories(paginatedCategories);
  }, [sortOption, currentPage, itemsPerPage]);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value as SortOption);
    setCurrentPage(1); // Reset to first page when sorting changes
  };

  const handleViewModeChange = (mode: ViewMode) => {
    setViewMode(mode);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Category card component for better code organization
  const CategoryCard: React.FC<{ category: Category }> = ({ category }) => (
    <div className={viewMode === 'grid'
      ? "category-card bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
      : "category-card bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row"
    }>
      <div className={viewMode === 'grid'
        ? "relative h-48 overflow-hidden"
        : "relative md:w-1/3 h-48 md:h-auto overflow-hidden"
      }>
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover"
        />
        {category.badge && (
          <div className={`absolute top-4 left-4 ${category.badgeColor} text-white text-sm px-3 py-1 rounded-full`}>
            {category.badge}
          </div>
        )}
      </div>
      <div className={viewMode === 'grid' ? "p-6" : "p-6 flex-1"}>
        <h3 className="text-xl font-bold text-primary-900 mb-2 font-heading dark:text-white">{category.name}</h3>
        <p className="text-primary-600 mb-4 dark:text-gray-300">{category.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-primary-600 dark:text-gray-300">{category.varieties} varieties</span>
          <div className="flex items-center">
            {viewMode === 'list' && (
              <span className="text-lg font-bold text-secondary mr-4">${category.price.toFixed(2)}</span>
            )}
            <a
              href={`#${category.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-secondary  hover:text-primary-800 font-medium flex items-center"
            >
              Explore
              <ArrowRightIcon  className='ml-2 mt-1'/>
            </a>
          </div>
        </div>
        {viewMode === 'list' && (
          <div className="mt-4 flex items-center">
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-secondary h-2.5 rounded-full"
                style={{ width: `${category.popularity}%` }}
              ></div>
            </div>
            <span className="ml-2 text-sm text-primary-600">{category.popularity}%</span>
          </div>
        )}
      </div>
    </div>
  );

  // Pagination component
  const Pagination: React.FC = () => (
    <div className="flex justify-center mt-12">
      <nav className="flex items-center space-x-1 md:space-x-2">
        {currentPage > 1 && (
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className="p-2 md:px-3 md:py-1 rounded-lg hover:bg-primary-100 text-primary-800 font-medium"
            aria-label="Previous page"
          >
            <ArrowRightIcon className="h-4 w-4 transform rotate-180" />
          </button>
        )}

        {pageNumbers.map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`p-2 md:px-3 md:py-1 rounded-lg font-medium text-sm md:text-base ${currentPage === page
              ? 'bg-primary-100 text-primary-800'
              : 'hover:bg-primary-100 text-primary-800'
              }`}
          >
            {page}
          </button>
        ))}

        {currentPage < totalPages && (
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className="p-2 md:px-3 md:py-1 rounded-lg hover:bg-primary-100 text-primary-800 font-medium"
            aria-label="Next page"
          >
            <ArrowRightIcon className="h-4 w-4" />
          </button>
        )}
      </nav>
    </div>
  );

  return (
    <section className="py-8 md:py-16">
      <div className="container mx-auto px-4">
        {/* Filter Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 md:mb-12">
          <h2 className="text-2xl font-bold text-primary-900 dark:text-white mb-4 md:mb-0 font-heading text-center md:text-left">
            Browse Our Collections
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <select
              value={sortOption}
              onChange={handleSortChange}
              className="border border-primary-200 rounded-lg px-4 py-2 text-primary-800 focus:outline-none focus:ring-2 focus:ring-secondary w-full sm:w-auto"
            >
              <option value="popularity">Sort by Popularity</option>
              <option value="price-low">Sort by Price: Low to High</option>
              <option value="price-high">Sort by Price: High to Low</option>
              <option value="newest">Sort by Newest</option>
            </select>
            <div className="flex border border-primary-200 rounded-lg overflow-hidden self-center">
              <button
                className={`p-2 md:px-3 md:py-2 ${viewMode === 'grid' ? 'bg-primary-100' : 'bg-white'} border-r border-primary-200`}
                onClick={() => handleViewModeChange('grid')}
                aria-label="Grid view"
              >
                <SquareIcon />
              </button>
              <button
                className={`p-2 md:px-3 md:py-2 ${viewMode === 'list' ? 'bg-primary-100' : 'bg-white'}`}
                onClick={() => handleViewModeChange('list')}
                aria-label="List view"
              >
                <ListIcon />
              </button>
            </div>
          </div>
        </div>

        {/* Categories - Grid or List view */}
        <div className={viewMode === 'grid'
          ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          : "space-y-6"
        }>
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && <Pagination />}
      </div>
    </section>
  );
};

export default CollectionsSection;