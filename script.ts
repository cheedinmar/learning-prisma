import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
// const prisma = new PrismaClient({log:["query"]})
//we can log query
//allows you to interact with your code with prisma library, so you don't have to write raw sql

async function main() {
    // await prisma.user.deleteMany()
    // const user = await prisma.user.create({
    //     data: {
    //         name: "Kyle",
    //         email: "kyhle@test.com",
    //         age:25,
    //         userPreference:{
    //             create:{
    //                 emailUpdates:true
    //             }
    //         }
    //     },
    //     select :{
    //         name:true,
    //         userPreference:{
    //             select:{
    //                 id:true
    //             }
    //         }
    //     }
    //     // include:{
    //     //     userPreference: true
    //     // }
    //     //you can only do select || incude, can't do both at the same time
    // })
    // const users = await prisma.user.createMany({
    //     data: [
    //         {
    //             name: "Sally",
    //             email: "sal7lly222@test.com",
    //             age: 3733,

    //         }],
       
        // include:{
        //     userPreference: true
        // }
        //you can only do select || incude, can't do both at the same time
    // })
    //finUnique to find  properties with unique attributes
    const user1 = await prisma.user.findMany({
       where:{
            name: "Sally"
            // email:"sally@test.com",
       } ,
       orderBy:{
        age:"desc"
       }
    //    take:1

    })
    console.log(user1)
    // ...write prisma client queries here
}
main()
//     .catch(e =>{
//         console.log(e.message)
//     })
//     .finally(async()=>{
//         await prisma.$disconnect()
//     })