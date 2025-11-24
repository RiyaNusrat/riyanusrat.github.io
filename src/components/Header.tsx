import { Moon, Sun, Menu, X, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

function Header() {
	const { theme, toggleTheme } = useTheme();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [scrollProgress, setScrollProgress] = useState(0);

	// Handle scroll progress
	useEffect(() => {
		const handleScroll = () => {
			const totalScroll = document.documentElement.scrollTop;
			const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
			const scroll = `${totalScroll / windowHeight}`;
			setScrollProgress(Number(scroll));
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// Prevent body scroll when menu is open
	useEffect(() => {
		if (isMenuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [isMenuOpen]);

	const navItems = [
		{ name: 'About', href: '#about' },
		{ name: 'Research', href: '#publications' },
		{ name: 'Experience', href: '#experience' },
		{ name: 'Leadership', href: '#extracurricular' },
		{ name: 'Resume', href: '/Resume_Nusrat_Jahan_Riya.pdf', external: true },
	];

	return (
		<>
			<header className='sticky top-0 z-40 py-4 sm:py-6 border-b border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md transition-all duration-300 animate-in slide-in-from-top'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='flex justify-between items-center animate-in fade-in duration-500'>
						{/* Logo/Brand space - can be used for name or logo */}
						<div className='flex-shrink-0'>
							{/* <h2 className='text-xl sm:text-2xl font-bold text-gray-900 dark:text-white' /> */}
						</div>

						{/* Right side with navigation and theme toggle */}
						<div className='flex items-center gap-4 sm:gap-8'>
							<nav className='hidden sm:flex gap-8 lg:gap-10 animate-in fade-in slide-in-from-right duration-700'>
								{navItems.map((item, index) => (
									<a
										key={item.name}
										href={item.href}
										target={item.external ? '_blank' : undefined}
										rel={item.external ? 'noopener noreferrer' : undefined}
										className='group relative no-underline text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 animate-in fade-in slide-in-from-top'
										style={{ animationDelay: `${(index + 1) * 100}ms` }}>
										{item.name}
										<span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full' />
									</a>
								))}
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

							{/* Mobile menu button */}
							<button
								type='button'
								className='sm:hidden p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors z-50 relative'
								onClick={() => setIsMenuOpen(!isMenuOpen)}
								aria-label='Toggle menu'>
								{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
							</button>
						</div>
					</div>
				</div>
				{/* Scroll Progress Bar */}
				<div className='absolute bottom-0 left-0 w-full h-[2px] bg-transparent'>
					<div
						className='h-full bg-blue-600 dark:bg-blue-400 transition-all duration-150 ease-out'
						style={{ width: `${scrollProgress * 100}%` }}
					/>
				</div>
			</header>

			{/* Mobile Menu Drawer */}
			{isMenuOpen && (
				<div className='fixed inset-0 z-40 sm:hidden'>
					{/* Backdrop */}
					<button
						type='button'
						className='absolute inset-0 w-full h-full bg-black/20 dark:bg-black/60 backdrop-blur-sm transition-opacity duration-300 cursor-default border-none'
						onClick={() => setIsMenuOpen(false)}
						aria-label='Close menu'
					/>

					{/* Drawer Panel */}
					<div className='absolute right-0 top-0 bottom-0 w-[75%] max-w-sm bg-white dark:bg-gray-900 shadow-2xl border-l border-gray-200 dark:border-gray-800 transform transition-transform duration-300 ease-out animate-in slide-in-from-right'>
						<div className='flex flex-col h-full pt-24 px-6 pb-6'>
							<nav className='flex flex-col space-y-6'>
								{navItems.map((item, index) => (
									<a
										key={item.name}
										href={item.href}
										target={item.external ? '_blank' : undefined}
										rel={item.external ? 'noopener noreferrer' : undefined}
										onClick={() => setIsMenuOpen(false)}
										className='group flex items-center justify-between text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 animate-in slide-in-from-right fade-in no-underline'
										style={{ animationDelay: `${index * 100}ms` }}>
										<span>{item.name}</span>
										<ChevronRight
											size={18}
											className='opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200'
										/>
									</a>
								))}
							</nav>

							<div className='mt-auto'>
								<div className='p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800'>
									<p className='text-sm text-gray-500 dark:text-gray-400 text-center'>
										© {new Date().getFullYear()} Riya Nusrat
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
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
								href='/Resume_Nusrat Jahan Riya.pdf'
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
								href='/Resume_Nusrat Jahan Riya.pdf'
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
			{/* Scroll Progress Bar */}
			<div className='absolute bottom-0 left-0 w-full h-[2px] bg-transparent'>
				<div
					className='h-full bg-blue-600 dark:bg-blue-400 transition-all duration-150 ease-out'
					style={{ width: `${scrollProgress * 100}%` }}
				/>
			</div>
		</header>
	);
}

export default Header;
