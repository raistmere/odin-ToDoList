// JS imports
import pubsub from "./pubsub";

// This script job is to:
// Create a project, store project in a array/data structure
// Then "Pass to render"

const projectList = [];

// Pubsub subscriptions
pubsub.subscribe("createProject", createProject);


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
        // Call render to update the page with the correct projectList
        passToRender();
    }
}


// This function will be subscribed to the "new project create" event
// It will handle what happens when a new project is created.
// Then this will call render projects function
function createProject(projectName)
{
    // Want to make sure that a string was passed through
    // the pubsub.
    if(typeof projectName === 'string')
    {
        console.log("ProjectManager.js 'Action': Creating project....");

        // Generating a quick unique ID using Date.now() + some random-ness. This is a bandaid solution to get everything working.
        let idNumber = (Math.random().toString(16).slice(2) + Date.now()).toString();

        // Create a new project object
        let newProject = new Project(projectName, idNumber);

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

    passToRender();
}

// This function handles deleting a project from the projectList
// Pubsub subcription when the delete project button is clicked
function deleteProject()
{

}


// This function will pass the current updated data of the projects
// to the "update projects render" publish event.
function passToRender()
{
    pubsub.publish("renderProjects", projectList);
}

// Quick factory function to create project objects with data properties
// Currently have project name and a unqiue ID that is given to each project.
function Project(name, id)
{
    return{ name: name, id: id}
}


// We call initilization when this script is loaded at start.
initilization();