function traiterValeur(traiterValeur : string | number){
    if (typeof traiterValeur === 'string'){
        return traiterValeur.length;
    } else {
        return traiterValeur * 2;
    }
}

console.log(traiterValeur("hello"));
console.log(traiterValeur(5));

