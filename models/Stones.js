import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const StoneSchema = new Schema({
    name: { type: String, required: true },
    imageUrl: { type: String, required: false, default: "https://images.unsplash.com/photo-1597177586824-33bda0c29325?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    namesOrigin: { type: String, required: false },
    crystalSystem: { type: String, required: false },
    starSign: { type: String, required: false },
    chakra: { type: String, required: false },
    element: { type: String, required: false },
    charging: { type: String, required: false },
    discharging: { type: String, required: false },
    description: { type: String, required: false },
    healingPotential: { type: Schema.Types.Mixed, required: false },
    howToUse: { type:  Schema.Types.Mixed, required: false },
    otherInfo: { type:  Schema.Types.Mixed, required: false },
    createdAt: { type: Date, default: Date.now }, 
    updatedAt: { type: Date, default: Date.now },
});

export default model('Stone', StoneSchema);
