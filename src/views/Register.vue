<template>
    <div class="body-register">
        <el-form :model="registerForm" class="register-container">
            <h2>欢 迎 注 册</h2>
            <el-form-item>
                <el-input type="input" placeholder="请输入账号" v-model="registerForm.username" style="height: 40px;"
                    prefix-icon="User"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input type="password" placeholder="请输入密码" v-model="registerForm.password" style="height: 40px;"
                    prefix-icon="Lock"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input type="password" placeholder="请确认密码" v-model="registerForm.password2" style="height: 40px;"
                    prefix-icon="Lock"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button style="width: 100%;height: 40px;" type="warning" @click="handleRegister">注 册</el-button>
            </el-form-item>
            <p style="text-align: right;">已有账号？请 <router-link to="/">登录</router-link></p>
        </el-form>
    </div>
</template>

<script>

export default {
    data() {
        return {
            registerForm: {
                username: '',
                password: '',
                password2: '',
            },
        }
    }
}

</script>

<style>
.body-register {
    width: 100%;
    height: 100%;
    background-image: url("../assets/images/1.jpg");
    background-size: 100%;
    overflow: hidden;
}

.register-container {
    width: 300px;
    background: rgba(255, 255, 255, 0.6);
    margin: 250px auto;
    padding: 20px 35px 15px 35px;
    border-radius: 4px;
    box-shadow: 0 0 10px #8b8b8b;

    h2 {
        text-align: center;
        color: #084da0;
    }
}
</style>