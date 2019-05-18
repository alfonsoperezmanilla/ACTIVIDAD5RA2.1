function mensaje(){
	var cant=prompt("INGRESE EL TAMAÑO DE LA PIRAMIDE");
	var i, num;
	for (i = 1; i <= cant; i++) {
		for (num = 0; num < i; num++){
			document.write(i);
		}
		 document.write("<br>");
	}		
}