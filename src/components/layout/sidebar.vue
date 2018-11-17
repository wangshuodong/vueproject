<template>
    <div class="sidebar">
        <el-menu
            class="sidebar-el-menu"
            :default-active="defActive"
            :collapse="isSidebarNavCollapse"
            background-color="#324157"
            text-color="#bfcbd9"
            active-text-color="#20a0ff"
            unique-opened
            router>
            <template v-for="(item, n) in navList">
                <template v-if="item.child">
                    <el-submenu :index="item.name" :key="item.name">
                        <template slot="title">
                            <i :class="item.icon"></i>
                            <span slot="title">{{ item.name }}</span>
                        </template>
                        <el-menu-item v-for="(subItem, i) in item.child" :index="subItem.path" :key="i">
                            <span slot="title">{{ subItem.name }}</span>
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.path" :key="item.path">
                        <i :class="item.icon"></i>
                        <span slot="title">{{ item.name }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'

    export default {
        data() {
            return {}
        },
        computed: {
            ...mapState(['isSidebarNavCollapse', 'navList']),
            defActive() {
                return this.$route.path
            },
        }
    }
</script>

<style scoped>
    .sidebar {
        display: block;
        position: absolute;
        left: 0;
        top: 70px;
        bottom: 0;
        overflow-y: scroll;
    }

    .sidebar::-webkit-scrollbar {
        width: 0;
    }

    .sidebar-el-menu:not(.el-menu--collapse) {
        width: 250px;
    }

    .sidebar > ul {
        height: 100%;
    }
</style>
