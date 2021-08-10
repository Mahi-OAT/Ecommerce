import { Router } from 'express'
import {
  addOrderItems,
  getOrderById,
  upadateOrderToPaid,
  getMyOrders,
} from '../controllers/orderController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = new Router()

router.route('/').post(protect, addOrderItems)
router.route('/:id').get(protect, getOrderById)
router.route('/:id/pay').put(protect, upadateOrderToPaid)
router.route('/').get(protect, getMyOrders)

export default router
