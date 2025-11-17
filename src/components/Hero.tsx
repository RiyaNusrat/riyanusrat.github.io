import portfolioData from '../data/portfolio.json';

function Hero() {
	const { profile, research_interests } = portfolioData;

	return (
		<section id='about' className='mb-16'>
			<div className='grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start'>
				{/* Profile Image - Mobile first, then moves to right on lg screens */}
				<div className='order-1 lg:order-2 lg:col-span-2 flex justify-center lg:justify-start'>
					<div className='w-64 h-80 sm:w-72 sm:h-96 lg:w-full lg:h-auto lg:max-w-sm bg-gray-200 dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden border border-gray-300 dark:border-gray-600'>
						<img src='/profile.jpg' alt='Profile' className='w-full h-full object-cover dark:opacity-90' />
					</div>
				</div>

				{/* Main content - takes up more space and comes first on mobile */}
				<div className='order-2 lg:order-1 lg:col-span-3 space-y-8'>
					<div>
						<h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4'>
							{profile.name}
						</h1>
						<p className='text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-2'>{profile.title}</p>
					</div>

					<div className='space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed text-base sm:text-lg text-justify'>
						<p>
							I am a Computer Science graduate with interests in Artificial Intelligence and Machine Learning. I am
							currently working as a Research Assitant under the supervision of <a
								href='https://scholar.google.com/citations?user=iyHpDugAAAAJ'
								target='_blank'
								rel='noopener noreferrer'
								className='text-blue-400 hover:text-blue-300 underline transition-colors'>
								Dr. Riasat Khan
							</a>. I am interested in
							research that solves real-world problems.
						</p>
						<p>
							I completed my B.Sc. in Computer Science and Engineering from{' '}
							<a
								href='https://northsouth.edu'
								target='_blank'
								rel='noopener noreferrer'
								className='text-blue-400 hover:text-blue-300 underline transition-colors'>
								North South University (NSU)
							</a>
							. My undergraduate thesis introduced a custom medical dataset and explored ensemble, feature-selection, and transformer-driven modeling for early diagnosis. 
							Currently, I am working on deep learning frameworks for task-specific medical imaging{' '}
					
							.
						</p>
						<p>
							I am curious about how machine learning and image processing can make healthcare more accurate and accessible.
							 I’m still learning every day, and I’m excited to explore biomedical data, medical images, and AI techniques that can help improve precision in health.
						</p>
						<p>
							Check out my{' '}
							<a
								href={portfolioData.social_links.github.url}
								target='_blank'
								rel='noopener noreferrer'
								className='text-blue-400 hover:text-blue-300 underline transition-colors'>
								GitHub page
							</a>
							.
						</p>
					</div>

					<div className='bg-gray-50 dark:bg-gray-800 p-6 sm:p-8 rounded-xl border border-gray-200 dark:border-gray-700'>
						<h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-4'>Research Interests</h3>
						<p className='text-base text-gray-600 dark:text-gray-400 mb-6'>
							See also my{' '}
							<a
								href='#publications'
								className='text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 underline transition-colors font-medium'>
								list of publications
							</a>
							.
						</p>
						<ul className='grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700 dark:text-gray-300 text-base'>
							{research_interests.map((interest, index) => (
								<li key={index} className='flex items-start'>
									<span className='text-blue-500 mr-3 mt-1.5 text-sm'>●</span>
									<span>{interest}</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;
