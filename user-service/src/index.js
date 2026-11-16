const express = require('express')
const cors = require('cors')
const pool = require('./postgres');

const app = express();
const port = 3001;

//Correct porting & Parse Json
app.use(cors())
app.use(express.json());

//Checks if the user exists within the database.
async function checkLogin(username, password, req, res){
    try {
        //Tried some sql injection prevention... a bit unnecessary especially given the 
        //non-existant security w. database environment variables. 
        const result = await pool.query('SELECT * FROM Users WHERE username = $1 AND passwrd = $2', [username, password]); 
        if (result.rows.length !== 0){
            res.json({success:true})
        }
        else{
            res.json({success:false})
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
}

//runs the first time connection is established
app.get('/api/postgres', async (req, res) => {
    console.log("testing db connection")
    res.send("working db connection");
});

//Checks weather the user matches the ones in the database.
app.post('/api/login',(req, res)=> {
    username = req.body.username
    password = req.body.password
    checkLogin(username, password, req, res)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
