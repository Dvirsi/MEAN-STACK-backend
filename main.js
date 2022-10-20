const express = require('express')
const usersRouter = require('./routers/usersRouter')
var cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

require('./configs/database')

app.use('/api/users', usersRouter);

app.listen(3000);

