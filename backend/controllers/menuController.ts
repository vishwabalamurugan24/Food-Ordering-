import { Request, Response } from 'express';
import prisma from '../config/database';

export const getMenu = async (req: Request, res: Response) => {
  try {
    const items = await prisma.menuItem.findMany({
      include: { restaurant: true }
    });
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch menu' });
  }
};

export const getMenuItem = async (req: Request, res: Response) => {
  try {
    const item = await prisma.menuItem.findUnique({
      where: { food_id: req.params.id },
      include: { restaurant: true }
    });
    if (item) res.json(item);
    else res.status(404).json({ message: 'Item not found' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch menu item' });
  }
};
