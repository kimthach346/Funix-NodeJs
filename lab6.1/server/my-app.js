const express = require("express")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")
const users = []

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())

var user1 = {
    name: 'Phong',
    age: 19
}

var userList = [];
userList.push(user1);
// users = userList;

app.get('/', (req, res, next) => {
    res.send('NODE');
    // res.send(200,'users', {
    //     pageTitle: 'User',
    //     users: userList,
    //     hasUsers: userList.length > 0
    //   });
});
  
app.get('/users', (req, res, next) => {

    res.render('users', {
      pageTitle: 'User',
      users: userList,
      hasUsers: userList.length > 0
    });
});
  
app.post('/add-user', (req, res, next) => {
    users.push({ name: req.body.username });
});

app.listen(5000)