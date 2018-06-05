exports.init = api => ({
  run() {
    api.showMessage('secondSimplePlugin is running');

    api.event.on('scanning', data => {
      console.log(`second simple plugin see scanning and data: ${data}`);
    });
  }
});
