import { Router } from "express";

const routes = Router();

import AuthRoutes from "./authRoutes";

routes.use("/auth", AuthRoutes);

export default routes;