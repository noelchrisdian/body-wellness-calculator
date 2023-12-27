let express = require('express')
let expressLayouts = require('express-ejs-layouts')
let app = express()
let port = 3000

app.use(express.static('Public'))

app
    .use(expressLayouts)
    .set('view engine', 'ejs')

app
    .get('/', (req, res) => {
        res.render('Home', {
            title: 'Beiss - Body Wellness Calculator',
            layout: 'Layouts/Main',
            css: 'CSS/Home.css'
        })
    })
    .get('/bmi', (req, res) => {
        res.render('BMI', {
            title: 'BMI Calculator',
            layout: 'Layouts/Main',
            css: 'CSS/BMI.css'
        })
    })
    .get('/macro', (req, res) => {
        res.render('Macro', {
            title: 'Macro Nutrient Calculator',
            layout: 'Layouts/Main',
            css: 'CSS/Macro.css'
        })
    })
    .get('*', (req, res) => {
        res.status(404).render('404', {
            title: '404',
            layout: 'Layouts/Main',
            css: 'CSS/404.css'
        })
    })
    .listen(port, () => {
        console.log(`App listening on http://localhost:${port}`)
    })