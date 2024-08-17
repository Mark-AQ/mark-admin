<template>
  <div class="container">
    <div class="triangle-down"></div>
    <div class="heart"></div>
    <div class="talkbubble"></div>
    <div class="yin-yang"></div>
    <div class="qxgz"></div>
    <div class="star-five"></div>
    <div class="lock"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

</script>

<style lang="scss" scoped>
.container {
  display: flex;
  margin: 40px;

  .lock {
    font-size: 8px;
    position: relative;
    width: 18em;
    height: 13em;
    border-radius: 2em;
    top: 10em;
    box-sizing: border-box;
    border: 3.5em solid red;
    border-right-width: 7.5em;
    border-left-width: 7.5em;
    margin: 0 0 6rem 0;
  }

  .lock:before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    border: 2.5em solid red;
    width: 14em;
    height: 12em;
    left: 50%;
    margin-left: -7em;
    top: -12em;
    border-top-left-radius: 7em;
    border-top-right-radius: 7em;
  }

  .lock:after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    border: 1em solid red;
    width: 5em;
    height: 8em;
    border-radius: 2.5em;
    left: 50%;
    top: -1em;
    margin-left: -2.5em;
  }

  .star-five {
    margin: 50px 0;
    position: relative;
    display: block;
    color: red;
    width: 0px;
    height: 0px;
    border-right: 100px solid transparent;
    border-bottom: 70px solid red;
    border-left: 100px solid transparent;
    transform: rotate(35deg);
  }

  .star-five:before {
    border-bottom: 80px solid red;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    position: absolute;
    height: 0;
    width: 0;
    top: -45px;
    left: -65px;
    display: block;
    content: '';
    transform: rotate(-35deg);
  }

  .star-five:after {
    position: absolute;
    display: block;
    color: red;
    top: 3px;
    left: -105px;
    width: 0px;
    height: 0px;
    border-right: 100px solid transparent;
    border-bottom: 70px solid red;
    border-left: 100px solid transparent;
    transform: rotate(-70deg);
    content: '';
  }

  .qxgz {
    width: 100px;
    height: 200px;
    background-color: red;
    -webkit-clip-path: polygon(50% 0%, 0% 60%, 100% 100%);
    clip-path: polygon(50% 0%, 0% 60%, 100% 100%);
  }

  .yin-yang {
    margin: 10px;
    width: 96px;
    box-sizing: content-box;
    height: 48px;
    background: #eee;
    border-color: red;
    border-style: solid;
    border-width: 2px 2px 50px 2px;
    border-radius: 100%;
    position: relative;
  }

  .yin-yang:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    background: #eee;
    border: 18px solid red;
    border-radius: 100%;
    width: 12px;
    height: 12px;
    box-sizing: content-box;
  }

  .yin-yang:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    background: red;
    border: 18px solid #eee;
    border-radius: 100%;
    width: 12px;
    height: 12px;
    box-sizing: content-box;
  }

  .talkbubble {
    width: 120px;
    height: 80px;
    margin: 20px;
    background: red;
    position: relative;
    -moz-border-radius: 10px;
    -webkit-border-radius: 10px;
    border-radius: 10px;
  }

  .talkbubble:before {
    content: "";
    position: absolute;
    right: 100%;
    top: 26px;
    width: 0;
    height: 0;
    border-top: 13px solid transparent;
    border-right: 26px solid red;
    border-bottom: 13px solid transparent;
  }

  .triangle-down {
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-top: 100px solid red;
  }

  .heart {
    position: relative;
    width: 100px;
    height: 90px;
    margin: 10px;
  }

  .heart:before,
  .heart:after {
    position: absolute;
    content: "";
    left: 50px;
    top: 0;
    width: 50px;
    height: 80px;
    background: red;
    border-radius: 50px 50px 0 0;
    transform: rotate(-45deg);
    transform-origin: 0 100%;
  }

  .heart:after {
    left: 0;
    transform: rotate(45deg);
    transform-origin: 100% 100%;
  }
}
</style>
