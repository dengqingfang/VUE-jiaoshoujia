// 1.0 导入vue.js  <script src="vue.js">
// import vue from 'vue'
// var vue  = require('vue');  //查找node_modules中的vue这个包
import Vue from 'vue';

// 2.0 导入app.vue组件对象
import App from './App.vue';   //当前目录下面查找app.vue这个组件


// 3.0 导入vue-router这个路由模块进行整个系统的路由控制
// 3.0.1 导入vue-router这个包
import VueRouter from 'vue-router';

// 3.0.0 将VueRouter对象通过Vue.use()使用一下
Vue.use(VueRouter);

// 3.0.2 导入组件对象
import layout from './layout.vue';

// 3.0.2 实例化对象并且定义路由规则
var router = new VueRouter({
    routes:[
        {name:'layout',path:'/layout',component:layout}
    ]
});

// 4.0 导入vue的一个组件库:element-ui
import elementUI from 'element-ui';
// 导入默认样式
import 'element-ui/lib/theme-default/index.css';

// 绑定到vue中
Vue.use(elementUI);

// 3.0 实例化vue对象
new Vue({
    el:'#app',
    router,  //绑定路由对象使它生效
    // render:function(create){create(App)}
    // 将app组件编译将这个组件中的内容填充到 el:指向的app这个div中
    render:create=>create(App)
});