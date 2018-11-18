<template>
    <div class="wrapper">
        <Header></Header>
        <Sidebar></Sidebar>
        <div class="content-box" :class="{'content-collapse':isSidebarNavCollapse}">
            <transition name="fade" mode="out-in">
                <router-view/>
            </transition>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import Header from './header.vue';
    import Sidebar from './sidebar.vue';

    export default {
        data() {
            return {
                tagsList: []
            }
        },
        computed: {
            ...mapState(['isSidebarNavCollapse']),
            defActive() {
                return this.$route.path
            },
        },
        components: {
            Header,
            Sidebar
        },
    }
</script>

<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>
