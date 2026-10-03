<template>
    <div>
        <el-card style="height: 60px;border-radius:8pxs;display: flex;align-items: center;"
            :body-style="{ padding: 0 }">
            <el-form :inline="true" :model="formInline">
                <el-form-item>
                    <el-input v-model="formInline.eventname" placeholder="请输入赛事名称查询"
                        style="width: 270px;height: 40px;"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="formInline.username" placeholder="请输入用户名称查询"
                        style="width: 270px;height: 40px;"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button size="primary" plain style="width: 70px;height: 40px;" @click="handleSearch"
                        color="#675ae5">查询</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button type="warning" plain style="width: 70px;height: 40px;"
                        @click="handleReset">重置</el-button>
                </el-form-item>
            </el-form>
        </el-card>
        <el-card style="margin-top: 5px;">
            <el-table :data="tableData" stripe style="width: 100%" :row-style="{ height: '80px' }">
                <el-table-column prop="name" label="赛事名称" width="180" />
                <el-table-column prop="username" label="用户名称" />
                <el-table-column prop="award" label="奖项名称" />
                <el-table-column prop="time" label="颁奖日期" />
                <el-table-column prop="address" label="领奖地址" />
                <el-table-column prop="phone" label="联系方式" />
                <el-table-column prop="statu" label="状态">
                    <template #default="scope">
                        <el-tag :type="scope.row.statu === '已获奖' ? 'success' : 'warning'">{{ scope.row.statu }}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column prop="control" label="操作">
                    <template #default="scope">
                        <el-button type="warning" circle @click.prevent="">
                            <el-icon>
                                <Edit />
                            </el-icon>
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>
        <el-card style="margin-top: 5px;" :body-style="{ display: 'flex' }">
            <el-text style="margin-right: 20px;">共 {{ config.total }} 条</el-text>
            <el-pagination background layout="prev, pager, next" :total="config.total" :page-size="5"
                @current-change="handleChange" />
        </el-card>
    </div>
</template>

<script setup>
import { onMounted, reactive, ref, getCurrentInstance } from 'vue';
const { proxy } = getCurrentInstance()
const formInline = reactive({
    eventname: '',
    username: ''
})
const config = reactive({
    name: '',
    total: 0,
    page: 1,
    del: -1
})
const getEventResult = async () => {
    const data = await proxy.$api.getEventResult(config)
    tableData.value = data.eventResult
    config.total = data.count
}

const tableData = ref()

const handleReset = () => {
    formInline.eventname = formInline.username = '';
}
const handleChange = (page) => {
    config.page = page
    getEventResult();
}

onMounted(() => {
    getEventResult();
})
</script>

<style scoped>
.el-form-item {
    margin-bottom: 0px;
    margin-right: 0px !important;
    margin-left: 10px;
}
</style>