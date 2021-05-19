'use strict';

let sections = document.querySelectorAll('.section');
let btnsRetour = document.querySelectorAll('.btnListe__el--retour');
let btnsSuivant = document.querySelectorAll('.btnListe__el--suivant');

let inputs = document.querySelectorAll('.input');

let btnTerminer = document.querySelector('.btnListe__el--terminer');

let nSection = 0;
let nSectionSuivant = nSection + 1;
let nSectionPrecedent = nSection - 1;

let performeur = 0;
let aventurier = 0;
let coequipier = 0;
let tueur = 0;

for(let input of inputs){
    input.addEventListener('input', (e) =>{
        btnsSuivant[nSection].removeAttribute('disabled');
    });
};

for(let btnSuivant of btnsSuivant){
    btnSuivant.addEventListener('click', (e) =>{
        sections[nSection].classList.add('section--hidden');
        sections[nSectionSuivant].classList.remove('section--hidden');

        let profileInput = inputs[nSection].getAttribute('data-profile');
        if(profileInput == 'performeur'){
            performeur = performeur + parseInt(inputs[nSection].value, 10);
            console.log(performeur);
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

btnTerminer.addEventListener('click', (e) =>{
    sections[nSection].classList.add('section--hidden');
    sections[nSectionSuivant].classList.remove('section--hidden');
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
});