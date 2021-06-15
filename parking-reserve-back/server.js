require('rootpath')();
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');
const errorHandler = require('./middleware/error-handler');

// Adds json parsing middleware to incoming requests
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cookieParser());

// allow cors requests from any origin and with credentials
app.use(cors({ origin: (origin, callback) => callback(null, true), credentials: true }));

// api routes
app.use('/accounts', require('./accounts/accounts.controller'));
app.use('/parking_slots', require('./parking_slot/parking_slot.controller'));
app.use('/parking_area', require('./parking_area/parking_area.controller'));
app.use('/parking_order', require('./parking_order/parking_order.controller'));

// swagger docs route
app.use('/api-docs', require('./helpers/swagger'));

// global error handler
app.use(errorHandler);

// Connect MongoDB
// mongoose.connect(process.env.DB_CONNECTION, { useUnifiedTopology: true, useNewUrlParser: true }, () => {
//     console.log("Connected to database")
// });

// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 8000;

app.listen(port, () => {
    console.log('Server listening on port ' + port);
});