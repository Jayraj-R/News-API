import './App.css';
import ExploreBar from './Components/ExploreBar';
import Navbar from './Components/Navbar';

function App() {
	return (
		<div className='flex justify-center w-screen h-screen'>
			<Navbar />
			<ExploreBar />
		</div>
	);
}

export default App;
