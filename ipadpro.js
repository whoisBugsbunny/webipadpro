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
for (i = 0; i < appicon.length; i++) {
    appicon[i].addEventListener('mouseenter', onMouseHover);
    appicon[i].addEventListener('mouseleave', onMouseHoverOut);
}
// Hover an element
function onMouseHover() {
    cursor.classList.add('cursorscale');
}

function onMouseHoverOut() {
    cursor.classList.remove('cursorscale');
}