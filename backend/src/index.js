//Tipos Parametros
//Query Params: req.query(Filtros,ordenação, paginação...)
//Route Params: req.params(Identificar um recurso na alteração ou remoção)
//Body: req.body(Dados para criação ou alteração de um registro)

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");

const app = express();

mongoose.connect("mongodb://localhost:27017/omnistack10", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
