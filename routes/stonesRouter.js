import { Router } from "express";
import { getStone, getStones, createStone, updateStone, deleteStone } from "../controllers/stones.js";
import validateJOI from "../middlewares/validateJOI.js";
import { stoneValidationSchema } from "../JOI/schemas.js";
import verifyToken from "../middlewares/verifyToken.js";
import { uploadStoneImage } from "../controllers/stones.js";
import imgUploadMiddlerware from "../middlewares/imgUploadMiddlerware.js";

const stonesRouter = Router();

stonesRouter.route('/').get(getStones).post(verifyToken, validateJOI(stoneValidationSchema.POST), createStone);

stonesRouter.route('/:id').get(getStone).put(verifyToken, validateJOI(stoneValidationSchema.PUT), updateStone).delete(verifyToken,deleteStone);

stonesRouter.route("/:id/upload-image").post(verifyToken, imgUploadMiddlerware, uploadStoneImage);

export default stonesRouter;