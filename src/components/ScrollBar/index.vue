<template>
    <div class="scroll-container" rel="srcrollContainer"  @mousewheel="handleScroll">
        <div class="scroll-wrapper" rel="scrollWrapper" :style="{top: top + 'px'}">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    const delta = 15
    export default {
        name: "index",
        data(){
            return {
                top:0
            }
        },
        methods: {
            handleScroll(e) {
                e.preventDefault()
                const $container = this.$refs.scrollContainer
                const $containerHeight = $container.offsetHeight
                const $wrapper = this.$refs.scrollWrapper
                const $wrapperHeight = $wrapper.offsetHeight
                console.log(e.wheelDelta)
                if (e.wheelDelta > 0) {
                    //往上滚
                    //每次滚动120
                    this.top = Math.min (0, this.top + e.wheelDelta)
                } else {
                    //往下滚
                    if ($containerHeight - delta < $wrapperHeight) {
                        //是否有足够区域可以滚动
                        if (this.top < -($wrapperHeight - $containerHeight + delta)) {
                            //滚动过程中,位移已经到达尽头,跳过
                            this.top = this.top
                        } else {
                            //
                            //top= max(移动后的定位,最小的定位-15)
                            this.top = Math.max(this.top + e.wheelDelta, $containerHeight - $wrapperHeight - delta)

                        }
                    } else {
                        //没有可以滚动的区域,一直置顶
                        this.top = 0
                    }
                }
            }
        }
    }
</script>

<style scoped rel="stylesheet/scss" lang="scss">
    @import '../../style/variables.scss';

    .scroll-container {
        position: relative;
        width: 100%;
        height: 100%;
        background-color: $menuBg;
    .scroll-wrapper {
        position: absolute;
        width: 100%!important;
    }
    }
</style>