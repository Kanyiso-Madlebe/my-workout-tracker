const express = require('express');
const app = express();

// Serve static files from the 'public' directory
app.use((req, res, next) => {
    res.type('application/javascript');
    next();
  });
  

// Other routes and middleware

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
