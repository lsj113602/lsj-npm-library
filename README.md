# lsj-fe 数据前端业务组件库

## 容器介绍

基于 lerna 和 yarn workspace 实现的 monorepo 多项目统一管理方案，由外层容器提供 eslint、typescript、unit test 等基础能力，使用 learn 进行发布和版本管理。

## 组件库介绍

该项目用于构建 [react](https://reactjs.org/) 组件库，基于 [typescript](https://www.typescriptlang.org/) 和 [less](https://less.bootcss.com/) 开发，使用 [rollup](https://github.com/rollup/rollup) 打包。
同时使用 [storybook](https://storybook.js.org/) 调试和生成组件使用文档。

## 常用命令:

全局安装依赖
pnpm install eslint typescript --save-dev -w （-w 是 pnpm 的参数，表示依赖安装到根目录）

安装到指定子包
pnpm install lodash -r --filter @packages/shared

lerna run test # 运行所有包的 test 命令
lerna run --scope my-component test # 运行 my-component 模块下的 test
lerna run --parallel watch # 观看所有包并在更改时发报，流式处理前缀输出

## 私仓包开发

1. 创建子包
   这里我们创建两个子包 @map/core 和 @map/utils，可以自己手动创建，和初始化一个普通的项目是一样的，也可以通过 lerna 命令创建，这里我们通过 lerna 命令创建，如下：
   lerna create @map/core
   lerna create @map/utils
2. 包引用
   正常例如 @map/utils 引用 @map/core 的话，要么使用相对路径，要么需要将@map/core 先发包，通过 lerna 我们可以在本地就可以直接对 @map/utils 进行引用
   learn 命令如下：
   lerna add @map/core packages/utils //第一种方式
   lerna add @map/core --scope=@map/utils //第二种方式

learn 5 版本以后，如果使用 pnpm，lerna add 就无法使用，这里我们可以使用 pnpm 命令来代替，另外 pnpm 支持别名，如下命令：

pnpm add @map/core --filter @map/util

## lerna 一个 monorepo 工具库，用于高效便捷的管理多个包的构建发布,用于管理具有多个包的 JavaScript 项目的工具

官网地址：https://lerna.js.org/

核心命令:

1.lerna init #初始化项目

2.lerna create core #添加新项目

3.lerna add xxx || pnpm install --save-dev -w #添加依赖

4.lerna link #packages 项目依赖

5.lerna exec #执行 linux 命令

6.lerna run #执行 npm 命令

7.lerna clean #清空依赖

8.lerna bootstrap #重装依赖

9.lerna version #管理版本号

10.lerna changed #查看变更

11.lerna diff #查看 diff

12.lerna publish #发布项目

## 私仓部署核心命令:

npm adduser —registry http://localhost:4873
npm login —registry http://localhost:4873
npm whoami（身份验证） npm logout（退出）
npm unpublish arcgis-rollup —force
pnpm install @gis/utils -D
pnpm confit set registry 地址
nrm add local http://localhost:4873
nrm use local
下载配置.npmrc 发布配置 package.json (.npmrc 优先)

pnpm i xxx —filter @gis/core
lerna add @gis/core packages/utils/
pnpm add @gis/core --filter @gis/utils
pnpm add lodash -r/-w 为每个项目或全局添加依赖
pnpm run build —-filter @gis/utils
lerna run test --scope=@gis/core // 执行 test， lerna run test： 执行所有的 test
lerna publish from-package 初次发版
lerna changed 发版前校验需要更改的包
