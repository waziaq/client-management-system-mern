import { Router } from "express";

const authRoutes = Router();

import * as UserController from "../controllers/UserController";
import * as SessionController from "../controllers/SessionController";

authRoutes.post("/signup", UserController.store);
authRoutes.post("/login", SessionController.store);

export default authRoutes;