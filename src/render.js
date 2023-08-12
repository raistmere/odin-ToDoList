// JS imports
import pubsub from './pubsub.js';

// This script job is to:
// update and render the web elements on the page

// DOM references
const projectListBox = document.querySelector('.projectsListBox');

// Pubsub subscriptions
pubsub.subscribe("renderProjects", renderProjects);
pubsub.subscribe("openProject", renderCards);


// This function handles the rendering of the projectlist on the page.
function renderProjects(projectList)
{
    if(Array.isArray(projectList))
    {
        console.log("render.js 'Action': Rendering projects....");

        // Clear the box and re-render the whole list
        projectListBox.innerHTML = ' ';

        // We loop through each project in the projectList and render it
        // as a button.
        projectList.forEach(project => {
            console.log("Creating new button element for projectList");

            let newElement = document.createElement('button');
            newElement.classList.add("projectButton")
            newElement.textContent = "Project Button";

            // Make sure to add an eventlistener on click that will
            // call a pubsub publish for opening the project.
            newElement.addEventListener('click', function(e)
            {
                pubsub.publish("openProject", null);
                console.log(pubsub.calls);
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
function renderCards(cardList)
{
    console.log("render.js 'Action': Rendering cards....");
}
