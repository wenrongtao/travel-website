export default {
  handleUserName: (state, user_name,user_pass) => {
    state.user_name = user_name
    state.user_pass = user_pass
        // 把登录的用户的名保存到localStorage中，防止页面刷新，导致vuex重新启动，用户名就成为初始值（初始值为空）的情况
    localStorage.setItem('user_name', user_name)
    localStorage.setItem('user_pass', user_pass)
}
}
