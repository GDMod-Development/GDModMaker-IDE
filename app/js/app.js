const { ipcRenderer } = require('electron')
const ipc = ipcRenderer

const close = document.getElementById('close')

document.getElementById('min').addEventListener('click', () => {
    ipc.send('min')
})

document.getElementById('max').addEventListener('click', () => {
    ipc.send('max')
})