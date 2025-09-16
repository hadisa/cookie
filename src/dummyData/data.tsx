import { Category, Cookie } from "../contexts/types";

export const cookies: Cookie[] = [
  {
    id: 'chocolate-chip',
    name: 'Chocolate Chip',
    price: 3.99,
    description: 'Indulge in rich, fudgy perfection with our signature chocolate cookies. Made with premium cocoa and chocolate chunks.',
    rating: 4.7,
    reviewCount: 238,
    website: 'Brick Art And Paste Wine',
    websiteUrl: 'www.chocolate.co.uk',
    isBestseller: true
  },
  {
    id: 'oatmeal-raisin',
    name: 'Oatmeal Raisin',
    price: 3.49,
    description: 'Classic oatmeal cookies packed with plump raisins and a hint of cinnamon for a comforting treat.',
    rating: 4.5,
    reviewCount: 187,
    website: 'Brick Art And Paste Wine',
    websiteUrl: 'www.oatmeal.co.uk',
    isBestseller: true
  },
  {
    id: 'sugar-cookie',
    name: 'Sugar Cookie',
    price: 2.99,
    description: 'Buttery, sweet, and perfectly crisp sugar cookies that melt in your mouth with every bite.',
    rating: 4.3,
    reviewCount: 156,
    website: 'Brick Art And Paste Wine',
    websiteUrl: 'www.sugarcookie.co.uk'
  }
];

export const HeroData = {
  Contact: {
    title: "Get in Touch",
    subtitle: "We'd love to hear from you! Whether you have questions about our cookies, need catering for an event, or just want to share your cookie love, we're here for you."
  },
  Menu: {
    title: "Our Delicious Menu",
    subtitle: "Indulge in our wide selection of handcrafted cookies, made with the finest ingredients and baked to perfection. From classic favorites to innovative creations, we have something for every cookie lover."
  },
  Category: {
    title: "Our Cookie Categories",
    subtitle: "Discover our wide range of artisanal cookies, each crafted with premium ingredients and baked to perfection. From classNameic favorites to innovative creations, we have something for every cookie lover."
  },

}

export const cookieData = [
  {
    id: 1,
    name: "Classic Chocolate Chip",
    price: 4.99,
    description: "Our signature cookie loaded with premium chocolate chips and a hint of vanilla.",
    category: "chocolate",
    rating: 4.7,
    reviews: 328,
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80",
    badge: "BESTSELLER"
  },
  {
    id: 2,
    name: "Double Chocolate",
    price: 5.49,
    description: "Rich chocolate cookie dough with white and dark chocolate chunks for the ultimate chocolate experience.",
    category: "chocolate",
    rating: 4.9,
    reviews: 215,
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 3,
    name: "Chocolate Mint",
    price: 5.25,
    description: "Dark chocolate cookie with cool mint chips for a refreshing twist on a classic favorite.",
    category: "chocolate",
    rating: 4.6,
    reviews: 187,
    image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 4,
    name: "Cranberry White Chocolate",
    price: 4.75,
    description: "Buttery cookie with tart cranberries and sweet white chocolate chips for a perfect balance of flavors.",
    category: "fruit",
    rating: 4.8,
    reviews: 142,
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 5,
    name: "Lemon Glaze",
    price: 4.50,
    description: "Zesty lemon cookie topped with a sweet lemon glaze for a refreshing citrus treat.",
    category: "fruit",
    rating: 4.5,
    reviews: 98,
    image: "https://images.unsplash.com/photo-1623334044303-241021148842?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80",
    badge: "NEW"
  },
  {
    id: 6,
    name: "Red Velvet",
    price: 5.75,
    description: "Rich red velvet cookie with white chocolate chips and a cream cheese frosting drizzle.",
    category: "specialty",
    rating: 4.7,
    reviews: 167,
    image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 7,
    name: "Salted Caramel",
    price: 5.99,
    description: "Buttery cookie with chunks of caramel and a sprinkle of sea salt for the perfect sweet-salty combination.",
    category: "specialty",
    rating: 4.9,
    reviews: 243,
    image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80",
    badge: "BESTSELLER"
  }
];

export const CATEGORIES_DATA: Category[] = [
  {
    id: 1,
    name: "Chocolate Cookies",
    description: "Indulge in rich, fudgy perfection with our premium chocolate selection.",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80",
    varieties: 12,
    popularity: 95,
    price: 4.99,
    dateAdded: "2023-10-15",
    badge: "BESTSELLER",
    badgeColor: "bg-secondary"
  },
  {
    id: 2,
    name: "Butter Cookies",
    description: "Melt-in-your-mouth goodness made with premium butter and vanilla.",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80",
    varieties: 8,
    popularity: 88,
    price: 3.99,
    dateAdded: "2023-11-20",
    badge: "NEW",
    badgeColor: "bg-accent"
  },
  {
    id: 3,
    name: "Vegan Cookies",
    description: "Plant-based delights that don't compromise on taste or texture.",
    image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80",
    varieties: 10,
    popularity: 92,
    price: 5.49,
    dateAdded: "2023-09-05"
  },
  {
    id: 4,
    name: "Gluten-Free Cookies",
    description: "Delicious options for those with gluten sensitivities or preferences.",
    image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80",
    varieties: 7,
    popularity: 85,
    price: 5.99,
    dateAdded: "2023-08-12"
  },
  {
    id: 5,
    name: "Holiday Cookies",
    description: "Festive treats for special occasions and celebrations.",
    image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80",
    varieties: 15,
    popularity: 97,
    price: 6.49,
    dateAdded: "2023-12-01",
    badge: "SEASONAL",
    badgeColor: "bg-red-500"
  },
  {
    id: 6,
    name: "Specialty Cookies",
    description: "Unique and innovative creations for the adventurous cookie lover.",
    image: "https://images.unsplash.com/photo-1623334044303-241021148842?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80",
    varieties: 9,
    popularity: 90,
    price: 5.99,
    dateAdded: "2023-10-30"
  },
  {
    id: 7,
    name: "Nutty Cookies",
    description: "Crunchy delights packed with various nuts for extra texture.",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80",
    varieties: 11,
    popularity: 87,
    price: 4.79,
    dateAdded: "2023-09-18"
  },
  {
    id: 8,
    name: "Fruity Cookies",
    description: "Sweet and tangy cookies with real fruit pieces.",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80",
    varieties: 8,
    popularity: 84,
    price: 4.49,
    dateAdded: "2023-11-05"
  },
  {
    id: 9,
    name: "Classic Cookies",
    description: "Timeless recipes that never go out of style.",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80",
    varieties: 14,
    popularity: 93,
    price: 3.99,
    dateAdded: "2023-07-22"
  }
];
