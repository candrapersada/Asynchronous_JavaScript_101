/* So previously, as you have seen, we usually want to make ans async call, so we will create a promise, and have to make a second
async call, that its promise will be linked to the first promise ! So we will have to chain them */

/* SOLUTION: If we can make the function "wait" for the first promise to resolve, and continue to the second one, all within
the scope of the fuction, and not the RUNTIME, it would be good ! */

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

// -> Solution: aysnc/await
/* async is just a keyword stating that the function returns a promise ! */

/* await is used whithin it! Stating that this function call after the await keyword IS a function that returns a promise, and we WILL WAIT for it to continue
our steps, so will be blocked but WHITHIN the function, not within the runtime !
*/

async function query(user) {
    /* we will wait for this function to RESOLVE/REJECT its promise return */
    const filteredUser = await filterUser(user);

    /* and THEN continue to our second promise-based function call, and pass the retun of the second one, which will be the PROMISE result, not the actual promise */
    console.log("User Succefully Validated! Now Querying the backend");
    const finalCall = await queryBackend(filteredUser);

    console.log("Backend queried successfuly, response: ", finalCall)
}

query({name: "Haitam", username: "sch0pemnheimer"});