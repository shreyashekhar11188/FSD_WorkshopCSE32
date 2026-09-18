const EventEmitter = require("events");

// Create EventEmitter object
const application = new EventEmitter();

// Input event
application.on("input", (text) => {
    console.log("Entered text:", text);
});
