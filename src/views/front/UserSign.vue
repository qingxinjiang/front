<template>
    <div class="userSign-main">
        <el-card>
            <el-form :inline="true" :model="formInline">
                <el-form-item>
                    <el-input placeholder="请输入标题关键字搜索" v-model="formInline.keyWord"
                        style="height: 45px;width: 450px;margin-right: -20px;"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" plain @click="handleSearch"
                        style="height: 45px;width: 60px;margin-right: -30px;" color="#675ae5">
                        查询
                    </el-button>
                </el-form-item>
            </el-form>
            <el-table :data="tableData" stripe style="width: 100%" :row-style="{ height: '80px' }">
                <el-table-column prop="name" label="赛事名称" width="180">
                    <template v-slot="scope">
                        <el-link :href="scope.row.link" type="primary">{{ scope.row.name }}</el-link>
                    </template>
                </el-table-column>
                <el-table-column prop="phone" label="联系方式" width="180" />
                <el-table-column prop="certificate" label="资格证书">
                    <template v-slot="scope">
                        <img class="image" :src="getImageUrl(scope.row.certificate)"></img>
                    </template>
                </el-table-column>
                <el-table-column prop="statu" label="状态">
                    <template #default="scope">
                        <el-tag :type="scope.row.statu === '通过' ? 'success' : 'warning'">{{ scope.row.statu }}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column prop="opinion" label="审核意见" />
                <el-table-column prop="time" label="报名时间" />
                <el-table-column prop="control" label="操作">
                    <template #default="scope">
                        <el-button v-if="scope.row.statu != '通过'" type="danger" style="height: 26px;width: 50px;"
                            color="#e42d2e" @click.prevent="deleteRow(scope.$index)">
                            取消
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="d-main">
                <el-text style="margin-right: 20px;">共 {{ config.total }} 条</el-text>
                <el-pagination layout="prev, pager, next" :total="config.total" :page-size="5"
                    @current-change="handleChange" />
            </div>
        </el-card>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted, getCurrentInstance } from 'vue';
const { proxy } = getCurrentInstance()
const formInline = reactive({
    keyWord: ''
})
const config = reactive({
    name: '',
    total: 0,
    page: 1,
    del: -1
})
const tableData = ref()
const getUserSignData = async () => {
    const data = await proxy.$api.getUserSignData(config)
    tableData.value = data.userSignData
    config.total = data.count
}
const handleSearch = () => {
    config.name = formInline.keyWord
    getUserSignData();
}

// 删除一列功能，前后端连接后需修改
const deleteRow = (index) => {
    tableData.value.splice(index, 1)
    // config.del = index
    // console.log(index)
    // getUserSignData();
    // config.del = -1
}

const handleChange = (page) => {
    config.page = page
    getUserSignData();
}

function getImageUrl(url) {
    return new URL(`../../assets/images/${url}.png`, import.meta.url).href
}

onMounted(() => {
    getUserSignData();
})
</script>

<style scoped>
.userSign-main {
    min-height: calc(100vh - 90px);
    width: 70%;
}

.image {
    height: 60px;
}

.d-main {
    display: flex;
    margin-top: 20px;
}
</style>