import { Request, Response } from 'express';
import prisma from '../config/database';

export const getRestaurants = async (req: Request, res: Response) => {
  try {
    const restaurants = await prisma.restaurant.findMany({
      include: { menu_items: true }
    });
    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch restaurants' });
  }
};

export const getRestaurantById = async (req: Request, res: Response) => {
  try {
    const restaurant = await prisma.restaurant.findUnique({
      where: { restaurant_id: req.params.id },
      include: { menu_items: true }
    });
    if (restaurant) res.json(restaurant);
    else res.status(404).json({ message: 'Restaurant not found' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch restaurant' });
  }
};

export const getNearbyRestaurants = async (req: Request, res: Response) => {
  try {
    const lat = req.query.lat as string;
    const lng = req.query.lng as string;
    // Basic implementation: return all for now or filter by coords if available
    const restaurants = await prisma.restaurant.findMany();
    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch nearby restaurants' });
  }
};
