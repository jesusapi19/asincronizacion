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

//4//
// async function saludar() {   
//     return 'Hola'; 
// } 
// console.log(saludar());
// saludar() 
// .then((texto) =>
// console.log(texto)); 	 

//la misma cadena de la parte 3//

// async function mostrarCostoEnvio(idUsuario) {   
//     try { 
//     const usuario = await obtenerUsuario(idUsuario);     
//     const pedidos = await obtenerPedidos(usuario);     
//     const detalle = await obtenerDetalle(pedidos[0]);     
//     const envio = await calcularEnvio(detalle);     
//     console.log('Costo de envío:', envio); 
// } catch (err) { 
// await console.log(err.message); 
// } 
// } 


//secuencial y paralelo//ejemplo//


// const esperar = (ms, valor) => 
// new Promise((resolve) => setTimeout(() => resolve(valor), ms)); 

// async function secuencial() { 
// console.time('Tiempo Secuencial');
// const clima = await esperar(1000, 'Soleado');   
// const noticias = await esperar(2000, '5 noticias');   
// console.log(clima, noticias); 
// console.timeEnd('Tiempo Secuencial');
// } 

// async function paralelo() { 
// console.time('Tiempo Paralelo');
// const [clima, noticias] = await Promise.all([    
// esperar(1000, 'Soleado'),    
// esperar(2000, '5 noticias'), 
// ]); 
// console.log(clima, noticias); 
// console.timeEnd('Tiempo Paralelo');
// } 

// async function probar() {
// console.log('--- Ejecutando Secuencial ---');
// await secuencial();

// console.log('\n--- Ejecutando Paralelo ---');
// await paralelo();
// }

// probar();

//trampa:await dentro de forEach//

// async function mal(ids) {
// ids.forEach(async (id) => {
//     const producto = await obtenerProducto(id);
//     console.log(producto.nombre);
// });
// console.log('Terminado');
// }

// async function bienSecuencial(ids) {
// for (const id of ids) {
//     const producto = await obtenerProducto(id);
//     console.log(producto.nombre);
// }
// console.log('Terminado');
// }

// async function bienParalelo(ids) {
// const productos = await Promise.all(ids.map((id) => obtenerProducto(id)));
// productos.forEach((p) => console.log(p.nombre));
// console.log('Terminado');
// }

//caso estuidio: empleados y salarios//
// const empleados = [ 
// { id: 1, nombre: 'Miguel' }, 
// { id: 2, nombre: 'Yenny' }, 
// { id: 3, nombre: 'MCamila' }, 
// ];  
// const salarios = [ 
// { id: 1, salario: 1000, idempleado: 1 }, 
// { id: 2, salario: 2000, idempleado: 2 }, 
// ];  
// module.exports = { empleados, salarios }; 

// const { empleados, salarios } = require('./datos'); 

// const obtenerEmpleado = (id, callback) => {   setTimeout(() => { 
// const empleado = empleados.find((e) => e.id === id);     if (!empleado) { 
// callback(new Error(`El empleado con id ${id} no existe`), null);       return; 
// } 
// callback(null, empleado); 
// }, 500); 
// };  
// const obtenerSalario = (empleado, callback) => {   setTimeout(() => { 
// const registro = salarios.find((s) => s.idempleado === empleado.id);     if (!registro) { 
// callback(new Error(`El empleado ${empleado.nombre} no tiene salario`), null);       return; 
// } 
// callback(null, registro.salario); 
// }, 500); 
// };  obtenerEmpleado(1, (err, empleado) => {   if (err) return console.log(err.message);   obtenerSalario(empleado, (err, salario) => {     if (err) return console.log(err.message); 
// console.log(`El empleado ${empleado.nombre} gana ${salario} dólares`);   }); 
// }); 

por ahora avanzando
