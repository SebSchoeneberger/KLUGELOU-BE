import { Router } from "express";
import { getStone, getStones, createStone, updateStone, deleteStone } from "../controllers/stones.js";
import validateJOI from "../middlewares/validateJOI.js";
import { stoneValidationSchema } from "../JOI/schemas.js";

const stonesRouter = Router();

stonesRouter.route('/').get(getStones).post(validateJOI(stoneValidationSchema), createStone);

stonesRouter.route('/:id').get(getStone).put(validateJOI(stoneValidationSchema), updateStone).delete(deleteStone);

export default stonesRouter;