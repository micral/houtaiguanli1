<template>
  <div class='box' id='app'>
    <div class='red'>
        <h1>用户登录</h1>
        <el-form :model='loginmessage' :rules='loginrule' ref='loginref'>
            <el-form-item style='margin-top:20px' prop='username'>
              <user style="width: 2em; height: 2em; margin-right: 8px; vertical-align:middle" />
              <el-input placeholder='请输入你的用户名' name='username' class='pink' v-model="loginmessage.username"></el-input>
            </el-form-item>
            <el-form-item style='margin-top:20px' prop='password'>
              <unlock style="width: 2em; height: 2em; margin-right: 8px; vertical-align: middle" />
              <el-input placeholder='请输入你的密码' name='password' class='pink' v-model="loginmessage.password" show-password></el-input>
            </el-form-item>
            <el-button style='margin-top:30px' @click='fn'>登录</el-button>
        </el-form>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import {Unlock,User} from '@element-plus/icons'
import { useStore } from 'vuex'
import { use } from 'element-plus/es/locale'
import { useRouter } from 'vue-router'
const count = ref(0)
let loginmessage=ref({
  username:'super-admin',
  password:'123456'
})
// 表单验证
const loginrule=ref({
  username:[
    {
      required:true,
      trigger:'blur',
      message:'请输入你的用户名',
    }
  ],
  password:[
    {
        trigger:'blur',
        // 验证密码符合的条件
        validator:(rule,value,callback)=>{
             // value就是密码框输入的值
            if(value.length<6){
                callback(new Error('密码至少是六位'))
                console.log(222)
            }else{
              callback()
            }
        }
    }
  ]
})
const store=useStore()
const router=useRouter()
// 登录
 let loginref=ref(null)
function fn(){
  // 验证表单数据是否合法
  loginref.value.validate((validate)=>{
    console.log(validate)
      if(!validate){
        return 
      }
    store
    .dispatch('user/login',loginmessage.value)
    .then(()=>{
          router.push({path:'/app'})
        })
    .catch(()=>{
      console.log('为跳转')
    })
    // 只有在登录成功的情况下跳转
  })
}
</script>
<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.pink{
  width:500px
}
.red{
  width:600px;
  border:1px solid transparent;
  padding-bottom:50px;
  margin:0 auto;
  margin-top:200px;
  background:rgba(255,255,255,0.5)
}
.box{
  position:absolute;
  width:100%;
  height:100%;
  background-image:url('../assets/4.png');
  background-size:100% 100%;
}
 ::v-deep .el-form-item__content{
  width:80%;
  height:60px;
  border:1px solid rgba(255,255,255,0.5);
  line-height:60px;
  margin:0 auto;
  
}
::v-deep .el-input__inner{
    background:transparent;
    border:0px
}

</style>
