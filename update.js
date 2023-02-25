const dbConnect = require('./mongodb')

// const updateData = async () => {
//     let data = await dbConnect();
//     let result = await data.updateOne(
//         { name: '10 R' },
//         {
//             $set: {
//                 name: '10 R',
//                 price: 649
//             }
//         }
//     )
//     console.log(result)
// }
// updateData()

const updateManyData = async() =>{
    let data = await dbConnect();
    let result = await data.updateMany(
        { brand: 'Google' },
        {
            $set: {
                name: 'Pixel 7',
                price: 649
            }
        }
    )
    console.log(result)
}

updateManyData()