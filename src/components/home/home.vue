<template>
    <div class="home">
        <heades signin-up='home'>
            <p slot='logo' class="head_logo"  @click="reload">ele.me</p>
        </heades>
        <nav class="nav_city">
            <div class="city_tip">
                <span>当前定位城市</span>
                <span>定位不准时，请在城市列表中选择------{{this.hotcity}}</span>
            </div>
            <router-link to="/city" class="guess_city">
                <span>{{guessCity}}</span>
                <span>></span>
            </router-link>
        </nav>
    </div>
</template>
<script>
import heades from '@/components/common/heades.vue';
import {cityGuess, hotcity, groupcity} from '../../service/getData';
export default {
    name: 'home',
    data (){
        return {
            guessCity: '',   //当前城市
            guessCityid: '', //当前城市id
            hotcity: [],     //热门城市列表
            groupcity: {},   //所有城市列表
        }
    },
    mounted(){
        // 获取当前城市
        cityGuess().then(res => {
            this.guessCity = res.name;
            this.guessCityid = res.id;
        })

        //获取热门城市
        hotcity().then(res => {
            this.hotcity = res;
            console.log(this.hotcity)
        })

        //获取所有城市
        groupcity().then(res => {
            this.groupcity = res;
        })
    },
    computed: {
        
    },
    components: {
        heades,
    },
    methods: {
        reload(){
            window.location.reload();
        },
    }
}
</script>
<style scoped lang="stylus">
@import '../../assets/style/mixin.styl';
.common_01{
    fj();
    padding 0 10px;
    line-height 80px;
    span:nth-child(1){
        sc(30px,#666);
    }
    span:nth-child(2){
        sc(28px,#9f9f9f);
    }
}
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
            @extend .common_01;
            borders(1px,solid,#e4e4e4,bottom);
        }
        .guess_city{
            @extend .common_01;
            borders(3px,solid,#e4e4e4,bottom);
            
        }
        
    }
    
}

</style>

