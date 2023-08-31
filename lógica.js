    let boxes = document.querySelectorAll('.box')
    let Embaralhar = document.getElementById('Embaralhar')
    let jogadas = document.getElementById("jogadas")
    let vitoria = document.querySelector('.vitoria')
    let jogo = document.querySelector('.jogo')
    let contadorVitoria = 0
    let tentativas = document.querySelector('.tentativas')
    

    
  

    //iniciar jogo
    for(let j=0;j<boxes.length-1;j++){
        boxes[j].textContent=j+1
    }

    Embaralhar.addEventListener("click",()=>{
        start(boxes)
        contadorVitoria = 0
    })

   

     //shuffle
     function vetorEmbaralhado(arr) {
        
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i].textContent, arr[j].textContent] = [arr[j].textContent, arr[i].textContent];
        }
    
        arr.forEach((element) => {
            console.log(element.textContent);
        });
    }
    
    function start(arr) {
        jogo.style.display = 'grid'
        vitoria.style.display = 'none'
        contadorVitoria=0
        
        vetorEmbaralhado(arr)
        interacao()
        jogadas.textContent = contadorVitoria ;
        tentativas.textContent=contadorVitoria
    }


    //lógica dos 16 botões

    //direcoes
    function trocarPosicao(arr, fromIndex, toIndex) {
        let aux = arr[fromIndex].textContent;
        arr[fromIndex].textContent = arr[toIndex].textContent;
        arr[toIndex].textContent = aux;
    }
 
    
    function realizarTroca(index, direction) {
        switch (direction) {
            case 'direita':
                trocarPosicao(boxes, index, index + 1);
                break;
            case 'esquerda':
                trocarPosicao(boxes, index, index - 1);
                break;
            case 'cima':
                trocarPosicao(boxes, index, index - 4);
                break;
            case 'baixo':
                trocarPosicao(boxes, index, index + 4);
                break;
            default:
                break;
        }
    }




    //trocas
    // ...

function interacao() {
    boxes.forEach((box, index) => {
        box.addEventListener("click", () => {
            if (box.textContent !== "") {
                const isEmpty = (index) => boxes[index].textContent === "";
                
                if (index % 4 !== 0 && isEmpty(index - 1)) {
                    realizarTroca(index, 'esquerda');
                    contadorVitoria++
                    jogadas.textContent=contadorVitoria
                } else if ((index + 1) % 4 !== 0 && isEmpty(index + 1)) {
                    realizarTroca(index, 'direita');
                    contadorVitoria++
                    jogadas.textContent=contadorVitoria
                } else if (index >= 4 && isEmpty(index - 4)) {
                    realizarTroca(index, 'cima');
                    contadorVitoria++
                    jogadas.textContent=contadorVitoria
                } else if (index < 12 && isEmpty(index + 4)) {
                    realizarTroca(index, 'baixo');
                    contadorVitoria++
                    jogadas.textContent=contadorVitoria
                }

                
                if(index == 15){
                    let cont = 0
                    for(let i = 0;i<index-1;i++){
                        if(boxes[i].textContent!=""){
                            cont++
                        }
                    }
                
                    if(cont==14){
                        console.log(cont)
                        let contador=0
                        for(let i = 0;i<cont;i++){
                            const num1 = parseInt(boxes[i].textContent)
                            const num2 = parseInt(boxes[i+1].textContent)
                            
                            if(num1<num2){
                                contador++
                                
                            }else{
                                cont=0
                                contador=0
                            }
                            
                        }
                       
                        if(contador==14){
                            Vitoria()
                            console.log('vitoria')
                            
                            cont=0
                            contador=0
                        }

                       
                } 
            }
            }
            
        });
    });
}

// vitória
function Vitoria(){
                            
                           
                            
    jogo.style.display = 'none'
    vitoria.style.display = 'grid'
    tentativas.textContent=contadorVitoria
}