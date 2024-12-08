import React from 'react';
import { Award } from 'lucide-react';
import { Certificate as CertificateType } from '../types';

interface CertificateProps {
  certificate: CertificateType;
}

export function Certificate({ certificate }: CertificateProps) {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-8 rounded-lg border border-gray-700">
      <div className="flex flex-col items-center text-center">
        <Award className="w-16 h-16 text-yellow-500 mb-4" />
        <h2 className="text-2xl font-bold text-white mb-2">Certificate of Completion</h2>
        <p className="text-gray-400 mb-6">This certifies that</p>
        <p className="text-xl font-semibold text-white mb-4">{certificate.studentName}</p>
        <p className="text-gray-400 mb-2">has successfully completed</p>
        <p className="text-xl font-semibold text-white mb-6">{certificate.courseName}</p>
        <p className="text-gray-400">Completed on {certificate.completionDate}</p>
      </div>
    </div>
  );
}