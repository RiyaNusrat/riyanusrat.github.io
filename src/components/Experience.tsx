import portfolioData from '../data/portfolio.json';

function Experience() {
	const { experience } = portfolioData;

	const formatDate = (dateStr: string) => {
		if (dateStr.toLowerCase() === 'present') return 'Present';

		// Parse dates like "February 2024" or "March 2025"
		const date = new Date(dateStr);
		if (!Number.isNaN(date.getTime())) {
			return date.toLocaleDateString('en-US', {
				month: 'long',
				year: 'numeric',
			});
		}
		return dateStr;
	};

	const getDuration = (startDate: string, endDate: string) => {
		if (endDate.toLowerCase() === 'present') {
			const start = new Date(startDate);
			const now = new Date();
			const months = (now.getFullYear() - start.getFullYear()) * 12 + now.getMonth() - start.getMonth();

			if (months < 12) {
				return `${months} month${months !== 1 ? 's' : ''}`;
			}

			const years = Math.floor(months / 12);
			const remainingMonths = months % 12;
			if (remainingMonths === 0) {
				return `${years} year${years !== 1 ? 's' : ''}`;
			}
			return `${years} year${years !== 1 ? 's' : ''} ${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}`;
		}

		const start = new Date(startDate);
		const end = new Date(endDate);
		const months = (end.getFullYear() - start.getFullYear()) * 12 + end.getMonth() - start.getMonth();

		if (months < 12) {
			return `${months} month${months !== 1 ? 's' : ''}`;
		}

		const years = Math.floor(months / 12);
		const remainingMonths = months % 12;
		if (remainingMonths === 0) {
			return `${years} year${years !== 1 ? 's' : ''}`;
		}
		return `${years} year${years !== 1 ? 's' : ''} ${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}`;
	};

	return (
		<section id='experience' className='mb-20'>
			<h2 className='text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-10'>Experience</h2>

			<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
				{experience.map((exp, index) => (
					<div
						key={index}
						className='p-6 lg:p-8 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 space-y-6'>
						{/* Header with title and dates */}
						<div className='space-y-4'>
							<div className='flex items-start justify-between gap-4'>
								<div className='bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-400 px-3 py-1.5 rounded-lg text-sm font-semibold'>
									{formatDate(exp.start_date)} - {formatDate(exp.end_date)}
								</div>
								<p className='text-gray-500 dark:text-gray-400 text-xs'>{getDuration(exp.start_date, exp.end_date)}</p>
							</div>

							<div>
								<h3 className='text-gray-900 dark:text-white font-bold text-lg lg:text-xl leading-tight mb-2'>
									{exp.title}
								</h3>
								<p className='text-primary-600 dark:text-primary-400 text-sm lg:text-base font-semibold mb-1'>
									{exp.institution}
								</p>
								<p className='text-gray-600 dark:text-gray-400 text-xs lg:text-sm'>{exp.location}</p>
							</div>
						</div>

						{/* Description */}
						{exp.description && exp.description !== 'Hojonborolo' && exp.description.trim() !== '' && (
							<div>
								<p className='text-gray-700 dark:text-gray-300 text-sm lg:text-base leading-relaxed'>
									{exp.description}
								</p>
							</div>
						)}

						{/* Key Points */}
						{exp.key_points && exp.key_points.length > 0 && (
							<div>
								<h4 className='text-gray-900 dark:text-white font-semibold text-base lg:text-lg mb-3'>Key Responsibilities</h4>
								<ul className='space-y-2 text-gray-700 dark:text-gray-300'>
									{exp.key_points.map((point, pointIndex) => (
										<li key={pointIndex} className='flex items-start text-sm lg:text-base'>
											<span className='text-primary-500 mr-2 mt-1 text-xs'>●</span>
											<span>{point}</span>
										</li>
									))}
								</ul>
							</div>
						)}
					</div>
				))}
			</div>
		</section>
	);
}

export default Experience;
