
function funcionPredeterminada() {
    const formulario = document.getElementById('formulario');
    formulario.addEventListener('submit',(evento)=>{
        evento.preventDefault();
        let valorPorHoraHTML = document.getElementById("valorPorHora");
        let valorPorHora = valorPorHoraHTML.value;
        
        let interfazHorasHTML = document.getElementById("interfazHoras");
        let valorInterfazHoras = parseInt(interfazHorasHTML.value);

        let estructuraHorasHTML = document.getElementById("estructuraHoras");
        let valorEstructuraHoras = parseInt(estructuraHorasHTML.value);
 
        let estilizacionHorasHTML = document.getElementById("estilizacionHoras");
        let valorEstilizacionHoras = parseInt(estilizacionHorasHTML.value);
    
        let logicaJSHorasHTML = document.getElementById("logicaJSHoras");
        let valorLogicaJSHoras = parseInt(logicaJSHorasHTML.value);

        let integracionAPIHorasHTML = document.getElementById("integracionAPIHoras");
        let valorIntegracionAPIHoras = parseInt(integracionAPIHorasHTML.value);

        let otrasFuncionesHorasHTML = document.getElementById("otrasFuncionesHoras");
        let valorOtrasFuncionesHoras = parseInt(otrasFuncionesHorasHTML.value);

        let testHorasHTML = document.getElementById("testHoras");
        let valorTestHoras = parseInt(testHorasHTML.value);

      
        let valorTotalHTML = document.getElementById("valorTotal");
        valorTotalHTML.value = "$" + valorPorHora * (valorInterfazHoras + valorEstructuraHoras + valorEstilizacionHoras
            + valorLogicaJSHoras + valorIntegracionAPIHoras + valorOtrasFuncionesHoras + valorTestHoras
            );

    });
    
}
funcionPredeterminada();