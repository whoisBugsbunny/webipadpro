import { calculatorHtml, calculatorCss, initCalculator } from '../apps/calculator.js';
import { musicHtml, musicCss } from '../apps/music.js';
import { tvHtml, tvCss } from '../apps/tv.js';
import { reminderHtml, reminderCss } from '../apps/reminder.js';
import { booksHtml, booksCss, initBooks } from '../apps/books.js';
import { stocksHtml, stocksCss } from '../apps/stocks.js';
import { appStoreHtml, appStoreCss, initAppStore } from '../apps/appstore.js';
import { shortcutsHtml, shortcutsCss, initShortcuts } from '../apps/shortcuts.js';
import { settingsHtml, settingsCss, initSettings } from '../apps/settings.js';
import { terminalHtml, terminalCss, initTerminal } from '../apps/terminal.js';

// Consolidated array of app data for better maintainability.
// structure
// { id: "a1b2c3", src: "appIcon", label: "appLabel", faIcon: "faIcon", content: "windowContent" ,action:"linkAction", defaultWidth: 800, defaultHeight: 600},
export const apps = [
    { id: "a0d4f5", src: "ios14icons/svg/apple-music-2365226.svg", label: "Music", faIcon: "music", content: { html: musicHtml, css: musicCss }, defaultWidth: 520, defaultHeight: 640 },
    { id: "b1e6g7", src: "ios14icons/svg/apple-tv-1575940.svg", label: "TV", faIcon: "tv", content: { html: tvHtml, css: tvCss }, defaultWidth: 800, defaultHeight: 600 },
    { id: "c2f8h9", src: "ios14icons/svg/reminders-2365242.svg", label: "Reminder", faIcon: "lightbulb", content: { html: reminderHtml, css: reminderCss }, defaultWidth: 400, defaultHeight: 400 },
    { id: "d3g9i1", src: "ios14icons/svg/measure-1575947.svg", label: "Measure", faIcon: "ruler-combined", content: "Measure app not implemented." },
    { id: "e4h1j2", src: "ios14icons/svg/calculator-1575939.svg", label: "Calculator", faIcon: "calculator", content: { html: calculatorHtml, css: calculatorCss, init: initCalculator }, defaultWidth: 350, defaultHeight: 350 },
    { id: "f5i2k3", src: "ios14icons/svg/app-store-2365235.svg", label: "Store", faIcon: "store", content: { html: appStoreHtml, css: appStoreCss, init: initAppStore }, defaultWidth: 700, defaultHeight: 450 },
    { id: "g6j3l4", src: "ios14icons/svg/books-2365234.svg", label: "Books", faIcon: "book", content: { html: booksHtml, css: booksCss, init: initBooks }, defaultWidth: 520, defaultHeight: 520 },
    { id: "h7k4m5", src: "icons/google-firebase.svg", label: "Firebase", action: () => window.open('//www.firebase.com') },
    { id: "i8l5n6", src: "ios14icons/svg/my-shortcuts-1575945.svg", label: "Shortcuts", faIcon: "project-diagram", content: { html: shortcutsHtml, css: shortcutsCss, init: initShortcuts }, defaultWidth: 670, defaultHeight: 460 },
    { id: "j9m6o7", src: "icons/github.svg", label: "Github", faIcon: "github", content: `<iframe class="windowFrame" src="https://github.com/whoisBugsbunny" title="github"></iframe> <a href="https://github.com/whoisBugsbunny" target="_blank" class="btn redirectBtn">Go to Github</a>` },
    { id: "k1n7p8", src: "ios14icons/svg/stocks-2365239.svg", label: "Stocks", faIcon: "chart-line", content: { html: stocksHtml, css: stocksCss } }, // This line was duplicated in the original context, keeping it as is.
    { id: "l2o8q9", src: "ios14icons/svg/translate-2365238.svg", label: "Translate", faIcon: "language", content: "Translate app not implemented." },
    { id: "m3p9r1", src: "icons/ig-instagram.svg", label: "Instagram", faIcon: "instagram", content: "Instagram app not implemented." },
    { id: "n4q1s2", src: "icons/facebook-app.svg", label: "Facebook", action: () => window.open('//www.facebook.com') },
    { id: "o5r2t3", src: "icons/spotify.svg", label: "Spotify", action: () => window.open('//www.spotify.com') },
    { id: "p6s3u4", src: "ios14icons/svg/settings-2365240.svg", label: "Settings", faIcon: "cog", content: { html: settingsHtml, css: settingsCss, init: initSettings }, defaultWidth: 670, defaultHeight: 460 },
    { id: "q7t4v5", src: "icons/linkedin-app.svg", label: "Linkedin", action: () => window.open('//www.linkedin.com') },
    { id: "r8u5w6", src: "icons/imgs/w3schoolslogo.png", label: "w3schools", faIcon: "code", content: '<iframe class="windowFrame" src="https://www.w3schools.com" title="w3schools"></iframe>' },
    { id: "s9v6x7", src: "icons/appleIcons/apple-terminal.png", label: "Terminal", faIcon: "terminal", content: { html: terminalHtml, css: terminalCss, init: initTerminal } },
    { id: "t1w7y8", label: "Empty", empty: true },
    { id: "u2x8z9", label: "Empty", empty: true }
];