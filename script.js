var array = []

function adicionar(){
    

    var divAdicao = document.querySelector(".container-numeros")
    var adicaoDiv = document.createElement("p")

    var input = document.querySelector(".numero")
    var ValorInput = Number(input.value)

    if(ValorInput == ""){
        alert("Digite algum número!")
    }

    if(ValorInput <= 100 && ValorInput >= 1){
        //Desbloquear container
        var ramister = document.querySelector(".container-ramister")
        ramister.style.display = "none"
    
        var containerDisplay = document.querySelector(".ativada")
        containerDisplay.style.display = "block"

        //Adição na div central de números
        adicaoDiv.innerHTML = `Valor ${ValorInput} adicionado`
        adicaoDiv.classList.add("N_adicionado")
        divAdicao.appendChild(adicaoDiv)

        //Adição no Array
        array.push(ValorInput)
        console.log(array)
    }
    
}

function finalizar(){

    var RespostaFinal = document.createElement("p")

    var containerPrincipal = document.querySelector(".container")
    var containerResultadoFinal = document.querySelector(".container-resultado-final")


    containerResultadoFinal.innerHTML = ""
    
    if(array.length >= 2){
        
    var RespostaFinal = document.createElement("p")

    var containerPrincipal = document.querySelector(".container")
    var containerResultadoFinal = document.querySelector(".container-resultado-final")


    containerResultadoFinal.style.display = "Flex"
    containerPrincipal.style.height = "465px"
    
    //Calcular todos a soma dos elementos do array:
    var resultadoSomaDosElementos = 0

    for(var i = 0; i < array.length;i++){
        resultadoSomaDosElementos += array[i]
    }
    console.log(resultadoSomaDosElementos) 
    // Fim

    //Calcular a média dos elementos do array:
    var calcularMedia = resultadoSomaDosElementos/array.length
    //Fim

        const min = Math.min(...array)
        const max = Math.max(...array)


        RespostaFinal.classList.add("resultado-final")
        RespostaFinal.style.transform = "5s"
        RespostaFinal.innerHTML = `Ao todo temos <strong>${array.length}</strong> elementos <br>
        O maior valor informado é o <strong>${max}</strong> <br>
        O menor valor informado é o <strong>${min}</strong> <br>
        Somando todos valores temos <strong>${resultadoSomaDosElementos}</strong>  <br>
        A média dos valores digitados é <strong>${calcularMedia.toFixed(1)}</strong>
        `

        containerResultadoFinal.appendChild(RespostaFinal)
    }else{
        alert("Você precisa ter no minímo dois números em sua Lista!")
    }



    console.log(containerPrincipal)
}