<template>
  <div
    v-if="!hideLoader"
    class="bg bg-indigo-darker"
    v-bind:class="{ display: showLoader }"
  >
    <div id="nuotron">
      <div class="ellipse"></div>
      <div class="dot"></div>
    </div>
    <a
      id="text"
      href="http://facebook.com/YahiaRefaiea"
      target="_blank"
      v-bind:class="{ 'text--hover': showText }"
    >
      <div class="website">
        <div>Click to follow the founder's social</div>
        <div>media updates.</div>
      </div>
      <div class="nuotron">Bike</div>
      <div class="agency">Stats</div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  props: ['display'],
  data() {
    return {
      showLoader: this.display,
      showText: false,
      hideLoader: false
    }
  },
  watch: {
    display: function(newVal, oldVal) {
      this.showText = true
    },
    showText: function(newval, oldVal) {
      setTimeout(() => {
        this.showLoader = false
      }, 300)
    },
    showLoader: function(newval, oldVal) {
      setTimeout(() => {
        this.hideLoader = true
      }, 500)
    }
  },
  created: function() {
    if (!this.display) {
      this.hideLoader = true
    }
  }
}
</script>

<style scoped>
*,
*:before,
*:after {
  box-sizing: border-box;
}
.bg {
  direction: ltr;
  text-align: center;
  font-family: 'Muli', sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  /* background-color: #292e43; */
  color: #fff;
  -webkit-font-smoothing: antialiased;
  position: fixed; /* Sit on top of the page content */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  transition: 0.5s ease;
}
.bg.display {
  opacity: 1;
}
::-moz-selection {
  background-color: rgba(0, 0, 0, 0.21);
  color: #fff;
}
::selection {
  background-color: rgba(0, 0, 0, 0.21);
  color: #fff;
}
::-moz-selection {
  background-color: rgba(0, 0, 0, 0.21);
  color: #fff;
}
#nuotron {
  top: 50%;
  left: 50%;
  width: 84px;
  height: 84px;
  margin-top: -42px;
  margin-left: -42px;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}
#nuotron,
#nuotron *,
#nuotron *:before {
  display: block;
  position: absolute;
}
#nuotron .ellipse,
#nuotron .dot {
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
#nuotron .ellipse {
  border: 18px solid #f35635;
  border-radius: 50%;
}
#nuotron .dot {
  -webkit-animation: dotRotate 4.8s linear infinite;
  animation: dotRotate 4.8s linear infinite;
}
#nuotron .dot:before {
  content: '';
  top: -42px;
  left: 50%;
  width: 24px;
  height: 24px;
  margin-left: -12px;
  border-radius: 50%;
  background-color: #f35635;
  -webkit-animation: dotEffect 1.2s ease-in-out infinite;
  animation: dotEffect 1.2s ease-in-out infinite;
}
@-webkit-keyframes dotEffect {
  50% {
    top: 102px;
  }
  0%,
  50%,
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  25% {
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
  }
  75% {
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
  }
}
@keyframes dotEffect {
  50% {
    top: 102px;
  }
  0%,
  50%,
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  25% {
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
  }
  75% {
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
  }
}
@-webkit-keyframes dotRotate {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes dotRotate {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
#text {
  top: 50%;
  left: 50%;
  width: 182px;
  height: 182px;
  margin-top: -91px;
  margin-left: -91px;
}
#text,
#text > * {
  display: block;
  position: absolute;
  white-space: nowrap;
  transition: all 1.2s cubic-bezier(0.19, 1, 0.22, 1);
}
#text .hover,
#text .website {
  top: 100%;
  left: 50%;
  margin-top: 28px;
  letter-spacing: 2px;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  color: rgba(255, 255, 255, 0.63);
  opacity: 0;
}
#text .nuotron,
#text .agency {
  font-size: 48px;
  font-weight: 800;
  line-height: 182px;
  letter-spacing: 30px;
  color: #fff;
  opacity: 0;
}
#text .nuotron {
  right: 100%;
  margin-right: -34px;
}
#text .agency {
  left: 100%;
}
#text.text--hover .nuotron,
#text.text--hover .agency {
  letter-spacing: 14px;
  opacity: 1;
}
#text.text--hover .nuotron {
  margin-right: -18px;
}

@media only screen and (max-width: 600px) {
  #text {
    display: none;
  }
}
</style>
