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
    // const user1 = await prisma.user.findMany({
    //    where:{
    //     OR:[
    //        { email:{
    //             startsWith:"Sally"
    //         }},{
    //             email:{
    //                 endsWith:"@test.com"
    //             }
    //         }
    //     ],
    //     age:{
    //         lt:100
    //         //less than
    //     },
    //     email:{
    //         // contains:"@test1"
    //          endsWith: "@test.com"
    //     }
    //         // name: { not : "Sally"}
    //         // email:"sally@test.com",
    //    } ,
    //    orderBy:{
    //     age:"desc"
    //    }
    // //    take:1

    // })

    // const preferences = await prisma.userPreferences.create({
    //     data:{
    //         emailUpdates: true
    //     }
    // })
    //update will update the first user it finds, and updateMany will update all users
    const user1 = await prisma.user.update({
        where:{
            email:"kyhle@test.com"
        },
        data:{
           userPreference:{
            connect:{
                   id:"4dec53da-1501-4908-a242-36b8d64d0891"
            }
           }
        }
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