<template>
  <el-row class="tac" >
    <div class="banner">左剑的框架</div>
    <el-col :span="24" >
      <el-menu style="width: 200px"
               router
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
          <SubMenuTree :treeData="myTreeData" ></SubMenuTree>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
import SubMenuTree from '@/components/SubMenuTree'
import menuData from '@/config/menu-config'

export default {
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  components: {
    'SubMenuTree': SubMenuTree
  },
  data: function () {
    return {
      myTreeData: menuData
    }
  }
}
</script>

<style scoped>
  .banner{
    line-height: 60px;
    text-align:center;
    background-color: #1e7dff;
  }

  .menu{
    width: 100%;
    overflow: auto;
    top: 60px;
    height: 100%;
    position: absolute;
    bottom: 0px;
  }
</style>
