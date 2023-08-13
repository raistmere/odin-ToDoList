import pubsub from "./pubsub";

//
// This script job is to:
// Create a deck (The deck holds cards(to-do-list)). Deck represents the whole collection of to-do-list for the project.
// Each project will have one deck. Each deck will have a set of cards.

// Const variables
const deckList = []; // Holds all the decks in one list for searching.

// Pubsub subscriptions
pubsub.subscribe("openProject", findDeck);

// This function handles searching through the deckList for the correct deck.
function findDeck(deckID)
{
    let foundDeck;

    if(deckList.includes(deckID))
    {
        console.log("Deck exists already")

    }
    else
    {
        console.log("Deck does not exist. Creating new deck for project...");
        deckList.push(deckID);
        localStorage.setItem("deckList", JSON.stringify(deckList));
    }

    foundDeck = deckList.find((element) => element === deckID ? console.log("Deck Found") : null);

    pubsub.publish("renderCards", foundDeck);
}


// Quick factory function to create a Deck object.
function Deck(deckID)
{
    
}

