
var check =[0, 0, 0]

let titre1 = document.getElementById("titre1")
let titre2 = document.getElementById("titre2")
let titre3 = document.getElementById("titre3")

let contenu1 = document.getElementById("contenu1")
let contenu2 = document.getElementById("contenu2")
let contenu3 = document.getElementById("contenu3")

var listetitre = [titre1, titre2, titre3]
var listecontenu = [contenu1, contenu2, contenu3]


if (document.getElementById("titre4") != null){
    const titre4 = document.getElementById("titre4")
    const contenu4 = document.getElementById("contenu4")
    listetitre.push(titre4)
    listecontenu.push(contenu4)
    check.push(0)
    titre4.onmouseover = function(){ShowContenu(3)}
    titre4.onmouseout = function(){HideContenu(3)}
    titre4.onclick = function(){DisplayContenu(3)}
}

if (document.getElementById("titre5") != null){
    const titre5 = document.getElementById("titre5")
    const contenu5 = document.getElementById("contenu5")
    listetitre.push(titre5)
    listecontenu.push(contenu5)
    check.push(0)
    titre5.onmouseover = function(){ShowContenu(4)}
    titre5.onmouseout = function(){HideContenu(4)}
    titre5.onclick = function(){DisplayContenu(4)}
}

if (document.getElementById("titre6") != null){
    const titre6 = document.getElementById("titre6")
    const contenu6 = document.getElementById("contenu6")
    listetitre.push(titre6)
    listecontenu.push(contenu6)
    check.push(0)
    titre6.onmouseover = function(){ShowContenu(5)}
    titre6.onmouseout = function(){HideContenu(5)}
    titre6.onclick = function(){DisplayContenu(5)}
}
if (document.getElementById("titre7") != null){
    const titre7 = document.getElementById("titre7")
    const contenu7 = document.getElementById("contenu7")
    listetitre.push(titre7)
    listecontenu.push(contenu7)
    check.push(0)
    titre7.onmouseover = function(){ShowContenu(6)}
    titre7.onmouseout = function(){HideContenu(6)}
    titre7.onclick = function(){DisplayContenu(6)}
}

if (document.getElementById("titre8") != null){
    const titre8 = document.getElementById("titre8")
    const contenu8 = document.getElementById("contenu8")
    listetitre.push(titre8)
    listecontenu.push(contenu8)
    check.push(0)
    titre8.onmouseover = function(){ShowContenu(7)}
    titre8.onmouseout = function(){HideContenu(7)}
    titre8.onclick = function(){DisplayContenu(7)}
}

for (let i=0; i<listecontenu.length; i++) {
    listecontenu[i].style.display = 'none'
}

function ButtonTout(){
    for (let i=0; i<listetitre.length; i++){
        listecontenu[i].style.display = 'block'
        check[i] = 1
    }
}

titre1.onmouseover = function(){ShowContenu(0)}
titre2.onmouseover = function(){ShowContenu(1)}
titre3.onmouseover = function(){ShowContenu(2)}


titre1.onmouseout = function(){HideContenu(0)}
titre2.onmouseout = function(){HideContenu(1)}
titre3.onmouseout = function(){HideContenu(2)}


titre1.onclick = function(){DisplayContenu(0)}
titre2.onclick = function(){DisplayContenu(1)}
titre3.onclick = function(){DisplayContenu(2)}


function ShowContenu(number) {
    if (check[number] == 0 ){
       listecontenu[number].style.display = 'block' 
    }
}

function HideContenu(number) {
    if (check[number] == 0){
        listecontenu[number].style.display = 'none'
    }
}

function DisplayContenu(number){
    for (let i=0; i<listetitre.length; i++ )
    {
        if (i != number){
            listecontenu[i].style.display = 'none'
            check[i] = 0
        }
        else{
            listecontenu[i].style.display = 'block'
            check[i] = 1
        }
    }    
}


