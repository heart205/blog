## Mac vscode 打开文件或文件夹的快速操作

1. 首先启动应用程序 自动操作(Automator)

2. 运行 shell 脚本 拖到工作流窗口

3. 填写 shell 脚本

   ```shell
   for f in "$@"
   do
   	echo "$f"
   	cd "$f"		# 切到文件目录
   	# 可以用which vscode 查看路径
   	/usr/local/bin/code .	# vscode应用的命令行就是code
   done
   ```

4. 保存并命名即可完成一个快捷操作
