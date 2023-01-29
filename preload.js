const { contextBridge, ipcRenderer } = require('electron')
const devices = require('./services/devices_service.js')

var os = require('os');

contextBridge.exposeInMainWorld('global', {
  release: () => os.release(),
  hour : () => new Date().getHours(),
  getNetworkInterfaces : () => os.networkInterfaces(),
  getDevices : async () => await devices.getDevices({ address: '192.168.0.1-192.168.0.255' })
});

