import './App.css';
import { useEffect, useState } from 'react';

function App() {
	const [expressData, setExpressData] = useState(null);

	const fetchExpressData = async () => {
		try {
			const response = await fetch('http://localhost:5000/whoisthere', {
				mode: 'cors',
			});
			const data = await response.json();
			setExpressData(data);
		} catch (e) {
			console.log(e);
		}
	};
	useEffect(() => {
		fetchExpressData();
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
