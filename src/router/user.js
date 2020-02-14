const handleUserRouter = (req,res) => {
  const method = req.methd // GET POST

  // 登陆
  if(method === 'POST' && req.path === '/api/blog/login') {
    return {
      msg: '这里是登陆的接口'
    }
  }

}

module.exports = handleUserRouter