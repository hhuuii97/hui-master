const { override, addLessLoader, fixBabelImports } = require('customize-cra')

module.exports = override(
  // 支持less
  addLessLoader(),

  // antd 的按需引入
  fixBabelImports('import', {
    libraryName: 'antd',
    style: 'css'
  })
)
