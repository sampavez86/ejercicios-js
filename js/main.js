// Detector de palindromos
function comprobarPalindromo() {

     let textoOriginal = document.getElementById("textoUsuario").value;
    // quito los espacios y las tildes
     let textoLimpio = textoOriginal.toLowerCase().replaceAll(" ", "");
     textoLimpio = textoLimpio.replaceAll("á", "a")
                             .replaceAll("é", "e")
                             .replaceAll("í", "i")
                             .replaceAll("ó", "o")
                             .replaceAll("ú", "u")
                             .replaceAll("ü", "u");
    if (textoLimpio.length === 0) {
        document.getElementById("resultado").innerHTML = "<span>⚠️ Escribe una palabra o frase.</span>";
        return;
        }
    // copmaro con un for la letra inicial y la final hasta la mitad de la frase    
    let longitud = textoLimpio.length;
    let esPalindromo = true;
     for (let i = 0; i < Math.floor(longitud / 2); i++) {
        if (textoLimpio[i] !== textoLimpio[longitud - 1 - i]) {
            esPalindromo = false; 
            break; 
        }
    }
    //comparamos el resultado y lo envio al HTML
    let resultadoDiv = document.getElementById("resultado");
    if (esPalindromo) {
        resultadoDiv.innerHTML = "<strong>✅ ¡Sí, es un palíndromo!</strong>";
    } else {
        resultadoDiv.innerHTML = "<strong>❌ No es un palíndromo.</strong>";
    }
}
// numero mayor
function calcularMayor() {
    
    let num1 = parseFloat(document.getElementById("numero1").value);
    let num2 = parseFloat(document.getElementById("numero2").value);
    
    
    let resultadoDiv = document.getElementById("resultado-mayor");

    
    if (isNaN(num1) || isNaN(num2)) {
        resultadoDiv.innerHTML = "<span>⚠️ Por favor, ingresa ambos números de forma correcta.</span>";
        return; 
    }

   
    if (num1 > num2) {
        resultadoDiv.innerHTML = "<strong>🏆 El primer numero (${num1}) es el mayor.</strong>";
    } 
    else if (num2 > num1) {
        resultadoDiv.innerHTML = "<strong>🏆 El segundo nu  mero (${num2}) es el mayor.</strong>";
    } 
    else {
        resultadoDiv.innerHTML = "<strong>⚖️ Ambos números son exactamente iguales.</strong>";
    }
}

// Analizador de vocales
function analizarVocales() {
    let fraseOriginal = document.getElementById("fraseUsuario").value;
    
    let fraseLimpia = fraseOriginal.toLowerCase();

    fraseLimpia = fraseLimpia.replaceAll("á", "a")
                             .replaceAll("é", "e")
                             .replaceAll("í", "i")
                             .replaceAll("ó", "o")
                             .replaceAll("ú", "u")
                             .replaceAll("ü", "u");

    let vocales = ["a", "e", "i", "o", "u"];
    
    let vocalesEncontradas = "";

    for (let v = 0; v < vocales.length; v++) {
        let vocalActual = vocales[v];

        for (let f = 0; f < fraseLimpia.length; f++) {
            let letraFrase = fraseLimpia[f];

            if (letraFrase === vocalActual) {
                
                if (vocalesEncontradas.includes(vocalActual) === false) {
                    if (vocalesEncontradas === "") {
                        vocalesEncontradas = vocalActual;
                    } else {
                        vocalesEncontradas = vocalesEncontradas + ", " + vocalActual;
                    }
                }
            }
        }
    }
    let resultadoDiv = document.getElementById("resultado-vocales");

    if (vocalesEncontradas === "") {
        resultadoDiv.innerHTML = "<span>❌ No se encontraron vocales en la frase.</span>";
    } else {
        resultadoDiv.innerHTML = "<strong> " + vocalesEncontradas + "</strong>";
    }
}

// Contador de Vocales
function contarVocales() {
  
    let fraseOriginal = document.getElementById("fraseUsuario").value;
    let fraseLimpia = fraseOriginal.toLowerCase();

    fraseLimpia = fraseLimpia.replaceAll("á", "a")
                             .replaceAll("é", "e")
                             .replaceAll("í", "i")
                             .replaceAll("ó", "o")
                             .replaceAll("ú", "u")
                             .replaceAll("ü", "u");

    let contA = 0;
    let contE = 0;
    let contI = 0;
    let contO = 0;
    let contU = 0;
    let totalVocales = 0;

    // 3. TU LÓGICA: Recorremos toda la frase carácter por carácter
    for (let f = 0; f < fraseLimpia.length; f++) {
        let letraActual = fraseLimpia[f];

        // Evaluamos qué vocal es y le sumamos al contador correspondiente
        if (letraActual === "a") {
            contA = contA + 1;
            totalVocales = totalVocales + 1;
        } 
        else if (letraActual === "e") {
            contE = contE + 1;
            totalVocales = totalVocales + 1;
        } 
        else if (letraActual === "i") {
            contI = contI + 1;
            totalVocales = totalVocales + 1;
        } 
        else if (letraActual === "o") {
            contO = contO + 1;
            totalVocales = totalVocales + 1;
        } 
        else if (letraActual === "u") {
            contU = contU + 1;
            totalVocales = totalVocales + 1;
        }
    }

    document.getElementById("resultado-vocales").innerHTML = "<strong>🔢 Total: " + totalVocales + " vocales</strong>";
    document.getElementById("Vocal-a").innerHTML = "<span>Vocales a: <strong>" + contA + "</strong></span>";
    document.getElementById("Vocal-e").innerHTML = "<span>Vocales e: <strong>" + contE + "</strong></span>";
    document.getElementById("Vocal-i").innerHTML = "<span>Vocales i: <strong>" + contI + "</strong></span>";
    document.getElementById("Vocal-o").innerHTML = "<span>Vocales o: <strong>" + contO + "</strong></span>";
    document.getElementById("Vocal-u").innerHTML = "<span>Vocales u: <strong>" + contU + "</strong></span>";
}

// consulta AJAX
function ejecutarConsultaAJAX() {
    let urlDestino = document.getElementById("urlUsuario").value;

  
    let zonaEstado = document.getElementById("Estado-pagina");
    let zonaCabeceras = document.getElementById("cabeceras-pagina");
    let zonaContenido = document.getElementById("contenido-html");

    if (urlDestino.replaceAll(" ", "") === "") {
        zonaEstado.innerHTML = "<span>⚠️ Por favor, ingresa una URL.</span>";
        return;
    }

    zonaEstado.innerHTML = "<span>⏳ Consultando...</span>";
    zonaCabeceras.innerHTML = "<span>⏳ Cargando...</span>";
    zonaContenido.innerHTML = "<span>⏳ Cargando...</span>";

    let conexion = new XMLHttpRequest();
    conexion.open("GET", urlDestino, true);

    conexion.onreadystatechange = function() {
    if (conexion.readyState === 4) {
       
        let textoEstado = conexion.statusText;
        if (conexion.status === 200 && (!textoEstado || textoEstado === "")) {
            textoEstado = "OK";
        }
        
       
        zonaEstado.innerHTML = "<strong>Código: " + conexion.status + " - " + textoEstado + "</strong>";

        };

    conexion.onerror = function() {
        zonaEstado.innerHTML = "<strong style='color: red;'>❌ Error de red / Bloqueo CORS.</strong>";
        zonaCabeceras.innerText = "Error al leer cabeceras.";
        zonaContenido.innerText = "No se pudo conectar con el servidor.";
    };

    conexion.send();
}
}
