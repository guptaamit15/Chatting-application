const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const dotenv = require('dotenv');
// const { connect } = require('mongoose');
const connectDb = require('./config/dbConnect');
const authRoute = require('./routes/authRoute');
const bodyParser = require('body-parser');
// const authRoute = require('./routes/authRoute')

dotenv.config();

const PORT = process.env.PORT;
const app = express();

//Middleware
app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:true}));

//database connection
connectDb();

//Routes
app.use('/api/auth',authRoute)

app.listen(PORT,()  => {
    console.log(`server running on this port ${PORT}`)
})