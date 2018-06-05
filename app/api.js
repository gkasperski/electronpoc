const api = (mainWindow) => ({
    addMenuPosition(text) {
        mainWindow.webContents.send('item:add', text);
    }
});

export default api;