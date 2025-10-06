import React, { useState, useEffect } from "react";

interface Student {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  age: string;
  currentCollege: string;
}

interface StudentFormProps {
  student: Student | null;
  onsubmit: (student: Omit<Student, "_id">, id?: string) => void;
}

const StudentForm = ({ student, onsubmit }: StudentFormProps) => {
  const [formState, setFormState] = useState<Omit<Student, "_id">>({
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    currentCollege: "",
  });

  useEffect(() => {
    if (student) {
      const { _id, ...rest } = student;
      setFormState(rest);
    } else {
      setFormState({
        firstName: "",
        lastName: "",
        email: "",
        age: "",
        currentCollege: "",
      });
    }
  }, [student]);

  const handleChange = (field: keyof Omit<Student, "_id">, value: any) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    onsubmit(formState, student?._id);
  };

  return (
    <div className="bg-white shadow-lg p-6 rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        {student ? "Update Student" : "Add New Student"}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <input
          type="text"
          placeholder="First Name"
          value={formState.firstName}
          onChange={(e) => handleChange("firstName", e.target.value)}
          className="border border-gray-300 focus:ring-blue-500 focus:border-blue-500 px-4 py-2 rounded-lg w-full text-black"
        />
        <input
          type="text"
          placeholder="Last Name"
          value={formState.lastName}
          onChange={(e) => handleChange("lastName", e.target.value)}
          className="border border-gray-300 focus:ring-blue-500 focus:border-blue-500 px-4 py-2 rounded-lg w-full text-black"
        />
        <input
          type="text"
          placeholder="Email"
          value={formState.email}
          onChange={(e) => handleChange("email", e.target.value)}
          className="border border-gray-300 focus:ring-blue-500 focus:border-blue-500 px-4 py-2 rounded-lg w-full text-black"
        />
        <input
          type="text"
          placeholder="Age"
          value={formState.age}
          onChange={(e) => handleChange("age", Number(e.target.value))}
          className="border border-gray-300 focus:ring-blue-500 focus:border-blue-500 px-4 py-2 rounded-lg w-full text-black"
        />
        <input
          type="text"
          placeholder="Current College"
          value={formState.currentCollege}
          onChange={(e) => handleChange("currentCollege", e.target.value)}
          className="border border-gray-300 focus:ring-blue-500 focus:border-blue-500 px-4 py-2 rounded-lg w-full text-black"
        />
      </div>
      <button
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg text-sm"
        onClick={handleSubmit}
      >
        {student ? "Update Student" : "Add New Student"}
      </button>
    </div>
  );
};

export default StudentForm;
