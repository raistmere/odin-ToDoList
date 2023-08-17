// Create a const variable that uses the module pattern
const pubsub = (function()
{
    const calls = {};

    // This function handles subscribing actions to a call
    // actions are functions that will be called when the call
    // is published.
    function subscribe(call, action)
    {
        // If call exists
        if(this.calls[call])
        {
            this.calls[call].push(action);
        }
        else // Go ahead and create a new call property with an array type.
        {
            this.calls[call] = [];
            this.calls[call].push(action);
        }
    }
    
    // This method handles calling all the actions that are contained
    // in a call.
    function publish(call, data)
    {
        // If call exists
        if(this.calls[call])
        {
            console.log(`Publish Call: "${call}"`);
            this.calls[call].forEach(action => 
            {
                action(data);
            });
        }
        else // Go ahead and create a new call property with an array type.
        {
            this.calls[call] = [];
        }
    }

    // This function handles unsubscribing the action from a call.
    // Make sure to use this to clean up the calls list.
    function unsubscribe(call, action)
    {

    }

    return{ calls: calls, publish: publish, subscribe: subscribe};
})();

// Export that pubsub module
export default pubsub;