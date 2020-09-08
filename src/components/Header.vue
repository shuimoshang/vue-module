<template>
    <div class="content">
        <p>aaaaa</p>
    </div>
</template>

<script>
export default {
    name:'Header',
    data(){
        return{
            meassage:'header menu'
        }
    }
}
</script>

<style lang="less" scoped>
.content{
    position: fixed;
    left: 240px;
    width: ~"calc(100% - 240px)";
    height: 80px;
    background-color: violet;
}
</style>