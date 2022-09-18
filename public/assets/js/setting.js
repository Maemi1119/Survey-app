function changeDisplay(){
    document.getElementById('password') . style . display = "inline";
    document.getElementById('btn') . style . display = "inline";
}

function returnDisplay(){
    document.getElementById('password') . style . display = "none";
    document.getElementById('btn') . style . display = "none";
}


const show = document.getElementById("kind-1");
show.onclick = changeDisplay;

const hide =document.getElementById("kind-0");
hide.onckick = returnDisplay;

window.onload = changeDisplay;