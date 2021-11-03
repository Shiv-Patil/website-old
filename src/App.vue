<template>
  <router-view>
  </router-view>
</template>

<style>
:root {
  --bg-color: #1f2121ff;
  --text-color: white;
  --powder-blue: #bbe5edff;
  --rhythm: #7d84b2ff;
  --honey-yellow: #f6ae2dff;
  --cg-red: #db3a34ff;
}

* {
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--text-color);
  overflow: auto;
  background-color: var(--bg-color);
}

.button {
  background-color: var(--rhythm);
  border: none;
  color: white;
  padding: 4px 10px;
  text-align: center;
  font-size: 16px;
  box-shadow: 0 6px 8px 0 rgba(0, 0, 0, 0.24), 0 7px 16px 0 rgba(0, 0, 0, 0.19);
  cursor: pointer;
}

.button:active {
  box-shadow: 0 0 0 0;
  transform: translateY(1px);
}

.pg-link {
  background-color: var(--rhythm);
  border: none;
  color: white;
  padding: 4px 10px;
  text-align: center;
  font-size: 16px;
  box-shadow: 0 6px 8px 0 rgba(0, 0, 0, 0.24), 0 7px 16px 0 rgba(0, 0, 0, 0.19);
  cursor: pointer;
  text-decoration: none;
}

.pg-link:active {
  box-shadow: 0 0 0 0;
  transform: translateY(1px);
}
</style>
