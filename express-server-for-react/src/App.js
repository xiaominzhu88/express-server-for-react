import './App.css';
import { useEffect, useState } from 'react';

function App() {
	const [expressData, setExpressData] = useState(null);
	useEffect(() => {
		fetch('http://localhost:5000/whoisthere')
			.then((response) => response.json())
			// Setting data to express_message that we received from the response
			.then((data) => setExpressData(data))
			.catch((e) => {
				console.log('e:', e);
			});
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				{expressData?.express_message}
				<br />
				<img
					src={expressData?.express_image}
					className="App-logo"
					alt="dogge"
				/>
			</header>
		</div>
	);
}

export default App;
