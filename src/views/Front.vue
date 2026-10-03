<template>
    <div class="front-layout">
        <div class="front-header">
            <front-header />
        </div>
        <div class="main">
            <router-view></router-view>
        </div>
        <div class="front-footer">
            <front-footer />
        </div>
    </div>
</template>
<script setup>
import FrontHeader from '../components/FrontHeader.vue';
import FrontFooter from '../components/FrontFooter.vue';
</script>
<style scoped>
.front-layout {
    height: 100%;
}

.front-header {
    height: 90px;
    background-color: #f7b758;
}

.main {
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.front-footer {
    height: 180px;
    background-color: #333333;
}
</style>