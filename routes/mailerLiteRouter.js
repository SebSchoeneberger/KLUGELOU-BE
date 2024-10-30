import { Router } from "express";
import axios from "axios";

const mailerLiteAPIKey = process.env.MAILERLITE_API_KEY;
const mailerLiteAPIUrl = "https://connect.mailerlite.com/api";


const mailerLiteRouter = Router();

mailerLiteRouter.post("/subscribe", async (req, res) => {
    const { email } = req.body;

    try {
        const response = await axios.post(`${mailerLiteAPIUrl}/subscribers`, {
            email,
        }, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",  
                Authorization: `Bearer ${mailerLiteAPIKey}`
            },
        });

        res.status(200).json({ success: true, data: response.data });
    } catch (error) {
        console.error(error);
        res.status(400).json({ success: false, error: error.message });
    }
});

export default mailerLiteRouter;