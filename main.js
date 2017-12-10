const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const path = require('path')
const url = require('url')
let shell
function createShell () {
  shell = new BrowserWindow({width: 1280, height: 720})
  shell.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))
  // shell.webContents.openDevTools()
  shell.on('closed', function () {
    shell = null
  });
}


let bar
function createBar () {
  bar = new BrowserWindow({width: 1280, height: 300})
  bar.loadURL(url.format({
    pathname: path.join(__dirname, 'bar.html'),
    protocol: 'file:',
    slashes: true
  }))
  // bar.webContents.openDevTools()
  bar.on('closed', function () {
    bar = null
  });
}



app.on('ready', createShell)
//app.on('ready', createBar)
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
app.on('activate', function () {
  if (shell === null) {
    createShell()
    //createBar()
  }
})
