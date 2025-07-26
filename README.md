
# SecureSight 

SecureSight is a CCTV monitoring software where you can connect upto 3 CCTV feeds — computer vision models help detect certain activity on the feeds (e.g. unauthorised access, gun threats, etc).



### Demo

Local demo link - https://drive.google.com/file/d/19cpe5DTutCFW1WuXa82smDGub4mW0r2C/view?usp=sharing

Due to the limitations of Vercel with SQLite, API can be tested locally after running `npm run dev`.



### Features

- Camera & Incident Models with Relational Mapping using Prisma ORM
- Seed script which populates 3 cameras and 12 diverse incidents across multiple threat types (e.g., Unauthorised Access, Gun Threat)
- RESTful API Routes 
- Incident Player Panel & Incident List Panel



### Tech Decisions
- Used SQLite (dev.db) for local development due to Prisma support and quick setup.
- Backend APIs tested locally with Postman due to limitations with SQLite in Vercel.

### If I had more time
- Refactor frontend into more modular and readable components for better scalability.
- Implement optional timeline feature and integrate video instead of static image
- Create other pages for listing cameras
- Implement simple authentication for protecting routes

### Screenshots


<img width="1919" height="833" alt="Image" src="https://github.com/user-attachments/assets/6f0e8ab4-ce67-4972-b5ac-d66f4181fc25" />

<img width="1919" height="845" alt="Image" src="https://github.com/user-attachments/assets/d2f77631-8de9-409e-9073-0adce1f86c45" />

<img width="1919" height="858" alt="Image" src="https://github.com/user-attachments/assets/cffbff51-b9a3-4c82-b033-5ea47f74b156" />

<img width="1388" height="830" alt="Image" src="https://github.com/user-attachments/assets/0d9a8ae9-1e4d-4d76-92ae-b262fb2b917c" />

<img width="1366" height="767" alt="Image" src="https://github.com/user-attachments/assets/cd168688-95d1-468e-a901-cbcbcfeff315" />

<img width="1366" height="735" alt="Image" src="https://github.com/user-attachments/assets/3f2105d8-0e10-40a0-849a-b4251fc699ff" />

<img width="1357" height="864" alt="Image" src="https://github.com/user-attachments/assets/0c3b0ce3-384c-4c80-8b5d-252f63e43d5a" />

<img width="1362" height="663" alt="Image" src="https://github.com/user-attachments/assets/629cecd0-0ba1-4c22-97da-ddf161a75570" />




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
   - Clone your fork in your local machine `git clone <url>.git`
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

