export default class ApiGet {
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
     * @param {Object} options - The options for the GET request.
     * @param {string} options.url - The URL for the GET request.
     * @param {Object} [options.params] - The parameters to be included in the request URL.
     * @returns {Promise} A Promise that resolves to the response or rejects with an error.
     */
    request({url = '', params = undefined}) {
        return this.axiosInstance.get(url, {...params});
    }
}
