/**
 * The response from the PlaceholderApi
 * @typedef {Object} PlaceholderResponse
 * @property {number} userId
 * @property {number} id
 * @property {string} title
 * @property {boolean} completed
 */

const DEFAULT_JSON_URL_API = "https://jsonplaceholder.typicode.com/todos/1";

/**
 * @returns {PlaceholderResponse}
 */
function castResponse({ completed, ...rest }) {
  return {
    ...rest,
    completed: Boolean(completed),
  };
}

/**
 * @param {string} url
 * @returns {Promise<PlaceholderResponse>}
 */
async function getData(url) {
  // What if the fetch fails? What if the server is down?
  const response = await fetch(url);
  // What if the response is not JSON? What if the response is not valid JSON?
  const json = await response.json();
  // What if the response is not the expected shape?
  return castResponse(json);
}

async function getDataWithErrorHandling() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const json = await response.json();
    return castResponse(json);
  } catch (error) {
    if (error instanceof TypeError) {
      console.error("Failed to fetch data: ", error);
    }

    if (error instanceof SyntaxError) {
      console.error("Failed to parse JSON: ", error);
    }

    console.error("An error occurred: ", error);
    return null;
  }
}

(async () => {
  console.log("Calling getData");

  const data = await getData(DEFAULT_JSON_URL_API);

  console.log("User ID: ", data.userId);
  console.log("Title: ", data.title);
  console.log("Completed: ", data.completed);

  console.log("\nCalling getDataWithErrorHandling");

  const dataWithErrorHandling = await getDataWithErrorHandling();

  console.log("User ID: ", dataWithErrorHandling.userId);
  console.log("Title: ", dataWithErrorHandling.title);
  console.log("Completed: ", dataWithErrorHandling.completed);
})();
