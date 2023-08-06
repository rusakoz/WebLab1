
document.onmousemove = function () {
    document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeend',
        '<img src="https://cdn-icons-png.flaticon.com/512/63/63413.png" width="30" height="30" id="aim">');

    var aim = document.getElementById('aim');

    aim.style.position = 'fixed';

    document.onmousemove = function (event){

        aim.style.left = event.clientX -12 + 'px';
        aim.style.top = event.clientY -12 + 'px';
    }
}