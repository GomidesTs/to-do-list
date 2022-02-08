var ul = document.querySelector('ul');
var li = document.querySelector('input');
var button = document.querySelector('button');

var arr = [
    'Fazer um café',
    'Colocar a plylist para tocar',
    'Da o git Clone no projeto',
];



function render() {
    ul.innerHTML = '';
    arr.forEach((element, index) => {
        var liElement = document.createElement('li');
        var liText = document.createTextNode(element);
        var liLink = document.createElement('a');
        var textLink = document.createTextNode('X');
        liLink.setAttribute('href', '#');
        liLink.setAttribute('onclick', 'deleteItem(' + index + ')');
        liLink.appendChild(textLink);
        liElement.appendChild(liText);
        liElement.appendChild(liLink);
        ul.appendChild(liElement);
    });
};


render();

button.addEventListener('click', addItem)

function addItem() {
    var itemText = li.value;
    console.log(itemText.length);
    if (itemText.length < 1) {
        alert('Por favor, preencha o campo nome');
    } else {
        arr.push(itemText);
    }
    document.querySelector('input').value = '';
    render();
}

function deleteItem(pos) {
    arr.splice(pos, 1);
    render();
}
