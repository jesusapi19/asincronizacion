//1//
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

//2//

// function dividir(a, b, callback) {
//     setTimeout(() => {
//         if (b === 0) {
//             callback(new Error('No se puede dividir entre cero'), null);
//             return;
//         }
// callback(null, a / b);
//     }, 1000);
// }

// dividir(10, 2, (err, resultado)=> {
//     if (err) {
//         console.log('Error:', err.message);
//         return;
//     }
//     console.log('Resultado:', resultado);
// });

// obtenerUsuario(1, (err, usuario) => {   
//     if (err) return console.log(err.message);   
// obtenerPedidos(usuario, (err, pedidos) => {     
//     if (err) return
// console.log(err.message);    
// obtenerDetalle(pedidos[0], (err, detalle) => {      
// if
// (err) return console.log(err.message);      
// calcularEnvio(detalle, (err, envio) => { 
// if (err) return console.log(err.message);         
// console.log('Costo de envío:',
// envio); 
// }); 
// }); 
// }); 
// }); 

//3//

// function dividir(a, b) {
//     return new Promise((resolve, reject) =>
//     {  setTimeout(() => {        
//         if (b === 0) {

//             reject(new Error('No se puede dividir entre cero'));
//         } 
//         else {
//             resolve(a / b);
//         }
//     }, 1000); 
// } );
// }

// dividir(10, 0)
// .then((resultado) => console.log('Resultado:', resultado))
// .catch((err) => console.log('Error:', err.message))
// .finally(() => console.log('Operacion terminada'));

//varias promesas //

// const esperar = (ms, valor) => 
// new Promise((resolve) => setTimeout(() => resolve(valor), ms)); 

// console.time('total'); 
// Promise.all([esperar(2000, 'A'), esperar(1000, 'B'), esperar(1500, 'C')]) 
// .then((resultados) => { 
//     console.log(resultados); 
//     console.timeEnd('total'); 
// });


//ejemplo//
// obtenerUsuario(1)
// .then((usuario) => {
//     obtenerPedidos(usuario); 
// })
// .then((pedidos) => console.log(pedidos));