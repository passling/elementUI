<template>
    <div class="app-wrapper">
        <navbar-new></navbar-new>
        <sidebar class="sidebar-container"></sidebar>
        <div class="main-container">
            <app-main></app-main>
        </div>

    </div>
</template>

<script>
    import NavbarNew from '@/view/layout/components/NavbarNew'
    import Sidebar from '@/view/layout/components/Sidebar'
    import AppMain from '@/view/layout/components/AppMain'
    export default {
        name: "layout",
        components: {
            NavbarNew,
            Sidebar,
            AppMain

        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    @import "src/style/mixin.scss";
    .app-wrapper {
        @include clearfix;
        position: relative;
        height: 100%;
        width: 100%;
    }
</style>
