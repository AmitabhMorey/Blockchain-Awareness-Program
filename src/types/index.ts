export interface Course {
  id: string;
  title: string;
  description: string;
  modules: Module[];
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
}

export interface Module {
  id: string;
  title: string;
  completed: boolean;
  content: string;
}

export interface Certificate {
  courseId: string;
  courseName: string;
  completionDate: string;
  studentName: string;
}