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
pubsub.subscribe("applyEdit",applyCardEdit);
pubsub.subscribe("applyChecklistChange", applyChecklistChange);
pubsub.subscribe("addCheckbox", addCheckbox);


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
    console.log(`Card added to ${currentProject.name} with id#${currentProject.id} and card list of ${currentProject.cardList}`);
    console.log(currentProject.cardList);

    // Generate a new id for the new card
    let newID = generateID();
    
    // Create a new card and add it to the currentProject cardList
    let newCard = new Card(newID, cardName, "N/A", "0/0/00", "Low");
    currentProject.cardList.push(newCard);

    // Update projectList with the new changes to the current project
    // and save it to local storage
    updateProjectList();

    // Then we go ahead and call renderCards
    pubsub.publish("renderCards", currentProject.cardList);
}

// This function will handle adding a new checkbox to the selected card checklist
function addCheckbox()
{
    // console.log("Adding new checkbox to checklist");

    // // Add a new checkbox item to the selectCard checkList
    // selectedCard.checkList.push({state: 0, text: "Test"});

    // // Update the currentProject cardList with the selectCard changes
    // let index = currentProject.cardList.indexOf(currentProject.cardList.find((element) => element.id === selectedCard.id ? element : null));
    // currentProject.cardList.splice(index, 1, selectedCard);

    // // Update projectlist with new changes
    // updateProjectList();
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
    currentProject = projectList.find((element) => element.id === projectID ? element : null);
    console.log(currentProject);
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
    let index = projectList.indexOf(projectList.find((element) => element.id === currentProject.id ? element : null));
    projectList.splice(index, 1, currentProject);

    // Save/upload changes to the localStorage.
    localStorage.setItem("projectList", JSON.stringify(projectList));
}

// This function handles the changes to the selected card
// and updates it then saves it to the localstorage.
function applyCardEdit(data)
{
    console.log("Applying edit changes to the selected card");
    console.log(`New card title: ${data.get("editCardTitle")}`);

    // We make sure to apply the new changes to the selectedCard
    // Apply Card title changes
    selectedCard.title = data.get("editCardTitle");
    // Apply Card description changes
    selectedCard.desc = data.get("editCardDesc");
    // Apply Card due date changes
    selectedCard.due = data.get("editCardDue");
    // Apply Card priority changes
    selectedCard.priority = data.get("editCardPriority");
    // Apply Card checklist changes
    for(const element of data)
    {
        console.log(element);
    }
    for(let i = 0; i < Number(data.get("checklistCount")); i++)
    {
        if(selectedCard.checkList[i])
        {
            selectedCard.checkList[i].text = data.get(`editCheckbox${i}`);
        }
        else
        {
            selectedCard.checkList.push({state: 0, text: data.get(`editCheckbox${i}`)});
        }
    }


    // Apply changes to the selectedCard and update the currentProject cardList
    let index = currentProject.cardList.indexOf(currentProject.cardList.find((element) => element.id === selectedCard.id ? element : null));
    currentProject.cardList.splice(index, 1, selectedCard);

    // Apply changes to the projectList because we made changes to the current project
    updateProjectList();

    // Update the render of the current project card list
    // Update the card display with the new updated card data.
    pubsub.publish("renderCards", currentProject.cardList);
    pubsub.publish("renderCardDisplay", selectedCard);
}

// This function handles the changes made to the checklist of a card.
// This makes sure that update the correct state for each checklist element that changed.
function applyChecklistChange(data)
{
    console.log(`Applying checklist changes to card ${data.id}`);
    // Apply changes to the selectedCard and update the currentProject cardList
    let index = currentProject.cardList.indexOf(currentProject.cardList.find((element) => element.id === selectedCard.id ? element : null));
    currentProject.cardList.splice(index, 1, selectedCard);

    // Apply changes to the projectList because we made changes to the current project
    updateProjectList();
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