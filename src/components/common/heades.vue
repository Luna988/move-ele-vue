<template>
    <div class="heades">
        <slot>32332</slot>
        header 部分
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

