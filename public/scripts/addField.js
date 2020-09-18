//procurar o botão
document.querySelector("#add-time")

//quando clicar no botão
.addEventListener('click', cloneField)


//executar uma ação
function cloneField(){
//duplicar os campos. que campo?
const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true) //pega o nó(item pelo id ou class) e se colocar true, replica tudo que for dele e abaixo dele na hierarquia
//conts é variável que nunca vai mudar o valor

//limpar os campos. Que campos?
const fields = newFieldContainer.querySelectorAll('input')

//pra cada campos, limpar
fields.forEach(function(field){
    //pegar o field do momento e limpa ele
    field.value = ""

})

//colocar na página
document.querySelector('#schedule-items').appendChild(newFieldContainer) //no appendchild ele ta esperando o nó filho
}