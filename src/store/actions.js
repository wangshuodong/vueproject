import axios from '../config/httpConfig'

export default {
// 邮箱登录
    login({commit}, userInfo) {
        return new Promise((resolve) => {
            axios.get('/static/login.json').then(res => {
                commit('setToken', res.token)
                commit('setName', res.username)
                resolve(res)
            })
        });
    },

    // 登出
    logout({commit}) {
        return new Promise((resolve) => {
            commit('setToken', '')
            commit('setName', '')
            //commit('removeTagNav', '', {root: true})
            resolve()
        })
    },

    // 获取该用户的菜单列表
    getNavList({commit, state}) {
        return new Promise((resolve) => {
            if (state.permissionList.length == 0) {
                console.log("没有权限数据，正在获取")
                axios.get('/static/menudata.json').then((res) => {
                    commit("setNavList", res)
                    let permissionList = []
                    function flatNavList(arr){
                        for(let v of arr){
                            if(v.child && v.child.length){
                                flatNavList(v.child)
                            } else{
                                permissionList.push(v)
                            }
                        }
                    }
                    flatNavList(state.navList)


                    commit("setPermissionList", permissionList)
                    resolve(permissionList)
                })
            }else {
                resolve(state.permissionList)
            }

        })
    }
}
