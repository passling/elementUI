<template>
    <scroll-bar>
        <el-menu mode="vertical" :default-active="$route.path" unique-opened>
            <sidebar-item :routes="routes"></sidebar-item>
        </el-menu>
    </scroll-bar>
</template>

<script>
    import ScrollBar from '@/components/ScrollBar'
    import SidebarItem from './SidebarItem'
    export default {
        name: "index",
        components:{
            SidebarItem,
            ScrollBar
        },
        computed: {
            routes() {
                return this.$router.options.routes
            },
        },
        mounted: function () {
            console.log(this.$router.options.routes)
        }
    }
</script>

<style scoped>

</style>