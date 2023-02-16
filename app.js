const express = require('express');
const app = express();
const multer = require('multer');
const upload = multer();
app.set('view engine', 'ejs')
app.set('views', './views');
app.get('/', (req, res) => {
    res.render('create')
})
const arr = [];
app.post('/create', upload.none(),(req, res) => {
    if (req.body.id && req.body.name && req.body.department) {
        let member = {
            id: req.body.id,
            name: req.body.name,
            department: req.body.department
        }
        arr.unshift(member)
        console.log(arr)
        res.render('view',{data :arr})
    }
})
app.listen(3030, () => {
    console.log('http://localhost:3030')
})