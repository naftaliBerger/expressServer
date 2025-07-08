import expreess from "express";
const server = expreess();

const users = [
    {
    userName : "naftali"
    }
]

server.get('/',(req,res) =>{
res.end("hello")
});

server.get('/users',(req,res) => {
    res.json(users)
});

server.listen(3003,() => {
    console.log("Server running on http://localhost:3003");
});
