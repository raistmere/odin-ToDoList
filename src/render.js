// JS imports
import pubsub from './pubsub.js';

// This script job is to:
// update and render the web elements on the page

// DOM references
const projectListBox = document.querySelector('.projectsListBox');
const cardListBox = document.querySelector('.cardListBox');
const cardDisplay = document.querySelector('.cardDisplay');

// Pubsub subscriptions
pubsub.subscribe("renderProjects", renderProjectList);
pubsub.subscribe("renderCards", renderCardList);
pubsub.subscribe("renderCardDisplay", renderCardDisplay)


// This function handles the rendering of the projectlist on the page.
function renderProjectList(projectList)
{
    if(Array.isArray(projectList))
    {
        console.log("render.js 'Action': Rendering projects....");

        // Clear the box and re-render the whole list
        projectListBox.innerHTML = ' ';

        // We loop through each project in the projectList and render it
        // as a button.
        projectList.forEach(project => {

            // Debug console
            console.log("Creating new button element for projectList");

            // Create a new project element
            let newElement = document.createElement('button');
            newElement.classList.add("projectButton")
            newElement.textContent = project.name;

            // Make sure to add an eventlistener on click that will
            // call a pubsub publish for opening the project.
            newElement.addEventListener('click', function(e)
            {
                pubsub.publish("openProject", project.id);
            });

            // We finally add the new element to the projectList.
            projectListBox.appendChild(newElement);
        });
    }
    else
    {
        console.log("ERROR: projectList is not of type 'Array'");
    }
}

// This function handles the rendering of the cardList on the page.
// cardList will be the current project's to-do-list lists if that makes sense.
function renderCardList(cardList)
{
    console.log(`render.js 'Action': Rendering cards from current project`);

    // Clear the box and re-render the whole list
    cardListBox.innerHTML = ' ';

    // Check if cardList is an array then go ahead and see if we can render cards.
    if(Array.isArray(cardList))
    {
        if(cardList.length === 0)
        {
            console.log("Current project contains no cards");
        }
        else
        {
            cardList.forEach(card => {

                // Debug console
                console.log("Rendering card:")
                console.log(card);

                // Create a new card element
                let newElement = document.createElement('button');
                newElement.classList.add('cardButton');
                newElement.textContent = card.title;

                // Make sure to add an eventlistener on click that will
                // call a pubsub publish for opening the project.
                newElement.addEventListener('click', function(e)
                {
                    console.log("Opening card");
                    pubsub.publish("renderCardDisplay", card);
                });

                // Append new element to the cardListBox
                cardListBox.appendChild(newElement);
            });
        }
    }
    else
    {
        console.log("ERROR: cardList is not of type 'Array'");
    }
}

// This function handles rendering the selected card to the card display element.
// It will render all the card information to the card display and allow for
// the user to edit the contents of the card and save those changes to the card.
function renderCardDisplay(card)
{
    console.log(`Rendering "${card.title}" to card display`);

    // Clear the box and re-render the whole list
    cardDisplay.innerHTML = ' ';

    // Create a new element for the card title
    let titleElement = document.createElement('div')
    titleElement.classList.add('cardTitle');
    titleElement.textContent = card.title;

    // Append to card display element
    cardDisplay.appendChild(titleElement);
}

// This function handles rendering the edit form for the currently selected card.
function renderEditCardDisplay(card)
{
    console.log(`Rendering "${card.title}" to card display for editing`);

    // Clear the box and re-render the whole list
    cardDisplay.innerHTML = ' ';

    // Create a new element for the card title
    let titleElement = document.createElement('input');
    titleElement.classList.add('cardTitle')
    titleElement.setAttribute("type", "text");
    titleElement.setAttribute("value", card.title);

    // Append to card display element
    cardDisplay.appendChild(titleElement);
}

