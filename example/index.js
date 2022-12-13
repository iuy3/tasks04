
//состояние второй функции
let selectedTd;
//получаем с чем будем работать
let table = document.getElementById('months')

table.onclick = function(event){   
    let target = event.target;
    //console.log(target.tagName);
    //console.log(target.parentNode.tagName);
    //console.log(this);

    let td = target.closest('html')
    console.log(td);

    //событие в этом контексте this
    while(target != this){
        //если событие контекста this == "TD"
        //console.log(target.parentNode);
        if(target.tagName == 'TD'){
            taglighting(target)
            return
        }
        //иначе присваиваем родительскую ноду TR
        target = target.parentNode
    }

}

function taglighting(node){
    //если элемент != undefined 
    if(selectedTd){
        selectedTd.classList.remove('highlight')
    }

    //иначе добавляем из css
    selectedTd = node
    selectedTd.classList.add('highlight');
}