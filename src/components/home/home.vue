<template>
    <div class="home">
        <heades signin-up='home'>
            <span slot='logo' class="head_logo"  @click="reload">ele.me</span>
            <!-- <p @click="reload">ele.me</p> -->
        </heades>
        <nav class="nav_city">
            <span>当前定位城市</span>
            <span>定位不准时，请在城市列表中选择</span>
        </nav>
    </div>
</template>
<script>
import heades from '@/components/common/heades.vue'
export default {
    name: 'home',
    data (){
        return {

        }
    },
    components: {
        heades,
    },
    methods: {
        reload(){
            window.location.reload();
        }
    }
}
</script>
<style lang="stylus" scoped>
.home{
    height 90px;
    background-color themeColor;
    .nav_city{
        color colorRed;
    }
}
</style>

