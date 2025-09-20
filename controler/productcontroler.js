import Product from "../moduls/product.js";

export function getProducts(req,res){
    Product.find().then(
        (data)=>{
            res.json(data)
        }
    )
}
export function saveProduct(req, res){
    if(req.user == null){  //middleware ekata user eka naththam
        res.status(403).json({
            message : "Unauthorized user"
        })
        return
    
    }

    if(req.user.role != "admin"){
        res.status(403).json({// adminlata pamanak access denna
            message : "Only admin can add products"
        })
        return
    }
 
 const product = new Product (
    {
    name : req.body.name,
    price : req.body.price,
    description : req.body.description
    
    }
)
product.save().then(()=>{
    res.json({
        message : "product added successfully"
    })
}).catch(()=>{
    res.json({
        message : "Error in adding product"
    })

}) 
}