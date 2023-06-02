/*jshint esversion: 6 */
const ct = document.getElementById('time');
const dd = document.getElementById('daydate');
if (ct) {
    setInterval(function () {
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
const contextmenu = document.querySelector('.contextmenu');
document.addEventListener('mousemove', e => {
    cursor.setAttribute('style', 'top:' + (e.pageY) + 'px;left:' + (e.pageX) + 'px;');
});
document.addEventListener('click', e => {
    cursor.classList.add("cursorclicked");
    // contextmenu.removeAttribute('style');
    setTimeout(() => {
        cursor.classList.remove("cursorclicked");
    }, 150);
    contextmenu.classList.remove("showcontextmenu");
});
const contextmenucontent = document.querySelector('contextmenucontent');
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    contextmenu.classList.add("showcontextmenu");
    contextmenu.setAttribute('style', 'top:' + (e.pageY) + 'px;left:' + (e.pageX) + 'px;');
});
// navigation bar code by ChatGPT
window.addEventListener('DOMContentLoaded', () => {
    if ('getBattery' in navigator) {
        navigator.getBattery().then(function (battery) {
            function updateBatteryStatus() {
                const batteryStatus = document.getElementById('battery-status');
                batteryStatus.innerHTML = Math.floor(battery.level * 100) + "%" + (battery.charging ? '<i class="fa fa-bolt" aria-hidden="true"></i>' : '');
            }

            // Initial battery status
            updateBatteryStatus();

            // Update battery status when it changes
            battery.addEventListener('levelchange', updateBatteryStatus);
            battery.addEventListener('chargingchange', updateBatteryStatus);
        });
    }
    else {
        // const batteryStatus = document.getElementById('battery-status');
        // batteryStatus.innerHTML = "Battery status API is not supported in this browser.";
    }
});


const appicon = document.querySelectorAll('.appicon');
const appiconmove = document.querySelectorAll('.appiconmove');
// for (let i = 0; i < appicon.length; i++) {
// appicon[i].addEventListener('mouseenter', function(e) { onMouseHover(i,e); });
// appicon[i].addEventListener('mouseleave', function(e) { onMouseHoverOut(i,e); });
// appiconmove[i].addEventListener('mouseenter', function(e) { onMouseHover(i, e); });
// appiconmove[i].addEventListener('mouseleave', function(e) { onMouseHoverOut(i, e); });
// }

for (let i = 0; i < appiconmove.length; i++) {
    appiconmove[i].addEventListener('mouseenter', function (e) {
        onMouseHover(i, e);
    });
    appiconmove[i].addEventListener('mouseleave', function (e) {
        onMouseHoverOut(i, e);
    });
}

// appicon[23].addEventListener('mouseenter', function (e) { onMouseHover(23, e); });
// appicon[23].addEventListener('mouseleave', function (e) { onMouseHoverOut(23, e); });


// Hover an element
const ttt = document.getElementById('ttt');

function onMouseHover(i, e) {
    cursor.classList.add('cursorscale');
    appiconmove[i].addEventListener('mousemove', e => {
        iconWidth = e.target.clientWidth;
        // iconHeight = e.target.clientHeight;
        const iconwh2 = iconWidth / 2;
        const woblestrength = 3;
        var top = (e.offsetY - (iconwh2)) / woblestrength;
        var left = (e.offsetX - (iconwh2)) / woblestrength;
        appiconmove[i].setAttribute('style', `top:${top}px;left:${left}px;`);
    });
}

function onMouseHoverOut(i, e) {
    cursor.classList.remove('cursorscale');
    console.log('post', i);
    appiconmove[i].setAttribute('style', '');
    appiconmove[i].removeEventListener('mousemove', () => { });
}

const calculatorDiv = `<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.tableOfCalculator {
    width: 100%;
    height: 100%;
}
.inputOfCalculator{
    padding:0;
}
.tableOfCalculator>tbody>tr>td>div {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    background-color: #ccc;
    border-radius: 5px;
    height: 100%;
    width: 100%;
}
</style>
<div style="height:100%">
<table class="tableOfCalculator">
        <tbody>
            <tr>
                <td colspan="4">
                    <div class="inputOfCalculator">
                        <input class="wh-100p" type="text">
                    </div>
                </td>
                <td rowspan="7">
                    <div>history</div>
                </td>
            </tr>
            <tr>
                <td>
                    <div>%</div>
                </td>
                <td>
                    <div>CE</div>
                </td>
                <td>
                    <div>C</div>
                </td>
                <td>
                    <div><i class='fas fa-backspace'></i></div>
                </td>
            </tr>
            <tr>
                <td>
                    <div>1/x</div>
                </td>
                <td>
                    <div>x<sup>2</sup></div>
                </td>
                <td>
                    <div><sup>2</sup>√x</div>
                </td>
                <td>
                    <div>÷</div>
                </td>
            </tr>
            <tr>
                <td>
                    <div>7</div>
                </td>
                <td>
                    <div>8</div>
                </td>
                <td>
                    <div>9</div>
                </td>
                <td>
                    <div>&#215;</div>
                </td>
            </tr>
            <tr>
                <td>
                    <div>4</div>
                </td>
                <td>
                    <div>5</div>
                </td>
                <td>
                    <div>6</div>
                </td>
                <td>
                    <div>-</div>
                </td>
            </tr>
            <tr>
                <td>
                    <div>1</div>
                </td>
                <td>
                    <div>2</div>
                </td>
                <td>
                    <div>3</div>
                </td>
                <td>
                    <div>+</div>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <div>0</div>
                </td>
                <td>
                    <div>.</div>
                </td>
                <td>
                    <div>=</div>
                </td>
            </tr>
        </tbody>
    </table>

</div>`;
const settingsDiv = null;

const applist = {
    calculator: calculatorDiv,
    github: `<iframe class="windowFrame" src="https://github.com/whoisBugsbunny" title="github"></iframe> <a href="https://github.com/whoisBugsbunny" target="_blank" class="btn redirectBtn">Go to Github</a>`,
    instagram: '<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/CM62SQbH7Wx/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/p/CM62SQbH7Wx/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/p/CM62SQbH7Wx/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by Ʌ N K I T ♪ (@whoisankit_)</a></p></div></blockquote> <script async src="//www.instagram.com/embed.js"></script>',
    reminder: '"I Write Code of whatever great ideas I got hit by."</br>"I transform great ideas into reality through coding."</br>"Passionate and skilled coder transforming great ideas into impactful solutions."',
    settings: settingsDiv,
    w3schools: '<iframe class="windowFrame" src="https://www.w3schools.com" title="w3schools"></iframe>'
}
const fontAwesomeClass = {
    calculator: 'calculator',
    github: 'github',
    instagram: 'instagram',
    music: 'music',
    reminder: 'lightbulb',
    settings: 'cog',
    noname: 'ban'
}
const body = document.getElementById("body");
let activeWindow = null;
let initialX = 0;
let initialY = 0;

function createwindow(i, e) {
    const allWindows = document.querySelectorAll('.window');
    allWindows.forEach(e => {
        e.classList.remove('windowOnTop');
    });
    console.log(e);
    const iconName = appiconmove[i].name;
    body.insertAdjacentHTML('afterend', `<div class="window windowOnTop" name="window">
    <div class="windowHeader" onClick="setOnTop(this);">
    <div class="windowIcon">
    <i class="fa fa-${fontAwesomeClass[iconName]}"></i>
    </div>
    <div style="height:100%;width:100%;" onMouseDown="startDragging(event);"></div>
    <div class="windowOptions">
    <i class="fa fa-window-minimize"></i>
    <i class="fa fa-window-maximize" onClick="minmaxWindowBtn(this);"></i>
    <i class="fa fa-close" onClick="closeWindowBtn(this);"></i>
    </div>
    </div>
    <div class="windowBody">
    ${applist[iconName]}
    </div>
    </div>`);
}

for (let i = 0; i < appiconmove.length; i++) {
    (function (index) {
        appiconmove[index].addEventListener('click', function (e) { createwindow(index, e); });
    })(i);
}

function closeWindowBtn(ele) {
    let windowDiv = ele.closest('.window');
    if (windowDiv) {
        windowDiv.remove();
    }
}

function minmaxWindowBtn(ele) {
    const windowDiv = ele.closest('.window');
    if (windowDiv) {
        windowDiv.classList.toggle('windowFullScreen');
        ele.classList.toggle('fa-window-maximize');
        ele.classList.toggle('fa-window-restore');
    }
}

function startDragging(event) {
    activeWindow = event.target.closest('.window');
    if (activeWindow) {
        if (activeWindow.classList.contains("windowFullScreen")) {
            activeWindow.classList.remove("windowFullScreen");
            activeWindow.style.left = `${event.clientX}px`;
            activeWindow.style.top = `${event.clientY - initialY}px`;
        }
        initialX = event.clientX - activeWindow.offsetLeft;
        initialY = event.clientY - activeWindow.offsetTop;
        document.addEventListener('mousemove', dragWindow);
        document.addEventListener('mouseup', stopDragging);
    }
}

function dragWindow(event) {
    if (activeWindow) {
        activeWindow.style.left = `${event.clientX - initialX}px`;
        activeWindow.style.top = `${event.clientY - initialY}px`;
    }
}

function stopDragging() {
    activeWindow = null;
    document.removeEventListener('mousemove', dragWindow);
    document.removeEventListener('mouseup', stopDragging);
}

function setOnTop(ele) {
    let windowDiv = ele.closest('.window');
    if (windowDiv) {
        const allWindows = document.querySelectorAll('.window');
        allWindows.forEach(e => {
            e.classList.remove('windowOnTop');
        });
        windowDiv.classList.add('windowOnTop');
    }
}