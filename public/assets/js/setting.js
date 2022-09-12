function changeDisplay(){
    document.getElementById('password') . style . display = "inline";
    document.getElementById('btn') . style . display = "inline";
}  

function returnDisplay(){
    document.getElementById('password') . style . display = "none";
    document.getElementById('btn') . style . display = "none";
}

const password = document.getElementById('kind-1');
password.onclick = changeDisplay;
    
const returnkey = document.getElementById('kind-2');
returnkey.onclick = returnDisplay;
    
window.onload = changeDisplay;
window.onload = returnDisplay;