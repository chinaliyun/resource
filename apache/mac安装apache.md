到http官网下载httpd.tar.gz文件，解压到有写入权限的目录中，本文是解压在/opt/目录下`/opt/httpd-2.4.27/`;

```
cd /opt/httpd-2.4.27
./configure

checking for chosen layout... Apache
checking for working mkdir -p... yes
checking for grep that handles long lines and -e... /usr/bin/grep
checking for egrep... /usr/bin/grep -E
checking build system type... x86_64-apple-darwin16.3.0
checking host system type... x86_64-apple-darwin16.3.0
checking target system type... x86_64-apple-darwin16.3.0
configure: 
configure: Configuring Apache Portable Runtime library...
configure: 
checking for APR... no
configure: error: APR not found.  Please read the documentation.
```
这个时候提示说APR模块未找到，看了下网上的教程，有人推荐用brew直接安装；我看了一下httpd的官网决定源码安装；在httpd官网找到apr-1.6.2和apr-util-1.6.0的源码，下载源码后，执行下面操作：

```
cd /opt/httpd-2.4.7/srclib

```
把apr和apr-util分别解压到这个目录下，千万记得解压后的文件夹名不要加版本号，也就是说最终文件夹名称应该是`apr`和`apr-util`;

```
./configure  --prefix dir
在检查一系列依赖之后会输出下面内容：

Server Version: 2.4.27
    Install prefix: /usr/local/apache2
    C compiler:     gcc
    CFLAGS:          -g -O2
    LDFLAGS:         
    LIBS:           
    CPPFLAGS:        -DDARWIN -DSIGPROCMASK_SETS_THREAD_MASK -DDARWIN_10
    C preprocessor: gcc -E
```
--prefix 选项可以指定安装目录， 未配置的时候，应该是安装的/usr/local目录下，如果提示目录不可访问，需要使用`sudo `命令来安装
```
make 	// 编译基本配置信息

make install  // 完整安装， 如过提示
```
当命令行停止输出，基本上就安装完成了， 此时就可以进入安装目录来启动了

```
cd /opt/apache2/bin

./apachectl -k start

liyun@liyun:/opt/apache2 $ ./bin/apachectl -k start -f /opt/apache2/conf/httpd.conf
AH00557: httpd: apr_sockaddr_info_get() failed for liyun.local
AH00558: httpd: Could not reliably determine the server's fully qualified domain name, using 127.0.0.1. Set the 'ServerName' directive globally to suppress this message
(13)Permission denied: AH00072: make_sock: could not bind to address [::]:80
(13)Permission denied: AH00072: make_sock: could not bind to address 0.0.0.0:80
no listening sockets available, shutting down
AH00015: Unable to open logs
```
AH00557: 这里的报错意思是默认的访问域名不可用，此时配置文件中的serverName值，默认的值是：example.com之类的，而在在/etc/host文件中没有配置对应的ip所导致的错误；只需要在etc/host中添加对应的映射，或者修改配置文件中serverName值为 127.0.0.1即可

Permission denied:这个错误的意思是apache默认的80端口可能被占用；kill掉占用80端口的程序，或者修改apache的监听端口号就可以了；
apache默认端口号在`/opt/apache2/conf/httpd.conf`中的`Listen`字段中



安装PHP
-
到http://www.php.net/downloads.php这里下载PHP源码,我这里下载的是php-7.1.9版本
```
cd
tar -zxvf php-7.1.9
mv ~/Download/php-7.1.9 /opt/php-7.1.9
./configure --prefix /opt/php
make
make install
```
修改Apache配置

在修改配置之前千万不要忘记备份原来的配置文件，否则以后都没法回复
```
cp /opt/apache2/conf/httpd.conf /opt/apache2/conf/httpd.conf.back
vi /opt/apache2/conf/httpd.conf
```
配置文件中有一个需要修改的地方：
```
ServerRoot： apache的安装路径，这个千万不能出错
Listen：     apache监听的端口号，上面的步骤中我已经把端口号改成8080了；
ServerAdmin： 管理员邮箱，这几随便改了，改不改都行
ServerName：  这个前面已经说过了，其实就是访问地址，他默认的是不能访问的，修改成localhost或者127.0.0.1即可
DocumentRoot： 网站根目录，这个就可以自己设置了，但是它的值要和下面的<Directory>保持一致，否则是访问不了的
```
这个时候，在DocumentRoot目录中创建一个html，一个php文件，先试试，我的目录是/opt/www
ule>
```
```
cd /opt
mkdir www
vi index.html
hello world

vi index.php
<?php
echo phpinfo()
?>
```
httpd.conf先做如下设置：
```
<IfModule dir_module>
    DirectoryIndex index.php index.html
</IfModule>
```
这个的意思是当让问一个目录的时候，按照我们设置的顺序，自动去索引这几个文件来显示，目前我设置的是优先显示`index.php`文件
此时我们访问localhost/index.html，发现已经可以看到“helloworld”的文字了，但是访问index.php文件却显示的是`echo phpinfo()`的字符串，并没有按php脚本来执行

没找到php.ini文件
-
在php安装包里面可以找到php.ini-development文件，复制到php安装目录下即可

没找到/opt/apache2/modules/libphp5.so文件
-
这个文件是在安装php5的时候解压到apache目录中的，因此在安装php的时候，需要以下配置
```
./configure --prefix /opt/php/php-5.6.13 --with-apxs2=/opt/apache/bin/apxs
```
接着我们来添加apache对php的支持
    