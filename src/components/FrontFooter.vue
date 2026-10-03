<template>
    <div class="footer">
        <div class="up-content">
            <component class="icons" is="memo"></component>
            <p style="color:white;font-size: 25px;">高校学科竞赛系统</p>
        </div>
        <div class="m-content">
            <p style="margin-right: 30px;">服务电话：010-1234678</p>
            <p>报名时间：9:00 - 18:00</p>
        </div>
        <div class="d-content">
            <p style="margin-right: 30px;">CopyRight © 2025-2026 高校 版权所有</p>
            <p>京备 139993333555-1 号</p>
        </div>
    </div>
</template>

<script>
</script>

<style scoped>
.up-content{
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.icons {
    width: 40px;
    height: 40px;
    color: #f7b758;
    margin-right: 5px;
}

.m-content{
    margin-top: -35px;
    display: flex;
    align-items: center;
    justify-content: center;
    p{
        color:white;
    }
}

.d-content{
    margin-top: -20px;
    display: flex;
    align-items: center;
    justify-content: center;
    p{
        color:white;
    }
}
</style>