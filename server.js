// const app = require('express')();
// const http = require('http').createServer(app);
// const io = require('socket.io')(http);


// const cors = require('cors')
// const bodyParser = require('body-parser');
// app.use(bodyParser.json());
// app.use(cors())

// let queue;
// const port = 3000;
// // app.use((req, res, next) => {
// //     res.header('Access-Control-Allow-Origin', '*');
// //     next();
// //   });

// // app.use(cors());

// app.post('/checkout', (req, res) => {
//     // const data={
//     //     'id':1,
//     //     'name':"cf sua"
//     // }
//     // let id=req.body.id;
//     console.log(req.body);
//     queue = req.body;
//     res.send(queue);
// });

// io.on('connection', (req, res) => {
//     res.send('hello');
// });

// app.get('/', (req, res) => res.send('Hello world!!!'));


// app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

