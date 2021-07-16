const express = require('express');
const app = express();


// db connection

  app.get("/", (req, res) => {
    res.send("Server Started ");
  });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
