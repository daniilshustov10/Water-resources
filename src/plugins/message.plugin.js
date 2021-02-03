export default {
    install(Vue) {
        Vue.prototype.$message = (html) => {
            M.toast({html})
        }
    }
}