<template>
    <el-menu :default-active="$route.path" router class="el-menu-vertical-demo" :default-openeds="['2']"
        active-text-color="orange" @open="handleOpen" @close="handleClose">
        <el-menu-item index="/manager/home">
            <el-icon>
                <HomeFilled />
            </el-icon>
            <span>系统首页</span>
        </el-menu-item>
        <el-sub-menu index="2">
            <template #title>
                <el-icon>
                    <Menu />
                </el-icon>
                <span>赛事管理</span>
            </template>
            <div style="margin-left: 9px;">
                <el-menu-item index="/manager/sign">
                    <span>赛事报名</span>
                </el-menu-item>
                <el-menu-item index="/manager/eventResult">
                    <span>赛事结果</span>
                </el-menu-item>
                <el-menu-item index="">
                    <span>赛事信息</span>
                </el-menu-item>
                <el-menu-item index="">
                    <span>赛事资讯</span>
                </el-menu-item>
                <el-menu-item index="">
                    <span>赛事奖项</span>
                </el-menu-item>
            </div>
        </el-sub-menu>
    </el-menu>
</template>

<script setup>
const handleOpen = (key, keyPath) => {
    console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
    console.log(key, keyPath)
}
</script>

<style scoped></style>