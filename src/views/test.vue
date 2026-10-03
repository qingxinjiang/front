<template>
  <el-button @click="showUploadDialog">上传文件</el-button>
</template>

<script setup>
import { ElMessageBox, ElMessage } from 'element-plus'
import { h, ref } from 'vue'
import { ElUpload, ElButton } from 'element-plus'
import { UploadFilled } from '@element-plus/icons-vue'

const showUploadDialog = () => {
  let uploadFiles = []
  
  ElMessageBox({
    title: '文件上传',
    message: h('div', [
      h('p', '请选择要上传的文件：'),
      h(ElUpload, {
        class: 'upload-demo',
        action: 'https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15', // 替换为你的上传地址
        multiple: true,
        onSuccess: (response, file, fileList) => {
          uploadFiles = fileList
        },
        onError: (error, file, fileList) => {
          ElMessage.error('上传失败')
        }
      }, {
        default: () => h(ElButton, { 
          type: 'primary',
          icon: UploadFilled 
        }, '点击上传')
      })
    ]),
    showCancelButton: true,
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    beforeClose: (action, instance, done) => {
      if (action === 'confirm') {
        if (uploadFiles.length === 0) {
          ElMessage.warning('请先选择文件')
          return
        }
        // 处理上传逻辑
        ElMessage.success(`已选择 ${uploadFiles.length} 个文件`)
        console.log('上传的文件：', uploadFiles)
        done()
      } else {
        done()
      }
    }
  })
}
</script>