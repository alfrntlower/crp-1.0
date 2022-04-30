
const primaryInput = document.querySelector('[name=primary-input-js]');
const processedInput = document.querySelector('[name=processed-input-js]');

primaryInput.addEventListener('input', onChangePrimaryInput);

function onChangePrimaryInput() {
    
    let stringPrimaryInput = primaryInput.value

    let arrayPrimaryInput = stringPrimaryInput.split(' ');

    let arrrayProcessedInput = arrayPrimaryInput.reverse();

    processedInput.innerHTML = arrrayProcessedInput.join(' ');

}


function addDarkClassToHtml() {

    try {
        if (localStorage.getItem('theme') === 'dark') {
            document.querySelector('html').classList.add('dark');
            switchT.checked = true;
        }
        else {
            document.querySelector('html').classList.remove('dark');
        }
        
    } catch (err) { }
}

addDarkClassToHtml();