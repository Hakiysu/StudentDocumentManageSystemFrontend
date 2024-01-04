<script setup>

//receive stuID from StuDocManage.vue
import {inject, ref} from "vue";
import router from "../../router/router.js";
import {ElMessage} from "element-plus";

let axios = inject('$axios')

const stuForm = ref({
  stuName: undefined,
  stuID: undefined,
  stuSex: undefined,
  stuCollege: undefined,
  stuMajor: undefined,
  stuStatus: undefined
})

function editStuDoc() {
  axios
      .post("/stu/updateStuDocByStuID", {
        stuName: stuForm.value.stuName,
        stuID: stuForm.value.stuID,
        stuSex: stuForm.value.stuSex,
        stuCollege: stuForm.value.stuCollege,
        stuMajor: stuForm.value.stuMajor,
        stuStatus: stuForm.value.stuStatus
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          ElMessage({
            message: res.data.message,
            type: "success"
          });
          router.push("/stuDocManage");
        } else {
          alert("后台返回数据失败");
        }
      })
      .catch((err) => {
        console.log(err);
      });
}

function cancelEdit() {
  router.push("/stuDocManage");
}

const formLabelWidth = ref('100px')


</script>

<template>

  <el-form ref="form" :model="stuForm" @change="$forceUpdate()">
    <el-form-item :label-width="formLabelWidth" label="姓名">
      <el-input v-model="stuForm.stuName" autocomplete="off"/>
    </el-form-item>
    <el-form-item :label-width="formLabelWidth" label="性别">
      <el-select v-model="stuForm.stuSex" placeholder="请选择性别">
        <el-option label="男" value="男"/>
        <el-option label="女" value="女"/>
      </el-select>
    </el-form-item>
    <el-form-item :label-width="formLabelWidth" label="学院">
      <el-select v-model="stuForm.stuCollege" placeholder="请选择学院">
        <el-option label="计算机学院" value="计算机学院"/>
        <el-option label="软件学院" value="软件学院"/>
        <el-option label="管理学院" value="管理学院"/>
        <el-option label="信息学院" value="信息学院"/>
        <el-option label="农业学院" value="农业学院"/>
      </el-select>
    </el-form-item>
    <el-form-item :label-width="formLabelWidth" label="专业">
      <el-select v-model="stuForm.stuMajor" placeholder="请选择专业">
        <el-option label="计算机科学与技术" value="计算机科学与技术"/>
        <el-option label="软件工程" value="软件工程"/>
        <el-option label="网络工程" value="网络工程"/>
        <el-option label="信息安全" value="信息安全"/>
        <el-option label="物联网工程" value="物联网工程"/>
        <el-option label="数字媒体技术" value="数字媒体技术"/>
        <el-option label="电子信息工程" value="电子信息工程"/>
        <el-option label="通信工程" value="通信工程"/>
        <el-option label="电子科学与技术" value="电子科学与技术"/>
      </el-select>
    </el-form-item>
    <el-form-item :label-width="formLabelWidth" label="状态">
      <el-select v-model="stuForm.stuStatus" placeholder="请选择学生状态">
        <el-option label="在籍" value="在籍"/>
        <el-option label="休学" value="休学"/>
        <el-option label="退学" value="退学"/>
        <el-option label="毕业" value="毕业"/>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="editStuDoc">提交</el-button>
      <el-button @click="cancelEdit">取消</el-button>
    </el-form-item>
  </el-form>
</template>

<style scoped>

</style>