<template>
    <div class="header-btn">
        <el-button
            v-for="item1 in btnType"
            size="medium"
            type="primary"
            :key="item1.key"
            :icon="item1.icon"
            @click="judgeIschoseBill(item1.key)"
        >
            {{item1.name}}
        </el-button>
    </div>
</template>

<script>
    export default {
        name: "header-btn",
        props:{
            btnType: Array,
        },
        methods:{
            judgeIsChoseBill(type) {

            }
        }
    }
</script>

<style scoped>

</style>