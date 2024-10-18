import { Router } from "express";
import { createAdmin, loginAdmin } from "../controllers/admin.js";
import validateJOI from "../middlewares/validateJOI.js";
import { AdminValidationSchema } from "../JOI/schemas.js";

const adminRouter = Router();

adminRouter.route('/').post(validateJOI(AdminValidationSchema), createAdmin);
adminRouter.route('/login').post(loginAdmin);

export default adminRouter;