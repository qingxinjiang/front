<template>
    <div class="body-login">
        <el-form :model="loginForm" class="login-container">
            <h2>欢迎登录学科竞赛系统</h2>
            <el-form-item>
                <el-input type="input" placeholder="请输入账号" v-model="loginForm.username" style="height: 40px;"
                    prefix-icon="User"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input type="password" placeholder="请输入密码" v-model="loginForm.password" style="height: 40px;"
                    prefix-icon="Lock" show-password></el-input>
            </el-form-item>
            <el-form-item>
                <el-select v-model="selectedAdminId" size="large">
                    <el-option v-for="admin in admins" :label="admin.name" :value="admin.id" :key="admin.id" />
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button style="width: 100%;height: 40px;" type="warning" @click="goTo()">登 录</el-button>
            </el-form-item>
            <p style="text-align: right;">还没有账号？请 <router-link to="/register">注册</router-link></p>
        </el-form>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router';

const loginForm = reactive({
    username: '',
    password: ''
})
const selectedAdminId = ref(2)
const admins = ref([
    {
        id: 0,
        name: "普通用户"
    },
    {
        id: 1,
        name: "主办方"
    },
    {
        id: 2,
        name: "管理员"
    }
])

const router = useRouter()
const goTo = () => {
    if (selectedAdminId.value === 0) {
        router.push("/front/home");
    }
    else if (selectedAdminId.value === 1) {
        router.push("/manager");
    }
}

</script>

<style>
.body-login {
    width: 100%;
    height: 100%;
    background-image: url("../assets/images/1.jpg");
    background-size: 100%;
    overflow: hidden;
}

.login-container {
    width: 300px;
    background: rgba(255, 255, 255, 0.6);
    margin: 250px 60%;
    padding: 20px 35px 15px 35px;
    border-radius: 4px;
    box-shadow: 0 0 10px #8b8b8b;

    h2 {
        text-align: center;
        color: #d88119;
    }
}
</style>