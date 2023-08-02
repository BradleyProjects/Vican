/*================================================================================
	Item Name: Materialize - Material Design Admin Template
	Version: 5.0
	Author: PIXINVENT
	Author URL: https://themeforest.net/user/pixinvent/portfolio
================================================================================

NOTE:
------
PLACE HERE YOUR OWN JS CODES AND IF NEEDED.
WE WILL RELEASE FUTURE UPDATES SO IN ORDER TO NOT OVERWRITE YOUR CUSTOM SCRIPT IT'S BETTER LIKE THIS. */

window.utils = {};

// Functions

window.utils.isDOM = function (Obj) {
    return Obj instanceof Element;
}

window.utils.isArray = function (Obj) {
    return Obj instanceof Array;
}

window.utils.isString = function (Obj) {
    return Obj instanceof String;
}

window.utils.activateField = function (field) {
    const BLUR_EVENT = new Event("blur");
    const FOCUS_EVENT = new Event("focus");
    let element = ( window.utils.isDOM(field) ) ? field : document.querySelector(field);

    element.dispatchEvent( FOCUS_EVENT );

    if ("createEvent" in document && element.getAttribute('type') === 'number') {
        let change = document.createEvent("HTMLEvents");
        change.initEvent("change", false, true);
        element.dispatchEvent(change);
    }

    element.dispatchEvent( BLUR_EVENT );
}

window.utils.getArrayOfElementsBySelectors = function (selectors) {
    let listOfElements;

    if(window.utils.isArray(selectors)){
        let selector = selectors.join(',');
        listOfElements = document.querySelectorAll(selector);
    }else if(window.utils.isString(selectors)){
        listOfElements = document.querySelectorAll(selectors);
    }else{
        listOfElements = document.querySelectorAll(selectors);
    }

    return Array.from(listOfElements);
}

window.utils.activateListOfFields = function (fields) {
    let listOfFields = window.utils.getArrayOfElementsBySelectors(fields);

    listOfFields.forEach(function (field) {
        window.utils.activateField(field);
    })
}

window.utils.activateListOfFormFields = function (formSelector, typeOfFields = ['input']) {
    let selector = [], listOfFields;

    typeOfFields.forEach(function (field) {
        selector.push(`${formSelector} ${field}`);
    })
    listOfFields = window.utils.getArrayOfElementsBySelectors(selector);

    listOfFields.forEach(function (field) {
        window.utils.activateField(field);
    })
}

// do after page loaded
$(function (){
    $('.select-wrapper input.select-dropdown.dropdown-trigger').on('focus', function() {
        $(this).blur();
    })

    setInterval(() => {
        $('.tox-notification__dismiss').click();
    }, 500);
});

window.utils.hasIframeAsChildren = function (selector) {
    let children;
    let result = false;

    if(window.utils.isDOM(selector)){
        children = [...selector.children];
    }else{
        children = [...document.querySelector(selector).children];
    }

    children.every( child => {
        let isIframe = child.tagName.toLowerCase() === 'iframe';

        if(isIframe){
            result = true;
        }

        return !isIframe;
    })

    return result;
}

window.utils.replaceHtmlInsertion = function (className = 'html-insertion') {
    let elements = [...document.querySelectorAll(`.${className}`)];
    elements.forEach( element => {
        if(!window.utils.hasIframeAsChildren(element)){
            let content = element.innerHTML;
            window.utils.insertIframeWithContent(element, content);
        }
    });
}

window.utils.resizeHtmlInsertion = function (className = 'html-insertion') {
    let elements = [...document.querySelectorAll(`.${className}`)];
    elements.forEach( element => {
        window.utils.resizeIframe(element.querySelector('iframe'));
    });
}

window.utils.getIframeDocument = function (iframe) {
    let y = (iframe.contentWindow || iframe.contentDocument);
    if (y.document){
        y = y.document;
    }

   return y;
}

window.utils.resizeIframe = function (iframe) {
    let iframeDocument = window.utils.getIframeDocument(iframe);
    let iframeBody = iframeDocument.body;
    let iframeHtml = iframeBody.parentNode;

    let height = iframeHtml.offsetHeight + ( 1 + iframeHtml.offsetHeight - iframeBody.offsetHeight );
    iframe.style.cssText = `height : ${height}px!important`;
}

window.utils.insertIframeWithContent = function (selector, data = '') {
    let x = document.createElement('iframe');

    if(window.utils.isDOM(selector)){
        selector.innerHTML = '';
        selector.appendChild(x);
    }else{
        let parentSelector = document.querySelector(selector);
        parentSelector.innerHTML = '';
        parentSelector.appendChild(x);
    }

    let y = window.utils.getIframeDocument(x);

    y.open();
    y.write(`<div style="padding: 1px;">${data}</div>`);
    y.close();

    y.body.style.cssText = `
        height:-webkit-fit-content!important;
        height:-moz-fit-content!important;
        height:fit-content!important;
        margin: 0;
    `;

    y.body.parentNode.style.cssText = `
        height:-webkit-fit-content!important;
        height:-moz-fit-content!important;
        height:fit-content!important;
        width:-webkit-fit-content!important;
        width:-moz-fit-content!important;
        width:fit-content!important;
        overflow-y: clip;
        margin: 0;
    `;

    // y.head.innerHTML = `
    //     <link rel="stylesheet" type="text/css" href="/app-assets/css/custom/custom.css">
    // `;

    window.utils.resizeIframe(x);
}

class Filter {
    #name

    constructor(filterName) {
        this.#name = filterName
    }

    get state(){
        let storedState = window.sessionStorage.getItem(`${this.#name}-filter-state`);
        return storedState ? JSON.parse(storedState) : null;
    }

    set state(state){
        let preparedState = JSON.stringify(state);
        window.sessionStorage.setItem(`${this.#name}-filter-state`, preparedState);
    }
}

window.utils.getNextDayOfWeek = function (date, dayOfWeek) {
    // Code to check that date and dayOfWeek are valid left as an exercise ;)

    var resultDate = new Date(date.getTime());

    resultDate.setDate(date.getDate() + (7 + dayOfWeek - date.getDay()) % 7);

    return resultDate;
}

window.utils.insertUrlParam = function (key, value) {
    if (history.pushState) {
        let searchParams = new URLSearchParams(window.location.search);
        searchParams.set(key, value);
        let newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?' + searchParams.toString();
        window.history.pushState({path: newUrl}, document.title, newUrl);
    }else{
        console.error('history.pushState not exists')
    }
}

window.utils.removeUrlParam = function (key) {
    if (history.pushState) {
        let searchParams = new URLSearchParams(window.location.search);
        searchParams.delete(key);
        let newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?' + searchParams.toString();
        window.history.pushState({path: newUrl}, document.title, newUrl);
    }else{
        console.error('history.pushState not exists')
    }
}

window.utils.getUrlParams = function () {
    const urlSearchParams = new URLSearchParams(window.location.search);
    return  Object.fromEntries(urlSearchParams.entries());
}

//gets the type of browser
window.utils.detectBrowser = function () {
    if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ) {
        return 'Opera';
    } else if(navigator.userAgent.indexOf("Chrome") != -1 ) {
        return 'Chrome';
    } else if(navigator.userAgent.indexOf("Safari") != -1) {
        return 'Safari';
    } else if(navigator.userAgent.indexOf("Firefox") != -1 ){
        return 'Firefox';
    } else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) {
        return 'IE';//crap
    } else {
        return 'Unknown';
    }
}

window.utils.activateAllFields = function () {
    window.utils.activateListOfFields(['input','textarea','select']);
}

window.utils.setResetFieldsActivator = function () {
    let listOfButtons = window.utils.getArrayOfElementsBySelectors("button[type='reset']");

    listOfButtons.forEach(function (button) {
        function delayedActiveFields(){
            setTimeout(window.utils.activateAllFields, 0);
        }
        button.removeEventListener('click', delayedActiveFields);
        button.addEventListener('click', delayedActiveFields);
    })
}

window.utils.doSomeIfUsingFirefoxBrowser = function (){
    if(window.utils.detectBrowser() === "Firefox"){
        //todo
    }
}

window.addEventListener('load', window.utils.activateAllFields);
window.addEventListener('load', ()=>{ setTimeout( ()=>{window.utils.activateAllFields();}, 0) });
window.addEventListener('load', window.utils.setResetFieldsActivator);
window.addEventListener('load', window.utils.doSomeIfUsingFirefoxBrowser);

window.utils.customVariables = {};

// Variables

window.utils.customVariables.ClientTimeZoneOffSet = -(new Date().getTimezoneOffset() / 60);

// Prototypes Modification

Date.prototype.addHours = function(h) {
    this.setTime(this.getTime() + (h*60*60*1000));
    return this;
}