import expressapp from 'express'

const app = expressapp()

const PORT = process.env.PORT || 8000

import product_route from './Routes/product.js'



app.use(expressapp.json())

app.use("/",  (req, res, next)=>{
   // console.log(`Home Default`)
    next()
});



// middleware
app.use("/v1/product", product_route)


const start = async () =>{
    try {
        app.listen(PORT, ()=>{
            console.log(`I am connect with server ${PORT}`)
        })
    } catch (error) {
        console.log(`error  => ${error}`) 
    }
}

start()