<template>
    <div>
        推荐
        <componentA></componentA>
        <componentB></componentB>
    </div>
</template>
<script>
import componentA from '../components/componentA.vue'
import componentB from '../components/componentB.vue'
export default {
    components:{
        componentA,componentB
    }
}
</script>
<style lang="less" scoped>

</style>