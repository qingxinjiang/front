<template>
    <div class="userDrawCash-main">
        <div style="margin-top: 10px;margin-bottom: 20px;">
            <b class="title">我的提现记录</b>
        </div>
        <el-card>
            <el-button type="warning" style="width: 65px;"><b>提现</b></el-button>
            <span style="margin-left: 20px;">当前账户余额：{{ 1500 }}元</span>
            <el-table :data="tableData" stripe style="width: 100%;margin-top: 20px;">
                <el-table-column prop="amount" label="提现金额" />
                <el-table-column prop="type" label="账户类型" />
                <el-table-column prop="account" label="提现账号" />
                <el-table-column prop="time" label="提现时间" />
            </el-table>
            <div style="display: flex;margin-top: 20px;">
                <el-text style="margin-right: 20px;">共 {{ config.total }} 条</el-text>
                <el-pagination layout="prev, pager, next" :total="config.total" :page-size="5"
                    @current-change="handleChange" />
            </div>
        </el-card>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
const config = reactive({
    name: '',
    total: 3,
    page: 1,
})

const tableData = ref([
    {
        amount: 2800,
        type: '微信支付',
        account: '12345678912',
        time: '2025-05-13 09:51:10',
    },
    {
        amount: 100,
        type: '微信支付',
        account: '12345678912',
        time: '2025-05-13 09:51:10',
    },
    {
        amount: 100,
        type: '微信支付',
        account: '12345678912',
        time: '2025-05-13 09:51:10',
    },
])
</script>

<style scoped>
.userDrawCash-main {
    min-height: calc(100vh - 90px);
    width: 60%;
}

.title {
    font-size: 21px;
}
</style>