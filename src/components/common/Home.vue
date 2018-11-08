<template>
    <div class="wrapper">
        <Header></Header>
        <Sidebar></Sidebar>
        111111
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
        }
    }
</script>

<style>
</style>
