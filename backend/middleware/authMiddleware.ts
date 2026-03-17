import { Request, Response, NextFunction } from 'express';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // Placeholder for JWT verification
  // For now, allow all OR simulate a hardcoded user
  (req as any).user = { user_id: 'default-user-id' };
  next();
};

export const protect = authMiddleware;
