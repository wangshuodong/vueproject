export default {
    get name() {
        return sessionStorage.getItem('name')
    },
    set name(value) {
        if (value) {
            sessionStorage.setItem('name', value)
        } else {
            sessionStorage.removeItem('name')
        }
    },
    get token() {
        return sessionStorage.getItem('token')
    },
    set token(value) {
        if (value) {
            sessionStorage.setItem('token', value)
        } else {
            sessionStorage.removeItem('token')
        }
    },
    //菜单数据
    navList: [],
    //权限数据
    permissionList: [],
    /* 导航菜单是否折叠 */
    isSidebarNavCollapse: false,
    /* 面包屑导航列表 */
    crumbList: []
}
