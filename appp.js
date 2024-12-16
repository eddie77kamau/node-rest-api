const express = require('express');
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

// response.send(status) is now a function that takes the JSON object as the argument.

app.get('/status', (request, response) => {
   const status = {
      'status': 'Running'
   };
   
   response.send(status);
});


app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
  });