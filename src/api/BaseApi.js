import axios from 'axios';
import ApiPost from '@/api/ApiPost';
import ApiGet from '@/api/ApiGet';

/**
 * Axios instance with interceptors for request handling.
 * @type {import('axios').AxiosInstance}
 */
const instance = axios.create({});

instance.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return new Promise.reject(error);
    },
);

export default class BaseApi {
    /**
     * Private Axios instance used for making HTTP requests.
     * @private
     * @type {import('axios').AxiosInstance}
     */
    #axiosInstance = instance;

    /**
     * Instance of ApiPost for handling HTTP POST requests.
     * @private
     * @type {ApiPost}
     */
    #apiPost;

    /**
     * Instance of ApiGet for handling HTTP GET requests.
     * @private
     * @type {ApiGet}
     */
    #apiGet;

    constructor() {
        this.apiPost = new ApiPost(this.#axiosInstance);
        this.apiGet = new ApiGet(this.#axiosInstance);
    }


    /**
     * @param {Object} options - Options for the POST request.
     * @param {string} options.url - The URL for the POST request.
     * @param {Object} options.data - The data to be sent with the POST request.
     * @param {Object} options.config - Additional configuration for the POST request.
     * @param {Object} options.formRef - Reference to a form, if applicable.
     * @returns {Promise} - A promise that resolves with the response or rejects with an error.
     */
    post({url = '', data = {}, config = {}, formRef = undefined}) {
        return this.apiPost
            .request({url, data, config})
            .catch((e) => {
                return e;
            })
            .then((response) => {
                return response;
            })
            .catch((reason) => {
                return reason;
            });
    }

    /**
     * @param {Object} options - Options for the GET request.
     * @param {string} options.url - The URL for the GET request.
     * @param {Object} options.params - Query parameters for the GET request.
     * @param {Object} options.formRef - Reference to a form, if applicable.
     * @returns {Promise} - A promise that resolves with the response or rejects with an error.
     */
    get({
            url = '',
            params = {},
            formRef = undefined,
        }) {
        return this.apiGet
            .request({url, params})
            .catch((e) => {

                return e;
            })
            .then((response) => {
                return response;
            })
            .catch((reason) => {

                return reason;
            });
    }
}
