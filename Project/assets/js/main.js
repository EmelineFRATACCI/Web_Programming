var tab = new Array("https://pbs.twimg.com/media/E1TMatiWQAMcDOd?format=jpg&name=large", "https://pbs.twimg.com/media/E0tbbgfUYAgd-Al?format=jpg&name=4096x4096", "https://pbs.twimg.com/media/E1NMAPVXsAIvM2a?format=jpg&name=4096x4096", "https://pbs.twimg.com/media/E1NMANxWEAIq-_9?format=jpg&name=4096x4096", "https://pbs.twimg.com/media/E1NMAPfWQAEhLuO?format=jpg&name=4096x4096");

var numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = tab.length - 1;
    if (numero > tab.length - 1)
        numero = 0;
    document.getElementById("slide").src = tab[numero];

    
    clearInterval(timer);
    timer = setInterval("ChangeSlide(1)", 3000);
}

var timer = setInterval("ChangeSlide(1)", 3000);

function menuDeroulant(id){
    var element = document.getElementById(id);
    var etat = element.style.display;
     
    if (etat == "none")
        element.style.display = 'block';
    else
        element.style.display = 'none';
}