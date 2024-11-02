const itemForm = document.querySelector('form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');



function addItem (e) {
    e.preventDefault();
    
    const newItem = itemInput.value;


    // Validate Input
    if (newItem == '') {
        alert(`You've posted nothing`);
        return;
    }
    //
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(newItem));
    const button = createButton('remove-tiem btn-link text-red');
    li.appendChild(button);
    itemList.appendChild(li);
    itemInput.value = '';
    
}

function createButton (classes) {
    const newButton = document.createElement('button');
    const iframe = document.createElement('i');
    iframe.className = "fa-solid fa-xmark";
    newButton.appendChild(iframe);
    newButton.className = classes;
    return newButton;

}

// Event Listeners
itemForm.addEventListener('submit', addItem);
