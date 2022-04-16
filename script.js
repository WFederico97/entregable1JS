const saludar = () => {
    let nombre;

    do {
        nombre = prompt("Bienvenido, indicanos tu nombre: ");

    } while (nombre === "" || !isNaN(nombre));
    alert(`Hola ${nombre} !`);
};

const listaDeJuegos = ()=> {
    let auxJuego =  parseInt(
        prompt(
        `Que juego te gustaría comprar?\n 1)Valheim\n 2)TheWitcher goty\n 3)Minecraft\n 
        4)DOOM\n 5)Return To Castle Wolfenstein` 
        )
    );

    while(auxJuego > 5 || auxJuego < 1){
        auxJuego =  parseInt(
            prompt(
            `Que juego te gustaría comprar?\n 1)Valheim\n 2)TheWitcher goty\n 3)Minecraft\n 
            4)DOOM\n 5)Return To Castle Wolfenstein` 
            )
        );
    };

    let auxJuego2;
    switch(auxJuego){
        case 1:
            auxJuego2 = "Valheim"
        break;
        case 2:
            auxJuego2 = "The Witcher GOTY"
        break;
        case 3: 
            auxJuego2 = "Minecraft"
        break;
        case 4:
            auxJuego2 = "DOOM"
        break;
        case 5:
            auxJuego2 = "Return to Castle Wolfenstein"
        break;
    }
    return auxJuego2;
};

const VerificarPrecioJuego = (juegoElegido) => {
if(juegoElegido === "Valheim"){
    return 377.99 + " Con impuestos incluidos"
}
else if ( juegoElegido === "The Witcher GOTY" ) {
    return 806.39 + " Con impuestos incluidos"
}
else if (juegoElegido === "Minecraft"){
    return 2286.97 + " Con impuestos incluidos"
}
else if (juegoElegido==="DOOM"){
    return 3358.78 + " Con impuestos incluidos"
}
else if (juegoElegido==="Return to Castle Wolfenstein"){
    return 142.80 + " Con impuestos incluidos"
}

else {
    return "Ingrese un juego de la lista"
}

};
saludar();
let juegoElegido =  listaDeJuegos ();
let precioJuego = VerificarPrecioJuego(juegoElegido);
alert (`Usted lleva:\n${juegoElegido} por: ${precioJuego}`);