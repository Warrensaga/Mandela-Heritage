import { categories } from "../data/categories";

interface CategoryFilterProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function CategoryFilter({
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  return (
    <div className="w-full">
      {/* Scrollable Container */}
      <div className="flex items-center space-x-3 overflow-x-auto pb-4 pt-1 px-1 scrollbar-thin select-none scroll-smooth">
        
        {/* "All" Category Pill */}
        <button
          onClick={() => onSelectCategory("all")}
          className={`flex-shrink-0 px-6 py-2.5 rounded-full font-sans text-xs sm:text-sm font-semibold tracking-wide shadow-sm transition-all duration-300 ${
            selectedCategory === "all"
              ? "bg-primary text-white"
              : "bg-blueLight text-textMuted hover:bg-accent hover:text-white"
          }`}
        >
          ✨ All Collections
        </button>

        {/* Dynamic Category Pills */}
        {categories.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => onSelectCategory(cat.slug)}
            className={`flex-shrink-0 px-6 py-2.5 rounded-full font-sans text-xs sm:text-sm font-semibold tracking-wide shadow-sm transition-all duration-300 flex items-center space-x-1.5 ${
              selectedCategory === cat.slug
                ? "bg-primary text-white"
                : "bg-blueLight text-textMuted hover:bg-accent hover:text-white"
            }`}
          >
            <span>{cat.emoji}</span>
            <span>{cat.label}</span>
          </button>
        ))}
      </div>
      
      {/* Visual cue for swipe-scroll on mobile */}
      <span className="block md:hidden text-[10px] text-textMuted font-sans text-center mt-1 animate-pulse">
        &larr; Swipe left/right to browse collections &rarr;
      </span>
    </div>
  );
}
