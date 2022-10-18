import 'dotenv/config';
import path from 'path';
import { fileURLToPath } from 'url';
import express, { json } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
//import session from 'express-session';
import exphbs from 'express-handlebars';

import connectionPromise from './config/connection.js';
import { getAllCours, getAllCoursUtilisateur, getAllTypeUtilisateur, getAllUtilisateur, getAllTournois, getOneSample } from './models/index.js';


const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
// Création du serveur web
let app = express();

const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);

app.set('view engine', 'handlebars');

// Ajout de middlewares
app.use(helmet());
app.use(cors());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'controllers')));

const router = express.Router();
// get all posts for homepage
app.get('/', async (req, res) => {
    res.status(200).json(await getAllTournois());
  });

  
  app.get('/api/getOneSample', async (request, response) => {
    //response.status(200).json(await getAllTournois());
    //<div>${JSON.stringify(await(await getAllTournois())[1])}</div>
   // <div>${await JSON.parse(JSON.stringify(await getAllTournois()))[1].type}</div>  
   //<div>${await JSON.parse(JSON.stringify(await getAllTournois()))[1].prenom}</div>
 let id  = 1;
    response.send(`
       <!DOCTYPE html>
       <html lang="en">
       <head>
         <meta charset="UTF-8">
         <title>Jeu video tournois</title>
       </head>
       <body>
       <h1>One Sample</h1>
       <div>
            <ul>
                <h4>Type utilisateur</h4>
                <li>id_type_utilisateur: ${await JSON.parse(JSON.stringify(await getOneSample()))[id].id_type_utilisateur}</li>
                <li>type: ${await JSON.parse(JSON.stringify(await getOneSample()))[id].type}</li>
                <br>
                <h4>Utilisateur</h4>
                <li>id_utilisateur: ${await JSON.parse(JSON.stringify(await getOneSample()))[id].id_utilisateur}</li>
                <li>id_type_utilisateur: ${await JSON.parse(JSON.stringify(await getOneSample ()))[id].id_type_utilisateur}</li>
                <li>courriel:${await JSON.parse(JSON.stringify(await getOneSample()))[id].courriel}</li>
                <li>mot_passe: ${await JSON.parse(JSON.stringify(await getOneSample()))[id].mot_passe}</li>
                <li>prenom: ${await JSON.parse(JSON.stringify(await getOneSample()))[id].prenom}</li>
                <li>nom:${await JSON.parse(JSON.stringify(await getOneSample()))[id].nom}</li>
                <br>
                <h4>Cours Utilisateur</h4>
                <li>id_utilisateur: ${await JSON.parse(JSON.stringify(await getOneSample()))[id].id_utilisateur}</li>
                <li>id_type_utilisateur: ${await JSON.parse(JSON.stringify(await getOneSample()))[id].id_cours}</li>
                <br>
                <h4>Cours</h4>
                <li>id_cours: ${await JSON.parse(JSON.stringify(await getAllTournois()))[id].id_cours}</li>
                <li>nom: ${await JSON.parse(JSON.stringify(await getOneSample()))[id].nom}</li>
                <li>description:${await JSON.parse(JSON.stringify(await getOneSample()))[id].description}</li>
                <li>capacite: ${await JSON.parse(JSON.stringify(await getOneSample()))[id].capacite}</li>
                <li>date_debut: ${await JSON.parse(JSON.stringify(await getOneSample()))[id].date_debut}</li>
                <li>nb_cours:${await JSON.parse(JSON.stringify(await getOneSample()))[id].nb_cours}</li>    
        
                </ul>
       </body>
       </html>
     `);
   
       //response.status(200).json(await getAllCoursUtilisateur());
       //response.status(200).json(await getAllTypeUtilisateur());
       //response.status(200).json(await getAllUtilisateur());
   });

  
// Programmation de routes
app.get('/api/allTournaments', async (request, response) => {
 //response.status(200).json(await getAllTournois());
 //<div>${JSON.stringify(await(await getAllTournois())[1])}</div>
// <div>${await JSON.parse(JSON.stringify(await getAllTournois()))[1].type}</div>  
//<div>${await JSON.parse(JSON.stringify(await getAllTournois()))[1].prenom}</div>

 response.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Jeu video tournois</title>
    </head>
    <body>
    <h1>All tournament</h1>
    <div>${JSON.stringify(await getAllTournois())}</div>
    </body>
    </html>
  `);

    //response.status(200).json(await getAllCoursUtilisateur());
    //response.status(200).json(await getAllTypeUtilisateur());
    //response.status(200).json(await getAllUtilisateur());
});

app.get('/api/AllCours', async (request, response) => {
    // response.status(200).json(await getAllCours());
     //response.status(200).json(await getAllCoursUtilisateur());
     //response.status(200).json(await getAllTypeUtilisateur());
     //response.status(200).json(await getAllUtilisateur());
     response.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Jeu video tournois</title>
    </head>
    <body>
    <h1>All Cours</h1>
    <div>${JSON.stringify(await getAllCours())}</div>
    </body>
    </html>
  `);
 });

 app.get('/api/AllCoursUtilisateur', async (request, response) => {
    // response.status(200).json(await getAllCours());
     //response.status(200).json(await getAllCoursUtilisateur());
     //response.status(200).json(await getAllTypeUtilisateur());
     //response.status(200).json(await getAllUtilisateur());
     response.send(`
     <!DOCTYPE html>
     <html lang="en">
     <head>
       <meta charset="UTF-8">
       <title>Jeu video tournois</title>
     </head>
     <body>
     <h1>All Cours Utilisateur</h1>
     <div>${JSON.stringify(await getAllCoursUtilisateur())}</div>
     </body>
     </html>
   `);
   
     
 });

 app.get('/api/AllTypeUtilisateur', async (request, response) => {
    // response.status(200).json(await getAllCours());
     //response.status(200).json(await getAllCoursUtilisateur());
    // response.status(200).json(await getAllTypeUtilisateur());
     //response.status(200).json(await getAllUtilisateur());
     response.send(`
     <!DOCTYPE html>
     <html lang="en">
     <head>
       <meta charset="UTF-8">
       <title>Jeu video tournois</title>
     </head>
     <body>
     <h1>All Type Utilisateur</h1>
     <div>${JSON.stringify(await getAllTypeUtilisateur())}</div>
     </body>
     </html>
   `);
 });

 app.get('/api/AllUtilisateur', async (request, response) => {
    // response.status(200).json(await getAllCours());
     //response.status(200).json(await getAllCoursUtilisateur());
     //response.status(200).json(await getAllTypeUtilisateur());
     //response.status(200).json(await getAllUtilisateur());
     response.send(`
     <!DOCTYPE html>
     <html lang="en">
     <head>
       <meta charset="UTF-8">
       <title>Jeu video tournois</title>
     </head>
     <body>
     <h1>All Utilisateurs</h1>
     <div>${JSON.stringify(await getAllUtilisateur())}</div>
     </body>
     </html>
   `);
 });


/*
app.post('/api/todo', async (request, response) =>{
    let id = await addTodo(request.body.texte);
    response.status(201).json({id: id});
});

app.patch('/api/todo', async (request, response) => {
    await checkTodo(request.body.id);
    response.status(200).end();
});
*/



// Démarrage du serveur
app.listen(process.env.PORT, () => {
    console.log(`🌍 Now listening on http://localhost:${process.env.PORT}`);
    console.log(`🌍 Now listening main page on http://localhost:${process.env.PORT}/api/allTournaments`);
    console.log(`🌍 Now listening main page on http://localhost:${process.env.PORT}/api/getOneSample`);
    console.log(`🌍 Now listening main page on http://localhost:${process.env.PORT}/api/AllCours`);
    console.log(`🌍 Now listening main page on http://localhost:${process.env.PORT}/api/AllCoursUtilisateur`);
    console.log(`🌍 Now listening main page on http://localhost:${process.env.PORT}/api/AllTypeUtilisateur`);
    console.log(`🌍 Now listening main page on http://localhost:${process.env.PORT}/api/AllUtilisateur`);
  });
