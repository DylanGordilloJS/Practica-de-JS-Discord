const mysql = require('mysql2');

// 1. Configurar la conexión
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: '31424' ,
  port: 3306 ,
});

// 2. Ejecutar una consulta
connection.query(
  'SELECT * FROM usuarios',
  function(err, results) {
    if (err) throw err;
    console.log(results); // Aquí verás los datos
  }
);