const express = require('express');
const port = process.env.PORT || 3000;
var app = express();

app.use(express.static(__dirname + '/public'));

app.use((req,res,next)=>{

  var now = new Date().toString();
  console.log(`${now}`);
  next();
});

app.set('view engine','hbs');
app.get('/',(request,response)=>{
  //response.send("<h1>Hello express</h1>");
  response.send({
    name:'Anuj',
    likes:[
      'Biking',
      'Cyclying'
    ]
  });
});

app.get('/maintain',(request,response)=>{
  response.render('maintainence.hbs',{
    year:'2017'
  });
});

app.get('/about',(request,response)=>{
  response.render('about.hbs',{
    year:'2017'
  });
});

app.get('/bad',(request,response)=>{
  response.send({
    error:"Unable to answer request"
  });
});

app.listen(port);
