import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
//allows you to interact with your code with prisma library, so you don't have to write raw sql

async function main (){
    await prisma.user.deleteMany()
    
    // ...write prisma client queries here
}
main()
//     .catch(e =>{
//         console.log(e.message)
//     })
//     .finally(async()=>{
//         await prisma.$disconnect()
//     })