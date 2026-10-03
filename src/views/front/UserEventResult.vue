<template>
    <div class="userEventResult-main">
        <el-card>
            <el-form :inline="true" :model="formInline">
                <el-form-item>
                    <el-input placeholder="请输入赛事名称查询" v-model="formInline.keyWord"
                        style="height: 45px;width: 450px;margin-right: -20px;"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" plain @click="handleSearch"
                        style="height: 45px;width: 60px;margin-right: -30px;" color="#675ae5">
                        查询
                    </el-button>
                </el-form-item>
            </el-form>
            <el-table :data="tableData" stripe style="width: 100%">
                <el-table-column prop="name" label="赛事名称" width="180">
                    <template v-slot="scope">
                        <el-link :href="scope.row.link" type="primary">{{ scope.row.name }}</el-link>
                    </template>
                </el-table-column>
                <el-table-column prop="award" label="奖项名称" width="180" />
                <el-table-column prop="date" label="颁奖日期" />
                <el-table-column prop="address" label="领奖地址" />
                <el-table-column prop="phone" label="联系方式" />
                <el-table-column prop="statu" label="状态">
                    <template #default="scope">
                        <el-tag :type="scope.row.statu === '已获奖' ? 'success' : 'warning'">{{ scope.row.statu }}</el-tag>
                    </template>
                </el-table-column>
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
import { reactive } from 'vue';
const config = reactive({
    name: '',
    total: 0,
    page: 1,
})
const formInline = reactive({
    keyWord: ''
})

const handleSearch = () => {
    config.name = formInline.keyWord
    // getUserSignData();
}
</script>

<style>
.userEventResult-main {
    min-height: calc(100vh - 90px);
    width: 70%;
}
</style>