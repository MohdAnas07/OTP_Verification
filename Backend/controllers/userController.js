import dotenv from 'dotenv';
dotenv.config();

import { initClient } from 'messagebird';
const messagebird = initClient(process.env.MESSAGEBIRD_API_KEY);

// send OTP to user 
export const userLogin = async (req, res, next) => {
    const { phonenumber } = req.body
    const newPhoneNumber = "+91" + phonenumber;

    var params = {
        template: "Your Login OTP is %token",
        timeout: 60
    };

    messagebird.verify.create(newPhoneNumber, params,
        (err, response) => {
            if (err) {
                // Could not send OTP e.g Phone number Invalid
                console.log("OTP Send Error:", err);
                res.status(200).send({
                    "status": "failed",
                    "message": "Unable to Send OTP"
                })
            }
            // OTP Send Successfully
            console.log(response);
            res.status(200).send({
                "status": "success",
                "message": "OTP Send Successfully",
                "id": response?.id,
            })
        });
}
