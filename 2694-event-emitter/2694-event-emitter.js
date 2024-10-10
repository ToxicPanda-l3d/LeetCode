class EventEmitter {
    constructor() {
        this.events = new Map(); // Map to hold event names and their corresponding callbacks
    }

    /**
     * Subscribes a callback to an event.
     * @param {string} eventName - The name of the event to subscribe to.
     * @param {Function} callback - The callback function to be called when the event is emitted.
     * @return {Object} - An object with an unsubscribe method.
     */
    subscribe(eventName, callback) {
        // Initialize the event's listeners array if it doesn't exist
        if (!this.events.has(eventName)) {
            this.events.set(eventName, []);
        }
        
        const eventCallbacks = this.events.get(eventName);
        eventCallbacks.push(callback); // Add the new callback to the list

        // Return an object containing the unsubscribe method
        return {
            unsubscribe: () => {
                // Find the index of the callback and remove it
                const index = eventCallbacks.indexOf(callback);
                if (index !== -1) {
                    eventCallbacks.splice(index, 1); // Remove the callback from the array
                }
                return undefined; // Explicitly return undefined
            }
        };
    }

    /**
     * Emits an event, calling all subscribed callbacks with the provided arguments.
     * @param {string} eventName - The name of the event to emit.
     * @param {Array} args - The arguments to pass to the callback functions.
     * @return {Array} - An array of results returned by the callbacks.
     */
    emit(eventName, args = []) {
        const results = []; // Array to hold the results of the callbacks
        const eventCallbacks = this.events.get(eventName) || []; // Get callbacks for the event

        // Call each callback with the provided arguments and collect the results
        for (const callback of eventCallbacks) {
            results.push(callback(...args)); // Invoke callback and collect the result
        }

        return results; // Return the results of the emitted event
    }
}

/**
 * Example usage:
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99; }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * console.log(emitter.emit('onClick')); // Output: [99]
 * console.log(sub.unsubscribe()); // Output: undefined
 * console.log(emitter.emit('onClick')); // Output: []
 */
