const app = require('express')();
const http = require('http').createServer(app);


const bodyParser = require('body-parser');
app.use(bodyParser.json());

//firebase admin
//firebase admin
const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://the-vap-coffee.firebaseio.com"
});
const db = admin.firestore();


const documentRef = db.collection('orders');
const Server = function () {
    this.data = {}
}

Server.prototype.sendOrder = function (data) {
    console.log(data);
    documentRef.doc((new Date()).getTime().toString()).set(data);
}

function getData() {
    let a = {
        'id': 1,
        'status': 'active'
    }
    return a;
}


module.exports = {

    creatNewServer: Server
}