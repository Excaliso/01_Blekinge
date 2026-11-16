const express = require('express')
const cors = require('cors')
const pool = require('./postgres');
const app = express();
const port = 3000;

//Correct porting & Parse Json
app.use(cors())
app.use(express.json());

async function addProject(req, res){
    try{
        await pool.query('INSERT INTO projects (projectDeadline, projectName) VALUES ($1, $2) RETURNING *', [projectDeadline,projectName]);
    } catch (err){
        console.log("Error with add project")
    }
}

async function checkAvailability(projectName, projectDeadline, req, res){
    try {
        const result = await pool.query('SELECT * FROM Projects WHERE projectName = $1', [projectName]);

        //If the project isn't in the db yet, you can add it
        if (result.rows.length === 0){
            addProject(req, res)
            //const dubblecheck = await pool.query('SELECT * FROM projects'); //Debugging thing
            res.json({success:true})
        }
        //Otherwise do not add. Only unique (since name = key)!
        else{
            res.json({success:false});
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
}

//Used to send back all rows to refresh projects "view"
async function refreshData(req, res){
        const data = await pool.query('SELECT * FROM projects');
        res.json(data.rows)
}

//runs the first time connection is established,
app.get('/api/postgres', async (req, res) => {
    console.log("testing routes")
    res.send("working");
});

app.post('/api/refresh',(req, res)=> {
    refreshData(req, res)
}
)

//Receive from react on /interact (though I would do tasks as well before, changed my mind bcus of deadline)
app.post('/api/interact', (req, res) => {
    projectName = req.body.name
    projectDeadline = req.body.deadline
    
    req.body 
    checkAvailability(projectName, projectDeadline, req, res);
});

/* REACT CODE CONNECTIONS END */
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
