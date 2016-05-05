<template>
    <router-view></router-view>
</template>
<script>
import store from '../vuex/store'

export default {
  store
}
</script>
<style lang="sass">
@import '../assets/scss/iconfont/iconfont.css';
@import '../assets/scss/CV.scss';
.index {
  width: 100%;
  background-color: #fff;
  margin-top: 40%;
}
</style>
