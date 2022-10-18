import promesseConnexion from '../config/connection.js';

let tableCours = "cours";
let tableCours_utilisateur = "cours_utilisateur";
let tableType_utilisateur = "type_utilisateur";
let tableUtilisateur = "utilisateur";

// get all live tournament stats
export const getAllTournois = async () => {
    let connexion = await promesseConnexion;

    let resultat = await connexion.all(`SELECT *  
    FROM ${tableUtilisateur} u 
    JOIN ${tableType_utilisateur} t 
    ON u.id_utilisateur = t.id_type_utilisateur
    JOIN ${tableCours_utilisateur} cu
    ON u.id_utilisateur= cu.id_utilisateur
    JOIN ${tableCours}  c
    ON cu.id_cours = c.id_cours`);

    return resultat;
};

export const getOneSample = async () => {
    let connexion = await promesseConnexion;

    let resultat = await connexion.all(`SELECT *  
    FROM ${tableUtilisateur} u 
    JOIN ${tableType_utilisateur} t 
    ON u.id_utilisateur = t.id_type_utilisateur
    JOIN ${tableCours_utilisateur} cu
    ON u.id_utilisateur= cu.id_utilisateur
    JOIN ${tableCours}  c
    ON cu.id_cours = c.id_cours`);

    return resultat;
};

export const getAllCours = async () => {
    let connexion = await promesseConnexion;

    let resultat = await connexion.all(`SELECT * FROM ${tableCours}`);

    return resultat;
};

export const getAllCoursUtilisateur = async () => {
    let connexion = await promesseConnexion;

    let resultat = await connexion.all(`SELECT * FROM ${tableCours_utilisateur}`);

    return resultat;
};

export const getAllTypeUtilisateur = async () => {
    let connexion = await promesseConnexion;

    let resultat = await connexion.all(`SELECT * FROM ${tableType_utilisateur}`);

    return resultat;
};

export const getAllUtilisateur = async () => {
    let connexion = await promesseConnexion;

    let resultat = await connexion.all(`SELECT * FROM ${tableUtilisateur}`);

    return resultat;
};