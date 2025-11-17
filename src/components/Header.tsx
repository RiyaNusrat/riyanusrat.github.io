import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

function Header() {
	const { theme, toggleTheme } = useTheme();

	return (
		<header className='sticky top-0 z-50 py-4 sm:py-6 border-b border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md transition-all duration-300 animate-in slide-in-from-top'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex justify-between items-center animate-in fade-in duration-500'>
					{/* Logo/Brand space - can be used for name or logo */}
					<div className='flex-shrink-0'>
						{/* <h2 className='text-xl sm:text-2xl font-bold text-gray-900 dark:text-white' /> */}
					</div>

					{/* Right side with navigation and theme toggle */}
					<div className='flex items-center gap-4 sm:gap-8'>
						<nav className='hidden sm:flex gap-8 lg:gap-10 animate-in fade-in slide-in-from-right duration-700'>
							<a
								href='#about'
								className='no-underline text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 relative hover:scale-105 animate-in fade-in slide-in-from-top delay-100'>
								About
							</a>
							<a
								href='#publications'
								className='no-underline text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 relative hover:scale-105 animate-in fade-in slide-in-from-top delay-200'>
								Research
							</a>
							<a
								href='#experience'
								className='no-underline text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 relative hover:scale-105 animate-in fade-in slide-in-from-top delay-300'>
								Experience
							</a>
							<a
								href='#extracurricular'
								className='no-underline text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 relative hover:scale-105 animate-in fade-in slide-in-from-top delay-500'>
								Leadership
							</a>
							<a
								href='/Resume_Nusrat_Jahan_Riya.pdf'
								target='_blank'
								rel='noopener noreferrer'
								className='no-underline text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 relative hover:scale-105 animate-in fade-in slide-in-from-top delay-700'>
								Resume
							</a>
						</nav>

						{/* Mobile navigation menu */}
						<nav className='sm:hidden flex gap-2 animate-in fade-in slide-in-from-right duration-500'>
							<a
								href='#about'
								className='no-underline text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 px-2 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 animate-in fade-in delay-100'>
								About
							</a>
							<a
								href='#publications'
								className='no-underline text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 px-2 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 animate-in fade-in delay-200'>
								Research
							</a>
							<a
								href='#experience'
								className='no-underline text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 px-2 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 animate-in fade-in delay-300'>
								Experience
							</a>
							<a
								href='#extracurricular'
								className='no-underline text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 px-2 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 animate-in fade-in delay-500'>
								Leadership
							</a>
							<a
								href='/Resume_Nusrat_Jahan_Riya.pdf'
								target='_blank'
								rel='noopener noreferrer'
								className='no-underline text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 px-2 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 animate-in fade-in delay-700'>
								Resume
							</a>
						</nav>

						{/* Theme toggle button */}
						<button
							type='button'
							onClick={toggleTheme}
							className='p-3 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:scale-110 animate-in fade-in slide-in-from-right delay-300'
							aria-label='Toggle theme'>
							{theme === 'dark' ? (
								<Sun size={20} className='text-yellow-500 transition-transform duration-300 hover:rotate-12' />
							) : (
								<Moon size={20} className='text-gray-600 transition-transform duration-300 hover:-rotate-12' />
							)}
						</button>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
