const switchT = document.querySelector('[name=switch]');
//let linkForPages = document.querySelectorAll(".main-list-pages__link");

switchT.addEventListener("change", () => {

    if (switchT.checked) {
        console.log("Black theme");
        localStorage.setItem("theme", "dark");

        //console.log(linkForPages.classList);

    }
    else {
        console.log("White theme");
        
        localStorage.removeItem("theme", "dark");

    }

    addDarkClassToHtml();
})

if (localStorage.getItem('theme') === 'dark') {     

    localStorage.setItem('theme', 'dark');
    switchT.checked = true;        
        }
else {

    localStorage.removeItem('theme');    
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
