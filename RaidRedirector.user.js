// ==UserScript==
// @run-at       document-start
// @name         RaidRedirector
// @namespace    DarkTechnician@RaidRedirector
// @version      0.1
// @description  try to take over the world!
// @author       VaccyC, adapted to TamperMonkey/GreaseMonkey by Dark_Technician
// @updateURL    https://github.com/DarkTechnician/RaidRedirector/RaidRedirector.user.js
// @match        https://www.twitch.tv/*
// @grant        none
// ==/UserScript==

var targetuser = window.location.pathname
if(window.location.search === '?referrer=raid'){
    window.location.replace("https://twitch.tv"+window.location.pathname)
}