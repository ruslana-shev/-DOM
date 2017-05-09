var colors = [
    'red',
    'green',
    'blue',
    'yellow',
    'magenta',
    'pink',
    'cyan',
    'orange',
    'grey',
    'black',
    'lime',
    'violet'
];

var square = +prompt ('Введите количество квадратов', 1);

if (square !== 0){
    var drowing = drowSq(square);
    console.log(drowing);
} else {
    alert ('Ошибка! Вы не ввели количество квадратов!');
}

//Рисуем квадрат
function drowSq(square) {
    const height = 50,
        width = 50,
        padding = 20;
    var div = document.createElement('div');
        div.style.width = width + 'px';
        div.style.height = height + 'px';
        div.style.padding = padding + 'px';

    for (var i = 1; i <= square; i++) {
         if (i !== 1 ) {
            nextDivWidth = div.offsetWidth,
            nextDivHeight = div.offsetHeight;
            
            var nextDiv = document.createElement('div');

            nextDiv.style.width =  nextDivWidth + 'px';
            nextDiv.style.height =  nextDivHeight + 'px';
            nextDiv.style.padding = padding + 'px';
            
            document.body.appendChild(nextDiv);
            nextDiv.appendChild(div);
            div = nextDiv;
        } else {
            document.body.appendChild(div);
        }
    }
    setColorSquare(colors);
}
//Устанавливаем цвет
function setColorSquare(args){
    var figureSguare = document.querySelectorAll('div');
    for (var i = 0; i < figureSguare.length; i++) {
        var color = args[i];
        figureSguare[i].style.background = color;
    }
}; 
