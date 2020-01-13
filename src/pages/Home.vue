<template>
    <div>
        <!-- 轮播图 -->
        <div class="wrapper">
            <swiper :options="swiperOption" v-if="showSwiper">
            <!-- slides -->
            <swiper-slide v-for="(item,index) in list" :key="index">
                <img class="swiper-img" :src="item.imgUrl"/>
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
        <div class='continer'>
            <div class='box' @click="gotoTOKYO">东京</div>
            <div class='box'>巴黎</div>
            <div class='box'>土耳其</div>
        </div> 
        <div class='continer'> 
            <div class='box1'></div>
            <div class='box1'></div>
            <div class='box1'></div>
        </div>
        
    </div>
</template>
<script>
import Penguins from '@/assets/Penguins.jpg'
import Tulips from '@/assets/Tulips.jpg'
import Lighthouse from '@/assets/Lighthouse.jpg'
export default {
    data(){
        return{
            list:[
                  {imgUrl:Penguins},
                  {imgUrl:Tulips},
                  {imgUrl:Lighthouse}
                 ],
            showSwiper:true,
            swiperOption: {
            pagination: '.swiper-pagination',//分页圆点
            netNextTick:true,//组件自有属性
            autoplayDisableOnInteraction: false, //滑动后依旧可以自动轮播 
            autoplay:true,//自动轮播
            speed:1500,//
            loop:true, // 可循环轮播
            grabCursor: true,//小手掌抓取滑动 
            initialSlide: 0,//初始化slide索引
            }
        }
    },
    mounted(){
    },
    methods:{
        gotoTOKYO(){
            // this.$router.replace('../components/toKyo.vue');
            this.$router.push('../components/toKyo.vue');
        }
    },
}
</script>
<style lang="less" scoped>
.wrapper{
    width: 100%;
}
.swiper-img{
   width: 100%;
   height: 150px;
   background-color: pink;
}
.continer{
    display: flex;
}
.box,.box1{
    flex:1;
    height: 100px;
    line-height: 100px;
    font-size: 16px;
    border:1px solid #bbb;
}   
.box:nth-of-type(1){
    background-color: aqua;
}
.box:nth-of-type(2){
    background-color: pink;
}
.box:nth-of-type(3){
    background-color: yellow;
}
.box1:nth-of-type(1){
    background-color: yellow;
}
.box1:nth-of-type(2){
    background-color: aqua;
}
.box1:nth-of-type(3){
    background-color: pink;
}
</style>