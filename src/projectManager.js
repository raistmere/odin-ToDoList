// JS imports
import pubsub from "./pubsub";

// This script job is to:
// Create a project, store project in a array/data structure
// Then "Pass to render"

const projectList = [];
let currentProject = new Project(); // This variable saves the current project id# for lookup
let selectedCard; //Keeps track of our current selected card.

// Pubsub subscriptions
pubsub.subscribe("addProject", addProject);
pubsub.subscribe("addCard", addCard);
pubsub.subscribe("openProject", openProject);
pubsub.subscribe("viewCard", viewCard);
pubsub.subscribe("editCard", editSelectedCard);
pubsub.subscribe("applyEdit",updateCard);


// This function handles initilization for this script
function initilization()
{
    // We want to make sure to get the correct localstorage data.
    // Then we go ahead and load it up if there is projectList data to load.
    if(localStorage.getItem("projectList"))
    {
        // Add data to the projectList
        let data = JSON.parse(localStorage.getItem("projectList"));
        data.forEach(element => {
            projectList.push(element);
        });
        console.log(projectList);

        // Set current project default to project 1
        // Else create a default project and set current to that
        if(projectList[0] !== null)
        {
            console.log("ProjectList found: Setting default project");
            currentProject = projectList[0];
        }

        // Go ahead and do a renderProjects call
        pubsub.publish("renderProjects", projectList);
    }
    else // We go ahead and back a new projectList in localStorage and set the currentProject to default.
    {
        console.log("ProjectList not found: Creating default project");
        addProject("New Project");
        currentProject = projectList[0];
    }
}


// This function will be subscribed to the "addProject" event call
// This will handle adding the new project to the projectList.
// The project will create a default "New Project".
// Then this will call render projects function
function addProject(projectName)
{
    // Want to make sure that a string was passed through
    // the pubsub.
    if(typeof projectName === 'string')
    {
        console.log("ProjectManager.js 'Action': Creating project....");

        // Generating a quick unique ID using Date.now() + some random-ness. This is a bandaid solution to get everything working.
        let idNumber = (Math.random().toString(16).slice(2) + Date.now()).toString();

        // Create a new project object
        let newProject = new Project(idNumber, projectName);

        // We then pass the newProject to the projectList.
        projectList.push(newProject);

        // We make sure to convert the new updated projectList to
        // our localstorage.
        localStorage.setItem("projectList", JSON.stringify(projectList));
    }
    else
    {
        console.log("ERROR: Project name is not of type 'string'");
    }

    console.log(projectList);

    // Go ahead and do a renderProjects call
    pubsub.publish("renderProjects", projectList);
}

// This function will handle adding a card to the current selected project.
function addCard(cardName)
{
    console.log(`Card added to ${currentProject.name} with id#${currentProject.id} and card list of ${currentProject.cardList}`);
    console.log(currentProject.cardList);
    // Create a new card and add it to the currentProject cardList
    let newCard = new Card(0, cardName, "N/A");
    currentProject.cardList.push(newCard);

    // Apply changes to the currentProject to the projectList
    let index = projectList.indexOf(projectList.find((element) => element.id === currentProject.id ? element : null));
    projectList.splice(index, 1, currentProject);
    
    // Save/upload changes to the localStorage.
    localStorage.setItem("projectList", JSON.stringify(projectList));

    // Then we go ahead and call renderCards
    pubsub.publish("renderCards", currentProject.cardList);
}

// This function handles what happens when the user opens a project 
// (clicks on the project button)
function openProject(projectID)
{
    console.log(`Opening project id# ${projectID}`);

    // We make sure to set the currenProject to the project we opened.
    setCurrentProject(projectID);
    console.log("Current Project:" + currentProject);

    // We call renderCards so we can display the currentProject's cardList
    pubsub.publish("renderCards", currentProject.cardList);
}

// This function handles what happens when the user clicks
// on a card so they can view it.
function viewCard(card)
{
    console.log(`Viewing card: "${card.title}"`);

    // Make sure that we keep track of what card is currently selected.
    selectedCard = card;

    pubsub.publish("renderCardDisplay", selectedCard);
}

// This function handles finding a project from the projectList based on projectID.
// Make sure to convert the data to a project object.
function setCurrentProject(projectID)
{
    console.log(`Finding project: ${projectID} in the projectList.`);
    currentProject = projectList.find((element) => element.id === projectID ? element : null);
    console.log(currentProject);
}

// This function handles what happens when the user wants to 
// edit the selected card.
function editSelectedCard()
{
    console.log("Editing the selected card...")

    // Render the edit display
    pubsub.publish("renderEditCardDisplay", selectedCard);
}

// This function handles the changes to the selected card
// and updates it then saves it to the localstorage.
function updateCard(data)
{
    console.log("Applying edit changes to the selected card");
    console.log(`New card title: ${data.get("editCardTitle")}`);
    
}

// This function handles deleting a project from the projectList
// Pubsub subcription when the delete project button is clicked
function deleteProject()
{

}

// Quick factory function to create project objects with data properties
// Currently have project name and a unqiue ID that is given to each project.
// Starts with a empty cardList array that will contain the cards added to the project.
function Project(id, name, cardList)
{
    cardList = [];
    return { id: id, name: name, cardList: cardList}
}

function Card(id, title, description)
{
    return { id: id, title: title, desc: description}
}


// We call initilization when this script is loaded at start.
initilization();