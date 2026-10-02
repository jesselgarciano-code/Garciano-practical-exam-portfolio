const http = require('http');
const PORT = 3000;
http.createServer((req, res) => {
   res.write("Backend server running!");
   res.end();
}).listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
