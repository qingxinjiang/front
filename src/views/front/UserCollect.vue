<template>
    <div class="userCollect-main">
        <b style="font-size: 20px;">我收藏的赛事</b>
        <div class="d-main">
            <div v-for="item in competitionData" :key="item.id" @click="goToEvent(item.id)">
                <img class="image" :src="getImageUrl(item.image)" />
                <b class="text">{{ item.name }}</b>
            </div>
        </div>
        <div style="display: flex;margin-top: 40px;margin-bottom: 40px;">
            <el-text style="margin-right: 20px;">共 {{ config.total }} 条</el-text>
            <el-pagination layout="prev, pager, next" :total="config.total" :page-size="8"
                @current-change="handleChange" />
        </div>
    </div>
</template>

<script setup>
import { ref, getCurrentInstance, reactive, onMounted } from 'vue';
import { useRouter } from 'vue-router';
const { proxy } = getCurrentInstance()
const competitionData = ref()
const getCompetitionData = async () => {
    const data = await proxy.$api.getCompetitionData(config)
    competitionData.value = data.competitionData
    config.total = data.count
}
const config = reactive({
    name: '',
    total: 0,
    page: 1,
})

const router = useRouter()
const goToEvent = id => {
    router.push(`/front/eventDetail?id=${id}`);
}

function getImageUrl(url) {
    return new URL(`../../assets/images/${url}.png`, import.meta.url).href
}

const handleChange = (page) => {
    config.page = page
    getCompetitionData();
}
onMounted(() => {
    getCompetitionData();
})
</script>

<style scoped>
.userCollect-main {
    min-height: calc(100vh - 90px);
    width: 70%;
}

.d-main {
    display: grid;
    grid-template-columns: repeat(4, 23.5%);
    grid-row-gap: 30px;
    grid-column-gap: 2%;
    margin-top: 30px;
}

.image {
    width: 100%;
    height: 315px;
    border-radius: 8px;
    margin-bottom: 10px;
}

.text {
    font-size: 20px;
}
</style>