import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Publications from './components/Publications';
import Experience from './components/Experience';
import ExtraCurricularActivities from './components/ExtraCurricularActivities';
import Footer from './components/Footer';

function App() {
	return (
		<ThemeProvider>
			<div className='min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300'>
				<Header />
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
					<Hero />
					<About />
					<Publications />
					<Experience />
					<ExtraCurricularActivities />
				</div>
				<Footer />
			</div>
		</ThemeProvider>
	);
}

export default App;
