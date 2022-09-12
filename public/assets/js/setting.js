function changeDisplay(){
    if (document.setting["settings"][1].checked){
        document.setting["post[password]"] . disabled = false;
        document.getElementById('password') . style . display = "inline";
    }else{
        document.setting["post[password]"] . desabled = true;
        document.getElementById('password') . style . display = "none";
    }
}
window.onload = changeDisplay;