import { Router } from "express";
import * as userController from "../controllers/user.controller.js";
import { body } from "express-validator";

const router = Router();

router.post(
  "/register",
  body("email").isEmail().withMessage("Please enter a valid email"),
  body("password")
    .trim()
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
  userController.createUserController
);

router.post(
  "/login",
  body("email").isEmail().withMessage("Please enter a valid email"),
  body("password")
    .trim()
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
  userController.loginController
);

export default router;
