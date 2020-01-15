<template>
    <div>
        分类
        <button @click="get">点击获取</button>
        <input type="text"  @change="changeCount">
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods: {
        get(){
            this.$store.dispatch('changestatus',5)
            console.log(this.$store.getters.getData); 
        },
        changeCount(e){ 
            this.$store.commit('changeData',e.target.value)
        }
    },
}
</script>
<style lang="less" scoped>

</style>