# heroku-nodeJs-React

https://heroku-nodejs-react1.herokuapp.com

cd client/
npm run-script build

Add in package.json of server
"heroku-postbuild": "cd client && npm install && npm run build"

Add in index.js of server
var path = require('path');
const PORT = process.env.PORT || 5000

app.use(express.static(path.join(__dirname, 'client/build')));

app.listen(PORT,()=>{
    console.log("running on port 5000")
});


Add in client/package.json
 "proxy": "http://localhost:5000"


Modify client/src/App.js
from -  Axios.get('http://localhost:5000/api/get').then((response)=>{
to -    Axios.get('api/get').then((response)=>{

##Heroku
heroku login
heroku create heroku-nodejs-react1
git commit -am "Added heroku postbuild scripts"
git push heroku main

AWS S3 bucket config
heroku config:set AWS_ACCESS_KEY_ID=xxx AWS_SECRET_ACCESS_KEY=yyy
heroku config:set S3_BUCKET=zzz

check config - heroku config

use in code
const S3_BUCKET = process.env.S3_BUCKET;