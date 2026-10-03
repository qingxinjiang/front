<template>
    <div class="person-main">
        <div style="margin-top: 10px;margin-bottom: 20px;">
            <b style="font-size: 21px;">个人信息</b>
        </div>
        <el-card>
            <img class="image" :src="getImageUrl('user')">
            <el-form :model="form" label-width="auto" style="margin-left: 20px;margin-right: 20px;"> 
                <el-form-item label="用户名" prop="account">
                    <el-input v-model="form.account" disabled/>
                </el-form-item>
                <el-form-item label="姓名" prop="name">
                    <el-input v-model="form.name"/>
                </el-form-item>
                <el-form-item label="电话" prop="phone">
                    <el-input v-model="form.phone"/>
                </el-form-item>
                <el-form-item label="邮箱" prop="email">
                    <el-input v-model="form.email"/>
                </el-form-item>
                <el-form-item label="账户余额" prop="balance">
                    {{ 1500 }}元
                </el-form-item>
            </el-form>
            <el-button class="button" type="warning">保 存</el-button>
        </el-card>
    </div>
</template>

<script setup>
import { reactive } from 'vue';

const form = reactive({
    account:'',
    name:'',
    phone:'',
    email:'',
})

function getImageUrl(url) {
    return new URL(`../../assets/images/${url}.png`, import.meta.url).href
}
</script>

<style scoped>
.person-main {
    min-height: calc(100vh - 90px);
    width: 40%;
}

.image{
    clear: both;
    display: block;
    margin: auto;
    width: 140px;
    height: 140px;
    margin-top: 20px;
    margin-bottom: 10px;
}

.button{
    clear: both;
    display: block;
    margin: auto;
    margin-bottom: 30px;
}
</style>