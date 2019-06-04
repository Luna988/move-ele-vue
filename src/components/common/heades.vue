<template>
    <div class="heades">
        <slot name='logo'></slot>
        <router-link :to="userInfo ? '/profile' : '/login' " class="head_login">
            <p class="head_p">登录|注册</p>
        </router-link>
    </div>
</template>
<script>
import {mapState} from 'vuex';
export default {
    name: 'heades',
    data(){
        return {
            drferfew: 'ewqeqw'
        }
    },
    computed: {
        ...mapState([
            'userInfo'
        ])
    },
    methods: {
        // ...mapActions(
        //     ['getUserInfo']
        // )
    }

}
</script>
<style lang="stylus" scoped>
@import '../../assets/style/mixin.styl';
.heades{
    background-color themeColor;
    position fixed;
    z-index 100;
    left 0;
    right 0;
    wh(100%,90px);
    .head_login{
        right 10px;
        ct();
        sc(30px,#fff);
    }
}
</style>

