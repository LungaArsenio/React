import axios from "axios";

/** base url to make requests to the movie database */

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;

/**
 * A method is a block of code that only runs when it is called,
 * you can pass data into. (parameters).
 *
 *                      @Axios
 * Axios let us create custom instances for API request.
 * Each instance is a separate client that an carry its own configuration and options
 * like baseURLs, timeouts, and headers.
 * Then we can reuse the configuration for API calls usng the same instance.
 *
 * The axios.create() function creates a new Axios instance.
 * The reason why are created instances is to set custom defaults
 * for your application.
 *
 * axios.get(somelink/letsgoo) using this in other component
 * will append to this instance that we created
 *
 */
