// 组件全局注册
import Vue from 'vue'

import AppNotes from './common/appNotes'
import AppTitle from './common/appTitle'
import AppToolbar from './common/appToolbar'
import AppSearch from './common/appSearch'
import TableMixin from './common/tableMixin'

// 组件库
const Components = [
    AppNotes,
    AppTitle,
    AppToolbar,
    AppSearch,
    TableMixin
]

// 注册全局组件
Components.map((com) =>{
    Vue.component(com.name, com)
})

export default Vue
