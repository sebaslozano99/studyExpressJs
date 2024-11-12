const express = require("express");
const path = require("path");


const app = express();

const PORT = 5000;


// SET UP STATIC FOLDER
// app.use(express.static(path.join(__dirname, "public")))


// ---------------- ROUTING ------------------------
    // app.get("/", (req,res) => {
    //     res.sendFile(path.join(__dirname,"public", "index.html"));
    // })

    // app.get("/about", (req,res) => {
    //     res.sendFile(path.join(__dirname, "public", "about.html"));
    // })

    // //if user visits a path or endpoint that was not specified, the code below will display the notFound page
    // app.use((req, res) => {
    //     res.status(404).sendFile(path.join(__dirname, "public", "notFound.html"));
    // })

// ---------------- ROUTING ------------------------



// ---------------- PRACTICING ROUTING AND HTTP METHODS ------------------------

    // app.get("/products", (req,res) => {
    //     res.send("products list");
    // })

    // app.post("/products", (req, res) => {
    //     res.send("creating products!");
    // })

    // app.put("/products", (req, res) => {
    //     res.send("Updating product!");
    // })

    // app.delete("/products", (req, res) => {
    //     res.send("Deleting product!");
    // })

    // app.patch("/products", (req, res) => {
    //     res.send("Updating product patch");
    // })

// ---------------- PRACTICING ROUTING ------------------------



// ---------------- SENDING DIFFERENT TYPE OF DATA ------------------------

    //Sending a .txt file
    // app.get("/user", (req, res) => {
    //     res.status(200).sendFile(path.join(__dirname, "public", "text.txt"));
    // });

    //Sending json data
    // app.get("/userTwo", (req, res) => {
    //     res.status(200).send({"username": "presagio99"});
    // });

// ---------------- SENDING DIFFERENT TYPE OF DATA ------------------------



// ---------------- REQUEST BODY ------------------------

    // The request body is a part of an HTTP request that contains data sent from the client (usually a browser or mobile app) to the server. It is primarily used for POST, PUT, PATCH, and DELETE requests, where the client needs to send data to the server.


    // if the user sends from the client either text data, json, form data, etc, we'll have to first specify with "app.use(express.methodAccordingDataType())" as shown below and after that we listen for the post request

    // app.use(): This tells Express to use the given middleware function for all incoming HTTP requests to the app.

    // express.urlencoded(): This middleware function parses URL-encoded data (data sent via a form, for example) and makes it available in req.body


        // app.use(express.text());
        // app.use(express.json());
        // app.use(express.urlencoded({extended: false}));

        // app.post("/user", (req,res) => {
        //     console.log(req.body);
        //     res.status(201).send("New user created!");
        // })

// ---------------- REQUEST BODY ------------------------




// ---------------- REQUEST PARAMS ------------------------


    // app.get("/userpage/:userID", (req, res) => {
    //     console.log(req.params);
    //     res.status(200).send(`Hello user ${req.params.userID}`);
    // })

    // app.get("/add/:x/:y", (req, res) => {
    //     const { x, y } = req.params;
    //     res.status(200).send(`Result: ${+x + +y}`)
    // })

    // app.get("/landscape", (req, res) => {
    //     res.sendFile(path.join(__dirname, "landscape.jpg"));
    // })


// ---------------- REQUEST PARAMS ------------------------




// ---------------- QUERIES ------------------------

    // app.get("/products", (req, res) => {
    //     console.log(req.query); // this reads any queries passed to the url -- example
    //     // http://localhost:5000/products?price=200&category=groceries -- this will show on object with the queries:
    //     // { price: "200", category: "groceries" }
    //     if(+req.query.price >= 200) {
    //         res.status(200).send("list of products $200 an above!");
    //     }
    //     else {
    //         res.status(200).send("list of products under $200");
    //     }
    // })

// ---------------- QUERIES ------------------------




// ---------------- THE "OLD METHOD" ------------------------

    // The .all() method is a general-purpose middleware handler that listens for all types of HTTP requests for a given route

        // app.all("/info", (req, res) => {
        //     res.send("server info!");
        // })

// ---------------- THE "OLD METHOD" ------------------------




// ---------------- MIDDLEWARES ------------------------ 

    // middleware to review the url visited by user and the http method used
        // app.use((req, res, next) => {
        //     console.log(req.url);
        //     console.log(req.method)
        //     next();
        // });

        // app.get("/profile", (req, res) => {
        //     res.send("<h1>Profile page!</h1>");
        // });


    //middleware to check if user is authenticated to be able to move to the dashboar page
        // app.use((req, res, next) => {
        //     const { login } = req.query;

        //     if(login === "sebastian"){
        //         next();
        //     }
        //     else {
        //         res.send("you aren't authorized!");
        //     }
        // });

        // app.get("/dashboard", (req, res) => {
        //     const { login } = req.query;
        //     res.send(`<h1>Dashboard page</h1>
        //         <p>Welcome back ${login.toLocaleUpperCase()}</p>`);
        // });

// ---------------- MIDDLEWARES ------------------------ 




// ---------------- THIRD PARTY MIDDLEWARES FROM NPM ------------------------ 

    // morgan is a MIDDLEWARE package installed from npm - it's used to console some info of the request/response
        // const morgan = require("morgan");

        // app.use(morgan("dev"));


        // app.get("/profile", (req, res) => {
        //     res.send("Profile page");
        // })

// ---------------- THIRD PARTY MIDDLEWARES FROM NPM ------------------------ 




// ---------------- EXPRESS SETTINGS -----------------------------------------

    // app.set() is a method used to configure application-level settings or parameters. These settings are typically used to configure how the Express application behaves, and they can be accessed later using app.get().

        // app.set("case sensitive routing", true);

// ---------------- EXPRESS SETTINGS -----------------------------------------





// ---------------- STATIC FILES -----------------------------------------

    // we serve the static files that are in the "static" folder.
        // app.use(express.static("./static")); 

// ---------------- STATIC FILES -----------------------------------------





// ---------------- EXPRESS ROUTING AND TEMPLATE ENGINE (EJS) -----------------------------------------

// to use our TEMPLATE ENGINES we first set the type of template engine will use
app.set("view engine", "ejs");

// then we set the path in which express will find all our template engines
app.set("views", path.join(__dirname, "views"));


// ------------ working on routes ---------
//we create the "routes" folder with all our routes files, and import them in our main file, then we use it with "app.use()" as shown below, and our routes should be up and running
const homeRouter = require("./routes/home");

app.use(homeRouter);

// ---------------- EXPRESS ROUTING -----------------------------------------



// LISTENING PORT
app.listen(PORT, () => {
    console.log(`Running server ${PORT}`)
})
