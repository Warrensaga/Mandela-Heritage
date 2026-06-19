export interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  description: string;
  image: string;
  featured: boolean;
  whatsappMsg: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Royal L-Shape Sofa",
    category: "sofas",
    price: "From KES 45,000",
    description: "Plush 5-seater L-shape with premium fabric upholstery. Available in grey, cream, and brown.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
    featured: true,
    whatsappMsg: "Hi Mandela Heritage, I'm interested in the Royal L-Shape Sofa. Can you share more details and pricing?"
  },
  {
    id: 2,
    name: "Heritage King Bed",
    category: "beds",
    price: "From KES 38,000",
    description: "Solid wood king bed frame with tufted headboard. Custom sizes available.",
    image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=800&q=80",
    featured: true,
    whatsappMsg: "Hi Mandela Heritage, I'm interested in the Heritage King Bed. Can you share more details and pricing?"
  },
  {
    id: 3,
    name: "6-Seater Dining Set",
    category: "dining-tables",
    price: "From KES 52,000",
    description: "Solid mahogany dining table with 6 cushioned chairs. Perfect for family meals.",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80",
    featured: true,
    whatsappMsg: "Hi Mandela Heritage, I'm interested in the 6-Seater Dining Set. Can you share more details and pricing?"
  },
  {
    id: 4,
    name: "Floating TV Stand Unit",
    category: "tv-stands",
    price: "From KES 18,000",
    description: "Modern floating TV stand with cable management, open shelving and wood finish.",
    image: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?auto=format&fit=crop&w=800&q=80",
    featured: true,
    whatsappMsg: "Hi Mandela Heritage, I'm interested in the Floating TV Stand Unit. Can you share more details and pricing?"
  },
  {
    id: 5,
    name: "Kids Safety Bunk Bed",
    category: "kids-beds",
    price: "From KES 28,000",
    description: "Safety-railed bunk bed with built-in ladder. Available in natural wood or painted finish.",
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80",
    featured: true,
    whatsappMsg: "Hi Mandela Heritage, I'm interested in the Kids Bunk Bed. Can you share more details and pricing?"
  },
  {
    id: 6,
    name: "Velvet Accent Chair",
    category: "accent-chairs",
    price: "From KES 14,000",
    description: "Statement barrel chair in rich velvet. Available in emerald, mustard, and burgundy.",
    image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?auto=format&fit=crop&w=800&q=80",
    featured: true,
    whatsappMsg: "Hi Mandela Heritage, I'm interested in the Velvet Accent Chair. Can you share more details and pricing?"
  },
  {
    id: 7,
    name: "Oval Coffee Table",
    category: "coffee-tables",
    price: "From KES 12,000",
    description: "Sleek oval coffee table in dark walnut finish. Pairs with any sofa set.",
    image: "https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&w=800&q=80",
    featured: false,
    whatsappMsg: "Hi Mandela Heritage, I'm interested in the Oval Coffee Table. Can you share more details and pricing?"
  },
  {
    id: 8,
    name: "Airbnb Starter Package",
    category: "airbnb",
    price: "From KES 120,000",
    description: "Complete 1-bedroom Airbnb furnishing: sofa, bed, dining set, TV stand & accent pieces.",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
    featured: false,
    whatsappMsg: "Hi Mandela Heritage, I'm interested in the Airbnb Furnishing Package. Can you share more details?"
  },
];
