const express = require ('express');
const app = express ();

const port = 3000;

app.get ('/', (req, res) => {
  //   res.send ('Hello World!');
  res.status (200).json ({
    message: 'It works!',
  });
});

app.listen (port, () =>
  console.log ('Starting server on http://localhost:' + port)
);
