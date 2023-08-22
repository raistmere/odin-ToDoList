// JS imports
import pubsub from './pubsub.js';

// This script job is to:
// update and render the web elements on the page

// DOM references
const projectListBox = document.querySelector('.projectsListBox');
const cardListBox = document.querySelector('.cardListBox');
const normalCardDisplayBox = document.querySelector('.normalCardDisplayBox');
const editCardDisplayBox = document.querySelector('.editCardDisplayBox');
const normCardTitle = document.querySelector('.normCardTitle');
const normCardDesc = document.querySelector('.normCardDesc');
const normCardDue = document.querySelector('.normCardDue');
const normCardPriority = document.querySelector('.normCardPriority');
const normCardChecklist = document.querySelector('.normCardChecklist');
const editCardTitle = document.querySelector('#editCardTitle');
const editCardDesc = document.querySelector('#editCardDesc');
const editCardDue = document.querySelector('#editCardDue');
const editCardPriority = document.querySelector('#editCardPriority');
const editCardChecklist = document.querySelector('.editCardChecklist');

// Pubsub subscriptions
pubsub.subscribe("renderProjects", renderProjectList);
pubsub.subscribe("renderCards", renderCardList);
pubsub.subscribe("renderCardDisplay", renderCardDisplay);
pubsub.subscribe("renderEditCardDisplay", renderEditCardDisplay);


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
                    console.log(`Card button was clicked. Calling "viewCard".`);
                    pubsub.publish("viewCard", card);
                    // pubsub.publish("renderCardDisplay", card);
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
// It will render all the card information to the card display.
function renderCardDisplay(card)
{
    console.log(`Rendering "${card.title}" to card display`);

    // Render card title to the display
    normCardTitle.textContent = card.title;

    // Render card description to the display
    normCardDesc.textContent = card.desc;

    // Render card due date to the display
    normCardDue.textContent = card.due;

    // Render card priority to the display
    normCardPriority.textContent = card.priority;

    // Before we begin, we will clear the checklist to prevent any duplicates.
    // or elements that aren't suppose to be in the checklist.
    normCardChecklist.innerHTML = "";
    // Render card checklist to the display
    for(let i = 0; i < card.checkList.length; i++)
    {
        // We make sure to go through the checklist array and create a new checkbox
        // for each element in the array till we have the full checklist in the display.

        // Create a new checkbox div
        let newDiv = document.createElement('div');
        newDiv.classList.add("Checkbox");

        // Create a new checkbox input element
        let newCheckbox = document.createElement('input');
        newCheckbox.setAttribute('type', 'checkbox');
        newCheckbox.setAttribute('id',`cb${i+1}`);
        newCheckbox.checked = card.checkList[i].state;

        // Make sure to add an eventlistener when there is a change in the checkbox
        newCheckbox.addEventListener('click', function(e)
        {
            console.log(`checkbox ${newCheckbox.getAttribute('id')} state has changed`);
            console.log(card.checkList[i].state);
            card.checkList[i].state === 0 ? card.checkList[i].state = 1 : card.checkList[i].state = 0;
            console.log(card.checkList[i].state);

            // Pubsub call when this happens to update the card checklist.
            pubsub.publish("applyChecklistChange", card);
        })

        // Create a new label for that checkbox input element
        let newText = document.createElement('label');
        newText.setAttribute('for', `cb${i+1}`);
        newText.textContent = card.checkList[i].text;

        // Append both checkbox element and text element to div
        newDiv.appendChild(newCheckbox);
        newDiv.appendChild(newText);

        // Append the div to the checklist element
        normCardChecklist.appendChild(newDiv);
    }



    // We make sure that the normal card display is active
    // and not the edit card display.
    editCardDisplayBox.classList.add('hidden');
    normalCardDisplayBox.classList.remove('hidden');
}

// This function handles rendering the edit form for the currently selected card.
// This just handles rendering the form and not the editing.
function renderEditCardDisplay(card)
{
    if(card)
    {
        console.log(`Rendering "${card.title}" to card display for editing`);
        console.log(card);

        // We render the selected card values to the correct place on the display.
        editCardTitle.setAttribute('value', card.title);
        editCardDesc.setAttribute('value', card.desc);
        editCardDue.setAttribute('value', card.due);

        // This lets us make sure the priority is on the correct option.
        let index = -1;
        for(const option of editCardPriority.options)
        {
            index++;
            if(option.value === card.priority)
            {
                editCardPriority.selectedIndex = index;
            }
        }

        // This lets us change the label text for each checkbox in the checklist
        // by converting all the labels into input type text elements.
        // First we clear the editCardChecklist div element so we don't run into duplicates
        editCardChecklist.innerHTML = "";
        for(let i = 0; i < card.checkList.length; i++)
        {
            // Create a new element that will represent the checkbox label for editing
            let newElement = document.createElement('input');
            newElement.classList.add('editCheckbox');
            newElement.setAttribute("id", `editCheckbox${i}`);
            newElement.setAttribute("name", `editCheckbox${i}`);
            newElement.value = card.checkList[i].text;

            // Create a new label for that text input element
            let newText = document.createElement('label');
            newText.setAttribute('for', `editCheckbox${i}`);
            newText.textContent = `Checkbox #${i+1}`;

            // Append it to the editCardChecklist for display
            editCardChecklist.appendChild(newText);
            editCardChecklist.appendChild(newElement);
        }


        // Display editCardDisplay and hide normalCardDisplay
        editCardDisplayBox.classList.remove('hidden');
        normalCardDisplayBox.classList.add('hidden');
    }
}

