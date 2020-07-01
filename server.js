const app = require('express')();
const http = require('http').createServer(app);
const server = new (require('./index').creatNewServer)()

const bodyParser = require('body-parser');
app.use(bodyParser.json());

// //firebase admin
// const admin = require("firebase-admin");
// const serviceAccount = require("./serviceAccountKey.json");

// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//     databaseURL: "https://the-vap-coffee.firebaseio.com"
// });
// const db = admin.firestore();


const cors = require('cors');
app.use(cors());



app.get('/', (req, res) => {
    res.send('Hello World')
});

app.post('/checkout', (req, res) => {
    server.sendOrder(req.body);
})

app.get('/makeline', (req, res) => {
    res.send('hello');
})

// app.post('/makeline', setSocket, (req, res) => {
//     console.log(req.socket);
// })

http.listen(3000, () => {
    console.log(`Listening in 3000 `);
})

