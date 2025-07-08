import express from "express";
const server = express();

// const users = [
//     {
//     time : new Date().toLocaleString(),
//     msg : "hi from get endpoint"
//     }
// ]

// server.get('/',(req,res) =>{
// res.end("helo")
// });

// server.get('/users',(req,res) => {
//     res.json(users)
// });

// server.get('/params/:name', (req,res) => {
//     const {name} = req.params
//     res.end(`${name} i got name`)
// });


// server.get('/serth',(req,res) => {
//     res.send(req.query)
// });


// server.get('/greet/:name',(req,res) => {
//     res.json({msg: "i get" + res.params.name})
// })


server.use(express.json());

server.post("/action", async (req, res) => {
  const key = req.body.key;

  if (!key || (key !== "joke" && key !== "cat_fact")) {
    return res.status(400).json({ msg: "body is malformed" });
  }

  if (key === "joke") {
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await response.json();
    const joke = `${data.setup.toUpperCase()} ${data.punchline.toUpperCase()}`;
    return res.json({ joke });
  }

  if (key === "cat_fact") {
    const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=10");
    const data = await response.json();
    return res.json({ length: data.length });
  }
});

server.listen(3003, () => {
  console.log("Server running on http://localhost:3003");
});
