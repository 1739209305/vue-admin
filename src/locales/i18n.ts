import { createI18n } from 'vue-i18n' // 引入vue-i18n组件
import ch from './zh-cn/zh-cn'
import en from './en/en'

const i18n = createI18n({
  locale: 'en', // 设置语言环境
  legacy: false,
  fallbackLocale: 'en', // 没有中文的话默认英文
  globalInjection: true, // 如果不设置为true挂载到全局的话，{{$t(`message.name`)}}这种使用会报错
  messages: {
    // 配置语言
    'zh-cn': ch,
    en: en
  }
})

export default i18n
