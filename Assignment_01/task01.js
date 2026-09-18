const EventEmitter = require("events");

// Create EventEmitter object
const eventEmitter = new EventEmitter();

// studentJoined event
eventEmitter.on("studentJoined", (studentName) => {
    console.log(`Student ${studentName} joined the session.`);
});

// courseSelected event
eventEmitter.on("courseSelected", (courseName) => {
    console.log(`Course selected: ${courseName}`);
});

// sessionEnded event
eventEmitter.on("sessionEnded", (sessionCode) => {
    console.log(`Session ended. Code: ${sessionCode}`);
});

// Trigger events
eventEmitter.emit("studentJoined", "Rahul");
eventEmitter.emit("courseSelected", "Full Stack Development");
eventEmitter.emit("sessionEnded", 0);