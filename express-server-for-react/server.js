const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const filepath = '/4loladrink.jpg';

app.use(
	cors({
		origin: 'http://localhost:3000',
	}),
);

// console.log that your server is up and running
app.listen(port, () => console.log(`App listening on port ${port}`));

// create a GET request route
app.get('/whoisthere', (req, res) => {
	res.send({
		express_message: 'HELLO I AM LOLA FROM EXPRESS BACKEND 🙌',
		express_image: filepath,
	});
});
