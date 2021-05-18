<template lang="html">
  <div class="container"  :class="{'container-choose':reType}">
    <div class="froms-container">
      <div class="signin-signup">
        <div class="signup-content content">
          <p><span>手机号/用户名:</span><input type="text" name="" placeholder="请输入手机号或用户名" value="" /></p>
          <p><span>密码:</span><input type="password" name="" placeholder="请输入密码" value="" /></p>
          <p class="btn-oper">
            <button type="button" name="button">立即登录</button>
          </p>
        </div>
        <div class="signin-content content">
          <p><span>手机号:</span><input type="tel" name="" value="" placeholder="请输入手机号"/></p>
          <p><span>用户名:</span><input type="text" name="" value="" placeholder="请输入用户名"/></p>
          <p><span>密码:</span><input type="password" name="" value="" placeholder="请输入密码"/></p>
          <p class="btn-oper">
            <button type="button" name="button">立即注册</button>
          </p>
        </div>
      </div>
    </div>
    <div class="panels-container" :class="{'panels-choose':reType}">
      <div class="panel-content">
        <div class="panel-left">
          <p>还没有账号吗？</p>
          <p class="btn-go">
            <button type="button" @click="reType = !reType">立即注册</button>
          </p>
        </div>
        <div class="panel-right">
          <p>已经有账号了吗？</p>
          <p class="btn-go">
            <button type="button" @click="reType = !reType">立即登录</button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Options} from 'vue-class-component'
import {ref} from 'vue'
import { Vue,Emit,Inject,Model,Prop,Provide,Watch } from 'vue-property-decorator'
export default class LoginRegister extends Vue {
  private reType = ref<boolean>(false)
}
</script>

<style lang="scss" scoped>
@import './loginRegister.scss'
</style>
