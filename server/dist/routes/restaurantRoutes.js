import { Router } from "express";
import { getFeaturedRestaurants, getRestaurantAvailability, getRestaurantBySlug, getRestaurants } from "../controllers/restaurantController.js";
const restaurantRouter = Router();
restaurantRouter.get('/', getRestaurants);
restaurantRouter.get('/featured', getFeaturedRestaurants);
restaurantRouter.get('/:slug', getRestaurantBySlug);
restaurantRouter.get('/:id/availability', getRestaurantAvailability);
export default restaurantRouter;
