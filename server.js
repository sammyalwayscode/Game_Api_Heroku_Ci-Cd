// require('dotenv').config()
// //Creating an instance of express
// const express = require('express')

// const studentModel = require('./model/model')
// const mongoose = require('mongoose')
// // const PORT = 2000


// // connecting to MONGODB Atlas
// mongoose.connect(process.env.DATABASE_URL, {
//   useFindAndModify: false,
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true
// });
// mongoose.connection.once('open', () => {
//   console.log('Connected to database successfully....')
// }).on('error', () => {
//   console.log('Database connection failed.....')
// });


// //Creating an Object instance
// const app = express()

// //Enabling our responce in json
// app.use(express.json())

// // Listen to the Port
// app.listen(process.env.PORT, () => {
//   console.log(`Listning To Port ${process.env.PORT}`)
// })


require('dotenv').config();
// creating an instance of express
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const router = require('./routers/router');
const port = process.env.PORT || 7000;

const app = express();


// connecting to MONGODB Atlas
mongoose.connect(process.env.DATABASE_URL, {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});
mongoose.connection.once('open', () => {
  console.log('Connected to database successfully....')
}).on('error', () => {
  console.log('Database connection failed.....')
});


// creating an instance of express


app.use(cors());
app.use(express.json());
// app.use(express.static('public'))

app.use('/api/students/image', express.static('./uploads'))
app.use('/api', router);


// listen to the port
app.listen(process.env.PORT, () => {
  console.log(`Connecting to port ${port}`);
});