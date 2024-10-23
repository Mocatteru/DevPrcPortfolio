const express = require('express');
const app = express();
const path = require('path');
const http = require('http').createServer(app);
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
const cors = require('cors');
app.use(cors());

app.use(express.static(path.join(__dirname, '../build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

let userID = 167;
let userName = '이종현';

// 유저정보 GET
app.get('/user-info', (req, res) => {
  res.status(200).json({
    userName: userName,
    userID: userID,
    message: '성공적으로 사용자 정보을 가져왔습니다.'
  });
  console.log('유저 정보 전송됨', userName, userID);
});

// 유저ID 변경 POST
app.post('/update-user-id', (req, res) => {
  const newID = parseInt(req.body.newID);

  if (newID === null || NaN) {
    return res.status(400).json({ error: '유효한 ID을 입력해주세요.' });
  }

  userID = newID;
  console.log(`유저 ID 변경됨: ${userID}`);
  res.json({ message: 'ID가 업데이트되었습니다.', userID: userID });
});

// 유저이름 변경 POST
app.post('/update-user-name', (req, res) => {
  const newName = req.body.newName;

  if (typeof newName !== 'string' || newName.trim() === '') {
    return res.status(400).json({ error: '유효한 이름을 입력해주세요.' });
  }

  userName = newName;
  console.log(`유저 이름 변경됨: ${userName}`);
  res.json({ message: '이름이 업데이트되었습니다.', userName: userName });
});

const PORT = process.env.PORT || 3000;

// 와일드카드 get * 포인트는 최하단에 배치해야됨
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

http.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
