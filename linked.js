
// find all the users that have not been linked
const {allUsers, linked} = require('./users')

const unlinkedMembers = []

const ids = new Set(linked.map((e) => e.id))

allUsers.forEach((e)=> {
    if (!ids.has(e.id)) {
        unlinkedMembers.push(e)
    }
})

console.log(unlinkedMembers)