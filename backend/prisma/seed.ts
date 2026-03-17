import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create User
  const user = await prisma.user.upsert({
    where: { email: 'user@example.com' },
    update: {},
    create: {
      name: 'Vishwa Balamurugan',
      email: 'user@example.com',
      password: 'hashed-password',
      phone_number: '+919876543210',
      address: 'Chengalpattu, Tamil Nadu',
      preferred_language: 'Tamil'
    }
  });

  // Create Restaurant
  const restaurant = await prisma.restaurant.create({
    data: {
      restaurant_name: 'AI DINE Grand',
      address: 'Main St, Gourmet Valley',
      food_type: 'Multicuisine',
      opening_time: '10:00 AM',
      closing_time: '11:00 PM',
      rating: 4.8,
      menu_items: {
        create: [
          {
            food_name: 'Ghee Podi Dosa',
            category: 'South Indian',
            price: 120,
            description: 'Crispy rice crepe topped with aromatic spiced powder and pure ghee.',
            image_url: 'https://images.unsplash.com/photo-1668236543090-52ee3d141de9?q=80&w=2070&auto=format&fit=crop',
            availability_status: 'Available'
          },
          {
            food_name: 'Filter Coffee',
            category: 'Drinks',
            price: 45,
            description: 'Authentic South Indian brew with frothed milk.',
            image_url: 'https://images.unsplash.com/photo-1579532560731-299f1fa02c67?q=80&w=2070&auto=format&fit=crop'
          },
          {
            food_name: 'Fruit Salad',
            category: 'Desserts',
            price: 150,
            description: 'Fresh seasonal fruits with honey.',
            image_url: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=2070&auto=format&fit=crop'
          }
        ]
      }
    }
  });

  console.log('Seed data created successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
