const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
let PORT = process.env.PORT || 8080;



let app = express();

// app.get('/', function (req, res) {
//     res.send('Hello World')
// });



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());



// app.use(function (req, res) {
//     res.setHeader('Content-Type', 'text/plain');
//     res.write('you posted:\n');
//     res.end(JSON.stringify(req.body, null, 2))
// });


require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);





app.listen(PORT, function(){
    console.log('App listening on PORT ' + PORT);
});