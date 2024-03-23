
const { createServer } = require('http');
const { exec } = require('child_process');

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  const phpCode = `<?php echo "hello world"; ?>`;

  exec(`php -r '${phpCode}'`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing PHP: ${error.message}`);
      res.end('Error executing PHP');
      return;
    }
    if (stderr) {
      console.error(`PHP error: ${stderr}`);
      res.end('PHP error');
      return;
    }

    res.end(stdout);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
