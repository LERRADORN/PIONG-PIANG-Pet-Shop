// imports
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const path = require("path");

// Assign Express Function to the app variable
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use('/images', express.static(path.join(__dirname, 'public/images')));


// Test Route
// app.get("/", (req, res) => {
//     return res.json("Hello from the backend")
// })

// Database Connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "W7301@jqir#",
    database: "petstore_products",
})

// If there is no search query parameter, it will return all products.
// If there is a search query parameter, it will filter products based on the search term.
app.get('/products', (req, res) => {
    const searchTerm = req.query.search;

    let q = "SELECT * FROM products";

    if (searchTerm) {
        q += " WHERE name LIKE ?";
        const searchTermParam = '%' + searchTerm + '%';
        db.query(q, [searchTermParam], (err, results) => {
            if (err) return res.json(err);
            return res.json(results);
        });
    } else {
        db.query(q, (err, results) => {
            if (err) return res.json(err);
            return res.json(results);
        });
    }
});

// Fetch All Products in Dog Category
app.get('/products/dog', (req, res) => {
    const searchTerm = req.query.search;

    let q = "SELECT * FROM products WHERE category = 'Dogs'";

    if (searchTerm) {
        q += " AND name LIKE ?";
        const searchTermParam = '%' + searchTerm + '%';
        db.query(q, [searchTermParam], (err, results) => {
            if (err) return res.json(err);
            return res.json(results);
        });
    } else {
        db.query(q, (err, results) => {
            if (err) return res.json(err);
            return res.json(results);
        });
    }
});

// Fetch All Products in Cat Category
app.get('/products/cat', (req, res) => {
    const searchTerm = req.query.search;

    let q = "SELECT * FROM products WHERE category = 'Cats'";

    if (searchTerm) {
        q += " AND name LIKE ?";
        const searchTermParam = '%' + searchTerm + '%';
        db.query(q, [searchTermParam], (err, results) => {
            if (err) return res.json(err);
            return res.json(results);
        });
    } else {
        db.query(q, (err, results) => {
            if (err) return res.json(err);
            return res.json(results);
        });
    }
});

// Fetch All Products in Fish Category
app.get('/products/fish', (req, res) => {
    const searchTerm = req.query.search;

    let q = "SELECT * FROM products WHERE category = 'Fish'";

    if (searchTerm) {
        q += " AND name LIKE ?";
        const searchTermParam = '%' + searchTerm + '%';
        db.query(q, [searchTermParam], (err, results) => {
            if (err) return res.json(err);
            return res.json(results);
        });
    } else {
        db.query(q, (err, results) => {
            if (err) return res.json(err);
            return res.json(results);
        });
    }
});

// Fetch All Products in Bird Category
app.get('/products/bird', (req, res) => {
    const searchTerm = req.query.search;

    let q = "SELECT * FROM products WHERE category = 'Birds'";

    if (searchTerm) {
        q += " AND name LIKE ?";
        const searchTermParam = '%' + searchTerm + '%';
        db.query(q, [searchTermParam], (err, results) => {
            if (err) return res.json(err);
            return res.json(results);
        });
    } else {
        db.query(q, (err, results) => {
            if (err) return res.json(err);
            return res.json(results);
        });
    }
});


// Fetch All Faqs
app.get("/faqs",(req, res) => {
    const q = "SELECT * FROM faqs";

    db.query(q, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})



// Listener
app.listen(8000, () => {
    console.log("Server is running on port 8000")
}) 