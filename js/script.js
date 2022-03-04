console.log('js ok')

const Percorso = prompt('Inserisci quanti chilometri vuoi percorrere');
const EtàPasseggero = prompt('Inserisci letà del passeggero');
const PrezzoPerKm = 0.21;
const PrezzoBiglietto = PrezzoPerKm * Percorso;
let PrezzoTotale;

//sconto 20%
let ScontoMin = (PrezzoBiglietto * 20 / 100 );

//sconto 40%
let ScontoOver65 = (PrezzoBiglietto * 40 / 100 );

console.log('PrezzoBiglietto');

if(EtàPasseggero <= 18){

PrezzoTotale = (PrezzoBiglietto - ScontoMin );

document.getElementById ("PrezzoTotale").innerHTML = "Il prezzo finale è: PrezzoTotale"

}