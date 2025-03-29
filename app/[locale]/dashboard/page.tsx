import DashboardHeader from '@/components/dashboard/DashboardHeader';
import LearningProgress from '@/components/dashboard/LearningProgress';
import BusinessMetrics from '@/components/dashboard/BusinessMetrics';
import RecommendedCourses from '@/components/dashboard/RecommendedCourses';
import CommunityUpdates from '@/components/dashboard/CommunityUpdates';
import { dummyUsers } from '@/dummy/users';
import { dummyCourses } from '@/dummy/courses';
import { dummyCommunity } from '@/dummy/community';

export default function Dashboard() {
  const user = dummyUsers.current;
  
  return (
    <div className="container mx-auto px-4 py-8">
      <DashboardHeader user={user} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <LearningProgress progress={user.progress} />
        <BusinessMetrics metrics={user.businessMetrics} />
      </div>
      
      <div className="mt-8">
        <RecommendedCourses courses={dummyCourses.recommended} />
      </div>
      
      <div className="mt-8">
        <CommunityUpdates 
          mentors={dummyCommunity.mentors}
          events={dummyCommunity.upcomingEvents}
        />
      </div>
    </div>
  );
} 