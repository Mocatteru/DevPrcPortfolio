const express = require('express');
const app = express();
const path = require('path');
const http = require('http').createServer(app);

app.use(express.json());
const cors = require('cors');
app.use(cors());

app.use(express.static(path.join(__dirname, '/build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/build/index.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/build/index.html'));
});

const PORT = process.env.PORT || 3000;

try {
  http.listen(PORT, () => {
    console.log(`${PORT} 포트에서 수신중...`);
  });
} catch (e) {
  console.log('서버 시작 중 오류 발생:', e);
}
