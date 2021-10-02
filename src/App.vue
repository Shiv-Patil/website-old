<template>
  <router-view v-slot="{ Component, route }">
    <transition
      :enter-active-class="route.meta.enterClass"
      :leave-active-class="route.meta.leaveClass"
    >
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style>
root {
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

.page {
  position: absolute;
  display: flex;
  min-width: 140px;
  min-height: 200px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin: auto;
  overflow: auto;
}

.page-content {
  flex: 1;
  margin: 0 auto;
}

body {
  font-family: "JetBrains Mono", sans-serif;
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
  text-decoration: none;
  font-size: 16px;
  box-shadow: 0 6px 8px 0 rgba(0, 0, 0, 0.24), 0 7px 16px 0 rgba(0, 0, 0, 0.19);
  cursor: pointer;
}

.button:active {
  box-shadow: 0 0 0 0;
  transform: translateY(1px);
}

.pg-link {
  color: #121212;
  padding: 4px 6px;
  background-color: var(--rhythm);
  cursor: pointer;
  text-decoration: none;
}

.pg-link:hover,
.pg-link.router-link-active,
.pg-link.router-link-exact-active {
  background-color: #3d74c2;
}
</style>
