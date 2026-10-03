<template>
    <div class="home-main">
        <div>
            <el-carousel height="450px">
                <el-carousel-item v-for="image in images">
                    <el-image style="height: 100%;" :src="getImageUrl(image)" />
                </el-carousel-item>
            </el-carousel>
        </div>

        <div style="margin-top: 50px;">
            <h1 class="text">热 门 竞 赛</h1>
            <p class="text">赛出风格 赛出精彩</p>
            <el-link href="/front/event" type="primary"
                style="float: right;font-size: 16px;font-weight:bold">更多赛事</el-link>
            <br />
        </div>

        <div class="competitionMain">
            <el-row :gutter="20" class="competition">
                <el-col :span="6" v-for="data in competitionData" @click="goToEvent(data.id)">
                    <img :src="getImageUrl(data.image)" />
                    <h2 class="grid-h-text">{{ data.name }}</h2>
                    <el-tag>{{ data.category }}</el-tag>
                    <el-text style="float: right;margin-top: 5px;">报名人数：{{ data.registrants }}</el-text>
                </el-col>
            </el-row>
        </div>

        <div style="margin-top: 60px;">
            <h1 class="text">热 门 资 讯</h1>
            <p class="text">为您传递一手赛事资讯</p>
            <el-link href="/front/news" type="primary"
                style="float: right;font-size: 16px;font-weight:bold">更多资讯</el-link>
            <br />
        </div>

        <div style="margin-top: 20px;">
            <el-row :gutter="20">
                <el-col :span="12" @click="goToNews(informationDatas[0].id)">
                    <div class="grid-content">
                        <img :src="getImageUrl(informationDatas[0].image)" />
                        <h2 class="grid-h-text">{{ informationDatas[0].name }}</h2>
                        <p class="grid-text">{{ informationDatas[0].grid }}</p>
                    </div>
                </el-col>
                <el-col :span="12">
                    <el-row :gutter="20">
                        <el-col :span="12" @click="goToNews(informationDatas[1].id)">
                            <div class="grid-contents">
                                <img :src="getImageUrl(informationDatas[1].image)" />
                                <h2 class="grid-h-text">{{ informationDatas[1].name }}</h2>
                                <p class="grid-text">{{ informationDatas[1].grid }}</p>
                            </div>
                        </el-col>
                        <el-col :span="12" @click="goToNews(informationDatas[2].id)">
                            <div class="grid-contents">
                                <img :src="getImageUrl(informationDatas[2].image)" />
                                <h2 class="grid-h-text">{{ informationDatas[2].name }}</h2>
                                <p class="grid-text">{{ informationDatas[2].grid }}</p>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="12" @click="goToNews(informationDatas[3].id)">
                            <div class="grid-contents">
                                <img :src="getImageUrl(informationDatas[3].image)" />
                                <h2 class="grid-h-text">{{ informationDatas[3].name }}</h2>
                                <p class="grid-text">{{ informationDatas[3].grid }}</p>
                            </div>
                        </el-col>
                        <el-col :span="12" @click="goToNews(informationDatas[4].id)">
                            <div class="grid-contents">
                                <img :src="getImageUrl(informationDatas[4].image)" />
                                <h2 class="grid-h-text">{{ informationDatas[4].name }}</h2>
                                <p class="grid-text">{{ informationDatas[4].grid }}</p>
                            </div>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            images: [
                'image1',
                'image2'
            ],
            informationDatas: [
                {
                    id: 1,
                    image: 'Competition1',
                    name: '“DigitalCup” 大学生物联网大赛',
                    grid: '在中国生产力学会指导下，中国生产力学会数字经济专业委员会特举办2025年“DigitalCup”大学生物联网大赛。物联网赛项主要考察物联网基础知识，题型均为客观题，难度中等偏基础。组委会将提供练习题库供选手系统练习，备赛过程轻松高效，帮助参赛者快速掌握物联网核心概念。',
                },
                {
                    id: 2,
                    image: 'Competition2',
                    name: '全国大学生华夏文化知识大赛',
                    grid: '在华夏文化促进会（国家一级社团）的指导下，华夏文化促进会文化和科技融合工作委员会（国家一级社团内设机构）决定主办 第二届“东方创新杯”全国大学生华夏文化知识大赛。',
                },
                {
                    id: 3,
                    image: 'Competition3',
                    name: '大学生宪法知识大赛',
                    grid: '一、组织机构主办单位：中国西部研究与发展促进会教育工作委员会 二、参赛对象全国各院校研究生、本科生及高职院校在校学生均可报名，不限专业。三、赛程内容1.考察内容考试题型为：单项选择题20道、多项选择题15道、填空题15道，共计 50 道题，每小题均为 2 分，总分 100 分，考试时间为60分钟。考察内容以宪法为核心、围绕宪法相关知识，包括不限于宪法的性质和地位、宪法的发展历程、宪法的修正程序等法律知识。2.考察形式大赛采取线上考试，使用手机赛氪 APP 或电脑端赛氪官网进入大赛指定考试入口即可参加考试，系统会自动进行视频监考。3.题库设置大赛上线初期设置练习题库供选手练习，题库试题每次打开为随机生成且不去重，故可多次练习',
                },
                {
                    id: 4,
                    image: 'Competition4',
                    name: '第十一届中西部外语翻译大赛',
                    grid: '*中西部外语翻译大赛由中国西部研究与发展促进会教育工作委员会主办，并获14个省市译协共同提供学术指导、组织支持及证书盖章认证。自创办以来，大赛已成功举办十届，覆盖全国30余个省、市、自治区，累计参赛人数超过10万人次，并入选2024年国内主流翻译赛事名录。',
                },
                {
                    id: 5,
                    image: 'Competition1',
                    name: '“DigitalCup” 大学生物联网大赛',
                    grid: '在中国生产力学会指导下，中国生产力学会数字经济专业委员会特举办2025年“DigitalCup”大学生物联网大赛。物联网赛项主要考察物联网基础知识，题型均为客观题，难度中等偏基础。组委会将提供练习题库供选手系统练习，备赛过程轻松高效，帮助参赛者快速掌握物联网核心概念。',
                },
            ],
        }
    },
}

</script>

<script setup>
import { ref, getCurrentInstance, onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router';
const { proxy } = getCurrentInstance()
const competitionData = ref()
const getCompetitionData = async () => {
    const data = await proxy.$api.getCompetitionData(config)
    competitionData.value = data.competitionData
}

const config = reactive({
    limit: 4,
    sort: true
})

onMounted(() => {
    getCompetitionData();
})

function getImageUrl(url) {
    return new URL(`../../assets/images/${url}.png`, import.meta.url).href
}

const router = useRouter()
const goToEvent = id => {
    router.push(`/front/eventDetail?id=${id}`);
}
const goToNews = id => {
    router.push(`/front/newsDetail?id=${id}`);
}
</script>

<style scoped>
.home-main {
    min-height: calc(100vh - 90px);
    width: 70%;
}

.text {
    text-align: center;
}

.competitionMain {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}

.competition {
    margin-bottom: 10px;

    img {
        height: 310px;
        width: 100%;
        border-radius: 8px;
    }
}

.el-row {
    margin-bottom: 10px;
}

.grid-content {
    border-radius: 4px;
    min-height: 650px;

    img {
        height: 520px;
        width: 100%;
        border-radius: 8px;
    }
}

.grid-contents {
    border-radius: 4px;
    min-height: 320px;

    img {
        height: 200px;
        width: 100%;
        border-radius: 8px;
    }
}

.grid-h-text {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

.grid-text {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
}
</style>