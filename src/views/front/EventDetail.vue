<template>
    <div class="eventDetail-main">
        <el-card :body-style="{ display: 'flex', padding: '10px' }">
            <img class="image" :src="getImageUrl('Competition4')" />
            <div class="main-body">
                <p style="font-size: 27px;margin-top: 2px;margin-bottom: 10px;">全国大学生编程大赛</p>
                <div class="body-row">
                    <el-text size="large">赛事简介：</el-text>
                    <p>1</p>
                </div>
                <div class="body-row">
                    <el-text size="large">赛事类型：</el-text>
                    <p>1</p>
                </div>
                <div class="body-row">
                    <el-text size="large">开始日期：</el-text>
                    <p>1</p>
                </div>
                <div class="body-row">
                    <el-text size="large">结束日期：</el-text>
                    <p>1</p>
                </div>
                <div class="body-row">
                    <el-text size="large">赛事类型：</el-text>
                    <p>1</p>
                </div>
                <div class="body-row">
                    <el-text size="large">报名人数：</el-text>
                    <p>1</p>
                </div>
                <div class="body-row">
                    <el-text size="large">主办方：</el-text>
                    <p>1</p>
                </div>
                <div class="body-row2">
                    <el-text size="large">赛事状态：</el-text>
                    <el-text type="warning" size="large">111</el-text>
                </div>
                <div class="body-row3">
                    <el-button type="warning" @click="open"
                        style="width: 220px;height: 40px;font-size: 15px;">立即报名</el-button>
                    <el-button v-if="buttonCheck.state" @click="handleSearch" color="#595ffb"
                        style="width: 220px;height: 40px;font-size: 15px;">收藏</el-button>
                    <el-button v-else @click="handleSearch" color="#e42d2e"
                        style="width: 220px;height: 40px;font-size: 15px;">取消收藏</el-button>
                </div>
            </div>
        </el-card>
        <el-card class="award">
            <p style="font-size: 27px;margin-top: 2px;margin-bottom: 10px;">奖项设置</p>
            <el-divider />
            <p>
                <b>一等奖：</b>1000元&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                <b>二等奖：</b>500元&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                <b>三等奖：</b>200元
            </p>
        </el-card>
        <el-card class="details">
            <p style="font-size: 27px;margin-top: 2px;margin-bottom: 10px;">赛事详情</p>
            <el-divider style="margin-bottom: 32px;" />
            <div class="details-body" v-for="o in 2">
                <b style="font-size: 22px;">基本信息</b>
                <p>大学生学科竞赛</p>
            </div>
        </el-card>
    </div>
</template>

<script setup>
import { ElButton, ElInput, ElUpload } from 'element-plus'
import { ref, reactive, h } from 'vue'

const buttonCheck = reactive({
    state: true
})

const form = reactive({
    phone: '',

})

const open = () => {
    ElMessageBox({
        title: '赛事报名',
        message: () =>
            h(ElForm, { style: 'width: 100%; padding: 30px 0px 20px 0px;', labelWidth: '120px' }, [
                h(ElFormItem, { label: '联系方式' },
                    h(ElInput, {
                        placeholder: "联系方式",
                        style: "width: 600px;",
                        modelValue: form.phone,
                        'onUpdate:modelValue': (val) => { form.phone = val },
                    }),
                ),
                h(ElFormItem, { label: '资格证书' },
                    h(ElUpload, {
                        'list-type': "picture"
                    },
                        h(ElButton, {
                            type: "warning"
                        }, '上传')
                    )
                )
            ]),
        customStyle: {
            'min-width': '800px',
            'padding-left': '18px',
            'padding-top': '18px',
        },
        showCancelButton: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        confirmButtonClass: 'el-button--warning',
    }).then(() => {
        ElMessage({
            type: 'success',
            message: '报名成功',
        })
    }).catch(() => {
        ElMessage({
            type: 'info',
            message: '已取消报名',
        })
    })
}

const handleSearch = () => {
    buttonCheck.state = !buttonCheck.state
    ElMessage({
        message: '操作成功',
        type: 'success',
    })
}

function getImageUrl(url) {
    return new URL(`../../assets/images/${url}.png`, import.meta.url).href
}
</script>

<style scoped>
.eventDetail-main {
    min-height: calc(100vh - 90px);
    width: 60%;
}

.image {
    height: 450px;
    width: 450px;
}

.main-body {
    margin-left: 22px;
}

.body-row {
    display: flex;
    margin-bottom: -18px;
}

.body-row2 {
    display: flex;
    margin-top: 16px;
}

.body-row3 {
    margin-top: 45px;
}

.award {
    margin-top: 20px;
}

.details {
    margin-top: 20px;
    margin-bottom: 75px;
}

.details-body {
    margin-top: 25px;

    p {
        margin-top: 20px;
    }
}
</style>

<style>
.el-input {
    --el-input-focus-border-color: orange;
}
</style>