let textDisplay = document.getElementById('textDisplay');

function addTextNode(text) {
    const newtext = document.createTextNode(text);
    const p1 = document.getElementById("textDisplay");
    p1.appendChild(newtext);
}

function onClick(){
    let isClicked = document.getElementById("isClicked");
    
    if (!isClicked.classList.contains("modal-open")) {
        isClicked.classList.add("modal-open");
    }
    
}

function onYes(){
    
    let isClicked = document.getElementById("isClicked");
    if (isClicked.classList.contains("modal-open")) {
        isClicked.classList.remove("modal-open");
        
    }
    
    addTextNode('You just clicked “yes”')
    
}
function onCancel(){
    let isClicked = document.getElementById("isClicked");
    if (isClicked.classList.contains("modal-open")) {
        isClicked.classList.remove("modal-open");
    }
    addTextNode('You just clicked “cancel”')
}