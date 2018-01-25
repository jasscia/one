# [one] Client

> [one] Client writen with Vue2.5 <br>

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
## DATA SOURCE(数据资源)
The data in this client comes from [one API](https://github.com/jokermonn/-Api/blob/master/ONE~v3.5.0.md)
## DESCRIPTION(功能介绍)
- This client is made of three parts,they are "READING","MOVIE" and "MUSIC".
- "READING" is finished well,but the other two is not,beacuse I didn't get enougth data source to finish them.
- 模拟one 显示其阅读、电影、音乐三个板块的内容,其中阅读板块内容和功能比较完整,包含了视听资源,其他两个板块由于API接口返回的信息不够，未能实现全部功能<br>
## HOW IT LOOKS LIKE(页面展示)
#### INDEX(首页)
- Index page is the Entrance of this client(客户端首页).
>>>>>>>>>![](https://github.com/jasscia/one/raw/master/shortCut/index.png)
#### READING LIST（阅读列表
- You will see this page if you click "READING" part of 'INDEX' page,and this page will show you all avaliable articals,you are allowed to click any one  for more details.
- 进入阅读列表页面，点击任何文章，查看详情
>>>>>>>>>![](https://github.com/jasscia/one/raw/master/shortCut/reading.png)
- And also,you could click the HEADER of this page to slip to other part.
- 另外 也可以点击头部 切换到其他版块。
>>>>>>>>>![](https://github.com/jasscia/one/raw/master/shortCut/reading2.png)
#### ARTICLE DETAILS（阅读详情）
- This page shows details of an article,contains "article content","author infomation","recommend reading","comment list" and "audio player"
- 本页显示一篇文章的细节，包含“文章内容”、“作者信息”、“推荐阅读”、“评论列表”和“音频播放器”
>>>>>>>>>![](https://github.com/jasscia/one/raw/master/shortCut/reading-detail.png)
- Click the color thing or the part in border to play the audio<br/>
- 单击彩色按钮或边框内容 ，开始播放音频
>>>>>>>>>![](https://github.com/jasscia/one/raw/master/shortCut/reading-detail2.png)
#### MUSIC LIST（音乐列表）
>>>>>>>>>![](https://github.com/jasscia/one/raw/master/shortCut/music.png)
#### MUSIC DETAILS（音乐详情）
>>>>>>>>>![](https://github.com/jasscia/one/raw/master/shortCut/music-detail1.png)
>>>>>>>>>![](https://github.com/jasscia/one/raw/master/shortCut/music-detail2.png)
#### MOVIE LIST（电影列表）
>>>>>>>>>![](https://github.com/jasscia/one/raw/master/shortCut/movie.png)
#### MOVIE DETAILS（电影详情）
>>>>>>>>>![](https://github.com/jasscia/one/raw/master/shortCut/movie-detail.png)
