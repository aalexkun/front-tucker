

export const getAgenda = async(event, context) => {
    console.log(event)
    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "http://localhost:4200",
            "Access-Control-Allow-Headers": "Content-Type,Authorization", // Include other headers your frontend might send
            "Access-Control-Allow-Methods": "GET,POST,OPTIONS,PUT,DELETE" // Methods allowed
            // ... other headers
        },
        body: JSON.stringify({ message: 'Success!' })
    };


}

export const pathAgenda = async(event, context) => {
    console.log(event)
    return 'success'
}
