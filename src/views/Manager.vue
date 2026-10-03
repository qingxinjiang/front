<template>
    <div class="manager-layout">
        <el-container class="manager-container">
            <el-header class="manager-header">
                <manager-header />
            </el-header>
            <el-container>
                <el-aside class="manager-aside" width="200px">
                    <manager-aside />
                </el-aside>
                <el-main class="manager-main">
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup>
import ManagerHeader from '@/components/ManagerHeader.vue';
import ManagerAside from '@/components/ManagerAside.vue';
</script>

<style>
.html,
body {
    margin: 0;
    padding: 0;
}

.manager-layout {
    height: 100vh;
    display: flex;
    flex-direction: column;
}

.manager-header {
    height: 70px;
    background-color: #f7b758;
}

.manager-aside {
    width: 220px;
}

.el-main{
    padding: 10px;
}

.manager-main {
    background-color: #f8f7fe;
}
</style>