/**
 * @class ApiPost
 */
export default class ApiPost {
    #axiosInstance;

    /**
     * @constructor
     * @param {Object} axiosInstance - The Axios instance to be used for requests.
     */
    constructor(axiosInstance) {
        this.axiosInstance = axiosInstance;
    }

    /**
     * @method request
     * @param {Object} options - The options for the POST request.
     * @param {string} options.url - The URL for the POST request.
     * @param {Object} options.data - The data to be sent in the request body.
     * @param {Object} options.config - Additional configuration for the request.
     * @returns {Promise} A Promise that resolves to the response or rejects with an error.
     */
    request({url = '', data = {}, config = {}}) {
        return this.axiosInstance.post(url, {...data}, {...config});
    }
}
