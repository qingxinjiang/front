<template>
    <div class="event-main">
        <div class="u-main">
            <el-tabs v-model="activeName" class="tabs" @tab-change="handleClick">
                <el-tab-pane label="全部" name=""></el-tab-pane>
                <el-tab-pane label="其他" name="其他"></el-tab-pane>
                <el-tab-pane label="演讲" name="演讲"></el-tab-pane>
                <el-tab-pane label="写作" name="写作"></el-tab-pane>
                <el-tab-pane label="英语" name="英语"></el-tab-pane>
                <el-tab-pane label="软件编程" name="软件编程"></el-tab-pane>
                <el-tab-pane label="嵌入式" name="嵌入式"></el-tab-pane>
                <el-tab-pane label="电子科技" name="电子科技"></el-tab-pane>
                <el-tab-pane label="物理" name="物理"></el-tab-pane>
                <el-tab-pane label="数学" name="数学"></el-tab-pane>
            </el-tabs>
            <el-form :inline="true" :model="formInline">
                <el-form-item>
                    <el-input placeholder="请输入赛事名称搜索" v-model="formInline.keyWord"
                        style="height: 45px;width: 450px;margin-right: -20px;"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="warning" @click="handleSearch"
                        style="height: 45px;width: 70px;margin-right: -30px;">搜 索</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="d-main">
            <el-card :body-style="{ dispaly: 'flex', padding: 0 }" v-for="item in competitionData" :key="item.id"
                @click="goToEvent(item.id)">
                <img class="image" :src="getImageUrl(item.image)" />
                <p class="card-text">{{ item.name }}</p>
                <el-tag style="margin-left: 10px;margin-bottom: 10px;margin-top: -15px;">{{ item.category }}</el-tag>
                <el-text style="float: right;margin-top: -10px;margin-right: 10px;">
                    报名人数：{{ item.registrants }}
                </el-text>
            </el-card>
        </div>
        <div style="display: flex;margin-top: 40px;margin-bottom: 40px;">
            <el-text style="margin-right: 20px;">共 {{ config.total }} 条</el-text>
            <el-pagination layout="prev, pager, next" :total="config.total" :page-size="8"
                @current-change="handleChange" />
        </div>
    </div>
</template>

<script setup>
import { ref, getCurrentInstance, onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router';
const { proxy } = getCurrentInstance()
const competitionData = ref()
const activeName = ref("")
const getCompetitionData = async () => {
    const data = await proxy.$api.getCompetitionData(config)
    competitionData.value = data.competitionData
    config.total = data.count
}

const formInline = reactive({
    keyWord: ''
})
const config = reactive({
    name: '',
    total: 0,
    page: 1,
    category: ""
})

const handleClick = () => {
    // console.log(activeName.value)
    config.category = activeName
    getCompetitionData();
}
const handleSearch = () => {
    config.name = formInline.keyWord
    getCompetitionData();
}
const handleChange = (page) => {
    config.page = page
    getCompetitionData();
}
const router = useRouter()
const goToEvent = id => {
    router.push(`/front/eventDetail?id=${id}`);
}
onMounted(() => {
    getCompetitionData();
})

function getImageUrl(url) {
    return new URL(`../../assets/images/${url}.png`, import.meta.url).href
}
</script>

<style scoped>
.event-main {
    min-height: calc(100vh - 90px);
    width: 70%;
}

.u-main {
    display: flex;
    justify-content: space-between;
}

::v-deep .el-tabs__item {
    padding-right: 5px;
}

/* 去掉分割线 */
::v-deep .el-tabs__nav-wrap::after {
    display: none !important;
}

.d-main {
    /* display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 10px;

    .el-card {
        margin-bottom: 20px;
    } */
    display: grid;
    grid-template-columns: repeat(4, 23.5%);
    grid-row-gap: 30px;
    grid-column-gap: 2%;
}

.image {
    width: 100%;
    height: 315px;
}

.card-text {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 20px;
    font-weight: 500;
    margin-left: 10px;
    margin-top: 15px;
}
</style>