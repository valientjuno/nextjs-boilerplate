import axios from "axios";

const API_URL = "http://localhost:3007/students";

interface Student {
  _id: string;
  fristName: string;
  lastName: string;
  email: string;
  age: string;
  currentCollge: string;
}

// Fetch All students
async function fetchStudents(): Promise<Student[]> {
  try {
    const response = await axios.get(`${API_URL}/students`);
    return response.data;
  } catch (error) {
    console.log("Error Fetching student: ", error);
    throw new Error("Failed to fetch students");
  }
}

// Delete a Student
async function deleteStudent(id: string): Promise<void> {
  try {
    await axios.delete(`${API_URL}/students/.${id}`);
  } catch (error) {
    console.log("Error Deleting student: ", error);
    throw new Error("Failed to delete student");
  }
}

// Submit (add or update) a Student
async function submitStudent(
  studentData: Omit<Student, "_id">,
  id?: string
): Promise<void> {
  try {
    if (id) {
      await axios.put(`${API_URL}/students/${id}`, studentData);
    } else {
      // Add a Student
      const newId = Date.now().toString();
      await axios.post(`${API_URL}/students`, { ...studentData, _id: newId });
    }
  } catch (error) {
    console.log("Error Submitting student: ", error);
    throw new Error("Failed to submit student");
  }
}

export { fetchStudents, deleteStudent, submitStudent };
