// JS => lENGUAJE
// ECMASCRIPT => STANDARD
//  TIPS:
//  cuando se actualiza el nav la consola se reinicia
// -- siempre usar const, a emnos que se necesite reasignar el valor.

// Realizar un script que permita sumar un array de números consecutivamente, de forma
// que se sume el primer número con el segundo y lo imprima por consola. Luego, tenemos
// que tomar este resultado y sumarle el tercer numero, y asi hasta terminar de recorrer el
// array:

const array = [1,2,3,4,5,6];

let acum = 0;
for (let i = 0; i < array.length; i++) {
    acum = acum + array[i];
    console.log(acum);
}







