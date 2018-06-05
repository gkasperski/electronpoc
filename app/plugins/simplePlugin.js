exports.init = api => ({
  run() {
    // call api method
    api.showMessage('simplePlugin is running');

    // listen on event form core
    api.event.on('scanning', data => {
      console.log(`simple plugin see scanning and data: ${data}`);

      // call api method
      api.showFunnyLog();
    });
  }
});
