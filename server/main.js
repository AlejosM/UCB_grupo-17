const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(bodyParser.json());

app.use(cors({
  origin: '*'
}));

const port = 3000;


app.get('/', (req, res) => {
  res.send('API is working');
})

app.post('/formulario_clientes',(req, res) => {
  const body = req.body;
  const query = `INSERT INTO clientes(pasajeroID, Name, email, direccion) VALUES ('${body.pasajeroID}', '${body.Name}', '${body.email}', '${body.direccion}');`;
  connection.connect();
  connection.query( query, (err, rows, fields) => {
    if (err) throw err
    console.log('1 record inserted');
  })
  connection.end();
  res.send('1 record inserted');
})
app.post('/formulario_comentarios',(req, res) => {
  const body = req.body;
  const query = `INSERT INTO comentarios(ID, nombre, comentario, puntuacion) VALUES ('${body.ID}', '${body.nombre}','${body.comentario}','${body.puntuacion}');`;
  connection.connect();
  connection.query( query, (err, rows, fields) => {
    if (err) throw err
    console.log('1 record inserted');
  })
  connection.end();
  res.send('1 record inserted');
})
app.post('/formulario_conductores',(req, res) => {
  const body = req.body;
  const query = `INSERT INTO conductores(firstName, lastName, email, licencia) VALUES ('${body.firstName}', '${body.lastName}','${body.email}','${body.licencia}');`;
  connection.connect();
  connection.query( query, (err, rows, fields) => {
    if (err) throw err
    console.log('1 record inserted');
  })
  connection.end();
  res.send('1 record inserted');
})
app.post('/formulario_pagos',(req, res) => {
  const body = req.body;
  const query = `INSERT INTO pagos(ID, nombre, pago, monto) VALUES ('${body.ID}', '${body.nombre}','${body.pago}','${body.monto}');`;
  connection.connect();
  connection.query( query, (err, rows, fields) => {
    if (err) throw err
    console.log('1 record inserted');
  })
  connection.end();
  res.send('1 record inserted');
})
app.post('/formulario_quejas',(req, res) => {
  const body = req.body;
  const query = `INSERT INTO quejas(ID, nombre, descripcion) VALUES ('${body.ID}', '${body.nombre}','${body.descripcion}');`;
  connection.connect();
  connection.query( query, (err, rows, fields) => {
    if (err) throw err
    console.log('1 record inserted');
  })
  connection.end();
  res.send('1 record inserted');
})
app.post('/formulario_vehiculos',(req, res) => {
  const body = req.body;
  const query = `INSERT INTO vehiculos(ID, marca, modelo, placa, expedido) VALUES ('${body.ID}', '${body.marca}','${body.modelo}', '${body.placa}', '${body.expedido}');`;
  connection.connect();
  connection.query( query, (err, rows, fields) => {
    if (err) throw err
    console.log('1 record inserted');
  })
  connection.end();
  res.send('1 record inserted');
})
app.post('/formulario_viajes',(req, res) => {
  const body = req.body;
  const query = `INSERT INTO viajes(ID, origen, destino, fecha) VALUES ('${body.ID}', '${body.origen}','${body.destino}', '${body.fecha}');`;
  connection.connect();
  connection.query( query, (err, rows, fields) => {
    if (err) throw err
    console.log('1 record inserted');
  })
  connection.end();
  res.send('1 record inserted');
})

app.listen(port, () => {
  console.log(`Project sample is running on: ${port}`)
})

const connection = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'root123',
  database: 'db1'
})

