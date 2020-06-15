require('dotenv').config();
// Load the Cloudant library.
var Cloudant = require('@cloudant/cloudant');
// Initialize Cloudant with settings from .env
var username = process.env.cloudant_username || "nodejs";
var password = process.env.cloudant_password;
var cloudant = Cloudant({ account: username, password: password });
const express = require('express')
const app = express()
const port = 3000
app.get('/login', (req, res) => {
    let email, password
    if (req && req.query && req.query.email) {
        email = req.query.email;
        password = req.query.password;
        async function asyncCall() {
            return cloudant.use('sarathiapp').get("auth");
        }
        asyncCall().then((data) => {
            console.log("Data  ", data.user)
            let flag = 0;
            data.user.forEach((item, index) => {

                if (item.email === email && item.password === password) {
                    //sucess
                    res.setHeader('Content-Type', 'application/json');
                    //replace your json with your output
                    flag = 1;
                    res.status(200)
                    res.end(JSON.stringify(item));
                }
            })
            if (flag === 0) {
                res.setHeader('Content-Type', 'application/json');
                res.status(500)
                res.end(JSON.stringify({ "result": "Authentication Failed" }));
            }
        }).catch((err) => {

            res.setHeader('Content-Type', 'application/json');
            res.status(500)
            res.end(JSON.stringify({ "result": "Authentication Failed" }));
            console.log(err);
        });
    }
});


app.get('/register', (req, res) => {
    let email, password
    if (req && req.query && req.query.id && req.query.name && req.query.email,req.query.password) {
        email = req.query.email;
        password = req.query.password;
        async function asyncCallGet() {
            return cloudant.use('sarathiapp').get("auth")
        }

        async function asyncCallInsert(data) {
            return cloudant.use('sarathiapp').insert(data)
        }
        asyncCallGet().then((data) => {
            console.log("Data  ", data)
            data.user.push({ "id": req.query.id, "name": req.query.name, "email": eq.query.email, "password": req.query.password})

            asyncCallInsert().then((data) => {

                console.log("data   : ", data)
                res.setHeader('Content-Type', 'application/json');
                res.status(500)
                res.end(JSON.stringify({ "result": "Inserted Successfully" }));

            }).catch((err) => {

                res.setHeader('Content-Type', 'application/json');
                res.status(500)
                res.end(JSON.stringify({ "result": "Registration Failed" }));
                console.log(err);
            });
        }).catch((err) => {

            res.setHeader('Content-Type', 'application/json');
            res.status(500)
            res.end(JSON.stringify({ "result": "Authentication Failed" }));
            console.log(err);
        });
    }
});


app.get('/fetchPOI', (req, res) => {

    async function asyncCallGet() {
        return cloudant.use('sarathiapp').get("POI_name")
    }
    asyncCallGet().then((data) => {
        console.log("data   : ",data)
        res.setHeader('Content-Type', 'application/json');
        res.status(500)
        res.end(JSON.stringify(data.shop));

    }).catch((err) => {

        res.setHeader('Content-Type', 'application/json');
        res.status(500)
        res.end(JSON.stringify({ "result": "Fetching Failed" }));
        console.log(err);
    })
    
    
});




app.get('/boolPOI', (req, res) => {

    let email, password
    if (req && req.query && req.query.sarathi_id && req.query.timeslot  && req.query.entry_time && req.query.exit_time) {
        email = req.query.email;
        password = req.query.password;
        async function asyncCallGet() {
            return cloudant.use('sarathiapp').get("booking")
        }

        async function asyncCallInsert(data) {
            return cloudant.use('sarathiapp').insert(data)
        }
        asyncCallGet().then((data) => {
            console.log("Data  ", data)
            let booking_id=Math.floor(Math.random() * 1000)
            data.user.push({ "booking_id":  booking_id, "sarathi_id": req.query.sarathi_id, "timeslot": req.query.timeslot, "exit_time": req.query.exit_time,"entry_time":req.query.entry_time })

            asyncCallInsert().then((data) => {

                console.log("data   : ", data)
                res.setHeader('Content-Type', 'application/json');
                res.status(500)
                res.end(JSON.stringify({ "result": {"booking_id":booking_id}}));

            }).catch((err) => {

                res.setHeader('Content-Type', 'application/json');
                res.status(500)
                res.end(JSON.stringify({ "result": "Booking Failed Failed" }));
                console.log(err);
            });
        }).catch((err) => {

            res.setHeader('Content-Type', 'application/json');
            res.status(500)
            res.end(JSON.stringify({ "result": "Authentication Failed" }));
            console.log(err);
        });
    }
    
});



app.listen(port, () => console.log('Sarathi App Backend Running'))