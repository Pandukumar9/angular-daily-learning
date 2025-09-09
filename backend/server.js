const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

// PostgreSQL connection config (replace with your actual credentials)
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'mydb_nextjs',
  password: 'test@123',
  port: 5432,
});

// Department routes
app.get('/api/departments', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM departments');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/departments', async (req, res) => {
  const { name, location } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO departments (name, location) VALUES ($1, $2) RETURNING *',
      [name, location]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put('/api/departments/:id', async (req, res) => {
  const id = Number(req.params.id);
  const { name, location } = req.body;
  try {
    const result = await pool.query(
      'UPDATE departments SET name = $1, location = $2 WHERE id = $3 RETURNING *',
      [name, location, id]
    );
    if (result.rows.length) {
      res.json(result.rows[0]);
    } else {
      res.status(404).send();
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete('/api/departments/:id', async (req, res) => {
  const id = Number(req.params.id);
  try {
    await pool.query('DELETE FROM departments WHERE id = $1', [id]);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Customer routes
app.get('/api/customers', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM customers');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
app.post('/api/customers', async (req, res) => {
  const { name, email, phone } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO customers (name, email, phone) VALUES ($1, $2, $3) RETURNING *',
      [name, email, phone]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
app.put('/api/customers/:id', async (req, res) => {
  const id = Number(req.params.id);
  const { name, email, phone } = req.body;
  try {
    const result = await pool.query(
      'UPDATE customers SET name = $1, email = $2, phone = $3 WHERE id = $4 RETURNING *',
      [name, email, phone, id]
    );
    if (result.rows.length) {
      res.json(result.rows[0]);
    } else {
      res.status(404).send();
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
app.delete('/api/customers/:id', async (req, res) => {
  const id = Number(req.params.id);
  try {
    await pool.query('DELETE FROM customers WHERE id = $1', [id]);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Case routes
app.get('/api/cases', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM cases');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
app.post('/api/cases', async (req, res) => {
  const { title, description } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO cases (title, description) VALUES ($1, $2) RETURNING *',
      [title, description]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// User routes
app.get('/api/users', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/users', async (req, res) => {
  const { username, name, department, location, order, profilePhoto, email } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO users (username, name, department, location, "order", profilePhoto, email) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [username, name, department, location, order, profilePhoto, email]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put('/api/users/:id', async (req, res) => {
  const id = Number(req.params.id);
  const { username, name, department, location, order, profilePhoto, email } = req.body;
  try {
    const result = await pool.query(
      'UPDATE users SET username = $1, name = $2, department = $3, location = $4, "order" = $5, profilePhoto = $6, email = $7 WHERE id = $8 RETURNING *',
      [username, name, department, location, order, profilePhoto, email, id]
    );
    if (result.rows.length) {
      res.json(result.rows[0]);
    } else {
      res.status(404).send();
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete('/api/users/:id', async (req, res) => {
  const id = Number(req.params.id);
  try {
    await pool.query('DELETE FROM users WHERE id = $1', [id]);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
