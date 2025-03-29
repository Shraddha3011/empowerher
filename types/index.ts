export interface User {
  id: string;
  name: string;
  email: string;
  image?: string;
  role: 'user' | 'admin' | 'seller';
  businessType?: string;
  progress: {
    completedCourses: number;
    totalCourses: number;
    currentStreak: number;
  };
  businessMetrics: {
    totalSales: number;
    activeListings: number;
    averageRating: number;
    totalReviews: number;
  };
} 