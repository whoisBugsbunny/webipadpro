/*jshint esversion: 6 */
import { helloWorldMessage } from './apps/helloworld.js';
import { apps } from './Data/appData.js';

console.log(helloWorldMessage); // This will prove the import works.

const ct = document.getElementById('time');
const dd = document.getElementById('daydate');
if (ct) {
    const timeFormatter = new Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
    });

    ct.innerHTML = `
        <span id="time-hour"></span><span id="time-colon" class="tickColon">:</span><span id="time-minute"></span><span id="time-period" style='font-size:2.5vw'></span>
    `;

    // Get references to the elements we need to update
    const hourEl = document.getElementById('time-hour');
    const colonEl = document.getElementById('time-colon');
    const minuteEl = document.getElementById('time-minute');
    const periodEl = document.getElementById('time-period');

    const updateClock = () => {
        const now = new Date();
        const parts = timeFormatter.formatToParts(now);

        // Update the content of our clock elements
        hourEl.textContent = parts.find(part => part.type === 'hour')?.value || '';
        minuteEl.textContent = parts.find(part => part.type === 'minute')?.value || '';
        periodEl.textContent = ` ${parts.find(part => part.type === 'dayPeriod')?.value || ''}`;

        colonEl.classList.toggle('opacity-0', now.getSeconds() % 2 !== 0);
    };

    updateClock();
    setInterval(updateClock, 1000);
}
if (dd) {
    const dateFormatter = new Intl.DateTimeFormat('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
    });
    dd.innerText = dateFormatter.format(new Date());
}

const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
    cursor.setAttribute('style', 'top:' + (e.pageY) + 'px;left:' + (e.pageX) + 'px;');
});

// right click contextmenu
// const contextmenu = document.querySelector('.contextmenu');
// document.addEventListener('click', e => {
//     cursor.classList.add("cursorclicked");
//     // contextmenu.removeAttribute('style');
//     setTimeout(() => {
//         cursor.classList.remove("cursorclicked");
//     }, 150);
//     contextmenu.classList.remove("showcontextmenu");
// });
// const contextmenucontent = document.querySelector('contextmenucontent');
// document.addEventListener('contextmenu', (e) => {
//     e.preventDefault();
//     contextmenu.classList.add("showcontextmenu");
//     contextmenu.setAttribute('style', 'top:' + (e.pageY) + 'px;left:' + (e.pageX) + 'px;');
// });


// navigation bar battery code by ChatGPT
window.addEventListener('DOMContentLoaded', () => {
    let batteryStatus = document.getElementById('battery-status');
    if ('getBattery' in navigator) {
        navigator.getBattery().then(function (battery) {
            function updateBatteryStatus() {
                let batterylevel = battery.level * 100;
                let batteryicon = 'full';
                if (batterylevel < 10) {
                    batteryicon = 'empty';
                } else if (batterylevel < 30) {
                    batteryicon = 'quarter';
                } else if (batterylevel < 60) {
                    batteryicon = 'half';
                } else if (batterylevel < 90) {
                    batteryicon = 'three-quarters';
                }
                batteryStatus.innerHTML = '<i class="fa fa-battery-' + batteryicon + '" aria-hidden="true"></i> <span>' + Math.floor(batterylevel) + '% </span>' + (battery.charging ? '<i class="fa fa-bolt" aria-hidden="true"></i>' : '');
            }

            // Initial battery status
            updateBatteryStatus();

            // Update battery status when it changes
            battery.addEventListener('levelchange', updateBatteryStatus);
            battery.addEventListener('chargingchange', updateBatteryStatus);
        });
    }
    else {
        batteryStatus.innerHTML = '<i class="fa fa-battery-half aria-hidden="true"></i> <span>50%</span>';
    }
});

// Function to dynamically create app icons
function createAppIcons() {
    const appTray = document.querySelector('.hometopapptray'); // Select the container for app icons
    const fragment = document.createDocumentFragment(); // Use a fragment for performance

    apps.forEach(app => {
        const appIconDiv = document.createElement('div');
        appIconDiv.className = `appicon ${app.empty ? 'empty' : ''}`;

        const img = document.createElement('img');
        if (app.content) {
            img.className = 'appiconmove';
        } else {
            img.className = 'appiconmove appNotAvail';
        }
        img.dataset.id = app.id; // Use data-id for the identifier
        img.alt = app.label; // Add alt text for accessibility
        if (app.src) {
            img.setAttribute('src', app.src);
        }

        // Add event listeners for hover effects
        img.addEventListener('mouseenter', (e) => onMouseHover(img, e));
        img.addEventListener('mouseleave', (e) => onMouseHoverOut(img, e));

        // Handle click actions using addEventListener
        if (app.action) {
            // For apps that perform an action, like opening a link
            img.addEventListener('click', app.action);
        } else if (app.content !== undefined && !app.empty) {
            // For apps that open a window
            img.addEventListener('click', () => createwindow(app));
        }

        const span = document.createElement('span');
        span.textContent = app.label;

        appIconDiv.appendChild(img);
        appIconDiv.appendChild(span);
        fragment.appendChild(appIconDiv);
    });

    // Append all icons to the DOM at once
    appTray.appendChild(fragment);
}

// Call the function after DOM is loaded
window.addEventListener('DOMContentLoaded', createAppIcons);

// const appicon = document.querySelectorAll('.appicon');
// const appiconmove = document.querySelectorAll('.appiconmove');

// Define the mousemove handler once to ensure the same function reference is used for add/remove
const handleIconMouseMove = (img, e) => {
    const iconWidth = e.target.clientWidth;
    const woblestrength = 3;
    const top = (e.offsetY - (iconWidth / 2)) / woblestrength;
    const left = (e.offsetX - (iconWidth / 2)) / woblestrength;
    img.style.top = `${top}px`; // Use style property directly for dynamic changes
    img.style.left = `${left}px`;
};

// Function to handle mouse entering an icon
function onMouseHover(img, e) {
    cursor.classList.add('cursorscale');
    const top = 500;
    const left = 500;
    cursor.setAttribute('style', 'top:' + top + 'px !important;left:' + left + 'px !important;');

    // Bind the specific image to the handler and add it
    const boundHandler = handleIconMouseMove.bind(null, img);
    img.addEventListener('mousemove', boundHandler);
    // Store the bound handler on the image element so we can remove it later
    img._boundMouseMoveHandler = boundHandler; // Using a custom property
}

// Function to handle mouse leaving an icon
function onMouseHoverOut(img, e) {
    cursor.classList.remove('cursorscale');
    img.style.top = ''; // Reset styles
    img.style.left = '';
    // Remove the specific bound handler
    if (img._boundMouseMoveHandler) {
        img.removeEventListener('mousemove', img._boundMouseMoveHandler);
        delete img._boundMouseMoveHandler; // Clean up
    }
}

const body = document.getElementById("body");
let activeWindow = null;
let initialX = 0;
let initialY = 0;

let appTrayArray = [];

async function createwindow(app) {
    const appId = app.id;
    if (appTrayArray.includes(appId)) {
        //show already open window
        console.log(appId + " already avalible");
        showWindow(appId);
        return;
    }
    const allWindows = document.querySelectorAll('.window');
    allWindows.forEach(win => {
        win.classList.remove('windowOnTop');
    });

    const windowDiv = document.createElement('div');
    windowDiv.className = 'window windowOnTop';
    windowDiv.dataset.id = appId;

    windowDiv.style.width = `${app.defaultWidth}px`;
    windowDiv.style.height = `${app.defaultHeight}px`;


    const windowHeader = document.createElement('div');
    windowHeader.classList.add('windowHeader');
    windowHeader.addEventListener('click', () => setOnTop(windowDiv));

    const windowIcon = document.createElement('div');
    windowIcon.classList.add('windowIcon');
    const icon = document.createElement('i');
    icon.classList.add('fa', `fa-${app.faIcon || 'ban'}`);
    windowIcon.appendChild(icon);

    const draggableArea = document.createElement('div');
    draggableArea.style.height = '100%';
    draggableArea.style.width = '100%';
    draggableArea.addEventListener('mousedown', startDragging);

    const windowOptions = document.createElement('div');
    windowOptions.className = 'windowOptions';

    const minimizeButton = document.createElement('i');
    minimizeButton.className = 'fa fa-window-minimize';
    minimizeButton.addEventListener('click', () => minimizeWindowBtn(minimizeButton));

    const maximizeButton = document.createElement('i');
    maximizeButton.className = 'fa fa-window-maximize';
    maximizeButton.addEventListener('click', () => minmaxWindowBtn(maximizeButton));

    const closeButton = document.createElement('i');
    closeButton.className = 'fa fa-close';
    closeButton.addEventListener('click', () => closeWindowBtn(closeButton));

    windowOptions.appendChild(minimizeButton);
    windowOptions.appendChild(maximizeButton);
    windowOptions.appendChild(closeButton);

    windowHeader.appendChild(windowIcon);
    windowHeader.appendChild(draggableArea);
    windowHeader.appendChild(windowOptions);

    const windowBody = document.createElement('div');
    windowBody.className = 'windowBody';

    let appContentHtml = '';
    let appContentCss = '';

    if (typeof app.content === 'string') {
        // If content is a string, assume it's direct HTML or a URL to fetch
        if (app.content.endsWith('.html')) {
            // This part is for future use if you decide to fetch HTML files again
            const response = await fetch(app.content);
            appContentHtml = await response.text();
        } else {
            appContentHtml = app.content;
        }
    } else if (typeof app.content === 'object' && app.content !== null && 'html' in app.content) {
        // If content is an object with html and css properties (from imported JS module)
        appContentHtml = app.content.html;
        appContentCss = app.content.css || '';
    }

    windowBody.innerHTML = appContentHtml; // Set HTML content first
    if (appContentCss) { // Then, append CSS if it exists
        const styleEl = document.createElement('style');
        styleEl.textContent = appContentCss;
        windowBody.appendChild(styleEl);
    }
    if (typeof app.content === 'object' && app.content !== null && typeof app.content.init === 'function') {
        app.content.init(windowBody);
    }
    windowDiv.appendChild(windowHeader);
    windowDiv.appendChild(windowBody);

    body.appendChild(windowDiv);

    appTrayArray.push(appId);
}

function showWindow(appId) {
    let ele = document.querySelector(`.window[data-id="${appId}"]`);
    console.log(ele);
    ele.classList.remove('windowMinimized');
    setOnTop(ele);
}

function closeWindowBtn(ele) {
    const windowDiv = ele.closest('.window');
    const appId = windowDiv.dataset.id;
    console.log(appId);
    console.log(appTrayArray);
    const index = appTrayArray.indexOf(appId);
    console.log(index);
    if (index > -1) { // only splice array when item is found
        appTrayArray.splice(index, 1); // 2nd parameter means remove one item only
    }
    console.log(appTrayArray);

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
function minimizeWindowBtn(ele) {
    const windowDiv = ele.closest('.window');
    if (windowDiv) {
        windowDiv.classList.add('windowMinimized');
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
        const allWindows = document.querySelectorAll('.window');
        allWindows.forEach(e => {
            e.classList.remove('windowOnTop');
        });
        activeWindow.classList.add('windowOnTop');
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

/* recent app bar */

const menubottombar = document.getElementById('menubottombar');
const menubottombartrigger = document.getElementById('menubottombartrigger');
const menuappsdiv = document.querySelector('.menuappsdiv');
const menuapptray = document.querySelector('.menuapptray');
const bottomapptrayopt = document.querySelector('.bottomapptrayopt');
menubottombar.addEventListener('click', (e) => {
    // const iconlist = document.querySelectorAll('.appiconRecent');
    console.log(e.target);
    if (e.target !== menubottombar && e.target !== menuapptray && e.target !== bottomapptrayopt) {
        return;
    }
    menubottombar.classList.toggle('btmbartoapptray');
    console.log(appTrayArray);
    menuappsdiv.innerHTML = '';
    if (menubottombar.classList.contains('btmbartoapptray')) {
        showRecentApps();
    }
});

function showRecentApps() {
    appTrayArray.forEach(appId => {
        const app = apps.find(a => a.id === appId);
        if (!app) return; // Should not happen if data is consistent

        const windowIcon = document.createElement('img');
        windowIcon.className = 'appiconRecent';
        windowIcon.src = app.src;
        windowIcon.dataset.id = `${appId}-RecentIcon`;
        windowIcon.setAttribute('data-name', `RecentIcons`);
        menuappsdiv.appendChild(windowIcon);
        windowIcon.addEventListener('click', (e) => {
            showWindow(appId);
            closeRecetTray();
        });
    });
}

function closeRecetTray() {
    menubottombar.classList.remove('btmbartoapptray');
    menuappsdiv.innerHTML = '';
}

function removeRecentAppsAnimation() {
    let applist = document.querySelectorAll('.appiconRecent');
    applist.forEach((app, index) => {
        setTimeout(() => {
            app.classList.add("closeapptrayAnimateApps");
            setTimeout(() => {
                app.classList.remove("closeapptrayAnimateApps");
            }, 500);
        }, index * 50);
    });
}

const closeRecentAppTray = document.querySelector('.closeapptray');
closeRecentAppTray.addEventListener('click', (e) => {
    let numberOfApps = appTrayArray.length < 20 ? 10 : appTrayArray.length;
    closeRecentAppTray.classList.add('closeapptrayAnimate');
    removeRecentAppsAnimation();
    setTimeout(() => {
        const allWindows = document.querySelectorAll('.window');
        allWindows.forEach(window => {
            window.remove();
        });
        appTrayArray = [];
        closeRecetTray();
        closeRecentAppTray.classList.remove('closeapptrayAnimate');
    }, numberOfApps * 50);
});

/* cursor style */

const allInputText = document.querySelectorAll('input[type="text"],input[type="search"],input[type="password"]');
console.log(allInputText);
allInputText.forEach(ele => {
    ele.addEventListener('mouseover', e => {
        cursor.classList.add('cursortext');
    });
    ele.addEventListener('mouseout', e => {
        cursor.classList.remove('cursortext');
    });
});