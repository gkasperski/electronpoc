const EventEmitter = require('events');
const path = require('path');
const fs = require('fs');

const normalizedPath = path.join(__dirname, 'plugins');

// api
const api = {
  // some api method
  showMessage(text) {
    console.log(text);
  },

  // some api method
  showFunnyLog() {
    // send event to main process
    process.send({ eventName: 'funnyLog', data: ' ;) ' });
  },

  // event object - plugin can listen to events on this object
  event: new EventEmitter()
};

fs.readdirSync(normalizedPath).forEach(file => {
  try {
    const plugin = require(`./plugins/${file}`).init(api); //eslint-disable-line
    plugin.run();
  } catch (e) {
    console.log(`ERROR when loading plugin ${file}`);
    console.log(e);
  }
});

// listen on event from main process and pass it to plugins
process.on('message', message => {
  api.event.emit(message.eventName, message.data);
});
