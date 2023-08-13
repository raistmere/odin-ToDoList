// JS imports
import pubsub from './pubsub.js'; //pubsub will always be load order -1. Core script that all scripts need for calls.
/* IMPORTANT*/ import render from './render.js'; //MUST BE AT TOP LOAD ORDER. Problem with rendering localstorage on awake.
import deckManager from './deckManager.js';
import projectManager from './projectManager.js';

// CSS imports
import css from './style.css';

// DOM references
const projectsCreateButton = document.querySelector('.projectsCreateButton');


// Event Listeners
projectsCreateButton.addEventListener('click', function(e)
{
    pubsub.publish("createProject", "Project Button");
    console.log(pubsub.calls);
});