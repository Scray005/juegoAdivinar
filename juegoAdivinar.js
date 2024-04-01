this.encontrarNumero();

function generarNumero(){
	return Math.floor(Math.random() * (9999 - 1000 + 1) + 1000).toString();
}

function encontrarNumero(numero){
	let numeroGenerado = this.generarNumero();
	console.log(numeroGenerado);
	let flagNumero = true;
	let cont;
	let intentos = 0;
	while(flagNumero){		
		let numeroDigitado = prompt("Digite un numero de 4 cifras");
		intentos++;
		cont = 0;
		if(numeroDigitado.length == 4){
			let auxNumeroGenerado = numeroGenerado.split("");
			let auxNumeroDigitado = numeroDigitado.split("");
			for(let i = 0; i<auxNumeroGenerado.length;i++){
				if(auxNumeroGenerado[i] == numeroDigitado[i]){
					cont++;
				}
			}
			alert("Tiene " + cont + " coincidencias")
			if(cont == 4){
				flagNumero = !flagNumero;
				alert("Felicitaciones!!! Lo lograste despues de " + intentos + " intentos")
			}
		}else{
			alert("No sabe leer o que?");
		}
	}
}
