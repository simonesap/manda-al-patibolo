// Script nomi random classe Boolean #58
let cognomi = ["Arpa","Ayadi","Bellucci","Biga","Borriello","Calia","Carbone","Carluccio","De Stefano","Di Benedetto","Di Pietro","Fergag","Fonzi","Magni","Maiorchini","Melotti","Moccia","Nifosi","Nocilla","Nuvoloni","Pavone","Pintaldi","Piva","Pontillo","Rosellini","Saputo","Spadaro","Sprinceana","Toselli","Wachnicki","Zaino","Natoli"];
let nomi = ["Modestino", "Abdelhamid" ,"Andrea","Alberto","Vincenzo","Gerardo" ,"Luca","Tancredi","Valentino","Ludovica","Davide","Nizar","Alessandro","Gabriele" ,"Stefano","Angelo","Caterina","Sergio","Clara","Matteo","Simone" ,"Noemi","Roberto","Andrea","Andrea","Simone" ,"Samuele" ,"Vera","Ivan","Michael","Simone Luca","Francesco"];

let list = [];

let i = 0; // la variabile che nel ciclo for è interna nel while sarà esterna

while ( i < nomi.length) {
    console.log(i)
    const nomeCognome = nomi[i] + " " + cognomi[i];
    console.log(nomeCognome);
    i++;
    // Adesso generiamo i dati all'interno di list ovvero l'array vuoto
    list.push(nomeCognome);
}

console.log(list);

// Passo 2: estrarre da questo array un numero casuale che è associato a un nome e cognome

// const nomeRandom = Math.floor(Math.random()*(list.length));
// let e = 0;
// console.log(list[nomeRandom]);

// Generare il risultato tramite il clock di un bottone

let bottone = document.getElementById('genera');

bottone.addEventListener('click',
    function() {
        const nomeRandom = Math.floor(Math.random()*(list.length));
        let risultato = document.getElementById('box-2').innerHTML = `<div style="text-trafsorm:uppercase;text-align:center;margin-top:20px;">il nome del malcapitato che andrà al patibolo è: ${list[nomeRandom]}</div>`;
    }
    
)


// while (e < list.length) {
//     const nomeRandom = Math.floor(Math.random()*(list.length));
//     console.log(nomeRandom);
//     e++;
// }