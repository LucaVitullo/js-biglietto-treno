console.log('js ok')

const Percorso = parseInt( prompt('Inserisci quanti chilometri vuoi percorrere') );
const EtàPasseggero = parseInt( prompt('Inserisci letà del passeggero') );
const PrezzoPerKm = 0.21;
const PrezzoBiglietto = PrezzoPerKm * Percorso;
//sconto 20%
let ScontoMin = (PrezzoBiglietto * 20 / 100 );

//sconto 40%
let ScontoOver65 = (PrezzoBiglietto * 40 / 100 );

//console.log('PrezzoBiglietto');

if(EtàPasseggero <= 18){
    console.log('Sei minorenne, hai uno sconto del 20%')
    

   let  PrezzoTotale = (PrezzoBiglietto - ScontoMin ).toFixed(2);

   document.getElementById("PrezzoTotale").innerHTML = "Il prezzo finale è: "+PrezzoTotale+"€ "

   }else if(EtàPasseggero >= 65){
    console.log('hai uno sconto del 40%')

    let  PrezzoTotale = (PrezzoBiglietto - ScontoOver65 ).toFixed(2);
    
    document.getElementById("PrezzoTotale").innerHTML = "Il prezzo finale è: "+PrezzoTotale+"€ "


    
    }else {
    console.log('il prezzo del biglietto è', PrezzoBiglietto + '€' );
    document.getElementById("PrezzoTotale").innerHTML = "Il prezzo finale è: "+PrezzoBiglietto+"€ "


 }

