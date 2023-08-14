// import pubsub from "./pubsub";

// //
// // This script job is to:
// // Create a deck (The deck holds cards(to-do-list)). Deck represents the whole collection of to-do-list for the project.
// // Each project will have one deck. Each deck will have a set of cards.

// // Const variables
// const deckList = []; // Holds all the decks in one list for searching.
// let currentDeck = null; //Holds the current active deck.

// // Pubsub subscriptions
// pubsub.subscribe("openProject", findDeck);

// function initilization()
// {
//     let storageDeck = localStorage.getItem("deckList");
//     console.log(storageDeck);

//     console.log(deckList);
// }

// // This function handles searching through the deckList for the correct deck.
// function findDeck(projectID)
// {
//     if(deckList.includes(projectID))
//     {
//         console.log("Deck exists already")

//     }
//     else
//     {
//         console.log("Deck does not exist. Creating new deck for project...");
//         let newDeck = new Deck(projectID);
//         deckList.push(newDeck);
//         localStorage.setItem("deckList", JSON.stringify(deckList));
//     }

//     currentDeck = deckList.find((element) => element === projectID ? console.log("Deck Found") : null);

//     pubsub.publish("renderCards", currentDeck);
// }

// // This function handles deleting a deck from the deckList when a project is deleted.
// // pubsub subscription will be required to listen for project deletion.
// function deleteDeck()
// {

// }

// // Quick factory function to create a Deck object.
// function Deck(projectID)
// {
//     // This array will contain all the cards(to-do-lists) for the deck.
//     let cardList = [];

//     return{ projectID: projectID,  cardList: cardList}
// }

// initilization();

