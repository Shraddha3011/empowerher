interface ProgressProps {
  progress: {
    coursesCompleted: number;
    hoursSpent: number;
    certificatesEarned: number;
  };
}

export function LearningProgress({ progress }: ProgressProps) {
  return (
    <div className="bg-base-100 p-6 rounded-box shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Learning Progress</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="stat">
          <div className="stat-title">Courses</div>
          <div className="stat-value">{progress.coursesCompleted}</div>
          <div className="stat-desc">Completed</div>
        </div>
        <div className="stat">
          <div className="stat-title">Hours</div>
          <div className="stat-value">{progress.hoursSpent}</div>
          <div className="stat-desc">Learning Time</div>
        </div>
        <div className="stat">
          <div className="stat-title">Certificates</div>
          <div className="stat-value">{progress.certificatesEarned}</div>
          <div className="stat-desc">Earned</div>
        </div>
      </div>
    </div>
  );
} 