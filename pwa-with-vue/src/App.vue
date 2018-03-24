<template>
  <div id="app">
    <header>
      <span>Vue.js PWA</span>
    </header>
   	<div class="wrapp">
			<img src="./assets/womakerscode.png" alt="hello-icon">
			<h2 class="hello">hello</h2>
			<h1 class="big">WoMakersCode 2018</h1>
		</div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.hello,
.big {
	font-family: 'Quicksand', sans-serif;
  margin: 0;
}

.big {
	font-size: 45px;
	font-weight: 300;
	color: #F62459;
}

.hello {
	font-size: 20px;
	font-weight: 700;
}

.wrapp {
	text-align: center
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
