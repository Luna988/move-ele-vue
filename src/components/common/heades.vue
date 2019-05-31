<template>
    <div class="heades">
        <div class="head-top">

            <div>登录/注册</div>
        </div>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
    name: 'heades',
    data(){
        return {

        }
    },
    computed: {
        // ...mapState(
        //     ['userInfo']
        // )
    },
    methods: {
        // ...mapActions(
        //     ['getUserInfo']
        // )
    }

}
</script>
<style lang="stylus" scoped>
.heades{
    height 90px;
    background-color themeColor;
}
</style>

