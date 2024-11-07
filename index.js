const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Configurar conexão ao banco de dados
const db = mysql.createConnection({
    host: 'localhost',
    user: 'seu_usuario',
    password: 'sua_senha',
    database: 'nome_do_banco'
});

// Endpoint para inserir dados dos sensores
app.post('/dadosSensores', (req, res) => {
    const { id_sensor, valor, timestamp } = req.body;
    const query = 'INSERT INTO dados_sensores (id_sensor, valor, timestamp) VALUES (?, ?, ?)';
    db.query(query, [id_sensor, valor, timestamp], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Dados inseridos com sucesso' });
    });
});

// Endpoint para consultar dados dos sensores
app.get('/dadosSensores', (req, res) => {
    const query = 'SELECT * FROM dados_sensores';
    db.query(query, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

// Start o servidor
app.listen(3001, () => {
    console.log('Servidor rodando na porta 3001');
});
