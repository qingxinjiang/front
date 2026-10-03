<template>
    <div class="header">
        <div class="l-content">
            <component class="icons" is="memo"></component>
            <h2>学科竞赛系统</h2>
        </div>
        <div class="m-content">
            <el-menu :default-active="$route.path" router mode="horizontal" class="el-menu-demo"
                background-color="#f7b758" text-color="#bf4f38" active-text-color="#120000" :ellipsis="false">
                <el-menu-item index="/front/home" class="menu-text">首页</el-menu-item>
                <el-menu-item index="/front/event" class="menu-text">赛事大厅</el-menu-item>
                <el-menu-item index="/front/news" class="menu-text">赛事资讯</el-menu-item>
                <el-menu-item index="/front/userSign" class="menu-text">赛事报名</el-menu-item>
                <el-menu-item index="/front/userEventResult" class="menu-text">赛事结果</el-menu-item>
                <el-menu-item index="/front/notice" class="menu-text">系统公告</el-menu-item>
            </el-menu>
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
                        <el-dropdown-item @click="handleChange('/front/userCollect')">我的收藏</el-dropdown-item>
                        <el-dropdown-item @click="handleChange('/front/userDrawCash')">提现记录</el-dropdown-item>
                        <el-dropdown-item @click="handleChange('/front/person')">个人信息</el-dropdown-item>
                        <el-dropdown-item @click="handleChange('/front/home')">修改密码</el-dropdown-item>
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
    width: 50px;
    height: 50px;
}

.l-content {
    display: flex;
    align-items: center;
    margin-left: 30px;
}

.m-content {
    margin-left: -33%;
    /* height: 100%; */
}

.el-menu-demo {
    border: 0 !important;
}

.menu-text {
    font-size: 18px;
    font-weight: bold;
}

.el-menu-item.is-active {
    color: #f7b758;
    background-color: #f7b758 !important;
}

.r-content {
    margin-right: 20px;
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