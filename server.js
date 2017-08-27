var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one' : {
        title : `Article One | Nilesh Jha`,
        heading : `This is article one`,
        body : `
        <p>
    			This is som rubbish content. This is som rubbish content. This is som rubbish content.This is som rubbish content.vThis is som rubbish content.vvvThis is som rubbish content.This is som rubbish content.This is som rubbish content.This is som rubbish content.This is som rubbish content.This is som rubbish content.This is som rubbish content.This is som rubbish content.This is som rubbish content.This is som rubbish content.This is som rubbish content.
    		</p>
    		<p>
    			This is som rubbish content. This is som rubbish content. This is som rubbish content.This is som rubbish content.vThis is som rubbish content.vvvThis is som rubbish content.This is som rubbish content.This is som rubbish content.This is som rubbish content.This is som rubbish content.This is som rubbish content.This is som rubbish content.This is som rubbish content.This is som rubbish content.This is som rubbish content.This is som rubbish content.
    		</p>
    		<p>
    			This is som rubbish content. This is som rubbish content. This is som rubbish content.This is som rubbish content.vThis is som rubbish content.vvvThis is som rubbish content.This is som rubbish content.This is som rubbish content.This is som rubbish content.This is som rubbish content.This is som rubbish content.This is som rubbish content.This is som rubbish content.This is som rubbish content.This is som rubbish content.This is som rubbish content.
    		</p>
		</div>
        `
    },
    'article-two' : {
        title : `Article Two | Nilesh Jha`,
        heading : `This is article Two`,
        body : `
        <p>
    			This is som rubbish content. This is som rubbish content. This is som rubbish content.This is som rubbish content.vThis is som rubbish content.vvvThis is som rubbish content.This is som rubbish content.This is som rubbish content.This is som rubbish content.This is som rubbish content.This is som rubbish content.This is som rubbish content.This is som rubbish content.This is som rubbish content.This is som rubbish content.This is som rubbish content.
    		</p>
    		<p>
    			This is som rubbish content. This is som rubbish content. This is som rubbish content.This is som rubbish content.vThis is som rubbish content.vvvThis is som rubbish content.This is som rubbish content.This is som rubbish content.This is som rubbish content.This is som rubbish content.This is som rubbish content.This is som rubbish content.This is som rubbish content.This is som rubbish content.This is som rubbish content.This is som rubbish content.
    		</p>
    		<p>
    			This is som rubbish content. This is som rubbish content. This is som rubbish content.This is som rubbish content.vThis is som rubbish content.vvvThis is som rubbish content.This is som rubbish content.This is som rubbish content.This is som rubbish content.This is som rubbish content.This is som rubbish content.This is som rubbish content.This is som rubbish content.This is som rubbish content.This is som rubbish content.This is som rubbish content.
    		</p>
		</div>
        `
    },
    'article-three' : {
        title : `Article Three | Nilesh Jha`,
        heading : `This is article Three`,
        body : `
        <p>
    			This is som rubbish content. This is som rubbish content. This is som rubbish content.This is som rubbish content.vThis is som rubbish content.vvvThis is som rubbish content.This is som rubbish content.This is som rubbish content.This is som rubbish content.This is som rubbish content.This is som rubbish content.This is som rubbish content.This is som rubbish content.This is som rubbish content.This is som rubbish content.This is som rubbish content.
    		</p>
    		<p>
    			This is som rubbish content. This is som rubbish content. This is som rubbish content.This is som rubbish content.vThis is som rubbish content.vvvThis is som rubbish content.This is som rubbish content.This is som rubbish content.This is som rubbish content.This is som rubbish content.This is som rubbish content.This is som rubbish content.This is som rubbish content.This is som rubbish content.This is som rubbish content.This is som rubbish content.
    		</p>
    		<p>
    			This is som rubbish content. This is som rubbish content. This is som rubbish content.This is som rubbish content.vThis is som rubbish content.vvvThis is som rubbish content.This is som rubbish content.This is som rubbish content.This is som rubbish content.This is som rubbish content.This is som rubbish content.This is som rubbish content.This is som rubbish content.This is som rubbish content.This is som rubbish content.This is som rubbish content.
    		</p>
		</div>
        `
    }
};

function createTemplate(data)
{
    var title= data.title;
    var heading = data.heading;
    var body =  data.body;
    var htmlTemplate=`
        <!DOCTYPE html>
        <html>
        	<head>
        		<title>${title}</title>
        		<link href="/ui/style.css" rel="stylesheet" />
        	</head>
        	<body>
        	    <div class = 'container'>
            		<div>
            		 <a href="/">Home</a>   
            		</div>
            		<h1>
            		    ${heading}
            		</h1>
            		<div>   ${body}</div>
        		</div>
        	</body>
        </html>
        `;
        return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
  var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
