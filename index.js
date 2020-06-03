const http = require('http');
const port = 8000;

const fs = require('fs');

function requestHandler(req, res){
    // console.log(req.url);
    res.writeHeader(200, {"content-type": "text/html"});
    let filePath;
    switch(req.url){
        case '/':
            filePath = './index.html';
            break;
        default:
            filePath = './404.html';
            break;
    }

    console.log("FilePath", filePath);
    fs.readFile(filePath, function(err, data){
        if(err){
            console.log("error!!", err);
            return res.end("<h1>Error</h1>");
        }
        else{
            return res.end(data);
        }
    });
}

const server = http.createServer(requestHandler);
server.listen(port, function(err){
    if(err){
        console.log("error", err);
        return;
    }
    else{
        console.log("Server is up and running on port", port);
    }
})