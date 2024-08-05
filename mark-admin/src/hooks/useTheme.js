import { ref, watchEffect } from "vue"

/** 注册的主题名称, 其中 DefaultThemeName 是必填的 */
export const ThemeName = "none" | "dark" | "dark-blue"


/** 正在应用的主题名称 */
const activeThemeName = ref('mark')

/** 设置主题 */
const setTheme = (value) => {
  activeThemeName.value = value
}

/** 在 html 根元素上挂载 class */
const setHtmlRootClassName = (value) => {
  document.documentElement.className = value
}

/** 初始化 */
const initTheme = () => {
  // watchEffect 来收集副作用
  watchEffect(() => {
    const value = activeThemeName.value
    setHtmlRootClassName(value)
    setActiveThemeName(value)
  })
}

/** 主题 hook */
export function useTheme() {
  return { themeList, activeThemeName, initTheme, setTheme }
}
