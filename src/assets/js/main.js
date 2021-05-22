'use strict';

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

let nSection = 0;
let nSectionSuivant = nSection + 1;
let nSectionPrecedent = nSection - 1;

let performeur = 0;
let aventurier = 0;
let coequipier = 0;
let tueur = 0;

let profile = "";



// for(let input of inputs){
//     input.addEventListener('input', (e) =>{
//         btnsSuivant[nSection].removeAttribute('disabled');
//     });
// };

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
        prof = "l'indécis";
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
        prof = "le rôliste";
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
        prof = "le coéquipier";
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
            prof = "le stratège"    //performeur + aventurier
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
            prof = "le stratège"    //aventurier + performeur
        }else if(   c > p &&
                    c > t &&
                    c > (a - 20)){
            prof = "le rôliste"     //aventurier + coequipier
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
            prof = "le rôliste"    //coequipier + aventurier
        }else if(   p > a &&
                    p > t &&
                    p > (c - 20)){
            prof = "le leader"      //coequipier + performeur
        }else if(   t > a &&
                    t > p &&
                    t > (c - 20)){
            prof = "le boss"    //coequipier + tueur
        }else{
            prof = "le coéquipier"; //coequipier
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

function selectionData(datas, prof){
    if(prof == "l'indécis"){
        createText(prof, datas.extreme.indecis);
    }else if(prof == "le faux gamer"){
        createText(prof, datas.extreme.fauxGamer);
    }else if(prof == "le polyvalent"){
        createText(prof, datas.extreme.polyvalent);
    }else if(prof == "le mercenaire"){
        createText(prof, datas.mercenaire);
    }else if(prof == "le leader"){
        createText(prof, datas.leader);
    }else if(prof == "le traqueur"){
        createText(prof, datas.traqueur);
    }else if(prof == "le rôliste"){
        createText(prof, datas.roliste);
    }else if(prof == "le stratège"){
        createText(prof, datas.stratege);
    }else if(prof == "le boss"){
        createText(prof, datas.boss);
    }else if(prof == "le performeur"){
        createText(prof, datas.performeur);
    }else if(prof == "l'aventurier"){
        createText(prof, datas.aventurier);
    }else if(prof == "le coéquipier"){
        createText(prof, datas.coequipier);
    }else if(prof == "le tueur"){
        createText(prof, datas.tueur);
    }
};

fetch('assets/json/jeux.json')
.then((response) =>{
    return response.json();
})
.then((database) =>{
    // console.log(database[0].performeur.description);
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
    
        // console.log(database.performeur);
        // console.log(database.stratège.mobile[0].img);
        // let image = document.createElement('img');
        // image.setAttribute('src', database.stratège.mobile[0].img);
        // document.querySelector('.jeux--mobile').appendChild(image);

        selectionData(database, profile);
    });
})
.catch((response) =>{
    console.log('data non trouvée => ' + response);
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
