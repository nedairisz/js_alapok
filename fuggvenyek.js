
export function udvozles() {
    console.log("jó reggelt mindenkinek!")
}


export function elagazas(){
    //Írj kódot, ami a szám változóról eldönti, hogy 0 páros páratlan
    /* alt shift a */
    /* == a két értéket hasonlít össze */
    /* === a két értéket és a két típust is összehasonlítha */
    if (szam===0){ // "0"===0 az egyik szöveg a másik szám
        console.log(`a ${szam} valtozó értéke 0`)
    }else if (szam%2===0){ //"0"%2 --> 0%2 --> 0
        console.log(`a szam valtozó értéke páros`)
    }else if(szam%2===1){
        console.log(`a szam valtozó értéke páratlan`)
    }/* else{
        console.log(`a szam valtozó nem szám`)
    } */
}

export function ciklus1(){
    /* Írjuk ki 10x a konzolra, hogy "szép nap van!" */
    for (let index = 0; index < 10; index++) {
        console.log(`${index}. Szép nap van!`)
    }
}

export function ciklus2(){
    /* Írjuk ki 10x a konzolra, hogy "szép nap van!" while ciklussal*/ 
    let index=0;
    while(index<10){
        console.log(`${index}. Szép nap van!`);
        index++;
    }
}