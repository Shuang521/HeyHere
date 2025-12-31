// 初始化 particles.js
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 100, // 星星的数量
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff" // 星星的颜色
    },
    "shape": {
      "type": "circle",
    },
    "opacity": {
      "value": 0.5,
      "random": true,
    },
    "size": {
      "value": 2, // 星星的大小
      "random": true,
    },
    "line_linked": {
      "enable": false, // 是否显示连接线
    },
    "move": {
      "enable": true,
      "speed": 0.5, // 移动速度
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false, // 鼠标悬停效果
      },
      "onclick": {
        "enable": false, // 鼠标点击效果
      },
      "resize": true
    }
  },
  "retina_detect": true
});