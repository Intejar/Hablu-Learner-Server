const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors());

const couseCategory = require('./data/category.json')
const courses = require('./data/courses.json')
app.get('/', (re1, res) => {
    res.send('course api running');
});

app.get('/course-category', (req, res) => {
    res.send(couseCategory)
})
app.get('/courses',(req,res)=>{
    res.send(courses)
})
app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    if (id === '07') {
        res.send(courses)
    }
    else {
        const catagory_course = courses.filter(n => n.category_id === id);
        res.send(catagory_course);
    }
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = courses.find(c => c._id === id);
    res.send(selectedCourse);
})
app.listen(port, () => {
    console.log('course server', port);
})

module.exports = app;