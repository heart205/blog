# Git

## 修改当前项目的用户名和邮箱

修改用户名:

```shell
git config  user.name <heart>
```

修改邮箱:

```shell
git config  --global user.email <heart@163.com>
```

## 修改全局用户名和邮箱

全局修改用户名:

> heart 为用户名 可以任意填写

```shell
git config  --global user.name <heart>
```

全局修改邮箱:

```shell
git config  --global user.email <heart@163.com>
```

## .gitconfig

修改.gitconfig 文件中的内容也可以修改用户名和邮箱

```shell
vi ~/.gitconfig

// 之后直接修改即可
```

## 查看本地仓库的属性

```shell
git config --local --list
```

## 分支操作

新建分支

```shell
git branch <分支名>
```

查看本地分支

```shell
git branch
```

查看所有的分支 红色的为远程分支 绿色的为本地分支

```shell
git branch -a
```

查看本地远程的对应分支

```shell
git branch -vv
```

删除本地分支

```shell
git branch - d <分支名>
```

创建本地分支与远程分支关联

> 远程分支一定要存在 否则会失败

```shell
git checkout -b <本地分支名> origin/<远程分支名>
```

将已有的本地分支与远程分支创建关联

```shell
git branch --set-upstream-to origin/<远程分支名>  <本地分支名>
```

### 远程分支

查看远程分支

```shell
git branch -r
```

查看远程分支地址

```shell
git remote -v
```

设置新的远程路径

```shell
git remote set-url origin git@xxx.git
```

拉取远程分支

> main 为远程分支名字

```shell
git fetch origin <main>
```

添加远程分支

> master 为分支名 url 为远程分支地址

```shell
git remote add <master> <url>
```

删除远程分支

```shell
git remote rm <master>
```
