import portfolioData from '../data/portfolio.json';

interface ExtracurricularActivity {
  title: string;
  organization: string;
  role: string;
  image?: string;
  start_date: string;
  end_date: string;
  description?: string;
  achievements?: string[];
}

function ExtraCurricularActivities() {
  const { extracurricular_activities } = portfolioData as { extracurricular_activities: ExtracurricularActivity[] };

  const formatDate = (dateStr: string) => {
    if (dateStr.toLowerCase() === 'present') return 'Present';

    // Parse dates like "January 2022" or "March 2023"
    const date = new Date(dateStr);
    if (!Number.isNaN(date.getTime())) {
      return date.toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric'
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
    <section id="extracurricular" className="mb-20">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-10">Extra Curricular Activities</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {extracurricular_activities.map((activity, index) => (
          <div key={index} className="p-6 lg:p-8 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 space-y-6">
            {/* Header with image and dates */}
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="bg-success-100 dark:bg-success-900/30 text-success-800 dark:text-success-400 px-3 py-1.5 rounded-lg text-sm font-semibold">
                  {formatDate(activity.start_date)} - {formatDate(activity.end_date)}
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-xs">{getDuration(activity.start_date, activity.end_date)}</p>
              </div>

              <div className="flex items-start gap-4">
                {/* Organization Image */}
                {activity.image && (
                  <div className="flex-shrink-0">
                    <img
                      src={activity.image}
                      alt={`${activity.organization} logo`}
                      className="w-16 h-16 lg:w-20 lg:h-20 object-contain rounded-lg bg-white dark:bg-gray-700 p-2 border border-gray-200 dark:border-gray-600"
                    />
                  </div>
                )}

                {/* Title and Organization Info */}
                <div className="flex-grow">
                  <h3 className="text-gray-900 dark:text-white font-bold text-lg lg:text-xl leading-tight mb-2">
                    {activity.title}
                  </h3>
                  <p className="text-success-600 dark:text-success-400 text-sm lg:text-base font-semibold mb-1">
                    {activity.organization}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-xs lg:text-sm font-medium">
                    {activity.role}
                  </p>
                </div>
              </div>
            </div>

            {/* Description */}
            {activity.description && activity.description.trim() !== '' && (
              <div>
                <p className="text-gray-700 dark:text-gray-300 text-sm lg:text-base leading-relaxed">
                  {activity.description}
                </p>
              </div>
            )}

            {/* Achievements */}
            {activity.achievements && activity.achievements.length > 0 && (
              <div>
                <h4 className="text-gray-900 dark:text-white font-semibold text-base lg:text-lg mb-3">Key Achievements</h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  {activity.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start text-sm lg:text-base">
                      <span className="text-success-500 mr-2 mt-1 text-xs">●</span>
                      <span>{achievement}</span>
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

export default ExtraCurricularActivities;