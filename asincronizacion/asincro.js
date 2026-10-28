const esperar = (ms, mensaje) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(mensaje);
            resolve("Ya termine")
        }, ms);
    })
}

const main = async () => {
    try {
        console.log('Inicio del programa')
        await esperar(3000, "Primer timeout")
        await esperar(5, "Segundo timeout")
        await esperar(0, "Tercer timeout")
        console.log('Fin del programa');
    } catch (error) {
        console.log(error);
    }

}

main()