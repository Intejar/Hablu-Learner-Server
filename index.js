const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors());

const couseCategory = require('./data/category.json')
app.get('/', (re1, res)=>{
    res.send('course api running');
});

app.get('/course-category',(req,res)=>{
    res.send(couseCategory)
})
app.listen(port,()=>{
    console.log('course server',port);
})