exports.init = (app, api) => ({
  run() {
    app.addListener('event', () => {
        
    });
  },
  render() {
    api.addMenuPosition('test');
  }
});
