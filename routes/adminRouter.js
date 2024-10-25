import { Router } from "express";
import { createAdmin, loginAdmin, getAdmin } from "../controllers/admin.js";
import validateJOI from "../middlewares/validateJOI.js";
import { AdminValidationSchema } from "../JOI/schemas.js";
import verifyToken from "../middlewares/verifyToken.js";

const adminRouter = Router();

adminRouter.route('/').post(validateJOI(AdminValidationSchema), createAdmin);
adminRouter.route('/login').post(loginAdmin);
adminRouter.route('/me').get(verifyToken,getAdmin);


export default adminRouter;