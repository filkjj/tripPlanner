const mapboxgl = require("mapbox-gl");

const links = {
    activity : "url(http://i.imgur.com/WbMOfMl.png)",
    hotel : "url(http://i.imgur.com/D9574Cu.png)",
    restaurant : "url(http://i.imgur.com/cqR6pUI.png)"
}

const domMaker = (thingToDo) =>{
    const markerDomEl = document.createElement("div"); // Create a new, detached DIV
    markerDomEl.style.width = "32px";
    markerDomEl.style.height = "39px";
    markerDomEl.style.backgroundImage = links[thingToDo];
    return markerDomEl;
}

const markMaker = (lang, marker) =>{
    return new mapboxgl.Marker(marker).setLngLat(lang);
}

const markerFactory = (lang, typeOfThing) =>{
    const something = markMaker(lang,domMaker(typeOfThing));
    
    return something;
}


module.exports = markerFactory;