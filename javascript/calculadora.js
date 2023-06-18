
function funcionPredeterminada() {
    const formulario = document.getElementById('formulario');
    formulario.addEventListener('submit', (evento) => {
      evento.preventDefault();
  
      let valorPorHoraHTML = document.getElementById("valorPorHora");
      let valorPorHora = parseFloat(valorPorHoraHTML.value) || 0;
  
      let interfazHorasHTML = document.getElementById("interfazHoras");
      let valorInterfazHoras = parseInt(interfazHorasHTML.value) || 0;
  
      let estructuraHorasHTML = document.getElementById("estructuraHoras");
      let valorEstructuraHoras = parseInt(estructuraHorasHTML.value) || 0;
  
      let estilizacionHorasHTML = document.getElementById("estilizacionHoras");
      let valorEstilizacionHoras = parseInt(estilizacionHorasHTML.value) || 0;
  
      let logicaJSHorasHTML = document.getElementById("logicaJSHoras");
      let valorLogicaJSHoras = parseInt(logicaJSHorasHTML.value) || 0;
  
      let integracionAPIHorasHTML = document.getElementById("integracionAPIHoras");
      let valorIntegracionAPIHoras = parseInt(integracionAPIHorasHTML.value) || 0;
  
      let otrasFuncionesHorasHTML = document.getElementById("otrasFuncionesHoras");
      let valorOtrasFuncionesHoras = parseInt(otrasFuncionesHorasHTML.value) || 0;
  
      let testHorasHTML = document.getElementById("testHoras");
      let valorTestHoras = parseInt(testHorasHTML.value) || 0;
  
      let valorTotalHTML = document.getElementById("valorTotal");
      valorTotalHTML.value = "$" + valorPorHora * (valorInterfazHoras + valorEstructuraHoras + valorEstilizacionHoras
        + valorLogicaJSHoras + valorIntegracionAPIHoras + valorOtrasFuncionesHoras + valorTestHoras);
    });
  }
  
  funcionPredeterminada();
  