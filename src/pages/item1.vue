<template>
    <div>

        <el-card class="box-card">
            <div class="sys-notes">
                menu1-item1
            </div>
            <div class="sys-search">
                搜索栏
            </div>
            <el-button type="primary" v-hasPermission="'edit'">修改</el-button>
        </el-card>

    </div>
</template>

<script>
  export default {
  }
</script>

<style scoped>

</style>
