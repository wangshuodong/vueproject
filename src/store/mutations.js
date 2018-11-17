export default {
    setName: (state, data) => {
        state.name = data
    },

    setNavList: (state, data) => {
        state.navList = data
    },

    setPermissionList: (state, data) => {
        state.permissionList = data
    },

    setToken: (state, data) => {
        state.token = data
    },

    toggleNavCollapse(state) {
        state.isSidebarNavCollapse = !state.isSidebarNavCollapse
    },
}
