const EventEmitter = require("events");

// Create EventEmitter object
const application = new EventEmitter();

// Input event
application.on("input", (text) => {
    console.log("Entered text:", text);
});

// Button click event
application.on("buttonClick", () => {
    console.log("Button clicked!");
});

// Form submit event
application.on("formSubmit", () => {
    console.log("Form submitted successfully.");
});

// Extra custom event: logout
application.on("logout", (username) => {
    console.log(`${username} logged out successfully.`);
});

// Trigger events
application.emit("input", "Hello Node.js");
application.emit("buttonClick");
application.emit("formSubmit");
application.emit("logout", "Rahul");