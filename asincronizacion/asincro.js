// console.log('1. Pido la pizza');
// setTimeout(() => {
// console.log('2. La pizza está lista');
// }, 2000); // ¡cero milisegundos!
// console.log('3. Mientras tanto, veo televisión');

// function recibirMensaje(callback) { 
// console.log('Esperando mensaje en WhatsApp...');
// setTimeout(() => { 
//     console.log('Mensaje recibido'); 
//     callback(); // se llama solo cuando el mensaje llegó 
// }, 3000); 
// }  
// function leerMensaje() { 
// console.log('Leyendo mensaje...'); 
// }  
// recibirMensaje(leerMensaje); console.log('Sigo usando el celular'); 

function dividir(a, b, callback) {
    setTimeout(() => {
        if (b === 0) {
            callback(new Error('No se puede dividir entre cero'), null);
            return;
        }
callback(null, a / b);
    }, 1000);
}

dividir(10, 2, (err, resultado)=> {
    if (err) {
        console.log('Error:', err.message);
        return;
    }
    console.log('Resultado:', resultado);
});