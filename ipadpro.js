const ct = document.getElementById('time');
const dd = document.getElementById('daydate');
if (ct) {
    setInterval(function() {
        var d = new Date;
        var h = d.getHours();
        var m = ('0' + d.getMinutes()).slice(-2);
        if (false) { //timeformat.value == 24
            ct.innerText = h + ':' + m;
        } else {
            var suffix = h >= 12 ? "PM" : "AM";
            // ct.innerText = ((h + 11) % 12 + 1) + ':' + d.getMinutes() + '' + < p > suffix < /p>;
            ct.innerHTML = ((h + 11) % 12 + 1) + `:${m}<span style='font-size:2.5vw'> ${suffix} </span>`;
        }
    }, 1000)
}
const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var d1 = new Date;
dd.innerText = day[d1.getDay()] + ', ' + d1.getDate() + ' ' + mL[d1.getMonth()];

const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
    cursor.setAttribute('style', 'top:' + (e.pageY - 10) + 'px;left:' + (e.pageX - 10) + 'px;');
})
const appicon = document.querySelectorAll('.appicon');
const appiconmove = document.querySelectorAll('.appiconmove');
for (i = 0; i < appicon.length; i++) {
    // appicon[i].addEventListener('mouseenter', function(e) { onMouseHover(i,e); });
    // appicon[i].addEventListener('mouseleave', function(e) { onMouseHoverOut(i,e); });
    // appiconmove[i].addEventListener('mouseenter', function(e) { onMouseHover(i, e); });
    // appiconmove[i].addEventListener('mouseleave', function(e) { onMouseHoverOut(i, e); });
}
// this does not work with loop so i had to used is one by one until i'll find solution
{
    appiconmove[0].addEventListener('mouseenter', function(e) { onMouseHover(0, e); });
    appiconmove[0].addEventListener('mouseleave', function(e) { onMouseHoverOut(0, e); });
    appiconmove[1].addEventListener('mouseenter', function(e) { onMouseHover(1, e); });
    appiconmove[1].addEventListener('mouseleave', function(e) { onMouseHoverOut(1, e); });
    appiconmove[2].addEventListener('mouseenter', function(e) { onMouseHover(2, e); });
    appiconmove[2].addEventListener('mouseleave', function(e) { onMouseHoverOut(2, e); });
    appiconmove[3].addEventListener('mouseenter', function(e) { onMouseHover(3, e); });
    appiconmove[3].addEventListener('mouseleave', function(e) { onMouseHoverOut(3, e); });
    appiconmove[4].addEventListener('mouseenter', function(e) { onMouseHover(4, e); });
    appiconmove[4].addEventListener('mouseleave', function(e) { onMouseHoverOut(4, e); });
    appiconmove[5].addEventListener('mouseenter', function(e) { onMouseHover(5, e); });
    appiconmove[5].addEventListener('mouseleave', function(e) { onMouseHoverOut(5, e); });
    appiconmove[6].addEventListener('mouseenter', function(e) { onMouseHover(6, e); });
    appiconmove[6].addEventListener('mouseleave', function(e) { onMouseHoverOut(6, e); });
    appiconmove[7].addEventListener('mouseenter', function(e) { onMouseHover(7, e); });
    appiconmove[7].addEventListener('mouseleave', function(e) { onMouseHoverOut(7, e); });
    appiconmove[8].addEventListener('mouseenter', function(e) { onMouseHover(8, e); });
    appiconmove[8].addEventListener('mouseleave', function(e) { onMouseHoverOut(8, e); });
    appiconmove[9].addEventListener('mouseenter', function(e) { onMouseHover(9, e); });
    appiconmove[9].addEventListener('mouseleave', function(e) { onMouseHoverOut(9, e); });
    appiconmove[10].addEventListener('mouseenter', function(e) { onMouseHover(10, e); });
    appiconmove[10].addEventListener('mouseleave', function(e) { onMouseHoverOut(10, e); });
    appiconmove[11].addEventListener('mouseenter', function(e) { onMouseHover(11, e); });
    appiconmove[11].addEventListener('mouseleave', function(e) { onMouseHoverOut(11, e); });
    appiconmove[12].addEventListener('mouseenter', function(e) { onMouseHover(12, e); });
    appiconmove[12].addEventListener('mouseleave', function(e) { onMouseHoverOut(12, e); });
    appiconmove[13].addEventListener('mouseenter', function(e) { onMouseHover(13, e); });
    appiconmove[13].addEventListener('mouseleave', function(e) { onMouseHoverOut(13, e); });
    appiconmove[14].addEventListener('mouseenter', function(e) { onMouseHover(14, e); });
    appiconmove[14].addEventListener('mouseleave', function(e) { onMouseHoverOut(14, e); });
    appiconmove[15].addEventListener('mouseenter', function(e) { onMouseHover(15, e); });
    appiconmove[15].addEventListener('mouseleave', function(e) { onMouseHoverOut(15, e); });
    appiconmove[16].addEventListener('mouseenter', function(e) { onMouseHover(16, e); });
    appiconmove[16].addEventListener('mouseleave', function(e) { onMouseHoverOut(16, e); });
    appiconmove[17].addEventListener('mouseenter', function(e) { onMouseHover(17, e); });
    appiconmove[17].addEventListener('mouseleave', function(e) { onMouseHoverOut(17, e); });
    appiconmove[18].addEventListener('mouseenter', function(e) { onMouseHover(18, e); });
    appiconmove[18].addEventListener('mouseleave', function(e) { onMouseHoverOut(18, e); });
    appiconmove[19].addEventListener('mouseenter', function(e) { onMouseHover(19, e); });
    appiconmove[19].addEventListener('mouseleave', function(e) { onMouseHoverOut(19, e); });
    appiconmove[20].addEventListener('mouseenter', function(e) { onMouseHover(20, e); });
    appiconmove[20].addEventListener('mouseleave', function(e) { onMouseHoverOut(20, e); });
}
appicon[23].addEventListener('mouseenter', function(e) { onMouseHover(23, e); });
appicon[23].addEventListener('mouseleave', function(e) { onMouseHoverOut(23, e); });


// Hover an element
const ttt = document.getElementById('ttt');

function onMouseHover(i, e) {
    cursor.classList.add('cursorscale');
    appiconmove[i].addEventListener('mousemove', e => {
        var top = (e.offsetY - 35) / 3;
        var left = (e.offsetX - 35) / 3;
        appiconmove[i].setAttribute('style', `top:${top}px;left:${left}px;`);
    });
}

function onMouseHoverOut(i, e) {
    cursor.classList.remove('cursorscale');
    console.log('post', i);
    appiconmove[i].setAttribute('style', '');
    appiconmove[i].removeEventListener('mousemove', () => {});
}