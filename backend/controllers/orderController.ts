import { Request, Response } from 'express';
import prisma from '../config/database';

export const createOrder = async (req: Request, res: Response) => {
  const { user_id, restaurant_id, items, total_price, payment_method, delivery_address } = req.body;

  try {
    const order = await prisma.order.create({
      data: {
        user_id,
        restaurant_id,
        total_price,
        payment_method,
        delivery_address,
        order_items: {
          create: items.map((item: any) => ({
            food_id: item.food_id,
            quantity: item.quantity,
            price: item.price
          }))
        }
      },
      include: { order_items: true }
    });
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create order' });
  }
};

export const getUserOrders = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const orders = await prisma.order.findMany({
      where: { user_id: userId },
      include: { order_items: { include: { food: true } }, restaurant: true },
      orderBy: { order_time: 'desc' }
    });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
};
