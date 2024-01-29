let listaDeNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
console.log(listaDeNumeros);
console.log(listaDeNumeros.length);

function promedio(listaDeNumeros){
    let suma = 0;
    let i = 0;

    while(i<=listaDeNumeros.length){
        if(i < listaDeNumeros.length){
            suma+=listaDeNumeros[i];
            console.log(`La suma va en ${suma}`);
        }else {
            console.log("El promedio es:"+ suma/listaDeNumeros.length);
            return;
        }
        i++
    }
}
promedio(listaDeNumeros);
