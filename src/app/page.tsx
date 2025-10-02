"use client";

import { useEffect, useState } from "react";
import StudentForm from "./app/StudentForm";
import { fetchStudents } from "./app/api/studentAPI";

interface Student {
  _id: string;
  fristName: string;
  lastName: string;
  email: string;
  age: string;
  currentCollge: string;
}
const StudentPage = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  // Fetch all students
  const loadStudents = async () => {
    try {
      const data = await fetchStudents();
      setStudents(data);
    } catch (error) {
      console.log("Error Fetching Students: ", error);
      throw new Error("Failed to Delete Student");
    }
  };
  // submit student (add or update)

  // delete student by id

  // inital data fetch
  useEffect(() => {
    loadStudents();
  });

  return (
    <div className="p-8 max-w-7x1 mx-auto">
      <h1 className="text-3x1 font-extrabold text-gray-800 mb-6">Students</h1>

      {/* Table */}
      <div className="overflow-x-auto rounder-lg shadow-lg mb-8">
        <table className="min-w-full bg-white divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                ID
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                First Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                Last Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                Email
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                Age
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                Current College
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {students.map((student) => (
              <tr key={student._id} className="hover:bg-gray-50">
                <td className="px-6 py-4 txt-sm text-gray-700 whitespace-nowrap">
                  {student._id}
                </td>
                <td className="px-6 py-4 txt-sm text-gray-700 whitespace-nowrap">
                  {student.fristName}
                </td>
                <td className="px-6 py-4 txt-sm text-gray-700 whitespace-nowrap">
                  {student.lastName}
                </td>
                <td className="px-6 py-4 txt-sm text-gray-700 whitespace-nowrap">
                  {student.email}
                </td>
                <td className="px-6 py-4 txt-sm text-gray-700 whitespace-nowrap">
                  {student.age}
                </td>
                <td className="px-6 py-4 txt-sm text-gray-700 whitespace-nowrap">
                  {student.currentCollge}
                </td>
                <td className="px-6 py-4 text-sm whitespace"></td>
                <td>
                  <button
                    className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-lg mr-2 text-sm"
                    onClick={() => {}}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="bg-blue-600 hover:bg-red-700 text-white px-3 py-1 rounded-lg mr-2 text-sm"
                    onClick={() => {}}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <StudentForm />
    </div>
  );
};

export default StudentPage;
