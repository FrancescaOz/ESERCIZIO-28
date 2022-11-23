//////////////////////////////METODO PER IL CONTROLLO DEL JSON////////////////////////////
//Controllo il JSON per essere certo di che tipo di dati sto ricevendo
fetch('http://localhost:3000/vestiti').then(function (res) { return res.json(); }).then(function (data) {
    console.log(data);
});
//Creo la classe che dovrà manipolare i dati
var Inventario = /** @class */ (function () {
    function Inventario(_id, _codprod, _collezione, _capo, _modello, _quantita, _colore, _prezzoivaesclusa, _prezzoivainclusa, _disponibile, _saldo) {
        this.id = _id,
            this.codprod = _codprod,
            this.collezione = _collezione,
            this.capo = _capo,
            this.modello = _modello,
            this.quantita = _quantita,
            this.colore = _colore,
            this.prezzoivaesclusa = _prezzoivaesclusa,
            this.prezzoivainclusa = _prezzoivainclusa,
            this.disponibile = _disponibile,
            this.saldo = _saldo;
    }
    //calcolo il valore dello sconto
    Inventario.prototype.getsaldocapo = function () {
        return this.prezzoivainclusa * this.saldo / 100;
    };
    //ricavo il prezzo una volta decurtato lo sconto
    Inventario.prototype.getacquistocapo = function () {
        return this.prezzoivainclusa - this.getsaldocapo();
    };
    return Inventario;
}());
var array;
function getCapo() {
    fetch('http://localhost:3000/vestiti').then(function (response) {
        return response.json();
    }).then(function (capo) {
        array = capo;
        console.log(array); //stampa tutti gli elementi
        array.map(function (element) {
            var elementoCapo = new Inventario(element.id, element.codprod, element.collezione, element.capo, element.modello, element.quantita, element.colore, element.prezzoivaesclusa, element.prezzoivainclusa, element.disponibile, element.saldo);
            console.log(elementoCapo);
            console.log(elementoCapo.getacquistocapo());
        });
    });
}
console.log(getCapo());
////////////////////////////////METODO CON JSON LOCALE/////////////////////////////////////////////////////
var Abbigliamento = /** @class */ (function () {
    function Abbigliamento(_id, _codprod, _collezione, _capo, _modello, _quantita, _colore, _prezzoivaesclusa, _prezzoivainclusa, _disponibile, _saldo) {
        this.id = _id,
            this.codprod = _codprod,
            this.collezione = _collezione,
            this.capo = _capo,
            this.modello = _modello,
            this.quantita = _quantita,
            this.colore = _colore,
            this.prezzoivaesclusa = _prezzoivaesclusa,
            this.prezzoivainclusa = _prezzoivainclusa,
            this.disponibile = _disponibile,
            this.saldo = _saldo;
    }
    //calcolo il valore dello sconto
    Abbigliamento.prototype.getsaldocapo = function () {
        return this.prezzoivainclusa * this.saldo / 100;
    };
    //ricavo il prezzo una volta decurtato lo sconto
    Abbigliamento.prototype.getCapoAbbigliamento = function () {
        return this.prezzoivainclusa - this.getsaldocapo();
    };
    return Abbigliamento;
}());
var array;
function getCapoAbbigliamento() {
    fetch('http://localhost:3000/vestiti').then(function (response) {
        return response.json();
    }).then(function (capo) {
        array = capo;
        console.log(array); //stampa tutti gli elementi
        array.map(function (element) {
            var elementoCapo = new Abbigliamento(element.id, element.codprod, element.collezione, element.capo, element.modello, element.quantita, element.colore, element.prezzoivaesclusa, element.prezzoivainclusa, element.disponibile, element.saldo);
            console.log(elementoCapo);
            console.log(elementoCapo.getCapoAbbigliamento());
        });
    });
}
console.log(getCapoAbbigliamento());
