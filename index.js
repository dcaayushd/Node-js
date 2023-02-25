const dbConnect = require('./mongodb')

//// Use any one of the below: 

// dbConnect().then((res) => {
//     res.find({}).toArray().then((data) => {
//         console.warn(data)

//     })
// })

const result = async () =>{
    let data = await dbConnect()
   data = await data.find({name:'A30'}).toArray();
   console.warn(data)
}

result()

// console.warn(dbConnect())