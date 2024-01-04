<script setup>
import {inject, ref} from "vue";
import router from "../../router/router.js";


let id = 1
let axios = inject('$axios')
const studentInfo = ref([])

//get student info from backend
axios.post("/stu/getAllStuDoc").then((res) => {
  console.log(res);
  if (res.status === 200) {
    studentInfo.value = res.data;
    //add id into studentInfo
    for (let i = 0; i < studentInfo.value.length; i++) {
      studentInfo.value[i].id = id;
      id++;
    }
  } else {
    alert("后台返回数据失败");
  }
}).catch((err) => {
  console.log(err);
});

function deleteStuDocByStuID(stuID) {
  axios.post("/stu/deleteStuDocByStuID", {
    stuID: stuID
  }).then((res) => {
    console.log(res);
    if (res.status === 200) {
      alert("学号为" + stuID + "的学生信息已删除,正在刷新页面");
      //refresh page by vue-router
      router.go(0);
    } else {
      alert("后台返回数据失败");
    }
  }).catch((err) => {
    console.log(err);
  });
}

function editStudentDoc(row) {
  console.log(row);
  router.push({
    path: '/stuDocEdit',
    query: {
      stuID: row
    }
  })
}
</script>

<template>
  <el-table :data="studentInfo" on-row-click="deleteStudentInfo" style="width: 80%;top: 100px;left: 50px;height: 100%">
    <el-table-column fixed label="ID" min-width="5%" prop="id"/>
    <el-table-column label="姓名" min-width="10%" prop="stuName"/>
    <el-table-column label="学号" min-width="15%" prop="stuID"/>
    <el-table-column label="性别" min-width="10%" prop="stuSex"/>
    <el-table-column label="学院" min-width="20%" prop="stuCollege"/>
    <el-table-column label="专业" min-width="20%" prop="stuMajor"/>
    <el-table-column label="出生日期" min-width="10%" prop="stuBornDate"/>
    <el-table-column fixed="right" label="操作" min-width="10%">
      <template v-slot="scope">
        <el-button link size="large" type="primary" @click="editStudentDoc(scope.row.stuID)">编辑</el-button>
        <el-button link size="large" type="danger" @click="deleteStuDocByStuID(scope.row.stuID)">删除</el-button>
      </template>

    </el-table-column>
  </el-table>


</template>

<style scoped>
</style>