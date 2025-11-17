import { Mail, Landmark, Github, Linkedin } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

function Footer() {
	const { profile, contact, last_updated_at } = portfolioData;

	return (
		<footer className='py-2 mt-8 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
				{/* Social Media Icons */}
				<div className='flex justify-center flex-wrap gap-3 sm:gap-4 mb-1'>
					<a
						href={`mailto:${contact.email}`}
						className='p-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all'>
						<Mail size={20} />
					</a>
					<a
						href={portfolioData.social_links.google.url}
						target='_blank'
						rel='noopener noreferrer'
						className='p-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all'>
						<Landmark size={20} />
					</a>

					<a
						href={portfolioData.social_links.github.url}
						className='p-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all'>
						<Github size={20} />
					</a>
					<a
						href={portfolioData.social_links.linkedIn.url}
						className='p-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all'>
						<Linkedin size={20} />
					</a>
				</div>

				{/* Copyright */}
				<div className='pt-1'>
					<p className='text-gray-500 dark:text-gray-500 text-sm sm:text-base'>
						© Copyright 2025 {profile.name}. <br /> Last updated: {last_updated_at}
					</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
