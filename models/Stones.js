import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const StoneSchema = new Schema({
    name: { type: String, required: true },
    imageUrl: { type: String, required: false },
    namesOrigin: { type: String, required: false },
    crystalSystem: { type: String, required: false },
    starSign: { type: String, required: false },
    chakra: { type: String, required: false },
    element: { type: String, required: false },
    charching: { type: String, required: false },
    discharging: { type: String, required: false },
    createdAt: { type: Date, default: Date.now }, 
    updatedAt: { type: Date, default: Date.now },
});

export default model('Stone', StoneSchema);
