import Image from 'next/image';
import Link from 'next/link';

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

export function RecommendedCourses({ courses }: RecommendedCoursesProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {courses.map((course) => (
        <div key={course.id} className="card bg-base-200">
          <figure>
            <Image
              src={course.thumbnail}
              alt={course.title.en}
              width={300}
              height={200}
              className="object-cover"
            />
          </figure>
          <div className="card-body">
            <h3 className="card-title">{course.title.en}</h3>
            <div className="flex items-center gap-2 text-sm">
              <span>⏱️ {course.duration} mins</span>
              <span>📚 {course.level}</span>
            </div>
            <div className="w-full bg-base-300 rounded-full h-2.5 mt-2">
              <div 
                className="bg-primary h-2.5 rounded-full" 
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>
            <div className="card-actions justify-end mt-4">
              <Link href={`/learning/${course.id}`} className="btn btn-primary btn-sm">
                Continue
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 