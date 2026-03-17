import { Request, Response, NextFunction } from 'express';
import { db } from '../config/firebaseAdmin';

export const signup = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email, password, address } = req.body;
    const userRef = db.collection('users').doc();
    const newUser = {
      user_id: userRef.id,
      name,
      email,
      password, // Note: In production, hash this!
      address,
      created_at: new Date()
    };
    await userRef.set(newUser);
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
};

export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;
    const snapshot = await db.collection('users').where('email', '==', email).limit(1).get();
    
    if (snapshot.empty) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const user = snapshot.docs[0].data();
    if (user.password === password) {
      res.json({ message: 'Login successful', user });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    next(error);
  }
};

export const getProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = (req as any).user?.user_id;
    const userDoc = await db.collection('users').doc(userId).get();
    if (!userDoc.exists) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(userDoc.data());
  } catch (error) {
    next(error);
  }
};
