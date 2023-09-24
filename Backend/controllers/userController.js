const dotenv = require('dotenv');
dotenv.config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const serviceSID = process.env.TWILIO_SERVICE_SID;

const client = require('twilio')(accountSid, authToken, {
    lazyLoading: true
});

let OTP;
// send OTP to user 
exports.userLogin = async (req, res, next) => {

    const { phonenumber } = req.body
    const newPhoneNumber = "+" + phonenumber;

    try {
        const otpResponse = await client.verify
            .v2.services(serviceSID)
            .verifications
            .create({
                to: newPhoneNumber,
                channel: "sms",
            })
        res.status(200).send({
            status: "success",
            message: JSON.stringify(otpResponse)
        })
    } catch (err) {
        res.status(err?.status || 400).json({ status: "failed", Error: err.message })
    }
}



// OTP VERIFICATION => opt Corret or not
exports.verifyOTP = async (req, res, next) => {
    const { phonenumber, otp } = req.body;
    console.log(req.body);

    try {
        const verifiedResponse = await client.verify
            .v2.services(serviceSID)
            .verificationChecks
            .create({
                to: "+" + phonenumber,
                code: otp,
            })
        res.status(200).json({
            status: "success",
            message: JSON.stringify(verifiedResponse)
        })
    } catch (err) {
        res.status(err?.status || 400).json({ status: "failed", Error: err.message })
    }
}

