<template>
  <header>
    <button role="back"></button>
    <h2>就业市场</h2>
    <button role="next">发布消息</button>
  </header>
  <main>
    <carousel>
      <slider>
        <img src="http://placehold.it/1200x400?text=one">
        <div class="carousel-caption">
          2016苏宁专场招聘会将在我校开展
        </div>
      </slider>
      <slider>
        <img src="http://placehold.it/1200x400?text=two">
      </slider>
      <slider>
        <img src="http://placehold.it/1200x400?text=three">
      </slider>
    </carousel>
  </main>
</template>
<script>
import { carousel, slider } from 'vue-strap'
export default {
  components: {
    carousel,
    slider
  }
}
</script>
