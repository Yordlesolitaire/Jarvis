const { app, BrowserWindow } = require("electron");
const path = require("path");
const { ipcMain } = require("electron");
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth:800,
    minHeight:600,
    frame:false,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  const isDev = !app.isPackaged;

  if (isDev) {
    // 🔥 Charge le site React en priorité
    win.loadURL("http://localhost:3000");
  } else {
    // 📦 Charge le build en production
    const indexPath = path.join(__dirname, "../build/index.html");
    win.loadFile(indexPath);
  }
}

app.whenReady().then(createWindow);

ipcMain.on("close", () => {
  BrowserWindow.getFocusedWindow().close();
});

ipcMain.on("minimize", () => {
  BrowserWindow.getFocusedWindow().minimize();
});

ipcMain.on("maximize", () => {
  const win = BrowserWindow.getFocusedWindow();
  win.isMaximized() ? win.unmaximize() : win.maximize();
});
