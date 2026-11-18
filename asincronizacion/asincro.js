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

// datos.js
// const empleados = [
// { id: 1, nombre: 'Miguel' },
// { id: 2, nombre: 'Yenny' },
// { id: 3, nombre: 'MCamila' },
// ];

// const salarios = [
// { id: 1, salario: 1000, idempleado: 1 },
// { id: 2, salario: 2000, idempleado: 2 },
// ];

// const cargos = [
// { id: 1, nombre: 'Instructor', idempleado: 1 },
// { id: 2, nombre: 'Coordinadora', idempleado: 2 },
// ];

// module.exports = { empleados, salarios, cargos };

// // caso-estudio.js
// const { empleados, salarios, cargos } = require('./datos');

// console.log('--- VERSIÓN 1: CALLBACKS ---');
// const obtenerEmpleadoCb = (id, callback) => {
// setTimeout(() => {
// const empleado = empleados.find((e) => e.id === id);
// if (!empleado) return callback(new Error(`El empleado con id ${id} no existe`), null);
// callback(null, empleado);
// }, 500);
// };

// const obtenerSalarioCb = (empleado, callback) => {
// setTimeout(() => {
// const registro = salarios.find((s) => s.idempleado === empleado.id);
// if (!registro) return callback(new Error(`El empleado ${empleado.nombre} no tiene salario`), null);
// callback(null, registro.salario);
// }, 500);
// };

// const obtenerCargoCb = (empleado, callback) => {
// setTimeout(() => {
// const registro = cargos.find((c) => c.idempleado === empleado.id);
// if (!registro) return callback(new Error(`El empleado ${empleado.nombre} no tiene cargo`), null);
// callback(null, registro.nombre);
// }, 500);
// };

// obtenerEmpleadoCb(1, (err, empleado) => {
// if (err) return console.log(err.message);
// obtenerCargoCb(empleado, (err, cargo) => {
// if (err) return console.log(err.message);
// obtenerSalarioCb(empleado, (err, salario) => {
// if (err) return console.log(err.message);
// console.log(`El empleado ${empleado.nombre}, ${cargo}, gana ${salario} dólares`);
// });
// });
// });


// //PROMESAS
// const obtenerEmpleado = (id) =>
// new Promise((resolve, reject) => {
// setTimeout(() => {
// const empleado = empleados.find((e) => e.id === id);
// if (!empleado) reject(new Error(`El empleado con id ${id} no existe`));
// else resolve(empleado);
// }, 500);
// });

// const obtenerSalario = (empleado) =>
// new Promise((resolve, reject) => {
// setTimeout(() => {
// const registro = salarios.find((s) => s.idempleado === empleado.id);
// if (!registro) reject(new Error(`El empleado ${empleado.nombre} no tiene salario`));
// else resolve(registro.salario);
// }, 500);
// });

// const obtenerCargo = (empleado) =>
// new Promise((resolve, reject) => {
// setTimeout(() => {
// const registro = cargos.find((c) => c.idempleado === empleado.id);
// if (!registro) reject(new Error(`El empleado ${empleado.nombre} no tiene cargo`));
// else resolve(registro.nombre);
// }, 500);
// });

// setTimeout(() => {
// console.log('\n--- VERSIÓN 2: PROMESAS ---');
// let empEnc, cargoEnc;
// obtenerEmpleado(1)
// .then((emp) => {
// empEnc = emp;
// return obtenerCargo(emp);
// })
// .then((cargo) => {
// cargoEnc = cargo;
// return obtenerSalario(empEnc);
// })
// .then((salario) => {
// console.log(`El empleado ${empEnc.nombre}, ${cargoEnc}, gana ${salario} dólares`);
// })
// .catch((err) => console.log(err.message));
// }, 1000);


// // ASYN / AWAIT
// const mostrarInformacion = async (id) => {
// try {
// const empleado = await obtenerEmpleado(id);
// const cargo = await obtenerCargo(empleado);
// const salario = await obtenerSalario(empleado);
// console.log(`El empleado ${empleado.nombre}, ${cargo}, gana ${salario} dólares`);
// } catch (err) {
// console.log(err.message);
// }
// };

// setTimeout(async () => {
// console.log('\n--- VERSIÓN 3: ASYNC/AWAIT ---');
// await mostrarInformacion(1); 
// await mostrarInformacion(3); 
// await mostrarInformacion(4); 
// }, 2000);




// //EJERCICIO 5
// const ingredientes = [
// { nombre: 'Pollo', tiempo: 1500 },
// { nombre: 'Arroz', tiempo: 1000 },
// { nombre: 'Verduras', tiempo: 1200 },
// { nombre: 'Salsa', tiempo: 800 },
// { nombre: 'Especias', tiempo: 500 },
// ];

// const cocineros = [
// { nombre: 'Laura', ingredientes: ['Pollo', 'Especias'] },
// { nombre: 'Andrés', ingredientes: ['Arroz'] },
// { nombre: 'Sofía', ingredientes: ['Verduras', 'Salsa'] },
// ];

// const prepararIngrediente = (nombreIngrediente) => {
// return new Promise((resolve, reject) => {
// const ing = ingredientes.find((i) => i.nombre === nombreIngrediente);
// setTimeout(() => {

// resolve(ing.nombre);
// }, ing.tiempo);
// });
// };

// const cocinar = async (cocinero) => {
// let tiempoTotal = 0;
// for (const nombreIng of cocinero.ingredientes) {
// const ingObj = ingredientes.find(i => i.nombre === nombreIng);
// tiempoTotal += ingObj.tiempo;
// await prepararIngrediente(nombreIng);
// }
// return `${cocinero.nombre} terminó: ${cocinero.ingredientes.join(', ')} (${tiempoTotal} ms)`;
// };

// async function ejecutarRestaurante() {
// console.log('--- EJERCICIO 5: PEDIDO EN EL RESTAURANTE ---');
// console.time('total');
// try {
// const resultados = await Promise.all(cocineros.map((c) => cocinar(c)));
// console.log('Pedido listo:', resultados);
// } catch (err) {
// console.log('Error en el pedido:', err.message);
// }
// console.timeEnd('total');
// }

// ejecutarRestaurante();


// //RETO INTEGRADOR: VENTAS Y ARTÍCULOS
// const ventas = [
// { id: 1, idarticulo: 101, cantidad: 2, fecha: '2024-08-01' },
// { id: 2, idarticulo: 102, cantidad: 1, fecha: '2024-08-01' },
// { id: 3, idarticulo: 103, cantidad: 3, fecha: '2024-08-02' },
// { id: 4, idarticulo: 101, cantidad: 4, fecha: '2024-08-02' },
// { id: 5, idarticulo: 101, cantidad: 1, fecha: '2024-08-03' },
// { id: 6, idarticulo: 104, cantidad: 1, fecha: '2024-08-03' },
// { id: 7, idarticulo: 102, cantidad: 7, fecha: '2024-08-04' },
// { id: 8, idarticulo: 101, cantidad: 1, fecha: '2024-08-04' },
// { id: 9, idarticulo: 102, cantidad: 1, fecha: '2024-08-05' },
// { id: 10, idarticulo: 103, cantidad: 2, fecha: '2024-08-05' },

// { id: 11, idarticulo: 105, cantidad: 6, fecha: '2024-08-06' }
// ];

// const articulos = [
// { idarticulo: 101, nombre: 'Artículo A' },
// { idarticulo: 102, nombre: 'Artículo B' },
// { idarticulo: 103, nombre: 'Artículo C' },
// { idarticulo: 104, nombre: 'Artículo D' },
// ];

// const obtenerVentas = () =>
// new Promise((resolve) => {
// setTimeout(() => resolve(ventas), 500);
// });

// const obtenerArticulo = (idarticulo) =>
// new Promise((resolve, reject) => {
// setTimeout(() => {
// const art = articulos.find((a) => a.idarticulo === idarticulo);
// if (!art) {
// reject(new Error(`No se encontró el artículo ${idarticulo}`));
// } else {
// resolve(art);
// }
// }, 300);
// });

// async function generarReporte() {
// setTimeout(async () => {
// console.log('\n--- RETO INTEGRADOR: REPORTE DE VENTAS ---');
// const todasLasVentas = await obtenerVentas();


// const ventasPorArticulo = todasLasVentas.reduce((acc, venta) => {
// acc[venta.idarticulo] = (acc[venta.idarticulo] || 0) + venta.cantidad;
// return acc;
// }, {});


// const filtradosOrdenados = Object.entries(ventasPorArticulo)
// .map(([idarticulo, total]) => ({ idarticulo: Number(idarticulo), total }))
// .filter((item) => item.total > 3)
// .sort((a, b) => b.total - a.total);


// const promesasArticulos = filtradosOrdenados.map(async (item) => {
// const articulo = await obtenerArticulo(item.idarticulo);
// return { ...articulo, total: item.total };
// });

// const resultados = await Promise.allSettled(promesasArticulos);

// resultados.forEach((res) => {
// if (res.status === 'fulfilled') {
// const { nombre, idarticulo, total } = res.value;
// console.log(`${nombre} (id=${idarticulo}) vendió ${total} unidades`);
// } else {
// console.log(res.reason.message);
// }
// });
// }, 4000);
// }

// generarReporte();