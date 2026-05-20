const server = require('./app');

const PORT = process.env.PORT || 3000;

console.log("Hello i am serverI");

server.listen(PORT, () => {
  console.log(`API server is running on port ${PORT}`);
}); 
