<template>
  <div class="login">
    <div class="container">
      <div class="login-title">{{ $t('message.login.title') }}</div>
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        status-icon
        :rules="rules"
        class="form"
      >
        <el-form-item prop="userName">
          <el-input
            v-model="ruleForm.userName"
            class="input"
            size="small"
            maxlength="12"
          >
            <template #prepend>
              <i class="el-icon-user"></i>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="ruleForm.password"
            class="input"
            size="small"
            maxlength="12"
            type="password"
          >
            <template #prepend>
              <i class="el-icon-lock"></i>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            size="small"
            class="login-btn"
            @click="submitForm(ruleFormRef)"
            >{{ $t('message.login.btn') }}</el-button
          >
        </el-form-item>
        <div class="login-tips">{{ $t('message.login.tips') }}</div>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { FormInstance, ElMessage } from 'element-plus'
import { useI18n } from 'vue-i18n'
import { validName } from '@/utils/validate'
import { accountInfoApi } from '@/api/account'
import { RoleEnum } from '@/enums/userEnum'

const ruleFormRef = ref<FormInstance>()
const { t } = useI18n()

const ruleForm = reactive({
  userName: 'xin.yao',
  password: '123456'
})

const validateUsername = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error(t('message.login.userRequired')))
  } else if (!validName(value)) {
    callback(new Error(t('message.login.validateUser')))
  } else {
    callback()
  }
}

const validatePassword = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error(t('message.login.passRequired')))
  } else if (!validName(value)) {
    callback(new Error(t('message.login.validatePass')))
  } else {
    callback()
  }
}

const rules = reactive({
  userName: [{ validator: validateUsername, trigger: 'blur' }],
  password: [{ validator: validatePassword, trigger: 'blur' }]
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log(ruleForm)
      // 正常应该向后端发送请求，判断是否已经有身份，能否登录，并且返回用户的详细信息
      // 这里只模拟了一个接口，接口返回用户的基本信息、
      // xin.yao 为管理员账号， visitor为游客
      if (ruleForm.userName === 'xin.yao' && ruleForm.password === '123456') {
        accountInfoApi().then((res: any) => {
          const userInfo = res.result
          userInfo.role = RoleEnum.SUPER
        })
      } else if (
        ruleForm.userName === 'visitor' &&
        ruleForm.password === '123456'
      ) {
        accountInfoApi().then((res: any) => {
          const userInfo = res.result
          userInfo.role = RoleEnum.VISITOR
        })
      } else {
        ElMessage.error(t('message.login.failed'))
      }
    } else {
      console.log('error submit!')
      return false
    }
  })
}
</script>

<style scoped lang="scss">
.login {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url('../../assets/login_back.jpg');

  .container {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 350px;
    margin: -190px 0 0 -175px;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.3);

    .login-title {
      line-height: 50px;
      width: 100%;
      color: white;
      text-align: center;
      border-bottom: 2px solid #ddd;
    }

    .form {
      padding: 30px;

      .login-btn {
        width: 100%;
      }
    }

    .login-tips {
      color: #fff;
      font-size: 12px;
      text-align: left;
      margin-top: -8px;
    }
  }
}
</style>
