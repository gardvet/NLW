//Itens de coleta
//pegar todos os li's
const itemsToCollect = document.querySelectorAll(".items-grid li")

for(const item of itemsToCollect) {
    item.addEventListener("click",handleSelectedItem)
}

const collectedItems = document.querySelector("input[name=items")

let selectedItems = [] /*let p poder atualizar, const n pode sobrescrever */

function handleSelectedItem(event) {
    const itemLi = event.target
    itemLi.classList.toggle("selected")

    const itemId = itemLi.dataset.id

    //verificar se existem itens selecionados, se sim, quais
    
    const alreadySelected = selectedItems.findIndex( item =>  {
        const itemFound = item == itemId  // será true or false
        return itemFound
    })


    //se ja estiver selecionado, tirar da seleção
    if (alreadySelected >= 0) {
        //tirar da seleção
        const filteredItems = selectedItems.filter( item => {
            const itemIsDifferent = item != itemId
            return itemIsDifferent
        })
        selectedItems = filteredItems
    } 
    else { //caso não, adicionar a seleção
        selectedItems.push(itemId)
    }
    //atualizar o campo escondido com os dados selecionados
    collectedItems.value = selectedItems
}