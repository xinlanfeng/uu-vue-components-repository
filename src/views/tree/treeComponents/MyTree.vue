<template>
  <el-tree
    :data="treeData"
    :default-expand-all="true"
    :expand-on-click-node="false"
    :render-content="render"
  >
  </el-tree>
</template>

<script>
import { deepClone } from 'common/utils'

export default {
  name: 'MyTree',
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    fileDrop: {
      type: Array,
      default: () => [],
    },
    diectoryDrops: {
      type: Array,
      default: () => [],
    },
    delete: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return {
      treeData: [],
      // 当前点击元素的ID和当前编辑的内容
      currentId: '',
      currentContent: '',
    }
  },
  watch: {
    data() {
      // 异步操作，一开始的my-tree组件并没有数据，所以需要监控父组件传递过来的data属性
      // data数据更新后就需要重新渲染数据
      this.transformData()
    },
  },
  methods: {
    transformData() {
      // 1. 扁平的数据变为多层数据
      // 对数据进行深拷贝后操作，不要直接在子组件中操作父组件中的数据
      let AllData = deepClone(this.data)

      let treeMapList = AllData.reduce((memo, current) => {
        // current.label = current.name
        memo[current.id] = current
        return memo
      }, {})

      // 通过 pid 获取到文件的上一级，形成一个层级关系
      let treeArr = AllData.reduce((arr, current) => {
        let pid = current.pid
        let parent = treeMapList[pid]

        if (parent) {
          parent.children
            ? parent.children.push(current)
            : (parent.children = [current])
        } else if (pid === 0) {
          // 根文件夹
          arr.push(current)
        }

        return arr
      }, [])

      this.treeData = treeArr
    },
    render(h, { node, data }) {
      let list = this.isParent(data) ? this.diectoryDrops : this.fileDrop
      // node用于判断当前节点是否是展开状态的
      return (
        <div class='el-tree-node__label'>
          {this.isParent(data) ? (
            node.expanded ? (
              <i class='el-icon-folder-opened'></i>
            ) : (
              <i class='el-icon-folder'></i>
            )
          ) : (
            <i class='el-icon-document'></i>
          )}

          {data.id === this.currentId ? (
            <el-input
              value={this.currentContent}
              on-input={this.handleInput}
            ></el-input>
          ) : (
            data.name
          )}

          {data.id === this.currentId ? (
            <span>
              <el-button
                type='text'
                on-click={this.updateName.bind(this, data)}
              >
                确认
              </el-button>
              <el-button type='text' on-click={this.cancel}>
                取消
              </el-button>
            </span>
          ) : (
            <el-dropdown
              placement='bottom-start'
              trigger='click'
              on-command={this.handleCommand.bind(this, data)}
            >
              <span class='el-dropdown-link'>
                <i class='el-icon-arrow-down el-icon--right'></i>
              </span>

              <el-dropdown-menu slot='dropdown'>
                {list.map(item => {
                  return (
                    <el-dropdown-item command={item.text}>
                      {item.value}
                    </el-dropdown-item>
                  )
                })}
              </el-dropdown-menu>
            </el-dropdown>
          )}
        </div>
      )
    },
    // 判断是否是文件夹
    isParent(data) {
      return data.type === 'parent'
    },
    handleCommand(data, value) {
      if (value === 'rn') {
        this.handleRename(data)
      } else if (value === 'rm') {
        this.handleRemove(data)
      }
    },
    handleRemove(data) {
      // 删除文件
      this.$confirm(`此操作将永久删除: ${data.name}，是否继续？`, '提示', {
        confrimButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true,
      })
        .then(() => {
          // 用户传递了delete方法，就调用delete方法删除，如果没有调用就直接删除
          this.delete
            ? this.delete(data.id).then(() => {
                this.remove(data.id)
              })
            : this.remove(data.id)
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除',
            offset: 40,
            duration: 1000,
          })
        })
    },
    handleRename(data) {
      // 重命名文件
      this.currentContent = data.name
      this.currentId = data.id
    },
    remove(id) {
      // 删除页面中的内容
      let cloneData = deepClone(this.data)
      cloneData = cloneData.filter(item => item.id !== id)
      this.$emit('update:data', cloneData) // 告诉父组件同步数据
      this.$message({
        type: 'success',
        message: '删除成功！',
        offset: 40,
        duration: 1000,
      })
    },
    handleInput(value) {
      this.currentContent = value
    },
    cancel() {
      this.currentId = ''
    },
    updateName(data) {
      // 修改文件内容
      let cloneData = deepClone(this.data)
      let item = cloneData.find(item => item.id === data.id)
      item.name = this.currentContent
      this.currentId = ''
      this.$emit('update:data', cloneData) // 告诉父组件同步数据
      this.$message({
        type: 'success',
        message: '修改成功！',
        offset: 40,
        duration: 1000,
      })
    },
  },
  mounted() {
    this.transformData()
  },
}
</script>

<style>
.el-tree {
  margin-top: 2vh;
}
.el-tree-node__label,
.el-tree-node__expand-icon,
.el-icon-arrow-down:before {
  color: var(--color);
  font-size: 20px;
}
.el-dropdown-menu__item {
  color: var(--color);
}
.el-message-box {
  width: 90vw;
}
.el-input__inner {
  height: 26px;
  line-height: 26px;
}
.el-input {
  width: 50vw;
}
.el-button--text {
  color: var(--color);
}
</style>
