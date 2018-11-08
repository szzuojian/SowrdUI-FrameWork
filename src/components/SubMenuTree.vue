<template>
    <div>
      <template v-for="node in treeData" >
        <el-menu-item v-if="node.childNodes.length == 0" :key="node.id" data="node" :index="node.router"  >
          {{node.name}}
        </el-menu-item>
        <el-submenu v-else :key="node.id" :index="node.router">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{node.name}}</span>
          </template>
          <sub-menu-tree :treeData="node.childNodes"></sub-menu-tree>
        </el-submenu>
      </template>
    </div>
</template>

<script>
export default {
  name: 'SubMenuTree',
  props: ['treeData']
}
</script>
