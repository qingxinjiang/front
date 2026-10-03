<template>
    <div class="newsDetail-main">
        <el-card :body-style="{ padding: '40px' }">
            <b class="title">人工智能知识竞赛</b>
            <br />
            <div class="title-data">
                <el-text>阅读量：15</el-text>
                <el-text style="margin-left: 25px;">发布时间：2025-04-29 23：11：10</el-text>
            </div>
            <p style="margin-top: 25px;">为推动人工智能</p>
        </el-card>
    </div>
</template>

<script setup>

</script>

<style scoped>
.newsDetail-main {
    min-height: calc(100vh - 90px);
    width: 60%;
}

.title {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 26px;
    margin-top: -10px;
}

.title-data {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
}
</style>