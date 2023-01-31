<template>
  <div class="header-container">
    这是Header组件
<!--    <div class="header-bar">-->
<!--      <div class="button-group-left">-->
<!--        <button>按钮1</button>-->
<!--        <button>按钮2</button>-->
<!--        <button>按钮3</button>-->
<!--        <button>按钮4</button>-->
<!--      </div>-->
<!--      <input class="search-input" placeholder="做一个拯救狗子的游戏">-->
<!--      <div class="button-group-right">-->
<!--        <button>按钮5</button>-->
<!--        <button>按钮6</button>-->
<!--        <button>按钮7</button>-->
<!--        <button>按钮8</button>-->
<!--      </div>-->
<!--    </div>-->

<!--    <div class="header-banner">-->
<!--      <img src="../../public/bilibili背景图.png" alt="B站头部背景图" class="header-banner-img">-->
<!--    </div>-->

<!--    <div class="header-channel">-->

<!--    </div>-->
  </div>

</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped lang="scss">
.header-container {
  width: 100%;
  position: relative;

  .header-bar {
    width: 100%;
    height: 84px;
    display: flex;
    justify-content: space-between;


    .button-group-left {

    }

    .search-input {

    }

    .button-group-right {

    }
  }

  .header-banner {

    .header-banner-img {
      width: 100%;
      height: fit-content;

      position: absolute;
      top: 0;

      z-index: -1;
    }
  }

  .header-channel {
    margin-top: 160px;
  }

}

</style>
