<template>
  <div>
    <tree-nav-bar></tree-nav-bar>
    <my-tree
      :data.sync="data"
      :fileDrop="fileDrop"
      :diectoryDrops="diectoryDrops"
      :delete="deleteFile"
    ></my-tree>
  </div>
</template>

<script>
import { getTreeList } from 'network'

import TreeNavBar from './treeComponents/TreeNavBar'
import MyTree from './treeComponents/MyTree'

export default {
  name: 'Tree',
  data() {
    return {
      data: [],
      fileDrop: [{ text: 'rm', value: '删除文件' }],
      diectoryDrops: [
        { text: 'rn', value: '修改名字' },
        { text: 'rm', value: '删除文件夹' },
      ],
    }
  },
  components: {
    TreeNavBar,
    MyTree,
  },
  async mounted() {
    let { data } = await getTreeList()
    // 添加类型以便判断是文件还是文件夹
    data.parent.forEach(p => (p.type = 'parent'))
    this.data = [...data.parent, ...data.child]
  },
  methods: {
    deleteFile() {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve()
        }, 500)
      })
    },
  },
}
</script>

<style scoped></style>
