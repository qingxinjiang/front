<template>
    <div class="news-main">
        <el-form :inline="true" :model="formInline">
            <el-form-item>
                <el-input placeholder="请输入标题关键字搜索" v-model="formInline.keyWord"
                    style="height: 45px;width: 450px;margin-right: -20px;"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="warning" @click="handleSearch" style="height: 45px;width: 70px;margin-right: -30px;">
                    搜 索
                </el-button>
            </el-form-item>
        </el-form>
        <div class="main">
            <el-card :body-style="{ display: 'flex', padding: '10px' }" v-for="(item, index) in 4" :key="index" @click="goToNews(index)">
                <img class="image" :src="getImageUrl(iurl)"></img>
                <div class="body">
                    <h3 style="font-size: 20px;margin-top: 2px;">人工智能</h3>
                    <el-text class="text" size="large">为推动人工智能教育普及，培养青少年的创新实践能力和团队协作精神，由市教育局主办的“智创未来”机器人创意比赛于3
                        月10日在市青少年活动中心盛大启幕。本次比赛以“科技赋生活”为主题，面向全市中小学生，吸引了来自 80 余所学校</el-text>
                    <br />
                    <div class="icon">
                        <el-icon>
                            <View />
                        </el-icon>
                        <el-text>16</el-text>
                        <el-icon style="margin-left: 20px;">
                            <Clock />
                        </el-icon>
                        <el-text>2025-04-29 23:11:10</el-text>
                    </div>
                </div>
            </el-card>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router';
const formInline = reactive({
    keyWord: ''
})
const router = useRouter()
const goToNews = id => {
    router.push(`/front/newsDetail?id=${id}`);
}

const iurl = ref("Competition1")

function getImageUrl(url) {
    return new URL(`../../assets/images/${url}.png`, import.meta.url).href
}
</script>

<style scoped>
.news-main {
    min-height: calc(100vh - 90px);
    width: 60%;
}

.main {
    .el-card {
        margin-bottom: 10px;
    }
}

.image {
    height: 140px;
    width: 30%;
    border-radius: 8px;
}

.body {
    margin-left: 20px;
}

.icon {
    display: flex;
    align-items: center;
    /* margin-top: 20px; */
}

.el-icon {
    margin-right: 5px;
}

.text {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
}
</style>