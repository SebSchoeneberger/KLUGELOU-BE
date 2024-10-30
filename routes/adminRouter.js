import { Router } from "express";
import { createAdmin, loginAdmin, getAdmin } from "../controllers/admin.js";
import validateJOI from "../middlewares/validateJOI.js";
import { AdminValidationSchema, ChangePasswordValidationSchema } from "../JOI/schemas.js";
import verifyToken from "../middlewares/verifyToken.js";
import { changePassword } from "../controllers/admin.js";

const adminRouter = Router();

adminRouter.route('/').post(validateJOI(AdminValidationSchema), createAdmin);
adminRouter.route('/login').post(loginAdmin);
adminRouter.route('/me').get(verifyToken,getAdmin);
adminRouter.route('/change-password').post(verifyToken, validateJOI(ChangePasswordValidationSchema), changePassword);



export default adminRouter;