# nest

## typeorm 的使用

- [中文文档](https://typeorm.biunav.com/zh/find-options.html#%E8%BF%9B%E9%98%B6%E9%80%89%E9%A1%B9)

  > 查询所有

```ts
const d = await this.jueEntity.find({ where: { id } });
```

> 查询单条记录

```ts
const d = await this.jueEntity.findOne({ where: { id } });
```

> 保存记录

```ts
const d = await this.jueEntity.save({ aid, uuid, cookies });
```

> 删除记录

```ts
const d = await this.jueEntity.remove({ id });
```

## pm2 启动 nest 项目

1. 将项目进行 npm run build 打包
2. 之后将 dist 和根目录下的 package.json 丢到服务器的文件夹上
3. 进入目录进行 npm install
4. 运行在 pm2 上

```bash
pm2 start npm --name <name> -- run start:prod
```

相当于运行了

```bash
pm2 start npm auto_sign -- run node dist/main.js
```

### pm2 的一些基本命令

```bash
$ npm install pm2 -g     # 命令行安装 pm2
$ pm2 start app.js -i 4  # 后台运行pm2，启动4个app.js
                         # 也可以把'max' 参数传递给 start
                         # 正确的进程数目依赖于Cpu的核心数目
$ pm2 start app.js --name my-api # 命名进程
$ pm2 list               # 显示所有进程状态
$ pm2 monit              # 监视所有进程
$ pm2 logs               # 显示所有进程日志
$ pm2 stop all           # 停止所有进程
$ pm2 restart all        # 重启所有进程
$ pm2 reload all         # 0 秒停机重载进程 (用于 NETWORKED 进程)
$ pm2 stop 0             # 停止指定的进程
$ pm2 restart 0          # 重启指定的进程
$ pm2 startup            # 产生 init 脚本 保持进程活着
$ pm2 web                # 运行健壮的 computer API endpoint
$ pm2 delete 0           # 杀死指定的进程
$ pm2 delete all         # 杀死全部进程

```
