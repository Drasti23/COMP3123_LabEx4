const express = require('express');
const app = express();
const SERVER_PORT = process.env.port || 3000;

app.get("/hello", (req,res) =>{
    res.send('<h1>Hello Express JS </h1>');
} )

app.get("/user", (req,res) =>{
    const { firstname = 'Drasti', lastname  = 'Parikh' } = req.query;
    res.json({firstname,lastname});
})

app.post("/user/:firstname/:lastname",(req,res)=>{
    const { firstname, lastname} = req.params;
    res.json({ firstname, lastname });

})


app.listen(SERVER_PORT, () => {
    console.log(`Server is running on port http://localhost:${SERVER_PORT}`);
})
