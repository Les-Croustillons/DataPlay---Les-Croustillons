'use strict';
import { gsap } from "gsap";


let sections = document.querySelectorAll('.section');
let btnsRetour = document.querySelectorAll('.btnRetour');
let btnsSuivant = document.querySelectorAll('.btnSuivant');

let inputs = document.querySelectorAll('.input');

let btnFermer = document.querySelector('.headerListe__el--fermer');
let btnRecommencer = document.querySelector('.headerListe__el--recommencer');
let btnTerminer = document.querySelector('.btnTerminer');

let profilEl = document.querySelector('.profile');
let descriptionEl = document.querySelector('.description');
let categoriesEl = document.querySelector('.categories');

let jeuxPc = document.querySelector('.jeux--pc');
let jeuxConsole = document.querySelector('.jeux--console');
let jeuxMobile = document.querySelector('.jeux--mobile');

let nSection = 0;
let nSectionSuivant = nSection + 1;
let nSectionPrecedent = nSection - 1;

let performeur = 0;
let aventurier = 0;
let coequipier = 0;
let tueur = 0;

let profile = "";


for(let btnSuivant of btnsSuivant){
    btnSuivant.addEventListener('click', (e) =>{
        sections[nSection].classList.add('section--hidden');
        sections[nSectionSuivant].classList.remove('section--hidden');

        let profileInput = inputs[nSection].getAttribute('data-profile');
        if(profileInput == 'performeur'){
            performeur = performeur + parseInt(inputs[nSection].value, 10);
        }else if(profileInput == 'aventurier'){
            aventurier = aventurier + parseInt(inputs[nSection].value, 10);
        }else if(profileInput == 'coequipier'){
            coequipier = coequipier + parseInt(inputs[nSection].value, 10);
        }else if(profileInput == 'tueur'){
            tueur = tueur + parseInt(inputs[nSection].value, 10);
        }
        
        nSection += 1;
        nSectionSuivant = nSection + 1;
        nSectionPrecedent = nSection - 1;
    });
};
for(let btnRetour of btnsRetour){
    btnRetour.addEventListener('click', (e) =>{
        sections[nSection].classList.add('section--hidden');
        sections[nSectionPrecedent].classList.remove('section--hidden');
        nSection -= 1;
        nSectionSuivant = nSection + 1;
        nSectionPrecedent = nSection - 1;
    });
};

function wichProfile(p, a, c, t){
    let prof = "";

    if(   p == c &&  //tout > 40 && tout < 65 
                p == a &&
                p == t &&
                p > 40 &&
                p < 65){
        prof = "l'ind??cis";
    }else if(   p <= 40 &&  //tout <= 40
                a <= 40 &&
                c <= 40 &&
                t <= 40){
        prof = "le faux gamer";
    }else if(   p >= 80 &&  //tout >= 80
                a >= 80 &&
                c >= 80 &&
                t >= 80){
        prof = "le polyvalent";
    }else if(   a == c &&  //performeur -
                a == t &&
                p < a){
        prof = "le mercenaire";
    }else if(   p == c &&  //aventurier -
                p == t &&
                a < p){
        prof = "le leader";
    }else if(   a == p &&  //coequipier -
                a == t &&
                c < a){
        prof = "le traqueur";
    }else if(   a == c &&  //tueur -
                a == p &&
                t < a){
        prof = "le r??liste";
    }else if(   p > a &&  //performeur (seul p > 40)
                p > c &&
                p > t &&
                p > 40 &&
                a <= 40 &&
                c <= 40 &&
                t <= 40){
        prof = "le performeur";
    }else if(   a > p &&  //aventurier (seul a > 40)
                a > c &&
                a > t &&
                a > 40 &&
                p <= 40 &&
                c <= 40 &&
                t <= 40){
        prof = "l'aventurier";
    }else if(   c > a &&  //coequipier (seul c > 40)
                c > p &&
                c > t &&
                c > 40 &&
                a <= 40 &&
                p <= 40 &&
                t <= 40){
        prof = "le co??quipier";
    }else if(   t > a &&  //tueur (seul t > 40)
                t > c &&
                t > p &&
                t > 40 &&
                a <= 40 &&
                c <= 40 &&
                p <= 40){
        prof = "le tueur"; 
    }else if(   p > a && //performeur
                p > c &&
                p > t){
        if(         a > c &&
                    a > t &&
                    a > (p - 20)){
            prof = "le strat??ge"    //performeur + aventurier
        }else if(   c > a &&
                    c > t &&
                    c > (p - 20)){
            prof = "le leader"      //performeur + coequipier
        }else if(   t > a &&
                    t > c &&
                    t > (p - 20)){
            prof = "le traqueur"    //performeur + tueur
        }else{
            prof = "le performeur"; //performeur
        }
    }else if(   a > p && //aventurier
                a > c &&
                a > t){
        if(         p > c &&
                    p > t &&
                    p > (a - 20)){
            prof = "le strat??ge"    //aventurier + performeur
        }else if(   c > p &&
                    c > t &&
                    c > (a - 20)){
            prof = "le r??liste"     //aventurier + coequipier
        }else if(   t > p &&
                    t > c &&
                    t > (a - 20)){
            prof = "le mercenaire"  //aventurier + tueur
        }else{
            prof = "l'aventurier"; //aventurier
        }
    }else if(   c > a && //coequipier
                c > p &&
                c > t){
        if(         a > p &&
                    a > t &&
                    a > (c - 20)){
            prof = "le r??liste"    //coequipier + aventurier
        }else if(   p > a &&
                    p > t &&
                    p > (c - 20)){
            prof = "le leader"      //coequipier + performeur
        }else if(   t > a &&
                    t > p &&
                    t > (c - 20)){
            prof = "le boss"    //coequipier + tueur
        }else{
            prof = "le co??quipier"; //coequipier
        }
    }else if(   t > a && //tueur
                t > c &&
                t > p){
        if(         a > c &&
                    a > p &&
                    a > (t - 20)){
            prof = "le mercenaire"    //tueur + aventurier
        }else if(   c > a &&
                    c > p &&
                    c > (t - 20)){
            prof = "le boss"      //tueur + coequipier
        }else if(   p > a &&
                    p > c &&
                    p > (t - 20)){
            prof = "le traqueur"    //tueur + performeur
        }else{
            prof = "le tueur"; //tueur
        }
    }

    return prof;
};

function createText(prof, datas){
    profilEl.innerHTML = prof;
    descriptionEl.innerHTML = `${datas.description}`;
    categoriesEl.innerHTML = `${datas.categoriesProfile}`;
};

function createJeuContainer(support, data, plateforme){
    let jeuContainer = document.createElement('a');
    jeuContainer.classList.add('jeux__el');
    jeuContainer.setAttribute('href', data.url);
    jeuContainer.setAttribute('target', '_blank');
    support.appendChild(jeuContainer);

    let jeuImg = document.createElement('img');
    jeuImg.classList.add('jeuImg');
    jeuImg.setAttribute('srcset', `${data.img}, ${data.img2x} 2x`);
    jeuImg.setAttribute('src', data.img);
    if(plateforme == "mobile"){
        jeuImg.setAttribute('alt', `Ic??ne du jeu ${data.nom}`)
    }else{
        jeuImg.setAttribute('alt', `Affiche du jeu ${data.nom}`);
    }
    jeuContainer.appendChild(jeuImg);

    let jeuNom = document.createElement('h5');
    jeuNom.classList.add('jeuNom');
    jeuNom.innerHTML = `Jeu : ${data.nom}`;
    jeuContainer.appendChild(jeuNom);

    let jeuCategories = document.createElement('h5');
    jeuCategories.classList.add('jeuCategorie');
    jeuCategories.innerHTML = `Type : ${data.categorie}`;
    jeuContainer.appendChild(jeuCategories);
};

function createGame(datas){
    for(let data of datas.console){
        createJeuContainer(jeuxConsole, data, "console");
    };
    for(let data of datas.mobile){
        createJeuContainer(jeuxMobile, data, "mobile");
    };
    for(let data of datas.pc){
        createJeuContainer(jeuxPc, data, "pc");
    };
};

function selectionData(datas, prof){
    if(prof == "l'ind??cis"){
        createText(prof, datas.extreme.indecis);
        createGame(datas.extreme);
    }else if(prof == "le faux gamer"){
        createText(prof, datas.extreme.fauxGamer);
        createGame(datas.extreme);
    }else if(prof == "le polyvalent"){
        createText(prof, datas.extreme.polyvalent);
        createGame(datas.extreme);
    }else if(prof == "le mercenaire"){
        createText(prof, datas.mercenaire);
        createGame(datas.mercenaire);
    }else if(prof == "le leader"){
        createText(prof, datas.leader);
        createGame(datas.leader);
    }else if(prof == "le traqueur"){
        createText(prof, datas.traqueur);
        createGame(datas.traqueur);
    }else if(prof == "le r??liste"){
        createText(prof, datas.roliste);
        createGame(datas.roliste);
    }else if(prof == "le strat??ge"){
        createText(prof, datas.stratege);
        createGame(datas.stratege);
    }else if(prof == "le boss"){
        createText(prof, datas.boss);
        createGame(datas.boss);
    }else if(prof == "le performeur"){
        createText(prof, datas.performeur);
        createGame(datas.performeur);
    }else if(prof == "l'aventurier"){
        createText(prof, datas.aventurier);
        createGame(datas.aventurier);
    }else if(prof == "le co??quipier"){
        createText(prof, datas.coequipier);
        createGame(datas.coequipier);
    }else if(prof == "le tueur"){
        createText(prof, datas.tueur);
        createGame(datas.tueur);
    }
};

fetch('assets/json/jeux.json')
.then((response) =>{
    return response.json();
})
.then((database) =>{
    console.log(database);
    btnTerminer.addEventListener('click', (e) =>{
        sections[nSection].classList.add('section--hidden');
        sections[nSectionSuivant].classList.remove('section--hidden');
        btnFermer.classList.add('headerListe__el--hidden');
        btnRecommencer.classList.remove('headerListe__el--hidden');
    
        nSection += 1;
        nSectionSuivant = nSection + 1;
        nSectionPrecedent = nSection - 1;
    
        let mPerformeur = Math.round(performeur / 3);
        let mAventurier = Math.round(aventurier / 3);
        let mCoequipier = Math.round(coequipier / 3);
        let mTueur = Math.round(tueur / 3);
    
        console.log('performeur : ' + mPerformeur);
        console.log('aventurier : ' + mAventurier);
        console.log('coequipier : ' + mCoequipier);
        console.log('tueur : ' + mTueur);
    
        profile = wichProfile(mPerformeur, mAventurier, mCoequipier, mTueur);
        console.log('RESULTAT : tu es ' + profile);

        selectionData(database, profile);
    });
})
.catch((response) =>{
    console.log('data non trouv??e => ' + response);
});


// pour tester rapidement :
// let p = prompt('performeur');
// console.log('performeur : ' + p);
// let a = prompt('aventurier');
// console.log('aventurier : ' + a);
// let c = prompt('coequipier');
// console.log('coequipier : ' + c);
// let t = prompt('tueur');
// console.log('tueur : ' + t);
// profile = wichProfile(p, a, c, t);
// console.log(profile);




//animation bouton play 
gsap.fromTo(
    ".btnContainer",
    { x: -1000, opacity: 0 },
    { duration: 1, x: 100, opacity: 1 }
);
    
// date en js footer
let date = new Date().getFullYear();
document.getElementById("annee").innerHTML = date;
