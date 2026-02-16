import express from 'express';


const app = express();
const PORT = process.env.PORT;
app.use(express.json());


app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

