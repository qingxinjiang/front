<template>
    <div class="header">
        <div class="l-content">
            <component class="icons" is="memo"></component>
            <h2 style="font-size: 20px;">学科竞赛系统</h2>
        </div>
        <div class="r-content">
            <el-dropdown>
                <span class="el-dropdown-link">
                    <img :src="getImageUrl('user')" class="user" />
                    <el-text>小王</el-text>
                    <el-icon class="el-icon--right"><arrow-down /></el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item @click="handleChange('/manager')">我的收藏</el-dropdown-item>
                        <el-dropdown-item @click="handleChange('/manager')">提现记录</el-dropdown-item>
                        <el-dropdown-item @click="handleChange('/manager')">个人信息</el-dropdown-item>
                        <el-dropdown-item @click="handleChange('/manager')">修改密码</el-dropdown-item>
                        <el-dropdown-item @click="handleChange('/')">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
const getImageUrl = (user) => {
    return new URL(`../assets/images/${user}.png`, import.meta.url).href
}
const router = useRouter()
const handleChange = (val) => {
    router.push(val)
}
</script>
<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
}

.icons {
    width: 40px;
    height: 40px;
    margin-right: 10px;
}

.l-content {
    display: flex;
    align-items: center;
}

.r-content {
    margin-right: 10px;

    .user {
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }

    .el-dropdown-link {
        display: flex;
        align-items: center;
    }
}
</style>