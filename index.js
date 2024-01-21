const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const Category = require("./models/category");
const Item = require("./models/items");

let port = 8080;
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"/public/css")));
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.listen(port,()=>{
    console.log("App is listening at the port",port);
});

main().then((result)=>{
    console.log("DataBase Connected");
}).catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/Inventory");
}

app.get("/",(req,res)=>{
    res.render("index.ejs");
});

app.post("/user",(req,res)=>{
    let {username, pass, ops} = req.body;
    if(username == "user@ima" && pass == "ima@123" && ops === "Create"){
        res.redirect("/create");
    }
    else if(username == "user@ima" && pass == "ima@123" && ops === "Update"){
        res.redirect("/update");
    }
    else if(username == "user@ima" && pass == "ima@123" && ops === "Read"){
        res.redirect("/show");
    }
    else if(username == "user@ima" && pass == "ima@123" && ops === "Delete"){
        res.redirect("/destroy");
    }
    else{
        res.redirect("/error");
    }

});


app.get("/create",(req,res)=>{
    res.render("create.ejs");
});
app.post("/create/item",(req,res)=>{
    let {name, description, category, des, price, quantity } = req.body;
    let newItemData = new Item({
        name: name,
        description: description,
        category:category,
        price: price,
        quantity:quantity,
    });
    let newCatData = new Category({
        name:category,
        des:des,
    });
    newCatData.save().then((result)=>{
        console.log("New Category Added")
    }).catch((err)=>{
        console.log(err);
    });
    newItemData.save().then((result)=>{
        console.log("New item Added")
    }).catch((err)=>{
        console.log(err);
    });
    res.redirect("/create");
});

app.get("/update",async (req,res)=>{
    let items = await Item.find({})
   res.render("update.ejs",{items});
});
app.get("/update/:id/edit", async(req,res)=>{
    let {id} = req.params;
    let updateItem = await Item.findById(id);
    console.log(updateItem);
    res.render("updateForm.ejs",{updateItem});
});
app.put("/update/:id",async(req,res)=>{
    let {id} = req.params;
    let {name, description, category, price, quantity} = req.body;
    let newUpdatedData = await Item.findByIdAndUpdate(id,{name:name,description:description,category:category,price:price,quantity:quantity});
    console.log(newUpdatedData);
    res.redirect("/update");
})

app.get("/show", async(req,res)=>{
    let category = await Category.find({});
    let name = req.query.name;
    let items = await Item.find({category:name});
    res.render("show.ejs",{category,items});
});

app.get("/destroy",async(req,res)=>{
    let items = await Item.find({})
    res.render("destroy.ejs",{items});
});

app.get("/destroy/remove/:id",async(req,res)=>{
    let {id} = req.params;
    let deleteItem = await Item.findByIdAndDelete(id);
    console.log(deleteItem);
    res.redirect("/destroy");
});


app.get("/error",(req,res)=>{
    res.send("Check password and username or select the operation correcttly");
})
