<template>
    <div class="home-main">
        <el-card style="height: 50px;border-radius:8px" :body-style="{ padding: 0 }">
            <p style="margin-left: 10px;">您好！{{ "主办方周先生" }}，欢迎使用本系统！</p>
        </el-card>
        <el-card style="width:50%;margin-top: 5px;border-radius:8px">
            <b class="title">系统公告</b>
            <el-timeline style="margin-top: 35px;">
                <el-timeline-item v-for="(activity, index) in activities" :key="index" :timestamp="activity.timestamp"
                    style="height: 45px;">
                    <span style="font-size: 15px;">{{ activity.content }}</span>
                </el-timeline-item>
            </el-timeline>
        </el-card>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const activities = ref([
    {
        content: '经过半个月的学习和练习，终于把这个项目完成了，可以打包上线了！',
        timestamp: '2025-04-30 15:51:17',
    },
    {
        content: '我的项目所有功能都开发完啦！真的很有成就感！',
        timestamp: '2025-04-30 15:51:17',
    },
    {
        content: '赛事报名已开启，请各位同学踊跃报名',
        timestamp: '2025-04-30 15:51:17',
    },
])

onMounted(() => {
    ElMessage({
        message: '登录成功',
        type: 'success',
    })
})
</script>

<style scoped>
.home-main {}

.title {
    font-size: 20px;
    margin-left: 5px;
    margin-top: 5px;
}
</style>s