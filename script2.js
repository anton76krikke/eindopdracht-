

let togglenavstatus = false;
let togglenav = function () {
    let getDropdownMenu = document.querySelector(".dropdown-content");

    if (togglenavstatus === false) {
        getDropdownMenu.style.visibility = "visible";

        togglenavstatus = true;
    }

    else if (togglenavstatus === true) {
        getDropdownMenu.style.visibility = "hidden";

        togglenavstatus = false;
    }
};


const geel = document.getElementById('geelig');
const wit = document.getElementById("wittig");
const kleur = document.getElementById('groenig');
const btn = document.getElementById('blauwig');


kleur.addEventListener('click', (e) => {
    document.body.style.backgroundColor = "green"
    togglenav(false);

});
btn.addEventListener('click', (e) => {
    document.body.style.backgroundColor = "blue";
    togglenav(false);
});
wit.addEventListener('click', (e) => {
    document.body.style.backgroundColor = "white";
    togglenav(false);
});
geel.addEventListener('click', (e) => {
    document.body.style.backgroundColor = "yellow";
    togglenav(false);
});

