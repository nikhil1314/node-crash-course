const http=require('http');
const path=require('path');
const fs=require('fs');

const server=http.createServer((req,res)=> {
    if(req.url ==='/api/users'){
        const users=[
            {name :'bob smith', age :40},
            {name :'john doe', age :30}

        ];
                    res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(content);
        }

    );
    }
});
const port=process.env.port || 5000;
server.listen(port, ()=> console.log(`server running on port ${port}`));