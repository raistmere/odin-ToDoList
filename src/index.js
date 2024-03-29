// 
// JS imports
// 
import pubsub from './pubsub.js'; //pubsub will always be load order -1. Core script that all scripts need for calls.
/* IMPORTANT*/ import render from './render.js'; //MUST BE AT TOP LOAD ORDER. Problem with rendering localstorage on awake.
import projectManager from './projectManager.js';

// 
// CSS imports
// 
import css from './style.css';

// 
// DOM references
// 
const createProjectButton = document.querySelector('.createProjectButton');
const editProjectHeaderButton = document.querySelector('.editProjectHeaderButton');
const createCardButton = document.querySelector('.createCardButton');
const editCardButton = document.querySelector('.editCardButton');
const applyEditButton = document.querySelector('.applyEditButton');
const editCardForm = document.querySelector('.editCardForm');
const cancelEditButton = document.querySelector('.cancelEditButton');
const newCheckboxButton = document.querySelector('.newCheckboxButton');
const applyEditProjectHeaderButton = document.querySelector('.applyEditProjectHeaderButton');
const editProjectBoxHeaderForm = document.querySelector('.editProjectBoxHeaderForm');
const deleteProjectButton = document.querySelector('.deleteProjectButton');
const deleteCardButton = document.querySelector('.deleteCardButton');

// 
// Event Listeners\\
// 

// Create project button
createProjectButton.addEventListener('click', function(e)
{
    console.log("Create project button pressed");
    pubsub.publish("addProject", "New Project");
});
// Edit selected project header
editProjectHeaderButton.addEventListener('click', function(e)
{
    console.log("Edit project header button pressed");
    pubsub.publish("editProjectHeader", null);
});
// Create card button
createCardButton.addEventListener('click', function(e)
{
    console.log("Create card button pressed");
    pubsub.publish("addCard", "New Card");
});
// Edit card Button
editCardButton.addEventListener('click', function(e)
{
    console.log("Editing card button pressed");
    pubsub.publish("editCard", "Edit Card");
})
// Apply Edit Button
applyEditButton.addEventListener('click', function()
{
    console.log("Apply edit button pressed");

    // Grab the form data from editCardForm
    const data = new FormData(editCardForm);

    // Then use that form data and pass it to the publish call: applyEdit
    // Those that are subscribed will have the form data now.
    pubsub.publish("applyEdit", data);

    // After everything is done, we want to make sure that we reset the form.
    // If we don't, there is a bug where the old values remain when editing a new card. 
    // It's weird but reset() fixes that.
    editCardForm.reset();
})
// Cancel Edit Button
cancelEditButton.addEventListener('click', function(e)
{
    console.log("Cancel edit button pressed");
    // We use the viewCard call so we can just refresh the card display
    // with the current selected card. We pass the null so we make sure that we don't want
    // to view a new card but rather view the existing selected card.
    pubsub.publish("viewCard", null);
})
newCheckboxButton.addEventListener('click', function(e)
{
    console.log("New checkbox button pressed");

    pubsub.publish("renderNewCheckbox", null);
})
applyEditProjectHeaderButton.addEventListener('click', function(e)
{
    console.log("applyEditProjectHeaderButton pressed");

    const data = new FormData(editProjectBoxHeaderForm);

    pubsub.publish("applyProjectHeaderEdit", data);
});
deleteProjectButton.addEventListener('click', function(e)
{
    console.log("Delete project button pressed");

    pubsub.publish("deleteProject", null);
});
deleteCardButton.addEventListener('click', function(e)
{
    console.log("Delete card button pressed");
    pubsub.publish("deleteCard", null);
});


