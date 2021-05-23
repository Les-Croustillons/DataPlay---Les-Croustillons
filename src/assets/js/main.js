'use strict';
import { gsap } from "gsap";

//animation bouton play 
gsap.fromTo(
    ".btnContainer",
    { x: -1000, opacity: 0 },
    { duration: 1, x: 100, opacity: 1 }
  );
  
// date en js footer

let date = new Date().getFullYear();
document.getElementById("annee").innerHTML = date;




let sections = document.querySelectorAll('.section');
let btnsRetour = document.querySelectorAll('.btnListe__el--retour');
let btnsSuivant = document.querySelectorAll('.btnListe__el--suivant');

let inputs = document.querySelectorAll('.input');

let btnFermer = document.querySelector('.headerListe__el--fermer');
let btnRecommencer = document.querySelector('.headerListe__el--recommencer');
let btnTerminer = document.querySelector('.btnListe__el--terminer');

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

    if(   p == c &&  //tout > 35 && tout < 65 
                p == a &&
                p == t &&
                p > 35 &&
                p < 65){
        prof = "L'indécis";
    }else if(   p == c &&  //tout <= 35
                p == a &&
                p == t &&
                p <= 35){
        prof = "Le faux gamer";
    }else if(   p == c &&  //tout >= 65
                p == a &&
                p == t &&
                p >= 65){
        prof = "Le polyvalent";
    }else if(   p > c &&  //performeur + aventurier
                p > t &&
                a > c &&
                a > t){
        prof = "Le stratège";
    }else if(   p > a &&  //performeur + coequipier
                p > t &&
                c > a &&
                c > t){
        prof = "Le leader";
    }else if(   p > c &&  //performeur + tueur
                p > a &&
                t > c &&
                t > a){
        prof = "Le traqueur";
    }else if(   c > p &&  //aventurier + coequipier
                c > t &&
                a > p &&
                a > t){
        prof = "Le rôliste";
    }else if(   t > c &&  //aventurier + tueur
                t > p &&
                a > c &&
                a > p){
        prof = "Le mercenaire";
    }else if(   c > p &&  //coequipier + tueur
                c > a &&
                t > p &&
                t > a){
        prof = "Le boss";
    }else if(   p > a &&  //performeur
                p > c &&
                p > t){
        prof = "Le performeur";
    }else if(   a > p &&  //aventurier
                a > c &&
                a > t){
        prof = "L'aventurier";
    }else if(   c > a &&  //coequipier
                c > p &&
                c > t){
        prof = "Le coéquipier";
    }else if(   t > p &&  //tueur
                t > c &&
                t > a){
        prof = "Le tueur";
    }

    return prof;
};

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
    console.log(profile);

    fetch('assets/json/donnees.json')
    .then((response) =>{
        return response.json();
    })
    .then((database) =>{

        console.log(database);

    })
    .catch((response) =>{
    console.log('data non trouvée => ' + response);
    });
});
