'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Course {
  id: string;
  title: {
    en: string;
    hi: string;
    ta: string;
  };
  duration: number;
  level: string;
  progress: number;
  thumbnail: string;
}

interface RecommendedCoursesProps {
  courses: Course[];
}

export default function RecommendedCourses({ courses }: RecommendedCoursesProps) {
  const t = useTranslations('Dashboard');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-lg p-6"
    >
      <h2 className="text-xl font-semibold text-gray-900 mb-4">{t('recommendedCourses')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-gray-50 rounded-lg overflow-hidden">
            <div className="relative h-48">
              <Image
                src={course.thumbnail}
                alt={course.title.en}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900">{course.title.en}</h3>
              <div className="mt-2 flex justify-between text-sm text-gray-600">
                <span>{course.duration} hours</span>
                <span>{course.level}</span>
              </div>
              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
                <p className="text-sm text-gray-600 mt-1">{course.progress}% complete</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
} 