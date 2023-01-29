const find = require('local-devices')

async function getDevices(){
    // Find all local network devices.
    return await find()
}

module.exports = {
    getDevices
}