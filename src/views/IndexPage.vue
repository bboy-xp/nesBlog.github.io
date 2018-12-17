<template>
  <div class="indexPage">
    <div class="header">
      <img class="logo" src="../assets/logo.png" alt="404">
      <div class="titleText">XP's blog</div>
    </div>
    <div class="container is-dark with-title absoluteContainer">
      <p class="title">tep</p>
      <h2 style="color: white">Happy everyday</h2>
    </div>
    <div class="balloon container with-title">
      <h1 class="title">Balloons</h1>
      <div class="messages">
        <div class="message -left">
          <i class="icon github is-large"></i>
          <div class="balloon from-left">
            <p>Hello Visitor!</p>
          </div>
        </div>
        <div class="message -right">
          <div class="balloon from-right">
            <p>Welcome to my NES style blog.</p>
          </div>
          <i class="octocat animate"></i>
        </div>
        <div class="message -left">
          <i class="icon github is-large"></i>
          <div class="balloon from-left">
            <p>
              If you like, please give me
              <i class="icon star"></i>
            </p>
            <div>
              <label>
                <input type="radio" name="answer" class="radio" @click="goToStar">
                <span>Yes</span>
              </label>
              <label>
                <input type="radio" name="answer" class="radio">
                <span>No</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <i class="icon heart is-medium"></i>
      <i class="icon heart is-medium"></i>
      <i class="icon heart is-medium"></i>
      <i class="icon heart is-medium"></i>
      <i class="icon heart is-medium"></i>
      <i class="icon heart is-medium"></i>
      <i class="icon heart is-medium"></i>
      <i class="icon heart is-medium"></i>
      <i class="icon heart is-medium"></i>
      <i class="icon heart is-medium"></i>
      <i class="icon heart is-medium"></i>
      <i class="icon heart is-medium"></i>
      <i class="icon heart is-medium"></i>
      <i class="icon heart is-medium"></i>
      <i class="icon heart is-medium"></i>
    </div>
    <footer class="footText">
      <p>
        <a href="#" style="color: #212529">Jser Club</a>
        <span> - </span>
        <a href="https://github.com/bboy-xp" style="color: #212529">@newbility-xp</a>
      </p>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "indexPage",
  methods: {
    goToStar() {
      location.href = "#";
    }
  }
};
</script>
<style scoped>
.indexPage {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.header {
  text-align: center;
}
.logo {
  height: 250px;
  margin-top: 50px;
}
.titleText {
  font-size: 60px;
}
.container {
  width: 1000px;
  margin-top: 20px;
}
.messages {
  display: flex;
  flex-direction: column;
}
.message {
  display: flex;
  align-items: flex-end;
  margin-bottom: 15px;
}
.-left {
  justify-content: flex-start;
}
.-right {
  justify-content: flex-end;
}
.balloon {
  margin-right: 30px;
  margin-left: 30px;
}
.heart {
  margin-right: 8px;
}
.footText {
  /* justify-content: flex-end; */
  position: absolute;
  bottom: 15px;
  color: black;
}
.absoluteContainer {
  position: absolute;
  width: 300px;
  height: 200px;
  right: 100px;
  top: 30px
}
</style>

