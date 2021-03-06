// eslint-disable-next-line import/no-extraneous-dependencies
const { app, BrowserWindow } = require('electron');
const { is } = require('electron-util');
const path = require('path');

const getBrowserWindowInstances = BrowserWindow.getAllWindows().length;
const thereIsNoWindowInstances = getBrowserWindowInstances === 0;
const isNotMac = process.platform !== 'darwin';
const isDev = is.development;

const appTitle = 'Twitter Feed Viewer';
const logoImagePath = path.join(__dirname, '../public/logo.png');

const onAppReady = () => {
  const win = new BrowserWindow({
    width: 1024,
    height: 768,
    icon: logoImagePath,
    name: appTitle,
    title: appTitle,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: !isDev,
    },
  });

  win.loadURL(
    isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`
  );

  if (isDev) {
    const {
      default: installExtension,
      REACT_DEVELOPER_TOOLS,
      // eslint-disable-next-line global-require
    } = require('electron-devtools-installer');
    installExtension(REACT_DEVELOPER_TOOLS);

    win.webContents.openDevTools();
  }

  app.dock.setIcon(logoImagePath);

  app.setAboutPanelOptions({
    applicationName: 'Twitter Feed Viewer',
    applicationVersion: '1.0.0',
    copyright: 'No Copyright',
    version: '1.0.0',
    credits: 'Developed by I. Agudo just for fun and learn',
    authors: 'I. Agudo',
    website: 'https://github.com/agudovitoria',
    iconPath: logoImagePath,
  });
};

app.on('window-all-closed', () => {
  if (isNotMac) {
    app.quit();
  }
});

app.on('activate', () => {
  if (thereIsNoWindowInstances) {
    onAppReady();
  }
});

app.whenReady().then(onAppReady);
