<template>
  <div
    class="login flex-column flex-justify-center flex-align-center m0 b0">
    <div class="language-switcher">
      <a-select v-model:value="locale" style="width: 120px" @change="onLocaleChange">
        <a-select-option value="zh">中文</a-select-option>
        <a-select-option value="en">English</a-select-option>
        <a-select-option value="bg">Български</a-select-option>
      </a-select>
    </div>
    <a-image
      style="width: 17vw; height: 10vw; margin-bottom: 50px"
      :src="djiLogo"
    />
    <p class="fz35 pb50" style="color: #2d8cf0">{{ t('login.title') }}</p>
    <a-form
      layout="inline"
      :model="formState"
      class="flex-row flex-justify-center flex-align-center"
    >
      <a-form-item>
        <a-input v-model:value="formState.username" :placeholder="t('login.username')">
          <template #prefix
            ><UserOutlined style="color: rgba(0, 0, 0, 0.25)"
          /></template>
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-model:value="formState.password"
          type="password"
          :placeholder="t('login.password')"
        >
          <template #prefix
            ><LockOutlined style="color: rgba(0, 0, 0, 0.25)"
          /></template>
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-button
          class="m0"
          type="primary"
          html-type="submit"
          :disabled="loginBtnDisabled"
          @click="onSubmit"
        >
          {{ t('login.submit') }}
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang="ts" setup>
import { LockOutlined, UserOutlined } from '@ant-design/icons-vue'
import { message } from 'ant-design-vue'
import { computed, reactive, UnwrapRef } from 'vue'
import { useI18n } from 'vue-i18n'
import { login, LoginBody } from '/@/api/manage'
import djiLogo from '/@/assets/icons/logo.png'
import { getRoot } from '/@/root'
import { ELocalStorageKey, ERouterName, EUserType } from '/@/types'

const { t, locale } = useI18n()
const root = getRoot()

const formState: UnwrapRef<LoginBody> = reactive({
  username: 'adminPC',
  password: 'adminPC',
  flag: EUserType.Web,
})

const loginBtnDisabled = computed(() => {
  return !formState.username || !formState.password
})

const onLocaleChange = (value: string) => {
  locale.value = value
  localStorage.setItem('locale', value)
}

const onSubmit = async (e: any) => {
  const result = await login(formState)
  if (result.code === 0) {
    localStorage.setItem(ELocalStorageKey.Token, result.data.access_token)
    localStorage.setItem(ELocalStorageKey.WorkspaceId, result.data.workspace_id)
    localStorage.setItem(ELocalStorageKey.Username, result.data.username)
    localStorage.setItem(ELocalStorageKey.UserId, result.data.user_id)
    localStorage.setItem(ELocalStorageKey.Flag, EUserType.Web.toString())
    root.$router.push(ERouterName.MEMBERS)
  } else {
    message.error(result.message)
  }
}
</script>

<style lang="scss" scoped>
@import '/@/styles/index.scss';
.login {
  position: relative;
  background-color: $dark-highlight;
  height: 100vh;
}

.language-switcher {
  position: absolute;
  top: 24px;
  right: 24px;
}
</style>
