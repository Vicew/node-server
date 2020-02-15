const getList = (author, keyword) => {
  return [
    {
      id: 1,
      title: '标题A'
    },
    {
      id: 2,
      title: '标题B'
    }
  ]
}

const getDetail = (id) => {
  return [
    {
      id: 1,
      title: '标题A'
    },
    {
      id: 2,
      title: '标题B'
    }
  ]
}

const newBlog = (blogData = {}) => {
  return {
    id: 1
  }
}

const updateBlog = (id, blogData = {}) => {
  // id 为更新博客的id
  // blogData 是一个博客对象， 包含 title content 属性
  return true
}

const delBlog = (id) => {
  // id 为删除博客的id
  return true
}

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog
}