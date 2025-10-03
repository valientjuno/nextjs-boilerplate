import axios from "axios";

const API_URL = "http://localhost:3007/students";

interface Student {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  age: string;
  currentCollege: string;
}

// Fetch All Students
async function fetchStudents(): Promise<Student[]> {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error Fetching students: ", error);
    throw new Error("Failed to fetch students");
  }
}

// Delete a Student
async function deleteStudent(id: string): Promise<void> {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error("Error Deleting student: ", error);
    throw new Error("Failed to delete student");
  }
}

// Submit (Add or Update) a Student
async function submitStudent(
  studentData: Omit<Student, "_id">,
  id?: string
): Promise<void> {
  try {
    if (id) {
      // Update Student
      await axios.put(`${API_URL}/${id}`, studentData);
    } else {
      // Add a new Student (let backend create _id)
      await axios.post(API_URL, studentData);
    }
  } catch (error) {
    console.error("Error Submitting student: ", error);
    throw new Error("Failed to submit student");
  }
}

export { fetchStudents, deleteStudent, submitStudent };
