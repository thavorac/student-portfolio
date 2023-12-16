export default {
  async getStudent(axios, schoolId, studentId) {
    return await axios.get(
      `/api-backend/schools/${schoolId}/students/${studentId}`
    )
  },
}
