import isElectron from 'is-electron'

if (globalThis.window && !isElectron())
  window.ipcRenderer = {
    invoke: console.log,
    on: console.log,
    once: console.log,
    postMessage: console.log,
    removeAllListeners: console.log,
    removeListener: console.log,
    send: console.log,
    sendSync: console.log,
    sendTo: console.log,
    sendToHost: console.log,
    addListener: console.log,
  }
