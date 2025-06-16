

const apiHandler = async (url, method = "GET", data = {}) => {
    try {
        // ready the options for fetch
        const options = {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            }
        }

        if (method !== 'GET') {
            options.body = JSON.stringify(data)
        }

        // fetch the data from the server - returns JSON response
        const response = await fetch(url, options)

        // checking if there was an error
        if (!response.ok) {
            console.log(response)
            return false
        }

        // parse/convert the JSON response body into a JavaScript object
        const result = await response.json()

        // returning the result of the response
        return result
    }
    catch (error) {
        console.log(error)
        return false
    }
}

export default apiHandler