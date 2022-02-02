/** Promise: They are nothing but object which keeps track of an event and its status
 * 
 * There are 3 types of status: 
 * 1. Pending
 * 2. Success
 * 3. Failure
 * 
 */

const p = new Promise((resolve, reject) => {

    let a = 2
    if (a === 1) {
        resolve('A is equal to 1')

    } else {
        reject('A is not equal to 1')
    }

})

//p.then  -> Based on an event success or failure then will called out
/** 
 * Ie, Every actions which returns a promise should be backed up by then() or should()
 where you take actions accordingly. In cypress there is no catch part. 

 **/

p.then((result) => {
    console.log(result)

}).catch((error) => {
    console.log(error)
})

