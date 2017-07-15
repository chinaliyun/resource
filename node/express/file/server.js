var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var multer = require('multer');
var util = require('util');
var fs = require('fs');
var url  = require('url');
var path = require('path');

var app = express();

app.use(bodyParser.urlencoded({extended: false}));

var upload = multer({dest: __dirname+'upload_cache'});

app.use(function(req, res, next){
    next()
})

app.get('/*.html', function(req, res){
    var pathname = path.join(__dirname,url.parse(req.url).pathname);
    if(fs.existsSync(pathname)){
        res.sendFile(pathname);
    }else{
        res.send('no such file')
    }
})
app.post('/file_upload_single', upload.single('file_example'), function(req, res){
    if(req.file){
        fs.readFile(req.file.path, function(err, data){
            if(err){
                res.send('读取失败')
            }else{
                fs.writeFile(path.join(__dirname, 'uploads/'+req.file.originalname), data, function(err){
                    if(err){
                        res.send('写入失败')
                    }else{
                        res.send('写入成功')
                    }
                })
            }
        })
    }else{
        res.send('没有收到文件')
    }

})

app.post('/file_upload_array', upload.array('file_array'), function(req, res){
    res.send(util.inspect(req))
})
var server = app.listen('8888', function(){
    console.log('server was running at  localhost:%s',server.address().port)
})