<template>
    <div class="home">
        <heades signin-up='home'>
            <p slot='logo' class="head_logo"  @click="reload">ele.me</p>
        </heades>
        <nav class="nav_city">
            <div class="city_tip">
                <span>当前定位城市</span>
                <span>定位不准时，请在城市列表中选择</span>
            </div>
            <div class="guess_city">
                <span>{{guessCity}}</span>
                <span>></span>
            </div>
        </nav>
    </div>
</template>
<script>
import heades from '@/components/common/heades.vue';
import {mapState} from 'vuex';
export default {
    name: 'home',
    data (){
        return {
            guessCity: '上海',//当前城市
            guessCityid: '',//当前城市id
            hotcity: [],     //热门城市列表
            groupcity: {},   //所有城市列表
        }
    },
    computed: {
        ...mapState([
            'aaa'
        ])
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
<style scoped lang="stylus">
@import '../../assets/style/mixin.styl';

.home{
    height 90px;
    background-color themeColor;
    .head_logo{
        position absolute;
        left 10px;
        ct();
        sc(30px,#fff);
        font-weight 400;
    }
    
    .nav_city{
        fonnt-size 30px;
        padding-top 90px;
        .city_tip{
            fj();
            border-bottom width style color
            span:nth-child(1){
                sc(30px,#666);
            }
            span:nth-child(2){
                sc(28px,#9f9f9f);
            }

        }
        .guess_city{
            fj();
            border-bottom width style color
            span:nth-child(1){
                sc(30px,#666);
            }
            span:nth-child(2){
                sc(28px,#9f9f9f);
            }
            borders(1px,solid,red,null);
            // bor(1px,dashed,red);
        }
        
    }
    
}

</style>

