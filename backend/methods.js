// Import the express library
const express = require("express");

// Create an Express application
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Start the server on port 3000
app.listen(3000);

// Initialize an empty object to store user data
let users = [
    {
        'id':1,
        'name':"Kanishka"
    },
    {
        'id':2,
        'name':"Krishna"
    },
    {
        'id':3,
        'name':"Asha"
    }
];


const userRouter = express.Router();
const authRouter = express.Router();
app.use("/auth",authRouter);
app.use('/user',userRouter);
userRouter 
.route('/')
.get(getUsers)
.post(postUsers)
.patch(updateUsers)
.delete(deleteUsers);

userRouter.route('/:id').get(findUserByID)
//mini app bna lo 
function getUsers(req, res) {
    res.send(users);
};
function postUsers (req, res) {
    console.log(req.body);
    res.json({
        message: "Data Received successfully",
        user: req.body
    });
};
function updateUsers(req,res){
    console.log("req.body->", req.body);
    for (let key in req.body) { 
        users[key] = req.body[key]; 
    }
    res.json({ message: "Data updated successfully", users: users });
}
function deleteUsers(req,res){    
    users={};
    res.json({
        message:"data has been deleted"
    });
};
function  findUserByID(req,res){
    console.log(req.params.id);
    res.send("user id is");
};

authRouter
.route('/signup')
.get(getSignUp)
.post(postSignUp)

function getSignUp(req,res){
    res.sendFile('./frontend/public/index.html',{root :__dirname});
}
function postSignUp(req,res){  th
    let obj = req.body;
     res.json({
        message:"user signed up",
        data :obj
     });
}



/*     router method 
// Handle GET requests to /users endpoint
app.get('/users', (req, res) => {
    // Send the users data as the response
    res.send(users);
});

// Handle POST requests to /users endpoint
app.post('/users', (req, res) => {
    // Log the received request body
    console.log(req.body);
    // Send a JSON response indicating successful data reception
    res.json({
        message: "Data Received successfully",
        user: req.body
    });
});

// Handle PATCH requests to /users endpoint
app.patch('/users', (req, res) => {
    // Log the received request body
    console.log("req.body->", req.body);
    // Iterate through the keys in the request body
    for (let key in req.body) { 
        // Update the corresponding key in the users object with the value from the request body
        users[key] = req.body[key]; 
    }
    // Send a JSON response indicating successful data update along with updated users data
    res.json({ message: "Data updated successfully", users: users });
});

// Handle DELETE requests to /user endpoint
app.delete('/user',(req,res)=>{
    // Reset the users object to an empty object
    users={};
    // Send a JSON response indicating successful deletion of data
    res.json({
        message:"data has been deleted"
    });
});
app.get('/user/:id',(req,res)=>{
    console.log(req.params.id);
    res.send("user id is");
    
})
app.get('/user',(req,res)=>{
    console.log(req.query);
    res.send(users);
})
*/
