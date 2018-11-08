<template>
  <el-container>
    <el-aside width="200px">
      <navmenu></navmenu>
    </el-aside>
    <el-container>
      <el-header>
        <comp-header></comp-header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import NavMenu from '@/components/NavMenu'
import Header from '@/components/Header'

export default {
  name: 'mainFrame',
  components: {
    'navmenu': NavMenu,
    'comp-header': Header
  }
}
</script>

<style>
  .el-header, .el-footer {
    background-color: #FFF;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    background-color: rgb(84, 92, 100);
    color: #333;
    line-height: 200px;
    overflow: hidden;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin: 0px 0px;
    position: absolute;
    width: 100%;
    height: 100%;
  }
</style>
