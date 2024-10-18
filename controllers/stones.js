import Stones from "../models/Stones.js";
import asynchandler from "../utils/asyncHandler.js";
import ErrorResponse from "../utils/errorResponse.js";
import { isValidObjectId } from "mongoose";


export const getStones = asynchandler(async (req, res, next) => {

    const stones = await Stones.find();

    res.status(200).json({ success: true, data: stones });
});

export const getStone = asynchandler(async (req, res, next) => {

    const { id } = req.params;

    if (!isValidObjectId(id)) {
        return next(new ErrorResponse(`Invalid Id:${id}`, 404));
    }

    const stone = await Stones.findById(id);

    if (!stone) {
        return next(new ErrorResponse(`Stone not found with id of ${id}`, 404));
    }

    res.status(200).json({ success: true, data: stone });
}); 

export const createStone = asynchandler(async (req, res, next) => {

    const { body } = req;

    const newStone = await Stones.create({...body});

    res.status(201).json({ success: true, data: newStone });
});

export const updateStone = asynchandler(async (req, res, next) => {

    const { id } = req.params;
    const { body } = req;

    if (!isValidObjectId(id)) {
        return next(new ErrorResponse(`Invalid Id: ${id}`, 404));
    }

    const stone = await Stones.findByIdAndUpdate(id, body, {new: true});

    if (!stone) {
        return next(new ErrorResponse(`Stone not found with id of ${id}`, 404));
    }

    res.status(200).json({ success: true, data: stone });
});

export const deleteStone = asynchandler(async (req, res, next) => {

    const { id } = req.params;

    if (!isValidObjectId(id)) {
        return next(new ErrorResponse(`Invalid Id: ${id}`, 404));
    }

    const stone = await Stones.findByIdAndDelete(id);

    if (!stone) {
        return next(new ErrorResponse(`Stone not found with id of ${id}`, 404));
    }

    res.status(200).json({ success: ` Stone with id: ${id} was deleted` });
});
