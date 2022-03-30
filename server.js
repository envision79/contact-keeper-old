const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Init middleware
// Now we can accept data
app.use(express.json({extended: false}))

// Connect to the DB
connectDB();

// console.log(connectDB);
app.get('/', (req, res) => res.json({message : "welcome to contact keeper api"}));

const PORT = process.env.PORT || 5000;

// Define our routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
