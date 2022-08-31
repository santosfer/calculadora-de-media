function Converter(){
    var valorMedia = parseFloat(document.getElementById("valor").value)
    var valorMedia1 = parseFloat(document.getElementById("valor1").value)
    var valorMedia2 = parseFloat(document.getElementById("valor2").value)
    var valorMedia3 = parseFloat(document.getElementById("valor3").value)
     
    var valorMediaFinal = (valorMedia + valorMedia1 + valorMedia2 +valorMedia3) / 4
    var valorMediaFinalTex = document.getElementById("mediaFinal")
    
    if(valorMediaFinal >= 7){
    valorMediaFinalTex.innerHTML = " Sua média é " + valorMediaFinal + " você foi aprovado!"
      valorMediaFinalTex.style.color = '#006400'
  } else {
    valorMediaFinalTex.innerHTML = " Sua média é " + valorMediaFinal + " você reprovou"
    valorMediaFinalTex.style.color = '#FF0000'
  }
}