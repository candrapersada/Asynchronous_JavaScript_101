/* Ok, we did tackle EVERYTHING previously on the 3_async_await.js example, but we missed a TINY Ddeatil :) 
    We handled only the resolved promise case in the async/await, what about when one of the promises calls a .reject() ?
    What is the equivalent of the .catch() ?  
*/

/* We basically wrap the await blocks within the async function with try catch ;) */

function filterUser(user) {
    const p = new Promise((resolve, reject) => {
        console.log("Filtering User:", user);
        if (user.name == "Haitam") {
            resolve(user);
        }
        else {
            console.log("User is different than Haitam, cannot be passed !")
            reject(user);
        }
    })
    return p;
}

function queryBackend(user) {
    return new Promise((resolve, reject) => {
        resolve(user);
    })
}

// -> A Basic try-catch wrapper will do the same as aout .catch() in case our promises call reject() !
async function query(user) {
    try {
        const filteredUser = await filterUser(user);

        console.log("User Succefully Validated! Now Querying the backend");
        const finalCall = await queryBackend(filteredUser);

        console.log("Backend queried successfuly, response: ", finalCall)
    } catch (err) {
        console.err("Error Catched:", err);
    }
}

query({name: "NotHaitam", username: "not_sch0pemnheimer"});