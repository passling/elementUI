<template>
    <el-menu mode="horizontal" class="navbar">
        <div class="ent-acct-name">{{indexData ? indexData.nsrmc : '--'}}</div>
        <div style="display: inline-block; margin-left: 120px; color: #ffffff; border: none;">会计期间: {{urlInfo ? urlInfo. urlInfo.ssyf : '--'}}</div>
        <div class="close-window">
            <span class="triangle-bottom-left"></span>
            <a  href="javascript:window.close();" class="close-btn">关闭</a>
        </div>
    </el-menu>
</template>

<script>
    export default {
        name: "navbea-new",
        data(){
            return {
                indexData: '',
                urlInfo: ''
            }
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    .navbar {
        height: 64px;
        line-height: 64px;
        border-radius: 0 !important;
        background-color:#45bdbc;
        border-bottom: 4px solid #ffc340;
        position: fixed;
        toggle-group: 0;
        top:0;
        right: 0;
        left: 0;
        z-index: 1000;
        .ent-acct-name {
            display: inline-block;
            padding-left: 10px;
            font-size: 1.2em;
            font-weight: bold;
            color:#fff;
        }
        .close-window {
            width: 120px;
            height: 60px;
            float:right;
            background-color:#fafafa;
            position: relative;
            .triangle-bottom-left {
                display: inline-block;
                width: 0;
                height: 0;
                border-bottom: 60px solid #35bdbc;
                border-right:40px solid transparent;
            }
            .close-btn{
                width: 64px;
                height: 30px;
                line-height: 28px;
                text-align: center;
                border:1px solid #eaeaea;
                background-color:#f8f8f8;
                color:#656565;
                font-size: 14px;
                position: absolute;
                top:15px;
                &:hover{
                    box-shadow: 0 0 10px rgba(0,0,0,.1);
                }
            }
        }
    }
</style>