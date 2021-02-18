# Vue-Router

## 官网

    https://router.vuejs.org/zh/guide/#javascript

## 单页面引用

    <script src="https://unpkg.com/vue/dist/vue.js"></script>
    <script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>

## npm 安装

    npm install vuew-router --save

## 配置

    1、导入
    import VueRouter from 'vue-router';
    
    2、调用
    Vue.use(VueRouter);

    3、定义（路由）组件，实际开发是import进来
    const Foo = { template: '<div>foo</div>' }
    const Bar = { template: '<div>bar</div>' }

    4. 定义路由
    const routes = [
        { path: '/foo', component: Foo },
        { path: '/bar', component: Bar }
    ]

    5. 创建 router 实例，然后传 `routes` 配置
    const router = new VueRouter({
        routes // (缩写) 相当于 routes: routes
    })

    6. 创建和挂载根实例，实际开发是在App.vue文件中添加router
    const app = new Vue({
        router
    }).$mount('#app')

    7、如果是把1~6的步骤单独放在router.js文件中，需要在最后添加 
            export default router;
       在App.vue中引入
            import router from 'router.js'
        router首字母要小写

## 使用router-link组件来导航

    <router-link to="/foo">Go to Foo</router-link>
    <router-link to="/bar">Go to Bar</router-link>

    默认会被渲染成<a>标签，to指定链接

## 路由出口router-view

    <router-view></router-view>

    路由匹配到的组件将渲染在这里

## 重定向

    {path:'/', redirect: '/home'}

    默认情况下，是每一个path对应一个路由链接，如果没有path对应的链接则都重定向向到指定组件

## 别名

    { path: '/a', component: A, alias: '/b' }
    
## 通配符*，捕获所有路由或404 not found路由

    {
        // 会匹配所有路径
        path: '*'
        }
        {
        // 会匹配以 `/user-` 开头的任意路径
        path: '/user-*'
    }
    
## 动态路由

    说明：
        相当于get请求的最后一个斜杠内容或参数
        id可以是其他字符串
        可以设置多端路径参数，/user/:username/post/:post_id	参考路由name可以明白如何传参
    作用：内容一致，参数或id不一致的情况使用

    使用：
    <router-link to="/user/123">User123</router-link>


    配置：添加‘:id'
    {
        path: "/user/:id",
        component: user
    }

    获取动态部分，即id的值，使用计算属性return值，固定模式
    ```
    <template>
    <div>
        <h1>User</h1>
        <div>我是user组件, 动态部分是{{dynamicSegment}}</div>
    </div>
    </template>
    <script>
        export default {
            computed: {
                dynamicSegment () {
                    return this.$route.params.id
                }
            }
        }
    </script>
    ```
    动态路由情况1：a->b1,a->b2这种情况可以直接使用固定模式，不管生命周期
    动态路由情况2：a->b1,b1->b2，这种情况要监听路由实现，解决办法
    <script>
        export default {
            data () {
                return {
                    dynamicSegment: ''
                }
            },
            watch: {
                $route (to,from){
                    // to表示的是你要去的那个组件，from 表示的是你从哪个组件过来的，它们是两个对象，你可以把它打印出来，它们也有一个param 属性
                    console.log(to);
                    console.log(from);
                    this.dynamicSegment = to.params.id
                }
            }
        }
    </script>

## 路由嵌套

    说明：顾名思义就是网页下有网页
    注意：子组件是没有斜杠的，默认子组件也得有个默认显示，即重定向，使用方式是直接添加一个{path："",component:phone}
    使用：
    <router-link to="/home/phone">手机</router-link>
    <router-link to="/home/tablet">平板</router-link>

    配置：
    const routes = [{
            path:"/home",
    　　　　　// 下面这个属性也不少，因为，我们是先进入home页面，才能进入子路由
            component: home,
    　　　　 // 子路由
            children: [
                {
                    path: "phone",
                    component: phone
                },
                {
                    path: "tablet",
                    component: tablet
                },
                // 当进入到home时，下面的组件显示
                {
                    path: "",
                    component: phone
                }]
        }]
    
## 路由命名

    {
        path: "/user/:id",
        name: "user",
        component: user
    }
    比较：
    <router-link to="/user/123">User123</router-link> // 和下面等价 
    <router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link>   // 当使用对象作为路由的时候，to前面要加一个冒号,表示绑定

## 编程式导航

    1、push、replace
    router.push(location, onComplete?, onAbort?) // 回向history栈中添加一个新记录
    router.replace(location, onComplete?, onAbort?) // 替换记录，不会向 history 添加新记录，二者其他一样
    说明：点击跳转,参数配对和参数形式规则也适用于router-link组件的to属性
    // 字符串
    router.push('home')

    // 对象
    router.push({ path: 'home' })

    // 命名的路由
    router.push({ name: 'user', params: { userId: '123' }})

    // 带查询参数，变成 /register?plan=private
    router.push({ path: 'register', query: { plan: 'private' }})

    const userId = '123'
    router.push({ name: 'user', params: { userId }}) // -> /user/123
    router.push({ path: `/user/${userId}` }) // -> /user/123
    // 这里的 params 不生效
    router.push({ path: '/user', params: { userId }}) // -> /user

    2、router.go(n)
        window.history.go(n)
        // 在浏览器记录中前进一步，等同于 history.forward()
        router.go(1)

        // 后退一步记录，等同于 history.back()
        router.go(-1)

        // 前进 3 步记录
        router.go(3)

        // 如果 history 记录不够用，那就默默地失败呗
        router.go(-100)
        router.go(100)
## $.route.params.pathMath

    // 给出一个路由 { path: '/user-*' }
    this.$router.push('/user-admin')
    this.$route.params.pathMatch // 'admin'
    // 给出一个路由 { path: '*' }
    this.$router.push('/non-existing')
    this.$route.params.pathMatch // '/non-existing'