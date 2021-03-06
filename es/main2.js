document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
});


ScrollReveal().reveal('.news-cards', {delay: 300});
ScrollReveal().reveal('.cards-banner-one', {delay: 300});



//Ejecucion de funciones//

document.getElementById("inputSearch").addEventListener("keyup", buscador_interno);


//Declaracion de variables//
bars_search = document.getElementById("ctn-bars-search");
inputSearch = document.getElementById('inputSearch');
box_search = document.getElementById('box-search');

function buscador_interno(){

    filter = inputSearch.value.toUpperCase();
    li = box_search.getElementsByTagName("li");

    //Recorriendo elementos a filtra mediante los "li"//

    for (i = 0; i < li.length; i++){
        
        a = li[i].getElementsByTagName("a")[0];
        textValue = a.textContent || a.innerText;
        
        if(textValue.toUpperCase().indexOf(filter) > -1){

            li[i].style.display = "";
            box_search.style.display = "block";

            if(inputSearch.value === ""){
                box_search.style.display = "none"
            }

        }else{
            li[i].style.display = "none";
            
        }
    }

}