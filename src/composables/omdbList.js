import {reactive, ref} from "vue";
import BaseApi from "@/api/BaseApi";

/**
 * Represents information about a movie.
 * @typedef {Object} MovieData
 * @property {string} Title - The title of the movie.
 * @property {string} Year - The release year of the movie.
 * @property {string} Rated - The movie's rating.
 * @property {string} Released - The release date of the movie.
 * @property {string} Runtime - The duration of the movie.
 * @property {string} Genre - The genre(s) of the movie.
 * @property {string} Director - The director(s) of the movie.
 * @property {string} Writer - The writer(s) of the movie.
 * @property {string} Actors - The main actors in the movie.
 * @property {string} Plot - A brief description of the movie's plot.
 * @property {string} Language - The language(s) in which the movie is available.
 * @property {string} Country - The country or countries where the movie was produced.
 * @property {string} Awards - Information about awards won or nominated for the movie.
 * @property {string} Poster - URL of the movie poster image.
 * @property {Array} Ratings - An array of rating objects.
 * @property {string} Ratings[].Source - The source of the rating (e.g., "Internet Movie Database").
 * @property {string} Ratings[].Value - The actual rating value.
 * @property {string} Metascore - The Metascore rating of the movie.
 * @property {string} imdbRating - The IMDb rating of the movie.
 * @property {string} imdbVotes - The number of IMDb votes for the movie.
 * @property {string} imdbID - The IMDb ID of the movie.
 * @property {string} Type - The type of the content (e.g., "movie").
 * @property {string} DVD - The DVD release date of the movie.
 * @property {string} BoxOffice - The box office earnings of the movie.
 * @property {string} Production - Information about the production of the movie.
 * @property {string} Website - URL of the movie's official website.
 * @property {string} Response - Boolean indicating the success of the API response (e.g., "True").
 */

export default function () {
    const api = new BaseApi();

    /**
     * @property {boolean} isLoading - Indicates whether the movie list is currently loading.
     * @property {Array.<MovieData>} list - An array of MovieData representing the movie list.
     */
    const films = reactive({
        isLoading: false,
        list: []
    });


    const getFilms = async (search = 'bat') => {
        films.isLoading = true;
        const response = await api.get({
            url: `http://www.omdbapi.com/?apikey=${import.meta.env.VITE_omdbApiKey}&s=${search}&plot=full`
        });

        films.list = response.data.Search;
        films.isLoading = false;

    }

    return {
        films,
        getFilms
    }
}