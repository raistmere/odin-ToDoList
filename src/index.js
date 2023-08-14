// JS imports
import pubsub from './pubsub.js'; //pubsub will always be load order -1. Core script that all scripts need for calls.
/* IMPORTANT*/ import render from './render.js'; //MUST BE AT TOP LOAD ORDER. Problem with rendering localstorage on awake.
import deckManager from './deckManager.js';
import projectManager from './projectManager.js';

// CSS imports
import css from './style.css';

// DOM references
const createProjectButton = document.querySelector('.createProjectButton');
const createCardButton = document.querySelector('.createCardButton');


// Event Listeners
createProjectButton.addEventListener('click', function(e)
{
    pubsub.publish("createProject", "Project Button");
    console.log(pubsub.calls);
});
createCardButton.addEventListener('click', function(e)
{
    console.log("Create Card Button Pressed");
});