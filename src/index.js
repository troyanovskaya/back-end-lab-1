const express = require('express');
const morgan = require('morgan')
const port=8080;
const app = express();

const {userRouter } = require('./routers/userRouter.js');
const {categoryRouter} = require('./routers/categoryRouter.js');

app.use(express.json());
app.use(morgan('tiny'));
app.use('/api/users', userRouter);
app.use('/api/users', categoryRouter);

const start = async () => {
  try {
    app.listen(port);
  } catch (err) {
    console.error(`Error on server startup: ${err.message}`);
  }
}

start();

//ERROR HANDLER
app.use(errorHandler)

function errorHandler (err, req, res, next) {
  console.error('err')
  res.status(500).send({'message': 'Server error'});
}
