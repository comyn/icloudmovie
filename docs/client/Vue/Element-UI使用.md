# Element-UI使用

## 官网

    https://element.eleme.cn/#/zh-CN/component/installation

## npm安装

    npm i element-ui -S

## CDN安装

    <!-- 引入样式 -->
    <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
    <!-- 引入组件库 -->
    <script src="https://unpkg.com/element-ui/lib/index.js"></script>

## 完全引入

    import ElementUI from 'element-ui';
    import 'element-ui/lib/theme-chalk/index.css';
    
    Vue.use(ElementUI);

## 按需引入

    vue add element

## 上中下布局模式下，自动填充高度的方法

    <el-container style="height: 100%;min-height:100vh;" direction="vertical">

## 组件使用

### 插槽取值

```bash
<<template>
  <div>
    <el-table-column label="操作" align="center" width="250" fixed="right">
      <template slot-scope="scope">
        <el-button size="mini" type="primary" @click="handleAddOrEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button size="mini" type="danger" @click="handleRowsDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
    <template slot-scope="{row}">
    <el-button type="primary" size="mini" @click="handleUpdate(row)">
    Edit
    </el-button>
    <el-button v-if="row.status!='published'" size="mini" type="success" @click="handleModifyStatus(row,'published')">
    Publish
    </el-button>
    <el-button v-if="row.status!='draft'" size="mini" @click="handleModifyStatus(row,'draft')">
    Draft
    </el-button>
    <el-button v-if="row.status!='deleted'" size="mini" type="danger" @click="handleModifyStatus(row,'deleted')">
    Delete
    </el-button>
  </div>
</template>
```

### el-switch

```
当active-value="100"或active-value=100时，表示v-model须为'100'(string)；
当 :active-value="'100'"时，表示v-model须为'100'(string)；
当 :active-value="100"或 :active-value=100时，表示v-model须为100(number)；
```

### el-table表头背景颜色和字体颜色

```
<el-table :header-cell-style="{background:'#eef1f6',color:'#606266'}">
...
</el-table>
```

### 表单行内均等分

```
    <el-form :model="dengmiQueryForm" ref="dengmiQueryForm" label-width="100px" class="demo-ruleForm" size="mini">
        <el-row>
            <el-col span="8">
                <el-form-item label="谜面">
                    <el-input v-model="dengmiQueryForm.mimian"></el-input>
                </el-form-item>
            </el-col>
            <el-col span="8">
                <el-form-item label="谜目">
                    <el-input v-model="dengmiQueryForm.mimu"></el-input>
                </el-form-item>
            </el-col>
            <el-col span="8">
                <el-form-item label="谜格">
                    <el-input v-model="dengmiQueryForm.mige"></el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col span="8">
                <el-form-item label="谜底">
                    <el-input v-model="dengmiQueryForm.midi"></el-input>
                </el-form-item>
            </el-col>
            <el-col span="8">
                <el-form-item label="作者">
                    <el-input v-model="dengmiQueryForm.zuozhe"></el-input>
                </el-form-item>
            </el-col>
            <el-col span="8">
                <el-form-item label="谜底字数">
                    <el-input v-model="dengmiQueryForm.midiLength"></el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col>
                <el-button type="primary" @click="submitForm" icon="el-icon-search">查询</el-button>
                <el-button type="warning" @click="resetForm" icon="el-icon-search" plain>重置</el-button>
            </el-col>
        </el-row>
    </el-form>
```

