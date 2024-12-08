import React, { useState } from 'react';
import { BookOpen, Scroll, Home } from 'lucide-react';
import { courses } from './data/courses';
import { CourseCard } from './components/CourseCard';
import { Certificate } from './components/Certificate';
import { Course, Certificate as CertificateType } from './types';

function App() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [certificates, setCertificates] = useState<CertificateType[]>([]);
  const [activeTab, setActiveTab] = useState('courses');

  const handleEnroll = (courseId: string) => {
    const course = courses.find(c => c.id === courseId);
    if (course) {
      setSelectedCourse(course);
    }
  };

  const completeCourse = (course: Course) => {
    const newCertificate: CertificateType = {
      courseId: course.id,
      courseName: course.title,
      completionDate: new Date().toLocaleDateString(),
      studentName: 'Student Name' // In a real app, this would come from user profile
    };
    setCertificates([...certificates, newCertificate]);
    setSelectedCourse(null);
    setActiveTab('certificates');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">BlockLearn</h1>
          <div className="flex space-x-4">
            <button
              onClick={() => setActiveTab('courses')}
              className={`flex items-center px-4 py-2 rounded-lg ${
                activeTab === 'courses' ? 'bg-blue-600' : 'hover:bg-gray-700'
              }`}
            >
              <Home className="w-4 h-4 mr-2" />
              Courses
            </button>
            <button
              onClick={() => setActiveTab('certificates')}
              className={`flex items-center px-4 py-2 rounded-lg ${
                activeTab === 'certificates' ? 'bg-blue-600' : 'hover:bg-gray-700'
              }`}
            >
              <Scroll className="w-4 h-4 mr-2" />
              Certificates
            </button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        {activeTab === 'courses' && !selectedCourse && (
          <div>
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <BookOpen className="w-8 h-8 mr-3" />
              Available Courses
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map(course => (
                <CourseCard
                  key={course.id}
                  course={course}
                  onEnroll={handleEnroll}
                />
              ))}
            </div>
          </div>
        )}

        {selectedCourse && (
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">{selectedCourse.title}</h2>
            <div className="space-y-4">
              {selectedCourse.modules.map((module, index) => (
                <div key={module.id} className="bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">
                    Module {index + 1}: {module.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{module.content}</p>
                </div>
              ))}
            </div>
            <button
              onClick={() => completeCourse(selectedCourse)}
              className="mt-8 bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg"
            >
              Complete Course
            </button>
          </div>
        )}

        {activeTab === 'certificates' && (
          <div>
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <Scroll className="w-8 h-8 mr-3" />
              Your Certificates
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certificates.map((cert, index) => (
                <Certificate key={index} certificate={cert} />
              ))}
              {certificates.length === 0 && (
                <p className="text-gray-400 col-span-2 text-center py-8">
                  Complete courses to earn certificates!
                </p>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;