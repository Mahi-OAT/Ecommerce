import express from 'express'
import {
  userAuth,
  getUserProfile,
  registerUser,
  updateUserProfile,
} from '../controllers/userController.js'
import protect from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/login').post(userAuth)
router.route('/').post(registerUser)

router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)

export default router
