// JS imports
import pubsub from './pubsub.js';
/* IMPORTANT*/ import render from './render.js'; //MUST BE AT TOP LOAD ORDER. Problem with rendering localstorage on awake.
import cardManager from './cardManager.js';
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