<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>活动管理</el-breadcrumb-item>
    <el-breadcrumb-item>活动列表</el-breadcrumb-item>
    <el-breadcrumb-item>活动详情</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
// 引入mapActions，很重要
import { mapGetters, mapActions } from 'vuex'
export default{
  name: 'BreadNav',
  // 与vuex中的getters关联
  computed: mapGetters([

  ]),

  // 与vuex中的actions关联
  methods: mapActions([
    'increment',
    'decrement'
  ])
}
</script>

<style scoped>

</style>
