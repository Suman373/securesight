
# SecureSight 

SecureSight is a CCTV monitoring software where you can connect upto 3 CCTV feeds — computer vision models help detect certain activity on the feeds (e.g. unauthorised access, gun threats, etc).



### Demo

[Try it out here](https://livewave-v1.vercel.app)



### Features

- Camera & Incident Models with Relational Mapping using Prisma ORM
- Seed script which populates 3 cameras and 12 diverse incidents across multiple threat types (e.g., Unauthorised Access, Gun Threat)
- RESTful API Routes 
- Incident Player Panel & Incident List Panel




### Screenshots




### File structure
```
my-project/
├── public/
│   └── thumbnails/
│       ├── 1.png
│       ├── 2.jpg
│       └── ...
├── prisma/
│   ├── schema.prisma
│   └── seed.js
├── src/
│   ├── app/
│   │   ├── page.jsx
│   │   └── layout.jsx
│   ├── api/
│   │   ├── cameras/
│   │   │   └── route.js
│   │   └── incidents/
│   │       ├── route.js
│   │       └── [id]/
│   │           └── resolve/
│   │               └── route.js
│   ├── components/
│   │   ├── navbar
|   |     └── index.jsx
│   │   └── ...
│   ├── lib/
│   │   └── prisma.js
│   └── utils/
│       └── api.js
|       └── constants.js
├── .env
├── package.json
├── tsconfig.json
└── README.md
```

### Environment Variables

To run this project, you will need to add the following environment variable in the root of the project directory

`DATABASE_URL` - file:./dev.db
### Local development

 Getting started with project normally
   - Fork the repository
   - Clone your fork in your local machine
    `git clone <url>.git `
   - Run `npm install` inside the folders containing package.json file
   - To run the client `npm run dev`
   - Generate prisma client `npx prisma generate`
   - Push the schema to tables `npx prisma db push`
   - Seed the local database `npx prisma db seed`
   - Open prisma studio to view and edit tables `npx prisma studio`

### Authors

- [@suman373](https://www.github.com/suman373)


### Feedback

For feedbacks reach out to me at iamsuman898@gmail.com

