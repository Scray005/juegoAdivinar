let numeroGenerado = this.generarNumero();
console.log(numeroGenerado);
let intentos = 0;
let cont;
let auxNumeroGenerado = numeroGenerado.split("");

function checkInput() {
    var numero = document.getElementById("numero").value;
    if (numero.length === 4) {
    	encontrarNumero(numero); 
        var ul = document.getElementById("numerosIngresados");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(numero+"-"+cont));
        li.classList.add("list-group-item");
        ul.appendChild(li);
        document.getElementById("numero").value = ""; // Limpiar el campo de entrada después de agregar el número a la lista

    }
}

/*function checkInput() {
    var input = document.getElementById("numero");
    var value = input.value.trim();
    
    if (value.length === 4) {
        encontrarNumero(value); 
        input.value = ""; 
    }
}*/

function generarNumero(){
	return Math.floor(Math.random() * (9999 - 1000 + 1) + 1000).toString();
}

function encontrarNumero(numeroDigitado){
	intentos++;
	cont = 0;
	let auxNumeroDigitado = numeroDigitado.split("");
	for(let i = 0; i<auxNumeroGenerado.length;i++){
		if(auxNumeroGenerado[i] == numeroDigitado[i]){
			cont++;
		}
	}
	alert("Tiene " + cont + " coincidencias")
	if(cont == 4){
		alert("Felicitaciones!!! Lo lograste despues de " + intentos + " intentos")
	}
}

