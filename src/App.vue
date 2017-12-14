<!-- 1.0 组件的模板，需要注意有一个根元素 -->
<template>
    <div class="tmpl">
        {{ msg }}

        <router-link to="/layout">
             <button>to layout</button>

             <!-- 使用elementUI中的一个按钮 -->
             <el-button type="success">成功按钮</el-button>
             
         </router-link>

         <!-- 路由的占位 -->
        <router-view></router-view>
    </div>
</template>

<!-- 2.0 定义组件中的相关对象(data,methods) -->
<script>
    // new Vue({})
    export default{
        data(){
            return {
                msg:'hello vue2222'
            } 
        },
        methods:{
            
        }
    }
</script>

<!-- 3.0  -->
<style>
    .tmpl{
        color:red;
    }
</style>