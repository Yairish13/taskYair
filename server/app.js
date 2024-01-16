const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { DbError } = require('./src/api/handlers/customError');
const { sequelize } = require('./config/sequelize');
const routes = require('./src/api/routes/v1');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use('/v1', routes);

app.get('/status', (req, res) => res.json({
  code: '200',
  message: 'beseder',
}));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch((err) => new DbError(`Failed to connect to DB :${err}`));
