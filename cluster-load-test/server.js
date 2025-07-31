// Import required modules
const cluster = require("node:cluster"); // Cluster module for multi-processing
const http = require("node:http"); // HTTP module for creating server
//const numCPUs = require("node:os").availableParallelism() || 4; // Get CPU cores or default to 4

// Check if current process is the primary/master process
if (cluster.isPrimary) {
  // Primary process code
  console.log(`Primary ${process.pid} is running`);

  // Fork workers - create multiple instances of the application
  for (let i = 0; i < 4; i++) {
    // Create 4 worker processes
    cluster.fork(); // Spawn a new worker process
  }

  // Event listener for when a worker dies
  cluster.on("exit", (worker, code, signal) => {
    // Log which worker died
    console.log(`worker ${worker.process.pid} died`);

    // Restart the worker if it exits (for fault tolerance)
    cluster.fork();
  });
} else {
  // Worker process code
  // All workers share the same TCP connection (port 8000)

  // Create HTTP server
  http
    .createServer((req, res) => {
      // Set response header with status code 200 (OK)
      res.writeHead(200);
      // Send response with worker's process ID
      res.end(`Hello from worker ${process.pid}\n`);
    })
    .listen(8000); // All workers listen on the same port (8000)

  // Log worker startup
  console.log(`Worker ${process.pid} started`);
}
