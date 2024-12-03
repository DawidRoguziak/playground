/**
 * @class
 */
export default  class SimplyEventBus {
    /**
     * @type {Object.<string, Function[]>}
     * @private
     */
    #events;

    /**
     * @constructor
     */
    constructor() {
        this.#events = {};
    }

    /**
     * @param {string} event
     * @param {Function} callback
     */
    subscribe(event, callback) {
        if (!this.#events[event]) {
            this.#events[event] = [];
        }

        this.#events[event].push(callback);
    }

    /**
     * @param {string} event
     * @param {*} [data]
     */
    trigger(event, data) {
        const eventCallbacks = this.#events[event];
        if (eventCallbacks) {
            eventCallbacks.forEach((callback) => {
                callback(data);
            });
        }
    }

    /**
     * @param {string} event
     * @param {Function} callback
     */
    unsubscribe(event, callback) {
        const eventCallbacks = this.#events[event];
        if (eventCallbacks) {
            this.#events[event] = eventCallbacks.filter((cb) => cb !== callback);
        }
    }
}