function changeDisplay(){
    document.getElementById('password') . style . display = "inline";
    document.getElementById('btn') . style . display = "inline";
}

function returnDisplay(){
    document.getElementById('password') . style . display = "none";
    document.getElementById('btn') . style . display = "none";
}


const show = document.getElementById("setting_2");
show.onclick = changeDisplay;

const hide =document.getElementById("setting_1");
hide.onckick = returnDisplay;

window.onload = changeDisplay;