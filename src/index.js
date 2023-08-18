// 
// JS imports
// 
import pubsub from './pubsub.js'; //pubsub will always be load order -1. Core script that all scripts need for calls.
/* IMPORTANT*/ import render from './render.js'; //MUST BE AT TOP LOAD ORDER. Problem with rendering localstorage on awake.
import projectManager from './projectManager.js';
import createForm from './createForm.js';

// 
// CSS imports
// 
import css from './style.css';

// 
// DOM references
// 
const createProjectButton = document.querySelector('.createProjectButton');
const createCardButton = document.querySelector('.createCardButton');

// 
// Event Listeners\\
// 
// Creating a new project event
createProjectButton.addEventListener('click', function(e)
{
    console.log("Create project Button Pressed");
    pubsub.publish("addProject", "New Project");
});
// Creating a new card event
createCardButton.addEventListener('click', function(e)
{
    console.log("Create Card Button Pressed");
    pubsub.publish("addCard", "New Card");
});