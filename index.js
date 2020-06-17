const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const cors = require('cors');

app.use(cors());

const port = 3000;

let queue;


app.get('/', (req, res) => {
    res.send('Hello World')
});

function setSocket(req, res, next) {
    io.on("connection", function (socket) {
        req.socket = socket;
        console.log("RUN");
        next();
    });
}

app.post('/checkout', (req, res) => {
    queue = req.body;
    // console.log(queue);
})


// app.post('/makeline', setSocket, (req, res) => {
//     setSocket();
// io.broadcast.emit('order',()=>{
//     queue
// })
// })

http.listen(3000, () => {
    console.log(`Listening in ${port} `);
})

io.on('connection', (socket) => {
    console.log(socket.id);
    socket.broadcast.emit('order', () => {
        queue
    })
})