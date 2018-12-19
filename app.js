const express = require('express');
const bodyParser = require('body-parser');
const DialogflowApp = require('actions-on-google').DialogflowApp;

const app = express();
app.use(bodyParser.json());

app.post('/googlehome', (req, res) => {
  console.log(JSON.stringify(req.body));
  const dialogApp = new DialogflowApp({
    request: req,
    response: res
  });

  dialogApp.ask("�}�C�N���\�t�g �A�W���[������ ����ɂ��́B�I���ꍇ�͏I���ƌ����Ă��������B");
});

app.listen(process.env.PORT || 1337);