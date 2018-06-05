exports.init = api => ({
  run() {
    api.wyswietlTekst('testowy');

    api.event.on('scanning', data => {
      console.log(`plugin see scanning and data: ${data}`);
    });
  }
});
