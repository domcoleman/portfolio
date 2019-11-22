import Vue, { VueConstructor } from 'vue'

interface Runtime {
  vm?: Vue
}

const runtime: Runtime = {}

export function getRuntimeVM(): Vue {
  if (runtime.vm) return runtime.vm
  throw new ReferenceError('[vue-runtime] No vue instance found. Make sure plugin has been installed.')
}

export function setRuntimeVM(this: Vue, vue?: Vue) {
  const vm = this || vue
  if (typeof vm.$options.setup === 'function') {
    runtime.vm = vm
  }
}

export default function install(Vue: VueConstructor) {
  Vue.mixin({ beforeCreate: setRuntimeVM })
}
