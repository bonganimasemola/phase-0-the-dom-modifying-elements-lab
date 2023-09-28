

// 1: after index.js is processed, no longer has DOM node 'main#main' 

//document.getElementById('main'); --failed
//remove('main');                  --failed

const element = document.getElementById('main');
element.remove(); 

// 2 & 3: after index.js is processed, has a 'newHeader' variable that points to node 'h1#victory' && Make sure you create an <h1> with id 'victory'

/*const h1Element = document.createElement('h1')  --failed
h1Element.textContent = 'h1#victory' */           

const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = 'h1#victory'; 

// 4: after index.js is processed, has a 'newHeader' variable that points to node 'h1#victory' with "YOUR-NAME is the champion" inside 

//document.getElementById('victory').textContent = 'h1#victory BONGANI is the champion'

newHeader.innerHTML = 'h1#victory BONGANI is the champion';