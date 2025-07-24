const { PrismaClient } = require('../src/generated/prisma');
const prisma = new PrismaClient();

const getRandomNum=(range)=>{
    return Math.floor(Math.random()*range);
}

async function main(){
    // creating 3 cameras as mentioned
    await prisma.camera.createMany({
        data: [
            {
                name: "Shop Floor A", location: "First Floor"
            },
            {
                name: "Vault", location: "Basemenet"
            },
            {
                name: "Entrance", location: "Ground Floor"
            }
        ]
    });

    const cameras = await prisma.camera.findMany();
    const now = new Date();
    const millisec = 1000*60*60;

    // populating incidents
    for(let i=0;i<12;i++){
        await prisma.incident.create({
            data:{
                cameraId: cameras[getRandomNum(3)].id,
                type: ["Gun Threat", "Face Recognized","Unauthorized Access"][getRandomNum(3)],
                tsStart: new Date(now.getTime() - millisec*(i+1)), // 1 hr gap
                tsEnd: new Date(now.getTime() - millisec*i),
                thumbnailUrl: `/thumbnail/${i+1}.jpg`,
            }
        })
    }
}

main().then(()=> console.log("Seeding complete"))
.catch((e)=> console.log(`Error while seeding: ${e}`))
.finally(()=> prisma.$disconnect());