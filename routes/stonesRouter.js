import { Router } from "express";
import { getStone, getStones, createStone, updateStone, deleteStone } from "../controllers/stones.js";
import validateJOI from "../middlewares/validateJOI.js";
import { stoneValidationSchema } from "../JOI/schemas.js";
import verifyToken from "../middlewares/verifyToken.js";

const stonesRouter = Router();

stonesRouter.route('/').get(getStones).post(verifyToken, validateJOI(stoneValidationSchema), createStone);

stonesRouter.route('/:id').get(getStone).put(verifyToken, validateJOI(stoneValidationSchema), updateStone).delete(verifyToken,deleteStone);

export default stonesRouter;