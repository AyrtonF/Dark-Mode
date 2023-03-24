const changeDarkBtn = document.querySelector("#change-dark");


function toggleDark() {
    document.body.classList.toggle("dark");
}

changeDarkBtn.addEventListener("change", function() {
toggleDark();

//Salvar o dark mode
localStorage.removeItem("dark");

if(document.body.classList.contains("dark")){
    localStorage.setItem("dark", 1);
}

})