
function funcionPredeterminada() {
    const formulario = document.getElementById('formulario');
    formulario.addEventListener('submit',(evento)=>{
        evento.preventDefault();
        console.log(evento);
        let valorPorHoraHTML = document.getElementById("valorPorHora");
        let valorPorHora = valorPorHoraHTML.value;
        
        let interfazHorasHTML = document.getElementById("interfazHoras");
        let valorInterfazPorHora = interfazHorasHTML.value;
        
        let interfazTestHTML = document.getElementById("interfazTest");
        let valorInterfazTest = interfazHorasHTML.value;
        
        let valorTotalHTML = document.getElementById("valorTotal");
        valorTotalHTML.value = 50;


    });
    
}
funcionPredeterminada();