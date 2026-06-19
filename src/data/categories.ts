export interface Category {
  slug: string;
  label: string;
  emoji: string;
  description: string;
}

export const categories: Category[] = [
  { slug: "sofas",         label: "Sofas",              emoji: "🛋️", description: "L-shapes, 3-seaters, recliners & custom sets" },
  { slug: "beds",          label: "Beds",               emoji: "🛏️", description: "King, queen, single & upholstered bed frames" },
  { slug: "dining-tables", label: "Dining Tables",      emoji: "🍽️", description: "4-seater to 8-seater dining sets" },
  { slug: "tv-stands",     label: "TV Stands",          emoji: "📺", description: "Modern & classic entertainment units" },
  { slug: "coffee-tables", label: "Coffee Tables",      emoji: "☕", description: "Round, rectangular & nesting tables" },
  { slug: "kids-beds",     label: "Kids Beds",          emoji: "🧸", description: "Bunk beds, single beds & themed designs" },
  { slug: "accent-chairs", label: "Accent Chairs",      emoji: "💺", description: "Statement chairs for living rooms & offices" },
  { slug: "airbnb",        label: "Airbnb & Real Estate", emoji: "🏠", description: "Full furnishing packages for rental properties" },
];
