const { path } = require('path');
const { app, BrowserWindow } = require('electron');
const { is } = require('electron-util');

const { default: installExtension, REACT_DEVELOPER_TOOLS } = require('electron-devtools-installer');

const getBrowserWindowInstances = BrowserWindow.getAllWindows().length;
const thereIsNoWindowInstances = getBrowserWindowInstances === 0;
const isNotMac = process.platform !== 'darwin';
const isDev = is.development;

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1024,
    height: 768,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: !isDev,
    },
  });

  win.loadURL(
    isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`
  );

  win.webContents.openDevTools();

  if (isDev) {
    installExtension(REACT_DEVELOPER_TOOLS)
      // eslint-disable-next-line no-console
      .then((name) => console.log(`Added Extension:  ${name}`))
      // eslint-disable-next-line no-console
      .catch((err) => console.log('An error occurred: ', err));
  }
};

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (isNotMac) {
    app.quit();
  }
});

app.on('activate', () => {
  if (thereIsNoWindowInstances) {
    createWindow();
  }
});

app.setAboutPanelOptions({
  applicationName: 'Twitter Feed Viewer built with Electron + React ',
  applicationVersion: '1.0.0',
  copyright: 'No Copyright',
  version: '1.0.0',
  credits: 'Developed by I. Agudo just for fun and learn',
  authors: 'I. Agudo',
  website: 'https://github.com/agudovitoria',
});
