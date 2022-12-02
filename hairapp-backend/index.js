const express = require("express");
const cors = require("cors");
const logger = require("./middleware/logger");


const app = express();
app.use(cors());

//Intialize the middleware
app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//CORS
// app.use('/api/selections', require('./routes/api/selections'));
// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   // This ensures all relevant HTTP requests are received by backend
//     res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//   next();
// });

app.use("/api/members", require("./routes/api/members"));

const PORT = 3500;

app.listen(PORT, () => console.log(`Server has started on port ${PORT}!`));


// const express = require('express');
// const logger = require('./middleware/logger');

// const app = express();

// // Initialize the middleware
// app.use(logger);
// app.use(express.json());
// app.use(express.urlencoded({extended: false}));

// // CORS
// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
//     res.header(
//       "Access-Control-Allow-Headers",
//       "Origin, X-Requested-With, Content-Type, Accept"
//     );
//     // This ensures all relevant HTTP requests are received by backend
//     res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//     next();
//   });

// app.use('/api/tasks', require('./routes/api/tasks'));

// const PORT = 3500;

// app.listen(PORT, () => console.log(`Server started on port ${PORT}!!!`));