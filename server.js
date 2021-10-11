const express = require('express');
const cors = require('cors');
const port = require('./config').port;
const app = express();

//解决CORS跨域请求
app.use(cors());

app.set('port', port);

//文件流，用于文件操作
app.use("/filestream", require("./api/filestream"));

app.listen(app.get('port'), () => {
    console.log(`start the server at: http://127.0.0.1:${app.get('port')}/`);
});

