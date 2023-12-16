import apis from '~/apis'

// initial state
export const state = () => ({
  student: '',
})

// getters
export const getters = {
  getStudentName(state) {
    return state.student.name
  },
}

// mutations
export const mutations = {
  setStudent(state, student) {
    state.student = student
  },
}

// actions
export const actions = {
  async fetchStudent({ commit }, schoolId, studentId) {
    await apis.backend
      .getStudent(this.$axios, schoolId, studentId)
      .then(async (res) => {
        await commit('setStudent', res.data)
      })
      .catch((err) => {
        const errorMessage = err.message
        throw new Error(errorMessage)
      })
  },
}
