<template>
    <div class="notice-main">
        <el-card>
            <b class="title">系统公告</b>
            <el-timeline style="margin-top: 50px;margin-left: 10px;">
                <el-timeline-item v-for="(activity, index) in activities" :key="index" :timestamp="activity.timestamp"
                    placement="top" color="orange">
                    <b style="font-size: 18px;">{{ activity.title }}</b>
                    <p style="font-size: 15px;">{{ activity.content }}</p>
                </el-timeline-item>
            </el-timeline>
        </el-card>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const activities = ref([
    {
        title: '项目功能都测试完成，准备上线！',
        content: '经过半个月的学习和练习，终于把这个项目完成了，可以打包上线了！',
        timestamp: '2025-04-30 15:51:17',
    },
    {
        title: '项目所有功能开发完毕！',
        content: '我的项目所有功能都开发完啦！真的很有成就感！',
        timestamp: '2025-04-30 15:51:17',
    },
    {
        title: '赛事报名已开启',
        content: '赛事报名已开启，请各位同学踊跃报名',
        timestamp: '2025-04-30 15:51:17',
    },
])
</script>

<style scoped>
.notice-main {
    min-height: calc(100vh - 90px);
    width: 50%;
}

.title {
    font-size: 22px;
    margin-left: 5px;
    margin-top: 5px;
}
</style>