require('dotenv').config();
// Load the Cloudant library.
var Cloudant = require('@cloudant/cloudant');

// Initialize Cloudant with settings from .env
var username = process.env.cloudant_username || "nodejs";
var password = process.env.cloudant_password;
var cloudant = Cloudant({ account:username, password:password });



const express = require('express')
const app = express()
const port = 3000

app.get('/login', (req, res)=>{

    let email,password
    if(res && res.query && res.query.email)
    {
        email=res.query.email;
        password=res.query.password;


        //cloudant function to fetch
        //if(doc['email] === email)
        // res.send()





          // Using the async/await style.

          async function asyncCall() {
            await cloudant.db.create('alice');
            return cloudant.use('alice').insert({ happy: true }, 'rabbit');
          }

          asyncCall().then((data) => {
            console.log(data); // { ok: true, id: 'rabbit', ...
          }).catch((err) => {
            console.log(err);
          });

          // Using Promises.

          cloudant.db.create('alice').then(() => {
            cloudant.use('alice').insert({ happy: true }, 'rabbit').then((data) => {
              console.log(data); // { ok: true, id: 'rabbit', ...
            });
          }).catch((err) => {
            console.log(err);
          });

          // Using Callbacks.

          cloudant.db.create('alice', (err) => {
            if (err) {
              console.log(err);
            } else {
              cloudant.use('alice').insert({ happy: true }, 'rabbit', (err, data) => {
                if (err) {
                  console.log(err);
                } else {
                  console.log(data); // { ok: true, id: 'rabbit', ...
                }
              });
            }
          });


    }

    res.setHeader('Content-Type', 'application/json');


    //replace your json with your output
    res.end(JSON.stringify({ a: 1 }));

});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
