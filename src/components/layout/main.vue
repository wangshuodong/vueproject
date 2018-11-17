<template>
    <div class="wrapper">
        <Header></Header>
        <Sidebar></Sidebar>
        <transition name="fade" mode="out-in">
            <router-view/>
        </transition>

    </div>
</template>

<script>
    import Header from './header.vue';
    import Sidebar from './sidebar.vue';

    export default {
        data() {
            return {
                tagsList: []
            }
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
