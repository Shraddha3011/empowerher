"use client";

import React, { useState } from 'react';
import Link from 'next/link';

// Define course interface
interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  instructor: string;
  progress?: number;
  modules: number;
  thumbnail: string;
}

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const courseCategories = [
    'All', 
    'Business Fundamentals', 
    'Digital Marketing', 
    'Financial Management', 
    'Leadership', 
    'Technology Skills'
  ];

  const courses: Course[] = [
    {
      id: 'biz-fundamentals',
      title: 'Business Fundamentals for Women Entrepreneurs',
      description: 'Learn the core principles of starting and managing a successful business.',
      duration: '4 weeks',
      difficulty: 'Beginner',
      category: 'Business Fundamentals',
      instructor: 'Priya Sharma',
      modules: 8,
      thumbnail: '/api/placeholder/400/250'
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing Mastery',
      description: 'Master online marketing strategies to grow your business in the digital age.',
      duration: '6 weeks',
      difficulty: 'Intermediate',
      category: 'Digital Marketing',
      instructor: 'Anjali Patel',
      modules: 10,
      thumbnail: '/api/placeholder/400/250'
    },
    {
      id: 'financial-planning',
      title: 'Financial Planning and Accounting',
      description: 'Learn financial management, budgeting, and financial strategy for your business.',
      duration: '5 weeks',
      difficulty: 'Intermediate',
      category: 'Financial Management',
      instructor: 'Deepa Reddy',
      modules: 7,
      thumbnail: '/api/placeholder/400/250'
    },
    {
      id: 'leadership-skills',
      title: 'Women in Leadership',
      description: 'Develop leadership skills, confidence, and strategic thinking.',
      duration: '4 weeks',
      difficulty: 'Advanced',
      category: 'Leadership',
      instructor: 'Rashmi Khanna',
      modules: 6,
      thumbnail: '/api/placeholder/400/250'
    },
    {
      id: 'tech-skills',
      title: 'Technology Skills for Modern Entrepreneurs',
      description: 'Learn essential tech skills including basic coding, tools, and digital platforms.',
      duration: '5 weeks',
      difficulty: 'Beginner',
      category: 'Technology Skills',
      instructor: 'Sanya Kapoor',
      modules: 9,
      thumbnail: '/api/placeholder/400/250'
    }
  ];

  // Filter courses based on category and search term
  const filteredCourses = courses.filter(course => 
    (selectedCategory === 'All' || course.category === selectedCategory) &&
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">EmpowerHer Learning Paths</h1>
          <p className="text-xl text-gray-600">
            Unlock your potential with our curated courses designed for women entrepreneurs
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="flex-grow">
            <input 
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <div className="flex overflow-x-auto space-x-2">
            {courseCategories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedCategory === category 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        {filteredCourses.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow">
            <p className="text-xl text-gray-600">
              No courses found matching your search or category.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map(course => (
              <div 
                key={course.id} 
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <img 
                  src={course.thumbnail} 
                  alt={course.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{course.description}</p>
                  
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div>
                      <span className="text-sm text-gray-500">Duration</span>
                      <p className="font-semibold">{course.duration}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">Difficulty</span>
                      <p className={`font-semibold ${
                        course.difficulty === 'Beginner' ? 'text-green-600' :
                        course.difficulty === 'Intermediate' ? 'text-yellow-600' :
                        'text-red-600'
                      }`}>
                        {course.difficulty}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-sm text-gray-500">Instructor</span>
                      <p className="font-medium">{course.instructor}</p>
                    </div>
                    <Link href={`/courses/${course.id}`} className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                      View Course
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Recommendation Section */}
        <div className="mt-12 bg-gradient-to-r from-pink-500 to-purple-600 text-white p-8 rounded-xl text-center">
          <h2 className="text-3xl font-bold mb-4">Personalized Learning Paths</h2>
          <p className="text-xl mb-6">
            Can't find the right course? We'll help you create a custom learning journey!
          </p>
          <Link href="/learning-assessment" className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Take Learning Assessment
          </Link>
        </div>
      </div>
    </div>
  );
}