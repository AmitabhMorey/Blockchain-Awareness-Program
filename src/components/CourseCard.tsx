import React from 'react';
import { ArrowRight, Clock, BookOpen } from 'lucide-react';
import { Course } from '../types';

interface CourseCardProps {
  course: Course;
  onEnroll: (courseId: string) => void;
}

export function CourseCard({ course, onEnroll }: CourseCardProps) {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-500';
      case 'Intermediate':
        return 'bg-yellow-500';
      case 'Advanced':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">{course.title}</h3>
          <span className={`${getLevelColor(course.level)} text-xs px-2 py-1 rounded-full text-white`}>
            {course.level}
          </span>
        </div>
      </div>
      <p className="text-gray-400 mb-4">{course.description}</p>
      <div className="flex items-center text-gray-400 mb-4">
        <Clock className="w-4 h-4 mr-2" />
        <span>{course.duration}</span>
        <BookOpen className="w-4 h-4 ml-4 mr-2" />
        <span>{course.modules.length} modules</span>
      </div>
      <button
        onClick={() => onEnroll(course.id)}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg flex items-center justify-center"
      >
        Start Learning
        <ArrowRight className="w-4 h-4 ml-2" />
      </button>
    </div>
  );
}