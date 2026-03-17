import { Router } from 'express';
import { getRestaurants, getRestaurantById, getNearbyRestaurants } from '../controllers/restaurantController';

const router = Router();

router.get('/', getRestaurants);
router.get('/nearby', getNearbyRestaurants);
router.get('/:id', getRestaurantById);

export default router;
