/**
 * @author Christoph Bichlmeier
 * @license UNLICENSED
 */

const {
  app,
  BrowserWindow
} = require('electron');
const url = require('url');
const {
  fork
} = require('child_process');

const path = require('path');
const fs = require('fs');
const logger = require('electron-log');
logger.transports.file.level = 'info';
const loggingPath = path.join(__dirname, 'logging');
if (!fs.existsSync(loggingPath)) {
  fs.mkdirSync(loggingPath);
}
logger.transports.file.file = path.join(loggingPath, 'halt-main.log');


let mainWindow;
let server;

function createWindow() {
  if (!mainWindow) {
    mainWindow = new BrowserWindow({
      width: 600,
      height: 650,
      icon: path.join(__dirname, 'favicon.ico'),
      show: false,
    });

    mainWindow.loadURL(url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true
    }));

    mainWindow.once('ready-to-show', () => {
      mainWindow.show();
    });

    mainWindow.on('close', () => {
      // Dereference to garbage collect
      mainWindow = undefined;
    });
  }
}

function createServer() {
  logger.info('starting server child process...');
  if (!server) {
    // see https://dzone.com/articles/understanding-execfile-spawn-exec-and-fork-in-node
    server = fork(path.join(__dirname, 'server.js'));

    server.on('error', err => {
      logger.error('api server: ', err);
    });
  }
}

app.on('ready', () => {
  createServer();
  createWindow();
});

app.on('activate', () => {
  createServer();
  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
