const dotenv = require('dotenv');
//dotenv configuration 
dotenv.config();

const express = require('express');
const cors = require('cors');
const userRoutes = require("./routes/userRoutes.js");

const app = express();
const port = process.env.PORT

// Middleares ================>>
// CORS Policy
app.use(cors());
// JSON 
app.use(express.json())


// Load ROutes ==================>>
app.use("/api/user", userRoutes);

app.listen(port, () => {
    console.log(`server listening at http://localhost:${port}`);
})