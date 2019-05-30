<template>
    <div class="home">
        <heades></heades>
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
    }
}
</script>
<style lang="stylus" scoped>
.home{
    height 90px;
    background-color themeColor;
}
</style>

