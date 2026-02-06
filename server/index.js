/**
 * Express server for the Resume Builder API.
 * Handles REST endpoints and can serve the built React client in production.
 * @module server/index
 */

import express from 'express';


const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());


app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

