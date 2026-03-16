export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'South Indian' | 'North Indian' | 'Snacks' | 'Desserts' | 'Drinks';
  tags: string[];
  image: string;
  healthScore: number; // 1-10
  isSpicy: boolean;
  isCooling: boolean;
}

export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Ghee Podi Dosa',
    description: 'Crispy rice crepe topped with aromatic spiced powder and pure ghee.',
    price: 120,
    category: 'South Indian',
    tags: ['Breakfast', 'Spicy'],
    image: 'https://images.unsplash.com/photo-1668236543090-52ee3d141de9?q=80&w=2070&auto=format&fit=crop',
    healthScore: 7,
    isSpicy: true,
    isCooling: false
  },
  {
    id: '2',
    name: 'Filter Coffee',
    description: 'Authentic South Indian brew with frothed milk.',
    price: 45,
    category: 'Drinks',
    tags: ['Hot', 'Beverage'],
    image: 'https://images.unsplash.com/photo-1579532560731-299f1fa02c67?q=80&w=2070&auto=format&fit=crop',
    healthScore: 6,
    isSpicy: false,
    isCooling: false
  },
  {
    id: '3',
    name: 'Watermelon Juice',
    description: 'Freshly squeezed watermelon, perfect for hot weather.',
    price: 80,
    category: 'Drinks',
    tags: ['Cooling', 'Fresh'],
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=2072&auto=format&fit=crop',
    healthScore: 9,
    isSpicy: false,
    isCooling: true
  },
  {
    id: '4',
    name: 'Masala Vadai (2pcs)',
    description: 'Crunchy split pea fritters with onions and spices.',
    price: 60,
    category: 'Snacks',
    tags: ['Evening', 'Crispy'],
    image: 'https://images.unsplash.com/photo-1601050690597-df056fb04791?q=80&w=2070&auto=format&fit=crop',
    healthScore: 5,
    isSpicy: true,
    isCooling: false
  },
  {
    id: '5',
    name: 'Fruit Salad with Honey',
    description: 'Assorted seasonal fruits drizzled with wild honey.',
    price: 150,
    category: 'Desserts',
    tags: ['Healthy', 'Sweet'],
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=2070&auto=format&fit=crop',
    healthScore: 10,
    isSpicy: false,
    isCooling: true
  },
  {
    id: '6',
    name: 'Hot Corn Soup',
    description: 'Creamy corn soup with a hint of pepper, ideal for rainy days.',
    price: 90,
    category: 'Drinks',
    tags: ['Warm', 'Comfort'],
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=2071&auto=format&fit=crop',
    healthScore: 8,
    isSpicy: false,
    isCooling: false
  }
];
