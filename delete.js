const dbConnect = require('./mongodb')

// const deleteData = async () =>{
//     let data = await dbConnect()
//     let result = await data.deleteOne({
//         name:'Iphone 11 Pro'}
//     )
//     console.log(result)
//     if(result.acknowledged){
//         console.log(`${result.deletedCount} products were deleted`);
//     }
// }

// deleteData()

const deleteManyData = async () =>{
    let data = await dbConnect()
    let result = await data.deleteMany({
        name:'Iphone 11'}
    )
    console.log(result)
    if(result.acknowledged){
        console.log(`${result.deletedCount} products were deleted`);
    }
}

deleteManyData()