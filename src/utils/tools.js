/**
 * 将菜单列表扁平化形成权限列表
 * @param navList
 * @returns {Array}
 */
export const flatNavList = (navList) => {
    var permissionList = []
    navList.forEach((v, i) => {
        if (v.child && v.child.length) {
            flatNavList(v.child)
        } else {
            permissionList.push(v)
        }
    })

    /*for (let v of navList) {
        if (v.child && v.child.length) {
            flatNavList(v.child)
        } else {
            permissionList.push(v)
        }
    }*/
    return permissionList
}
