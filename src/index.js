const express = require('express');
const morgan = require('morgan')
const port=8080;
const app = express();

const {userRouter } = require('./routers/userRouter.js');
const {categoryRouter} = require('./routers/categoryRouter.js');
const {noteRouter} = require('./routers/noteRouter.js');
const {bankAccountRouter} = require('./routers/bankAccountRouter.js');

app.use(express.json());
app.use(morgan('tiny'));
app.use('/api/users', userRouter);
app.use('/api/users', categoryRouter);
app.use('/api/users', noteRouter);
app.use('/api/users', bankAccountRouter);


const start = async () => {
  try {
    await app.listen(process.env.PORT || port);
  } catch (err) {
    console.error(`Error on server startup: ${err.message}`);
  }
}
start();

//ERROR HANDLER
app.use(errorHandler)

function errorHandler (err, res, req) {
  // console.log(err);
  // console.log(req);
  // console.log(res);
  console.log(err);
  res.status(500).send({'message': `method ${err.method} at this url is not implemented`});
}
