import axios from "axios";

const API_URL = "http://localhost:3007";

interface Student {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  age: string;
  currentCollege: string;
}

// Fetch all students
async function fetchStudents(): Promise<Student[]> {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching students:", error);
    throw new Error("Failed to fetch students");
  }
}

// Delete a student
async function deleteStudent(id: string): Promise<void> {
  try {
    await axios.delete(`${API_URL}/delete/${id}`);
  } catch (error) {
    console.error("Error deleting student:", error);
    throw new Error("Failed to delete student");
  }
}

// Submit (Add or Update) a student
async function submitStudent(
  studentData: Omit<Student, "_id">,
  id?: string
): Promise<void> {
  try {
    if (id) {
      // Update Student
      await axios.put(`${API_URL}/${id}`, studentData);
    } else {
      // Add new student
      await axios.post(API_URL, studentData);
    }
  } catch (error) {
    console.error("Error submitting student:", error);
    throw new Error("Failed to submit student");
  }
}

export { fetchStudents, deleteStudent, submitStudent };
