/* Instanciando os botoes do html para o javascript */

var menuBtn = document.getElementById('menuBtn')
var sideNav = document.getElementById('sideNav')
var menu = document.getElementById('menu')

sideNav.style.right = "-250px"

menu.onclick = function() {
    if(sideNav.style.right == "-250px"){
        sideNav.style.right = "0";
        menu.src = "https://i.ibb.co/234Rk9x/close.png";
    }else{
        sideNav.style.right = "-250px"
        menu.src = "https://i.ibb.co/B2WTpLC/menu.png";
    }
}
var scroll = new SmoothScroll('a[href*="#"]',{
    speed: 1000,
    speedAsDuration: true
});