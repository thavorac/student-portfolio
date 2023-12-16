export const state = () => ({
  isSideMenuOpen: false,
  isPagesMenuOpen: false,
  isNotificationsMenuOpen: false,
  isNotificationListOpen: false,
  isProfileMenuOpen: false,
  isModalOpen: false,
  trapCleanup: null,
})

export const actions = {
  closeProfileMenuAction({ commit }) {
    commit('closeProfileMenu')
  },
}

export const getters = {
  getProfile(state) {
    return state.profile
  },

  isAuthenticated(state) {
    return state.auth.loggedIn
  },

  loggedInUser(state) {
    return state.auth.user
  },
}

export const mutations = {
  toggleSideMenu(state) {
    state.isSideMenuOpen = !state.isSideMenuOpen
  },

  closeSideMenu(state) {
    state.isSideMenuOpen = false
  },

  toggleNotificationsMenu(state) {
    state.isNotificationsMenuOpen = !state.isNotificationsMenuOpen
  },

  closeNotificationsMenu(state) {
    state.isNotificationsMenuOpen = false
  },

  // Notification list is used in Student Portal
  toggleNotificationList(state) {
    state.isNotificationListOpen = !state.isNotificationListOpen
  },

  closeNotificationList(state) {
    state.isNotificationListOpen = false
  },

  toggleProfileMenu(state) {
    state.isProfileMenuOpen = !state.isProfileMenuOpen
  },

  closeProfileMenu(state) {
    state.isProfileMenuOpen = false
  },

  togglePagesMenu(state) {
    state.isPagesMenuOpen = !state.isPagesMenuOpen
  },

  // Modal

  openModal(state) {
    state.isModalOpen = true
    // state.trapCleanup = focusTrap(document.querySelector('#modal'))
  },
  closeModal(state) {
    state.isModalOpen = false
    state.trapCleanup()
  },
}
