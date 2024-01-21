const mongoose = require("mongoose");
const Category = require("./models/category");
const Item = require("./models/items");
const itemData = require("./itemsData");

main().then((result)=>{
    console.log("DataBase Connected");
}).catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/Inventory");
}

let categoryData = [
    {
        name:"Electronics",
        des:" This category includes electronic devices such as smartphones, laptops, TVs, and other gadgets."
    },
    {
        name:"Clothing",
        des:" This category includes apparel items such as shirts, pants, dresses, and accessories like hats and scarves."
    },
    {
        name:"Books",
        des:"This category includes printed and digital books of various genres, including fiction, non-fiction, educational, and more."
    },
    {
        name:"Home & Kitchen",
        des:" This category includes items related to home decor, kitchen appliances, utensils, and other household essentials."

    },
    {
        name:"Toys & Games",
        des:"This category includes toys for children, board games, puzzles, and other recreational items."
    },
    {
        name:"Beauty & Health",
        des:" This category includes beauty products like skincare items, makeup, and health-related products such as vitamins and supplements."
    },
    {
        name:"Sports & Outdoors",
        des:" This category includes beauty products like skincare items, makeup, and health-related products such as vitamins and supplements."
    },
    
];
Category.insertMany(categoryData).then((result)=>{
    console.log("Data of Category Saved!!");
}).catch((err)=>{
    console.log(err);
});
Item.insertMany(itemData).then((result)=>{
    console.log("Data of Items Saved!!");
}).catch((err)=>{
    console.log(err);
});

