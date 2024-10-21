const express = require('express');
const app = express();  // Inicia o servidor Express
const port = 3000;  // Define a porta onde o servidor vai rodar

// Rota principal do servidor. Quando acessar o localhost, vai exibir "Hello World!"
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Inicia o servidor e o faz escutar na porta 3000
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

const mysql = require('mysql2');

// Conexão com o banco de dados MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',  // Coloque o seu usuário do MySQL
  password: 'sua_senha',  // Coloque sua senha do MySQL
  database: 'agricultura'  // O nome do banco de dados criado
});

// Testa a conexão
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL: ', err);
    return;
  }
  console.log('Conectado ao MySQL!');
});
