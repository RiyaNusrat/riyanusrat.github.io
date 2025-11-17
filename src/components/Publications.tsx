import portfolioData from '../data/portfolio.json';

function Publications() {
	const { publications } = portfolioData;

	return (
		<section id='publications' className='mb-20'>
			<h2 className='text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-10'>Publications</h2>

			<div className='space-y-10'>
				{publications.map((pub, index) => (
					<div
						key={index}
						className='p-8 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 space-y-6'>
						<div className='flex items-start justify-between'>
							<div className='bg-blue-600 text-white px-4 py-2 rounded-lg text-base font-semibold'>{pub.year}</div>
						</div>

						<h3 className='text-gray-900 dark:text-white font-bold text-xl sm:text-2xl leading-tight'>{pub.title}</h3>

						<p className='text-blue-600 dark:text-blue-400 text-base sm:text-lg font-semibold'>{pub.authors}</p>

						<p className='text-gray-600 dark:text-gray-300 text-base sm:text-lg italic'>
							{pub.doi ? `DOI: ${pub.doi}` : ''}
						</p>

						<div className='flex flex-wrap gap-2 pt-2'>
							<a
								href={pub.links.paper}
								target='_blank'
								rel='noopener noreferrer'
								className='bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-900/50 px-4 py-3 rounded-lg text-base font-semibold transition-colors no-underline'>
								View Paper
							</a>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

export default Publications;
