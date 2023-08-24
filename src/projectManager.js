// JS imports
import pubsub from "./pubsub";

// This script job is to:
// Create a project, store project in a array/data structure
// Then "Pass to render"

const projectList = [];
let selectedProject = new Project(); // This variable saves the current project id# for lookup
let selectedCard; //Keeps track of our current selected card.

// Pubsub subscriptions
pubsub.subscribe("addProject", addProject);
pubsub.subscribe("addCard", addCard);
pubsub.subscribe("openProject", openProject);
pubsub.subscribe("viewCard", viewCard);
pubsub.subscribe("editCard", editSelectedCard);
pubsub.subscribe("applyEdit",applyCardEdit);
pubsub.subscribe("applyChecklistChange", applyChecklistChange);
pubsub.subscribe("editProjectHeader", editProjectHeader);
pubsub.subscribe("applyProjectHeaderEdit", applyProjectHeaderChange);


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
            selectedProject = projectList[0];
        }

        // Go ahead and do a renderProjects call
        pubsub.publish("renderProjects", projectList);
    }
    else // We go ahead and back a new projectList in localStorage and set the currentProject to default.
    {
        console.log("ProjectList not found: Creating default project");
        addProject("New Project");
        selectedProject = projectList[0];
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

        // Generate new id for project
        let newID = generateID();

        // Create a new project object
        let newProject = new Project(newID, projectName);

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
    console.log(`Card added to ${selectedProject.name} with id#${selectedProject.id} and card list of ${selectedProject.cardList}`);
    console.log(selectedProject.cardList);

    // Generate a new id for the new card
    let newID = generateID();
    
    // Create a new card and add it to the currentProject cardList
    let newCard = new Card(newID, cardName, "N/A", "0/0/00", "Low");
    selectedProject.cardList.push(newCard);

    // Update projectList with the new changes to the current project
    // and save it to local storage
    updateProjectList();

    // Then we go ahead and call renderCards
    pubsub.publish("renderCards", selectedProject.cardList);
}

// This function handles what happens when the user opens a project 
// (clicks on the project button)
function openProject(projectID)
{
    console.log(`Opening project id# ${projectID}`);

    // We make sure to set the currenProject to the project we opened.
    setCurrentProject(projectID);
    console.log("Current Project:" + selectedProject);

    // We call renderCards so we can display the currentProject's cardList
    pubsub.publish("renderCards", selectedProject.cardList);
}

// This function handles what happens when the user clicks
// on a card so they can view it.
function viewCard(card)
{
    // We check to see if a new card was passed. If not then we must want
    // to view the existing selectedCard.
    if(card !== null)
    {
        console.log(`Viewing card: "${card.title}"`);
            // Make sure that we keep track of what card is currently selected.
        selectedCard = card;
    }

    pubsub.publish("renderCardDisplay", selectedCard);
}

// This function handles finding a project from the projectList based on projectID.
// Make sure to convert the data to a project object.
function setCurrentProject(projectID)
{
    console.log(`Finding project: ${projectID} in the projectList.`);
    selectedProject = projectList.find((element) => element.id === projectID ? element : null);
    console.log(selectedProject);
}

// This function allows editing of the current selected project header
// We have to do this because the projectManager.js hold all the current variables we need.
// This means that we need to go through this script and pass the info to the render.
// So the flow is index.js --> projectManager --> Render ---> Then loop back to projectManager if need be.
function editProjectHeader()
{
    if(selectedProject)
    {
        console.log(`Editing the current project header ${selectedProject.title}`);
        pubsub.publish("renderEditProjectHeader", selectedProject.name);
    }   
}

// This function handles what happens when the user wants to 
// edit the selected card.
function editSelectedCard()
{
    if(selectedCard)
    {
        console.log(`Editing the selected card ${selectedCard.title}`);
    
        // Render the edit display
        pubsub.publish("renderEditCardDisplay", selectedCard);
    }
}

function updateProjectList()
{
    // Apply changes to the currentProject to the projectList
    let index = projectList.indexOf(projectList.find((element) => element.id === selectedProject.id ? element : null));
    projectList.splice(index, 1, selectedProject);

    // Save/upload changes to the localStorage.
    localStorage.setItem("projectList", JSON.stringify(projectList));
}

// This function handles the changes to the selected card
// and updates it then saves it to the localstorage.
function applyCardEdit(data)
{
    console.log("Applying edit changes to the selected card");
    console.log(`New card title: ${data.get("editCardTitle")}`);

    // We make sure to apply the new changes to the selectedCard //
    // Apply Card title changes //
    selectedCard.title = data.get("editCardTitle");
    // Apply Card description changes //
    selectedCard.desc = data.get("editCardDesc");
    // Apply Card due date changes //
    selectedCard.due = data.get("editCardDue");
    // Apply Card priority changes // 
    selectedCard.priority = data.get("editCardPriority");
    // Apply Card checklist changes // 
    // We use the dataChecklist to match the selectCard checklist and update the data.
    // If there are any new checkboxes that were added, we want to go ahead and create a new element
    // in the selectCard checklist array.
    let dataChecklist = data.getAll("editCheckbox");
    for(let i = 0; i < Number(data.get("checklistCount")); i++)
    {
        if(selectedCard.checkList[i])
        {
            selectedCard.checkList[i].text = dataChecklist[i];
        }
        else
        {
            console.log(dataChecklist[i]);
            selectedCard.checkList.push({state: 0, text: dataChecklist[i]});
        }
    }
    //We also make sure that if the dataChecklist is less than the selectedCard checklist
    // we would want to pop the selectedCard checklist to match that of the dataChecklist.
    // This means that the user must have removed some checkboxes.
    if(dataChecklist.length < selectedCard.checkList.length)
    {
        for(let i = selectedCard.checkList.length; i > dataChecklist.length; i--)
        {
            console.log(i);
            selectedCard.checkList.pop();
        }
    }


    // Apply changes to the selectedCard and update the currentProject cardList
    let index = selectedProject.cardList.indexOf(selectedProject.cardList.find((element) => element.id === selectedCard.id ? element : null));
    selectedProject.cardList.splice(index, 1, selectedCard);

    // Apply changes to the projectList because we made changes to the current project
    updateProjectList();

    // Update the render of the current project card list
    // Update the card display with the new updated card data.
    pubsub.publish("renderCards", selectedProject.cardList);
    pubsub.publish("renderCardDisplay", selectedCard);
}

// This function handles the changes made to the checklist of a card.
// This makes sure that update the correct state for each checklist element that changed.
function applyChecklistChange(data)
{
    console.log(`Applying checklist changes to card ${data.id}`);
    // Apply changes to the selectedCard and update the currentProject cardList
    let index = selectedProject.cardList.indexOf(selectedProject.cardList.find((element) => element.id === selectedCard.id ? element : null));
    selectedProject.cardList.splice(index, 1, selectedCard);

    // Apply changes to the projectList because we made changes to the current project
    updateProjectList();
}

// This function handles the changes made to the project header
// For now this updates the project name to whatever the name was in the data
function applyProjectHeaderChange(data)
{
    console.log(`Applying project header changes to project ${selectedProject.id}`);

    // Update the selected project name with the changes
    selectedProject.name = data.get('editProjectHeaderInput');

    // Apply these changes to the localStorage
    updateProjectList();

    // Render the project box header with the new changes
    // Then we need to re-render the projectList to update with the new project name
    pubsub.publish("renderProjectHeader", selectedProject.name);
    pubsub.publish("renderProjects", projectList);
}

// This function handles deleting a project from the projectList
// Pubsub subcription when the delete project button is clicked
function deleteProject()
{

}

// This function handles generating a basic id for any object that needs it
function generateID()
{
    // Generating a quick unique ID using Date.now() + some random-ness. This is a bandaid solution to get everything working.
    let idNumber = (Math.random().toString(16).slice(2) + Date.now()).toString();
    return idNumber;
}

// Quick factory function to create project objects with data properties
// Currently have project name and a unqiue ID that is given to each project.
// Starts with a empty cardList array that will contain the cards added to the project.
function Project(id, name, cardList)
{
    cardList = [];
    return { id: id, name: name, cardList: cardList}
}

// Quick factory function that will create card objects to be stored in projects
// and localStorage.
function Card(id, title, description, due, priority)
{
    //This array will store an object that will represent a checkbox properties like
    // have check state and the text description.
    let checkList = []; // ex: {state: 0, text: "Clean your room"}
    return { id: id, title: title, desc: description, due: due, priority: priority, checkList: checkList}
}


// We call initilization when this script is loaded at start.
initilization();