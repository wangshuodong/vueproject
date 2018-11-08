<template>
    <div class="wrapper">
        <Header></Header>
        <Sidebar></Sidebar>
        <router-view/>
    </div>
</template>

<script>
    import Header from './Header.vue';
    import Sidebar from './Sidebar.vue';
    export default {
        data() {
            return {
                tagsList: [],
                collapse: false
            }
        },
        components: {
            Header,
            Sidebar
        },
        created: {

        }
    }
</script>

<style>
</style>
