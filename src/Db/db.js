const mysql = require('mysql2/promise');

async function conectar() {
  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '16082002',
      database: 'sistema_protocolos'
    });

    console.log('Conectado ao MySQL!');

    return connection;

  } catch (error) {
    console.log(error);
  }
}

module.exports = conectar;