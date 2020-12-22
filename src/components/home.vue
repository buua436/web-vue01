<template>
  <div id="home">
    <div id="direct">
      <div id="direct1">
        <ul style="padding-inline-start: 0px">
          <li
            class="directli"
            @mouseover="showdirect(0)"
            @mouseleave="noshowdirect"
          >
            <span
              ><router-link class="directlink" to="/"
                >特色书单</router-link
              ></span
            >
          </li>
          <li
            class="directli"
            @mouseover="showdirect(1)"
            @mouseleave="noshowdirect"
          >
            <span
              ><router-link class="directlink" to="/">电子书</router-link></span
            >
          </li>
          <li
            class="directli"
            @mouseover="showdirect(2)"
            @mouseleave="noshowdirect"
          >
            <span
              ><router-link class="directlink" to="/">教育</router-link></span
            >
          </li>
          <li
            class="directli"
            @mouseover="showdirect(3)"
            @mouseleave="noshowdirect"
          >
            <span
              ><router-link class="directlink" to="/">小说</router-link></span
            >
          </li>
          <li
            class="directli"
            @mouseover="showdirect(4)"
            @mouseleave="noshowdirect"
          >
            <span
              ><router-link class="directlink" to="/">文艺</router-link></span
            >
          </li>
          <li
            class="directli"
            @mouseover="showdirect(5)"
            @mouseleave="noshowdirect"
          >
            <span
              ><router-link class="directlink" to="/"
                >青春文学/动漫· 幽默</router-link
              ></span
            >
          </li>
          <li
            class="directli"
            @mouseover="showdirect(6)"
            @mouseleave="noshowdirect"
          >
            <span
              ><router-link class="directlink" to="/">童书</router-link></span
            >
          </li>
          <li
            class="directli"
            @mouseover="showdirect(7)"
            @mouseleave="noshowdirect"
          >
            <span
              ><router-link class="directlink" to="/"
                >人文社科</router-link
              ></span
            >
          </li>
          <li
            class="directli"
            @mouseover="showdirect(8)"
            @mouseleave="noshowdirect"
          >
            <span
              ><router-link class="directlink" to="/">经管</router-link></span
            >
          </li>
          <li
            class="directli"
            @mouseover="showdirect(9)"
            @mouseleave="noshowdirect"
          >
            <span
              ><router-link class="directlink" to="/"
                >成功/励志</router-link
              ></span
            >
          </li>
          <li
            class="directli"
            @mouseover="showdirect(10)"
            @mouseleave="noshowdirect"
          >
            <span
              ><router-link class="directlink" to="/">生活</router-link></span
            >
          </li>
          <li
            class="directli"
            @mouseover="showdirect(11)"
            @mouseleave="noshowdirect"
          >
            <span
              ><router-link class="directlink" to="/">科技</router-link></span
            >
          </li>
          <li
            class="directli"
            @mouseover="showdirect(12)"
            @mouseleave="noshowdirect"
          >
            <span
              ><router-link class="directlink" to="/"
                >英文原版书 港台图书</router-link
              ></span
            >
          </li>
          <li
            class="directli"
            @mouseover="showdirect(13)"
            @mouseleave="noshowdirect"
          >
            <span
              ><router-link class="directlink" to="/"
                >期刊/音像</router-link
              ></span
            >
          </li>
        </ul>
      </div>
      <div
        id="redirect"
        v-show="isshow"
        @mouseover="showdirect1"
        @mouseleave="noshowdirect"
      >
        <div v-show="showwhichdirect === 0" class="redirectdiv">
          <li class="redirectli">
            童书:
            <router-link to="/" class="redirectlink"
              >凯迪克奖获奖作品</router-link
            >|
            <router-link to="/" class="redirectlink"
              >纽伯瑞奖获奖作品</router-link
            >|
            <router-link to="/" class="redirectlink">高铁的秘密</router-link>|
            <router-link to="/" class="redirectlink"
              >读专“鼠”于你的好绘本</router-link
            >|
            <router-link to="/" class="redirectlink"
              >好想去这样那样的国家</router-link
            >
          </li>
          <li class="redirectli">
            文艺:
            <router-link to="/" class="redirectlink"
              >奥斯卡：原著比电影更精彩</router-link
            >|
            <router-link to="/" class="redirectlink"
              >人民日报2020推荐书单</router-link
            >|
            <router-link to="/" class="redirectlink">易烊千玺荐书</router-link>|
            <router-link to="/" class="redirectlink"
              >洞察人性！东野圭吾新书</router-link
            >
          </li>
          <li class="redirectli">
            社科:
            <router-link to="/" class="redirectlink"
              >历史类人气品牌 “甲骨文丛书”书单</router-link
            >|
            <router-link to="/" class="redirectlink"
              >历史类精品“汗青堂丛书”书单</router-link
            >|
            <router-link to="/" class="redirectlink"
              >译文纪实系列书单</router-link
            >|
            <router-link to="/" class="redirectlink"
              >中信“新思文库”品牌书单</router-link
            >|
            <router-link to="/" class="redirectlink"
              >汉译世界学术名著丛书（精装典藏版）</router-link
            >
          </li>
          <li class="redirectli">
            经管励志:
            <router-link to="/" class="redirectlink"
              >读懂2020中国经济书单</router-link
            >|
            <router-link to="/" class="redirectlink"
              >比尔·盖茨推荐今夏必读5本书</router-link
            >|
            <router-link to="/" class="redirectlink"
              >抓住股市投资机会</router-link
            >|
            <router-link to="/" class="redirectlink"
              >瞬间提高个人修养的10部经典</router-link
            >|
            <router-link to="/" class="redirectlink"
              >月薪不足3W你要读的书</router-link
            >
          </li>
          <li class="redirectli">
            生活:
            <router-link to="/" class="redirectlink"
              >有一种绝望，叫陪孩子写作业</router-link
            >|
            <router-link to="/" class="redirectlink"
              >Lonely Planet2020世界旅行目的地榜单</router-link
            >|
            <router-link to="/" class="redirectlink"
              >幼小衔接，孩子要上一年级，妈妈如何不焦虑？</router-link
            >|
            <router-link to="/" class="redirectlink"
              >樊登推荐书单：家庭教育的秘密</router-link
            >|
            <router-link to="/" class="redirectlink"
              >中国家长难以启齿的儿童性教育</router-link
            >
          </li>
          <li class="redirectli">
            科技:
            <router-link to="/" class="redirectlink"
              >2020学习代码必读书单</router-link
            >|
            <router-link to="/" class="redirectlink"
              >诺贝尔&普利策奖作者科普书单</router-link
            >|
            <router-link to="/" class="redirectlink"
              >斯蒂芬·霍金图书全集</router-link
            >|
            <router-link to="/" class="redirectlink"
              >"爱因斯坦-上帝是不掷骰子的”--量子物理学推荐书单</router-link
            >
          </li>
          <li class="redirectli">
            教育:
            <router-link to="/" class="redirectlink"
              >精明家长给孩子选好书</router-link
            >|
            <router-link to="/" class="redirectlink">一年级书单</router-link>|
            <router-link to="/" class="redirectlink">二年级书单</router-link>|
            <router-link to="/" class="redirectlink">三年级书单</router-link>|
            <router-link to="/" class="redirectlink"
              >告诉你写好作文的秘密</router-link
            >|
            <router-link to="/" class="redirectlink"
              >老师不会教的学习方法</router-link
            >|
            <router-link to="/" class="redirectlink"
              >适合背诵的国学启蒙书</router-link
            >
          </li>
        </div>
        <div v-show="showwhichdirect === 1" class="redirectdiv">
          <li class="redirectli">
            特价:
            <router-link to="/" class="redirectlink">当读VIP</router-link>|
            <router-link to="/" class="redirectlink">免费书</router-link>|
            <router-link to="/" class="redirectlink">特价书</router-link>|
            <router-link to="/" class="redirectlink">限时抢</router-link>|
            <router-link to="/" class="redirectlink">当当阅读器</router-link>
          </li>
          <li class="redirectli">
            网络文学:
            <router-link to="/" class="redirectlink">男频</router-link>|
            <router-link to="/" class="redirectlink">女频</router-link>|
            <router-link to="/" class="redirectlink">玄幻奇幻</router-link>|
            <router-link to="/" class="redirectlink">现代都市</router-link>|
            <router-link to="/" class="redirectlink">武侠仙侠</router-link>|
            <router-link to="/" class="redirectlink">现代言情</router-link>|
            <router-link to="/" class="redirectlink">穿越重生</router-link>|
            <router-link to="/" class="redirectlink">古装言情</router-link>
          </li>
          <li class="redirectli">
            小说:
            <router-link to="/" class="redirectlink">侦探/悬疑/推理</router-link
            >| <router-link to="/" class="redirectlink">玄幻/惊悚</router-link>|
            <router-link to="/" class="redirectlink">影视/娱乐</router-link>|
            <router-link to="/" class="redirectlink">爱情/情感</router-link>|
            <router-link to="/" class="redirectlink">武侠小说</router-link>|
            <router-link to="/" class="redirectlink">外国小说</router-link>
          </li>
          <li class="redirectli">
            文艺: <router-link to="/" class="redirectlink">传记</router-link>|
            <router-link to="/" class="redirectlink">随笔</router-link>|
            <router-link to="/" class="redirectlink">文学作品集</router-link>|
            <router-link to="/" class="redirectlink">纪实文学</router-link>|
            <router-link to="/" class="redirectlink">艺术</router-link>|
            <router-link to="/" class="redirectlink">摄影</router-link>|
            <router-link to="/" class="redirectlink"
              >文学评论与鉴赏</router-link
            >
          </li>
          <li class="redirectli">
            经管:
            <router-link to="/" class="redirectlink">成功/励志</router-link>|
            <router-link to="/" class="redirectlink">管理</router-link>|
            <router-link to="/" class="redirectlink">投资理财</router-link>|
            <router-link to="/" class="redirectlink">经济</router-link>
          </li>
          <li class="redirectli">
            科技: <router-link to="/" class="redirectlink">历史</router-link>|
            <router-link to="/" class="redirectlink">心理学</router-link>|
            <router-link to="/" class="redirectlink">哲学</router-link>|
            <router-link to="/" class="redirectlink">政治/军事</router-link>|
            <router-link to="/" class="redirectlink">社会科学</router-link>|
            <router-link to="/" class="redirectlink">古籍</router-link>|
            <router-link to="/" class="redirectlink">法律</router-link>
          </li>
          <li class="redirectli">
            生活:
            <router-link to="/" class="redirectlink">亲子/家教</router-link>|
            <router-link to="/" class="redirectlink">育儿/早教</router-link>|
            <router-link to="/" class="redirectlink">两性关系</router-link>|
            <router-link to="/" class="redirectlink">孕产/胎教</router-link>|
            <router-link to="/" class="redirectlink">保健/养生</router-link>|
            <router-link to="/" class="redirectlink">旅游/地图</router-link>|
            <router-link to="/" class="redirectlink">烹饪/美食</router-link>|
            <router-link to="/" class="redirectlink">时尚/美妆</router-link>|
            <router-link to="/" class="redirectlink">手工/DIY</router-link>|
            <router-link to="/" class="redirectlink">家庭/家居</router-link>
          </li>
          <li class="redirectli">
            教育/科技:
            <router-link to="/" class="redirectlink">考试</router-link>|
            <router-link to="/" class="redirectlink">外语</router-link>|
            <router-link to="/" class="redirectlink">中小学教辅</router-link>|
            <router-link to="/" class="redirectlink">工具书</router-link>|
            <router-link to="/" class="redirectlink">科普读物</router-link>|
            <router-link to="/" class="redirectlink">计算机/网络</router-link>|
            <router-link to="/" class="redirectlink">自然科学</router-link>
          </li>
          <li class="redirectli">
            童书/进口书:
            <router-link to="/" class="redirectlink">儿童文学</router-link>|
            <router-link to="/" class="redirectlink">启蒙读物</router-link>|
            <router-link to="/" class="redirectlink">成长/益智</router-link>|
            <router-link to="/" class="redirectlink">动漫/图画书</router-link>|
            <router-link to="/" class="redirectlink">外文原版书</router-link>|
            <router-link to="/" class="redirectlink">港台图书</router-link>
          </li>
        </div>
        <div v-show="showwhichdirect === 2" class="redirectdiv">
          <li class="redirectli">
            教材:
            <router-link to="/" class="redirectlink"
              >研究生/本科/专科教材</router-link
            >|
            <router-link to="/" class="redirectlink">高职高专教材</router-link>|
            <router-link to="/" class="redirectlink">中职教材</router-link>|
            <router-link to="/" class="redirectlink">成人教育教材</router-link>|
            <router-link to="/" class="redirectlink"
              >职业技术培训教材</router-link
            >| <router-link to="/" class="redirectlink">公共课</router-link>|
            <router-link to="/" class="redirectlink">经济管理类</router-link>|
            <router-link to="/" class="redirectlink">工学类</router-link>|
            <router-link to="/" class="redirectlink">文法类</router-link>|
            <router-link to="/" class="redirectlink">医学类</router-link>|
            <router-link to="/" class="redirectlink">理学类</router-link>|
            <router-link to="/" class="redirectlink">农学</router-link>|
            <router-link to="/" class="redirectlink">更多</router-link>
          </li>
          <li class="redirectli">
            外语:
            <router-link to="/" class="redirectlink">英语综合教程</router-link>|
            <router-link to="/" class="redirectlink">英语专项训练</router-link>|
            <router-link to="/" class="redirectlink">英语读物</router-link>|
            <router-link to="/" class="redirectlink">英语考试</router-link>|
            <router-link to="/" class="redirectlink">英语工具书</router-link>|
            <router-link to="/" class="redirectlink">小语种</router-link>|
            <router-link to="/" class="redirectlink">新概念</router-link>|
            <router-link to="/" class="redirectlink">口语</router-link>|
            <router-link to="/" class="redirectlink">听力</router-link>|
            <router-link to="/" class="redirectlink">英文版读物</router-link>|
            <router-link to="/" class="redirectlink">IELTS</router-link>|
            <router-link to="/" class="redirectlink">TOEFL</router-link>|
            <router-link to="/" class="redirectlink">GRE</router-link>|
            <router-link to="/" class="redirectlink">GMAT</router-link>|
            <router-link to="/" class="redirectlink">SAT</router-link>|
            <router-link to="/" class="redirectlink">TOEIC</router-link>|
            <router-link to="/" class="redirectlink">BEC</router-link>|
            <router-link to="/" class="redirectlink">翻译资格</router-link>|
            <router-link to="/" class="redirectlink">职称英语</router-link>|
            <router-link to="/" class="redirectlink">CET-4</router-link>|
            <router-link to="/" class="redirectlink">CET-6</router-link>|
            <router-link to="/" class="redirectlink">专四/八</router-link>|
            <router-link to="/" class="redirectlink">日语</router-link>|
            <router-link to="/" class="redirectlink">法语</router-link>|
            <router-link to="/" class="redirectlink">韩语</router-link>|
            <router-link to="/" class="redirectlink">对外汉语</router-link>|
            <router-link to="/" class="redirectlink">更多</router-link>
          </li>
          <li class="redirectli">
            考试:
            <router-link to="/" class="redirectlink">学历考试</router-link>|
            <router-link to="/" class="redirectlink">公职</router-link>|
            <router-link to="/" class="redirectlink">财税外贸保险</router-link>|
            <router-link to="/" class="redirectlink">建筑工程</router-link>|
            <router-link to="/" class="redirectlink">计算机</router-link>|
            <router-link to="/" class="redirectlink">医药卫生</router-link>|
            <router-link to="/" class="redirectlink">艺术/体育</router-link>|
            <router-link to="/" class="redirectlink">考研</router-link>|
            <router-link to="/" class="redirectlink">MBA/MPA/MPAcc</router-link
            >| <router-link to="/" class="redirectlink">公务员</router-link>|
            <router-link to="/" class="redirectlink">事业单位</router-link>|
            <router-link to="/" class="redirectlink">注册会计师</router-link>|
            <router-link to="/" class="redirectlink">会计职称</router-link>|
            <router-link to="/" class="redirectlink">会计从业</router-link>|
            <router-link to="/" class="redirectlink">一级建造师</router-link>|
            <router-link to="/" class="redirectlink">二级建造师</router-link>|
            <router-link to="/" class="redirectlink">卫生职称</router-link>|
            <router-link to="/" class="redirectlink">医师资格</router-link>|
            <router-link to="/" class="redirectlink">人力资源管理师</router-link
            >|
            <router-link to="/" class="redirectlink">更多</router-link>
          </li>
          <li class="redirectli">
            中小学教辅:
            <router-link to="/" class="redirectlink">幼小衔接</router-link>|
            <router-link to="/" class="redirectlink">一年级</router-link>|
            <router-link to="/" class="redirectlink">二年级</router-link>|
            <router-link to="/" class="redirectlink">三年级</router-link>|
            <router-link to="/" class="redirectlink">高一</router-link>|
            <router-link to="/" class="redirectlink">高二</router-link>|
            <router-link to="/" class="redirectlink">高三</router-link>|
            <router-link to="/" class="redirectlink">高考</router-link>|
            <router-link to="/" class="redirectlink">高中通用</router-link>|
            <router-link to="/" class="redirectlink">中小学阅读</router-link>|
            <router-link to="/" class="redirectlink">英语专项</router-link>|
            <router-link to="/" class="redirectlink">语文作文</router-link>|
            <router-link to="/" class="redirectlink">工具书</router-link>|
            <router-link to="/" class="redirectlink">写字/字帖</router-link>|
            <router-link to="/" class="redirectlink">学习方法</router-link>|
            <router-link to="/" class="redirectlink"
              >教育理论/教师用书</router-link
            >|
            <router-link to="/" class="redirectlink">更多</router-link>
          </li>
          <li class="redirectli">
            工具书:
            <router-link to="/" class="redirectlink">汉语工具书</router-link>|
            <router-link to="/" class="redirectlink">英语工具书</router-link>|
            <router-link to="/" class="redirectlink">其他语种工具书</router-link
            >|
            <router-link to="/" class="redirectlink">百科全书/年鉴</router-link
            >| <router-link to="/" class="redirectlink">文学鉴赏</router-link>|
            <router-link to="/" class="redirectlink">辞典</router-link>|
            <router-link to="/" class="redirectlink">牛津系列</router-link>|
            <router-link to="/" class="redirectlink">朗文系列</router-link>|
            <router-link to="/" class="redirectlink">民族语工具书</router-link>|
            <router-link to="/" class="redirectlink"
              >英文原版书-工具书</router-link
            >
          </li>
        </div>
        <div v-show="showwhichdirect === 3" class="redirectdiv">
          <li class="redirectli">
            人气作家:
            <router-link to="/" class="redirectlink">东野圭吾</router-link>|
            <router-link to="/" class="redirectlink">村上春树</router-link>|
            <router-link to="/" class="redirectlink">麦家</router-link>|
            <router-link to="/" class="redirectlink">莫言</router-link>|
            <router-link to="/" class="redirectlink">张爱玲</router-link>|
            <router-link to="/" class="redirectlink">刘慈欣</router-link>|
            <router-link to="/" class="redirectlink">大冰</router-link>|
            <router-link to="/" class="redirectlink">张嘉佳</router-link>
          </li>
          <li class="redirectli">
            小说:
            <router-link to="/" class="redirectlink">中国当代小说</router-link>|
            <router-link to="/" class="redirectlink">中国近现代小说</router-link
            >|
            <router-link to="/" class="redirectlink">中国古典小说</router-link>|
            <router-link to="/" class="redirectlink">四大名著</router-link>|
            <router-link to="/" class="redirectlink">港澳台小说</router-link>|
            <router-link to="/" class="redirectlink">外国小说</router-link>|
            <router-link to="/" class="redirectlink">侦探/悬疑/推理</router-link
            >| <router-link to="/" class="redirectlink">惊悚/恐怖</router-link>|
            <router-link to="/" class="redirectlink">魔幻</router-link>|
            <router-link to="/" class="redirectlink">武侠</router-link>|
            <router-link to="/" class="redirectlink">军事</router-link>|
            <router-link to="/" class="redirectlink">情感</router-link>|
            <router-link to="/" class="redirectlink">社会</router-link>|
            <router-link to="/" class="redirectlink">都市</router-link>|
            <router-link to="/" class="redirectlink">乡土</router-link>|
            <router-link to="/" class="redirectlink">职场</router-link>|
            <router-link to="/" class="redirectlink">财经</router-link>|
            <router-link to="/" class="redirectlink">官场</router-link>|
            <router-link to="/" class="redirectlink">历史</router-link>|
            <router-link to="/" class="redirectlink">影视小说</router-link>|
            <router-link to="/" class="redirectlink">作品集</router-link>|
            <router-link to="/" class="redirectlink">世界名著</router-link>
          </li>
        </div>
        <div v-show="showwhichdirect === 4" class="redirectdiv">
          <li class="redirectli">
            人气作家:
            <router-link to="/" class="redirectlink">汪曾祺</router-link>|
            <router-link to="/" class="redirectlink">林清玄</router-link>|
            <router-link to="/" class="redirectlink">丰子恺</router-link>|
            <router-link to="/" class="redirectlink">季羡林</router-link>|
            <router-link to="/" class="redirectlink">戴建业</router-link>|
            <router-link to="/" class="redirectlink">诺贝尔文学奖</router-link>|
            <router-link to="/" class="redirectlink">余光中</router-link>
          </li>
          <li class="redirectli">
            文学: <router-link to="/" class="redirectlink">文集</router-link>|
            <router-link to="/" class="redirectlink">纪实文学</router-link>|
            <router-link to="/" class="redirectlink">文学理论</router-link>|
            <router-link to="/" class="redirectlink">中国古诗词</router-link>|
            <router-link to="/" class="redirectlink">中国现当代诗歌</router-link
            >| <router-link to="/" class="redirectlink">外国诗歌</router-link>|
            <router-link to="/" class="redirectlink">中国古代随笔</router-link>|
            <router-link to="/" class="redirectlink">中国现当代随笔</router-link
            >| <router-link to="/" class="redirectlink">外国随笔</router-link>|
            <router-link to="/" class="redirectlink">戏剧</router-link>|
            <router-link to="/" class="redirectlink">民间文学</router-link>|
            <router-link to="/" class="redirectlink">文学类考试</router-link>|
            <router-link to="/" class="redirectlink"
              >英文原版书-文学</router-link
            >| <router-link to="/" class="redirectlink">名家作品</router-link>|
            <router-link to="/" class="redirectlink"
              >文学评论与鉴赏</router-link
            >
          </li>
          <li class="redirectli">
            传记:
            <router-link to="/" class="redirectlink">财经人物</router-link>|
            <router-link to="/" class="redirectlink">历代帝王</router-link>|
            <router-link to="/" class="redirectlink">领袖首脑</router-link>|
            <router-link to="/" class="redirectlink">军事人物</router-link>|
            <router-link to="/" class="redirectlink">政治人物</router-link>|
            <router-link to="/" class="redirectlink">历史人物</router-link>|
            <router-link to="/" class="redirectlink">女性人物</router-link>|
            <router-link to="/" class="redirectlink">法律人物</router-link>|
            <router-link to="/" class="redirectlink">宗教人物</router-link>|
            <router-link to="/" class="redirectlink">哲学家</router-link>|
            <router-link to="/" class="redirectlink">人文/社会学家</router-link
            >| <router-link to="/" class="redirectlink">教育家</router-link>|
            <router-link to="/" class="redirectlink">语言文学学家</router-link>|
            <router-link to="/" class="redirectlink">文学家</router-link>|
            <router-link to="/" class="redirectlink">艺术家</router-link>|
            <router-link to="/" class="redirectlink">科学家</router-link>|
            <router-link to="/" class="redirectlink">国学大师</router-link>|
            <router-link to="/" class="redirectlink">影视明星</router-link>|
            <router-link to="/" class="redirectlink">体育明星</router-link>|
            <router-link to="/" class="redirectlink">人物合集</router-link>|
            <router-link to="/" class="redirectlink"
              >传记的研究与编写</router-link
            >|
            <router-link to="/" class="redirectlink">家族研究/谱系</router-link
            >| <router-link to="/" class="redirectlink">年谱</router-link>|
            <router-link to="/" class="redirectlink">自传</router-link>|
            <router-link to="/" class="redirectlink">画传</router-link>|
            <router-link to="/" class="redirectlink">学者</router-link>|
            <router-link to="/" class="redirectlink">其他</router-link>|
            <router-link to="/" class="redirectlink"
              >英文原版书-传记</router-link
            >|
            <router-link to="/" class="redirectlink">建筑设计师</router-link>
          </li>
          <li class="redirectli">
            艺术:
            <router-link to="/" class="redirectlink">艺术理论</router-link>|
            <router-link to="/" class="redirectlink"
              >世界各国艺术概况</router-link
            >| <router-link to="/" class="redirectlink">绘画</router-link>|
            <router-link to="/" class="redirectlink">书法/篆刻</router-link>|
            <router-link to="/" class="redirectlink">影视/媒体艺术</router-link
            >|
            <router-link to="/" class="redirectlink"
              >戏剧艺术/舞台艺术</router-link
            >| <router-link to="/" class="redirectlink">音乐</router-link>|
            <router-link to="/" class="redirectlink">舞蹈</router-link>|
            <router-link to="/" class="redirectlink">雕塑</router-link>|
            <router-link to="/" class="redirectlink">设计</router-link>|
            <router-link to="/" class="redirectlink">人体艺术</router-link>|
            <router-link to="/" class="redirectlink">工艺美术</router-link>|
            <router-link to="/" class="redirectlink">民间艺术</router-link>|
            <router-link to="/" class="redirectlink">建筑艺术</router-link>|
            <router-link to="/" class="redirectlink">艺术类考试</router-link>|
            <router-link to="/" class="redirectlink">收藏/鉴赏</router-link>|
            <router-link to="/" class="redirectlink">小人书/连环画</router-link
            >|
            <router-link to="/" class="redirectlink"
              >英文原版书-艺术</router-link
            >
          </li>
          <li class="redirectli">
            摄影:
            <router-link to="/" class="redirectlink">摄影理论</router-link>|
            <router-link to="/" class="redirectlink">摄影入门</router-link>|
            <router-link to="/" class="redirectlink">分类摄影</router-link>|
            <router-link to="/" class="redirectlink">摄影进阶</router-link>|
            <router-link to="/" class="redirectlink">摄影器材</router-link>|
            <router-link to="/" class="redirectlink">技法/教程</router-link>|
            <router-link to="/" class="redirectlink">后期处理</router-link>|
            <router-link to="/" class="redirectlink"
              >作品集/作品欣赏</router-link
            >|
            <router-link to="/" class="redirectlink"
              >英文原版书-摄影</router-link
            >
          </li>
        </div>
        <div v-show="showwhichdirect === 5" class="redirectdiv">
          <li class="redirectli">
            青春文学:
            <router-link to="/" class="redirectlink">校园</router-link>|
            <router-link to="/" class="redirectlink">爱情/情感</router-link>|
            <router-link to="/" class="redirectlink">叛逆/成长</router-link>|
            <router-link to="/" class="redirectlink">悬疑/惊悚</router-link>|
            <router-link to="/" class="redirectlink">娱乐/偶像</router-link>|
            <router-link to="/" class="redirectlink">爆笑/无厘头</router-link>|
            <router-link to="/" class="redirectlink"
              >玄幻/新武侠/魔幻/科幻</router-link
            >| <router-link to="/" class="redirectlink">大陆原创</router-link>|
            <router-link to="/" class="redirectlink">港台青春文学</router-link>|
            <router-link to="/" class="redirectlink">韩国青春文学</router-link>|
            <router-link to="/" class="redirectlink">穿越/重生/架空</router-link
            >|
            <router-link to="/" class="redirectlink"
              >其他国外青春文学</router-link
            >| <router-link to="/" class="redirectlink">影视写真</router-link>|
            <router-link to="/" class="redirectlink">古代言情</router-link>
          </li>
          <li class="redirectli">
            动漫/幽默:
            <router-link to="/" class="redirectlink">大陆漫画</router-link>|
            <router-link to="/" class="redirectlink">港台漫画</router-link>|
            <router-link to="/" class="redirectlink">日韩漫画</router-link>|
            <router-link to="/" class="redirectlink">欧美漫画</router-link>|
            <router-link to="/" class="redirectlink">其他国外漫画</router-link>|
            <router-link to="/" class="redirectlink">世界经典漫画集</router-link
            >|
            <router-link to="/" class="redirectlink"
              >小说/名著漫画版</router-link
            >| <router-link to="/" class="redirectlink">动漫学堂</router-link>|
            <router-link to="/" class="redirectlink">幽默/笑话集</router-link>|
            <router-link to="/" class="redirectlink">轻小说</router-link>|
            <router-link to="/" class="redirectlink">游戏同人作品</router-link>|
            <router-link to="/" class="redirectlink">画集</router-link>|
            <router-link to="/" class="redirectlink">动漫同人作品</router-link>
          </li>
        </div>
        <div v-show="showwhichdirect === 6" class="redirectdiv">
          <li class="redirectli">
            人气作家:
            <router-link to="/" class="redirectlink">曹文轩</router-link>|
            <router-link to="/" class="redirectlink">沈石溪</router-link>|
            <router-link to="/" class="redirectlink">郑渊洁</router-link>|
            <router-link to="/" class="redirectlink">杨红樱</router-link>|
            <router-link to="/" class="redirectlink">张嘉骅</router-link>|
            <router-link to="/" class="redirectlink">殷健灵</router-link>|
            <router-link to="/" class="redirectlink">宫西达也</router-link>|
            <router-link to="/" class="redirectlink">彭懿</router-link>
          </li>
          <li class="redirectli">
            按年龄段选书:
            <router-link to="/" class="redirectlink">0-2岁</router-link>|
            <router-link to="/" class="redirectlink">3-6岁</router-link>|
            <router-link to="/" class="redirectlink">7-10岁</router-link>|
            <router-link to="/" class="redirectlink">11-14岁</router-link>
          </li>
          <li class="redirectli">
            按内容选书:
            <router-link to="/" class="redirectlink">中国儿童文学</router-link>|
            <router-link to="/" class="redirectlink">外国儿童文学</router-link>|
            <router-link to="/" class="redirectlink">绘本</router-link>|
            <router-link to="/" class="redirectlink">科普/百科</router-link>|
            <router-link to="/" class="redirectlink">婴儿读物</router-link>|
            <router-link to="/" class="redirectlink">幼儿启蒙</router-link>|
            <router-link to="/" class="redirectlink">益智游戏</router-link>|
            <router-link to="/" class="redirectlink">玩具书</router-link>|
            <router-link to="/" class="redirectlink">动漫/卡通</router-link>|
            <router-link to="/" class="redirectlink">少儿英语</router-link>|
            <router-link to="/" class="redirectlink">励志/成长</router-link>|
            <router-link to="/" class="redirectlink">进口儿童书</router-link>|
            <router-link to="/" class="redirectlink">少儿期刊</router-link>|
            <router-link to="/" class="redirectlink">阅读工具书</router-link>|
            <router-link to="/" class="redirectlink">更多</router-link>
          </li>
        </div>
        <div v-show="showwhichdirect === 7" class="redirectdiv">
          <li class="redirectli">
            历史:
            <router-link to="/" class="redirectlink">历史普及读物</router-link>|
            <router-link to="/" class="redirectlink">中国史</router-link>|
            <router-link to="/" class="redirectlink">世界史</router-link>|
            <router-link to="/" class="redirectlink">史家名著</router-link>|
            <router-link to="/" class="redirectlink">文物考古</router-link>|
            <router-link to="/" class="redirectlink">史学理论</router-link>|
            <router-link to="/" class="redirectlink">历史随笔</router-link>|
            <router-link to="/" class="redirectlink">史料典籍</router-link>|
            <router-link to="/" class="redirectlink">地方史志</router-link>|
            <router-link to="/" class="redirectlink">历史地理</router-link>|
            <router-link to="/" class="redirectlink">民族史</router-link>|
            <router-link to="/" class="redirectlink">口述史</router-link>|
            <router-link to="/" class="redirectlink">逸闻野史</router-link>|
            <router-link to="/" class="redirectlink">更多</router-link>
          </li>
          <li class="redirectli">
            文化:
            <router-link to="/" class="redirectlink">传统文化</router-link>|
            <router-link to="/" class="redirectlink">文化评述</router-link>|
            <router-link to="/" class="redirectlink">文化随笔</router-link>|
            <router-link to="/" class="redirectlink">各国文化</router-link>|
            <router-link to="/" class="redirectlink">神秘文化</router-link>|
            <router-link to="/" class="redirectlink">地域文化</router-link>|
            <router-link to="/" class="redirectlink">更多</router-link>
          </li>
          <li class="redirectli">
            古籍: <router-link to="/" class="redirectlink">经部</router-link>|
            <router-link to="/" class="redirectlink">史类</router-link>|
            <router-link to="/" class="redirectlink">子部</router-link>|
            <router-link to="/" class="redirectlink">集部</router-link>|
            <router-link to="/" class="redirectlink">古籍工具书</router-link>|
            <router-link to="/" class="redirectlink">古籍整理</router-link>|
            <router-link to="/" class="redirectlink">善本影印本</router-link>|
            <router-link to="/" class="redirectlink">更多</router-link>
          </li>
          <li class="redirectli">
            心理学:
            <router-link to="/" class="redirectlink">心理百科</router-link>|
            <router-link to="/" class="redirectlink">心理学著作</router-link>|
            <router-link to="/" class="redirectlink">心理咨询治疗</router-link>|
            <router-link to="/" class="redirectlink">心理学理论</router-link>|
            <router-link to="/" class="redirectlink">心理学入门</router-link>|
            <router-link to="/" class="redirectlink">色彩心理学</router-link>|
            <router-link to="/" class="redirectlink">积极心理学</router-link>|
            <router-link to="/" class="redirectlink">社会心理学</router-link>|
            <router-link to="/" class="redirectlink">人格心理学</router-link>|
            <router-link to="/" class="redirectlink">儿童心理学</router-link>|
            <router-link to="/" class="redirectlink">心灵疗愈</router-link>|
            <router-link to="/" class="redirectlink">更多</router-link>
          </li>
          <li class="redirectli">
            哲学/宗教:
            <router-link to="/" class="redirectlink">古代哲学</router-link>|
            <router-link to="/" class="redirectlink">哲学知识读物</router-link>|
            <router-link to="/" class="redirectlink">世界哲学</router-link>|
            <router-link to="/" class="redirectlink">周易</router-link>|
            <router-link to="/" class="redirectlink">伦理学</router-link>|
            <router-link to="/" class="redirectlink">哲学与人生</router-link>|
            <router-link to="/" class="redirectlink">美学</router-link>|
            <router-link to="/" class="redirectlink">哲学史</router-link>|
            <router-link to="/" class="redirectlink">近现代哲学</router-link>|
            <router-link to="/" class="redirectlink">宗教知识读物</router-link>|
            <router-link to="/" class="redirectlink">佛教</router-link>|
            <router-link to="/" class="redirectlink">基督教</router-link>|
            <router-link to="/" class="redirectlink">道教</router-link>|
            <router-link to="/" class="redirectlink">术数/命理</router-link>|
            <router-link to="/" class="redirectlink">更多</router-link>
          </li>
          <li class="redirectli">
            政治/军事:
            <router-link to="/" class="redirectlink">中国政治</router-link>|
            <router-link to="/" class="redirectlink">党政读物</router-link>|
            <router-link to="/" class="redirectlink">政治理论</router-link>|
            <router-link to="/" class="redirectlink">世界政治</router-link>|
            <router-link to="/" class="redirectlink">公共管理</router-link>|
            <router-link to="/" class="redirectlink">领袖著作</router-link>|
            <router-link to="/" class="redirectlink">时事政治</router-link>|
            <router-link to="/" class="redirectlink">外交/国际关系</router-link
            >|
            <router-link to="/" class="redirectlink">中国共产党</router-link>|
            <router-link to="/" class="redirectlink">领袖首脑</router-link>|
            <router-link to="/" class="redirectlink">军事理论</router-link>|
            <router-link to="/" class="redirectlink">中外战争纪实</router-link>|
            <router-link to="/" class="redirectlink">兵器</router-link>|
            <router-link to="/" class="redirectlink">世界各国军事</router-link>|
            <router-link to="/" class="redirectlink">军事史</router-link>|
            <router-link to="/" class="redirectlink">军事技术</router-link>|
            <router-link to="/" class="redirectlink">更多</router-link>
          </li>
          <li class="redirectli">
            社会科学:
            <router-link to="/" class="redirectlink">社会科学总论</router-link>|
            <router-link to="/" class="redirectlink">社会学</router-link>|
            <router-link to="/" class="redirectlink">文化人类学</router-link>|
            <router-link to="/" class="redirectlink">新闻传播</router-link>|
            <router-link to="/" class="redirectlink">语言文字</router-link>|
            <router-link to="/" class="redirectlink">名家作品集</router-link>|
            <router-link to="/" class="redirectlink">更多</router-link>
          </li>
          <li class="redirectli">
            法律: <router-link to="/" class="redirectlink">民法</router-link>|
            <router-link to="/" class="redirectlink">经济法</router-link>|
            <router-link to="/" class="redirectlink">法律法规</router-link>|
            <router-link to="/" class="redirectlink">法律实务</router-link>|
            <router-link to="/" class="redirectlink">理论法学</router-link>|
            <router-link to="/" class="redirectlink">刑法</router-link>|
            <router-link to="/" class="redirectlink">法律随笔</router-link>|
            <router-link to="/" class="redirectlink">更多</router-link>
          </li>
        </div>
        <div v-show="showwhichdirect === 8" class="redirectdiv">
          <li class="redirectli">
            管理:
            <router-link to="/" class="redirectlink">一般管理学</router-link>|
            <router-link to="/" class="redirectlink">会计</router-link>|
            <router-link to="/" class="redirectlink">市场/营销</router-link>|
            <router-link to="/" class="redirectlink">战略管理</router-link>|
            <router-link to="/" class="redirectlink">生产与运作管理</router-link
            >|
            <router-link to="/" class="redirectlink">管理信息系统</router-link>|
            <router-link to="/" class="redirectlink">金融/投资</router-link>|
            <router-link to="/" class="redirectlink"
              >创业企业与企业家</router-link
            >| <router-link to="/" class="redirectlink">WTO</router-link>|
            <router-link to="/" class="redirectlink">电子商务</router-link>|
            <router-link to="/" class="redirectlink">工具书</router-link>|
            <router-link to="/" class="redirectlink">MBA</router-link>|
            <router-link to="/" class="redirectlink">商务沟通</router-link>|
            <router-link to="/" class="redirectlink">管理类职称考试</router-link
            >|
            <router-link to="/" class="redirectlink"
              >外文原版/影印版</router-link
            >| <router-link to="/" class="redirectlink">经管音像</router-link>|
            <router-link to="/" class="redirectlink"
              >英文原版书-管理</router-link
            >
          </li>
          <li class="redirectli">
            投资理财:
            <router-link to="/" class="redirectlink">证券/股票</router-link>|
            <router-link to="/" class="redirectlink">基金</router-link>|
            <router-link to="/" class="redirectlink">期货</router-link>|
            <router-link to="/" class="redirectlink">外汇</router-link>|
            <router-link to="/" class="redirectlink">保险</router-link>|
            <router-link to="/" class="redirectlink">彩票</router-link>|
            <router-link to="/" class="redirectlink">购房置业</router-link>|
            <router-link to="/" class="redirectlink">纳税</router-link>|
            <router-link to="/" class="redirectlink">投资指南</router-link>|
            <router-link to="/" class="redirectlink">女性理财</router-link>|
            <router-link to="/" class="redirectlink">黄金投资</router-link>|
            <router-link to="/" class="redirectlink">理财技巧</router-link>|
            <router-link to="/" class="redirectlink"
              >英文原版书-投资理财</router-link
            >
          </li>
          <li class="redirectli">
            经济说:
            <router-link to="/" class="redirectlink">经济学理论</router-link>|
            <router-link to="/" class="redirectlink">各流派经济学</router-link>|
            <router-link to="/" class="redirectlink">经济数学</router-link>|
            <router-link to="/" class="redirectlink">区域经济</router-link>|
            <router-link to="/" class="redirectlink">财政税收</router-link>|
            <router-link to="/" class="redirectlink">统计 审计</router-link>|
            <router-link to="/" class="redirectlink">贸易政策</router-link>|
            <router-link to="/" class="redirectlink">通货膨胀</router-link>|
            <router-link to="/" class="redirectlink">中国经济</router-link>|
            <router-link to="/" class="redirectlink">国际经济</router-link>|
            <router-link to="/" class="redirectlink">各部门经济</router-link>|
            <router-link to="/" class="redirectlink">经济法</router-link>|
            <router-link to="/" class="redirectlink">保险</router-link>|
            <router-link to="/" class="redirectlink">经济史</router-link>|
            <router-link to="/" class="redirectlink">工具书</router-link>|
            <router-link to="/" class="redirectlink">济通俗读物</router-link>|
            <router-link to="/" class="redirectlink"
              >经财税外贸保险类考试</router-link
            >|
            <router-link to="/" class="redirectlink"
              >英文原版书-经济</router-link
            >
          </li>
        </div>
        <div v-show="showwhichdirect === 9" class="redirectdiv">
          <li class="redirectli">
            成功/励志:
            <router-link to="/" class="redirectlink">人生哲学</router-link>|
            <router-link to="/" class="redirectlink">成功/激励</router-link>|
            <router-link to="/" class="redirectlink">心灵与修养</router-link>|
            <router-link to="/" class="redirectlink">性格与习惯</router-link>|
            <router-link to="/" class="redirectlink">智商/智谋</router-link>|
            <router-link to="/" class="redirectlink">情商/情绪管理</router-link
            >|
            <router-link to="/" class="redirectlink">财商/财富智慧</router-link
            >| <router-link to="/" class="redirectlink">人在职场</router-link>|
            <router-link to="/" class="redirectlink">人际交往</router-link>|
            <router-link to="/" class="redirectlink">处世学</router-link>|
            <router-link to="/" class="redirectlink">礼仪</router-link>|
            <router-link to="/" class="redirectlink">口才/演讲/辩论</router-link
            >|
            <router-link to="/" class="redirectlink">青少年励志</router-link>|
            <router-link to="/" class="redirectlink">出国/留学</router-link>|
            <router-link to="/" class="redirectlink">名言/格言</router-link>|
            <router-link to="/" class="redirectlink">励志小品</router-link>|
            <router-link to="/" class="redirectlink">男性励志</router-link>|
            <router-link to="/" class="redirectlink">女性励志</router-link>|
            <router-link to="/" class="redirectlink">名人励志</router-link>|
            <router-link to="/" class="redirectlink">励志经典著作</router-link>|
            <router-link to="/" class="redirectlink"
              >英文原版书-成功励志</router-link
            >
          </li>
        </div>
        <div v-show="showwhichdirect === 10" class="redirectdiv">
          <li class="redirectli">
            亲子/家教:
            <router-link to="/" class="redirectlink">家教理论</router-link>|
            <router-link to="/" class="redirectlink">家教方法</router-link>|
            <router-link to="/" class="redirectlink">成功案例</router-link>|
            <router-link to="/" class="redirectlink">素质教育</router-link>|
            <router-link to="/" class="redirectlink">品格养成</router-link>|
            <router-link to="/" class="redirectlink">亲子关系</router-link>|
            <router-link to="/" class="redirectlink">培育男孩</router-link>|
            <router-link to="/" class="redirectlink">培育女孩</router-link>|
            <router-link to="/" class="redirectlink">心理疏导</router-link>|
            <router-link to="/" class="redirectlink">0-6岁</router-link>|
            <router-link to="/" class="redirectlink">7-12岁</router-link>|
            <router-link to="/" class="redirectlink">13-18岁</router-link>
          </li>
          <li class="redirectli">
            育儿/早教:
            <router-link to="/" class="redirectlink">育儿百科</router-link>|
            <router-link to="/" class="redirectlink">早教/亲子互动</router-link
            >|
            <router-link to="/" class="redirectlink">婴幼儿饮食营养</router-link
            >|
            <router-link to="/" class="redirectlink"
              >婴幼儿护理健康</router-link
            >
          </li>
          <li class="redirectli">
            孕产/胎教:
            <router-link to="/" class="redirectlink">孕前准备</router-link>|
            <router-link to="/" class="redirectlink">胎教</router-link>|
            <router-link to="/" class="redirectlink">孕期</router-link>|
            <router-link to="/" class="redirectlink">孕产妇健康</router-link>|
            <router-link to="/" class="redirectlink">孕期饮食指导</router-link>|
            <router-link to="/" class="redirectlink">产后管理</router-link>
          </li>
          <li class="redirectli">
            保健/养生:
            <router-link to="/" class="redirectlink">中医养生</router-link>|
            <router-link to="/" class="redirectlink">饮食健康</router-link>|
            <router-link to="/" class="redirectlink">药膳食疗</router-link>|
            <router-link to="/" class="redirectlink">运动健康</router-link>|
            <router-link to="/" class="redirectlink">中老年养生</router-link>|
            <router-link to="/" class="redirectlink">男性养生</router-link>|
            <router-link to="/" class="redirectlink">女性/儿童</router-link>|
            <router-link to="/" class="redirectlink">性保健</router-link>|
            <router-link to="/" class="redirectlink">健康百科</router-link>|
            <router-link to="/" class="redirectlink">心理健康</router-link>
          </li>
          <li class="redirectli">
            烹饪/美食:
            <router-link to="/" class="redirectlink">家常菜谱</router-link>|
            <router-link to="/" class="redirectlink">烘焙甜品</router-link>|
            <router-link to="/" class="redirectlink">药膳食疗</router-link>|
            <router-link to="/" class="redirectlink">西餐料理</router-link>|
            <router-link to="/" class="redirectlink">茶酒饮料</router-link>|
            <router-link to="/" class="redirectlink">饮食文化</router-link>|
            <router-link to="/" class="redirectlink">地方美食</router-link>
          </li>
          <li class="redirectli">
            旅游/地图:
            <router-link to="/" class="redirectlink">国内自助游</router-link>|
            <router-link to="/" class="redirectlink">国外自助游</router-link>|
            <router-link to="/" class="redirectlink">城市自助游</router-link>|
            <router-link to="/" class="redirectlink">户外探险旅游</router-link>|
            <router-link to="/" class="redirectlink">随笔旅游</router-link>|
            <router-link to="/" class="redirectlink">攻略地图</router-link>
          </li>
          <li class="redirectli">
            两性关系:
            <router-link to="/" class="redirectlink">两性关系</router-link>|
            <router-link to="/" class="redirectlink">恋爱</router-link>|
            <router-link to="/" class="redirectlink">婚姻</router-link>|
            <router-link to="/" class="redirectlink">性</router-link>
          </li>
          <li class="redirectli">
            家庭/家居:
            <router-link to="/" class="redirectlink">家庭园艺</router-link>|
            <router-link to="/" class="redirectlink">家装效果实例</router-link>|
            <router-link to="/" class="redirectlink">家装方法指导</router-link>|
            <router-link to="/" class="redirectlink">家装策略秘籍</router-link>|
            <router-link to="/" class="redirectlink">家事窍门</router-link>|
            <router-link to="/" class="redirectlink"
              >英文原版书-家居</router-link
            >
          </li>
          <li class="redirectli">
            休闲/爱好:
            <router-link to="/" class="redirectlink">游戏</router-link>|
            <router-link to="/" class="redirectlink">宠物杂事</router-link>|
            <router-link to="/" class="redirectlink">车载户外</router-link>|
            <router-link to="/" class="redirectlink">日历</router-link>
          </li>
          <li class="redirectli">
            体育/运动:
            <router-link to="/" class="redirectlink">奥林匹克</router-link>|
            <router-link to="/" class="redirectlink">田径/体操</router-link>|
            <router-link to="/" class="redirectlink">篮球</router-link>|
            <router-link to="/" class="redirectlink">足球</router-link>|
            <router-link to="/" class="redirectlink">高尔夫球</router-link>|
            <router-link to="/" class="redirectlink">网球</router-link>|
            <router-link to="/" class="redirectlink">羽毛球</router-link>
          </li>
          <li class="redirectli">
            时尚/美妆:
            <router-link to="/" class="redirectlink">瑜珈</router-link>|
            <router-link to="/" class="redirectlink">时尚</router-link>|
            <router-link to="/" class="redirectlink">奢侈品</router-link>|
            <router-link to="/" class="redirectlink">瘦身美体</router-link>
          </li>
          <li class="redirectli">
            手工/DIY:
            <router-link to="/" class="redirectlink">纸艺</router-link>|
            <router-link to="/" class="redirectlink">布艺/不织布</router-link>|
            <router-link to="/" class="redirectlink">刺绣/十字绣</router-link>|
            <router-link to="/" class="redirectlink">其他</router-link>|
            <router-link to="/" class="redirectlink">手工材料</router-link>
          </li>
        </div>
        <div v-show="showwhichdirect === 11" class="redirectdiv">
          <li class="redirectli">
            科普读物:
            <router-link to="/" class="redirectlink">宇宙知识</router-link>|
            <router-link to="/" class="redirectlink">人类故事</router-link>|
            <router-link to="/" class="redirectlink">生物世界</router-link>|
            <router-link to="/" class="redirectlink">科学世界</router-link>|
            <router-link to="/" class="redirectlink">生态环境</router-link>|
            <router-link to="/" class="redirectlink">百科知识</router-link>|
            <router-link to="/" class="redirectlink"
              >英文原版书-科普</router-link
            >
          </li>
          <li class="redirectli">
            建筑:
            <router-link to="/" class="redirectlink"
              >建筑史与建筑文化</router-link
            >| <router-link to="/" class="redirectlink">建筑科学</router-link>|
            <router-link to="/" class="redirectlink">建筑外观设计</router-link>|
            <router-link to="/" class="redirectlink"
              >室内设计/装潢装修</router-link
            >|
            <router-link to="/" class="redirectlink">建筑施工与监理</router-link
            >|
            <router-link to="/" class="redirectlink">工程经济与管理</router-link
            >|
            <router-link to="/" class="redirectlink"
              >城乡规划/市政工程</router-link
            >|
            <router-link to="/" class="redirectlink"
              >园林景观/环境艺术</router-link
            >| <router-link to="/" class="redirectlink">标准/规范</router-link>|
            <router-link to="/" class="redirectlink">建筑教材/教辅</router-link
            >|
            <router-link to="/" class="redirectlink"
              >执业资格考试用书</router-link
            >|
            <router-link to="/" class="redirectlink"
              >英文原版书-建筑</router-link
            >
          </li>
          <li class="redirectli">
            医学:
            <router-link to="/" class="redirectlink"
              >预防医学/卫生学</router-link
            >|
            <router-link to="/" class="redirectlink">临床医学理论</router-link>|
            <router-link to="/" class="redirectlink">内科学</router-link>|
            <router-link to="/" class="redirectlink">外科学</router-link>|
            <router-link to="/" class="redirectlink">妇产科学</router-link>|
            <router-link to="/" class="redirectlink">儿科学</router-link>|
            <router-link to="/" class="redirectlink">其他临床医学</router-link>|
            <router-link to="/" class="redirectlink">护理学</router-link>|
            <router-link to="/" class="redirectlink">医技学</router-link>|
            <router-link to="/" class="redirectlink">中医药学</router-link>|
            <router-link to="/" class="redirectlink">医学/药学考试</router-link
            >|
            <router-link to="/" class="redirectlink">医学/药学教材</router-link
            >|
            <router-link to="/" class="redirectlink">医学工具书</router-link>|
            <router-link to="/" class="redirectlink">医院管理</router-link>|
            <router-link to="/" class="redirectlink">医疗器械及使用</router-link
            >| <router-link to="/" class="redirectlink">其他</router-link>|
            <router-link to="/" class="redirectlink"
              >英文原版书-医学</router-link
            >
          </li>
          <li class="redirectli">
            计算机/计算机:
            <router-link to="/" class="redirectlink">计算机理论</router-link>|
            <router-link to="/" class="redirectlink"
              >硬件 外部设备 维修</router-link
            >|
            <router-link to="/" class="redirectlink"
              >操作系统/系统开发</router-link
            >| <router-link to="/" class="redirectlink">数据库</router-link>|
            <router-link to="/" class="redirectlink">程序设计</router-link>|
            <router-link to="/" class="redirectlink">网络与数据通信</router-link
            >|
            <router-link to="/" class="redirectlink"
              >图形图像 多媒体</router-link
            >|
            <router-link to="/" class="redirectlink">CAD CAM CAE</router-link>|
            <router-link to="/" class="redirectlink"
              >软件工程/开发项目管理</router-link
            >|
            <router-link to="/" class="redirectlink">行业软件及应用</router-link
            >| <router-link to="/" class="redirectlink">人工智能</router-link>|
            <router-link to="/" class="redirectlink"
              >家庭与办公室用书</router-link
            >|
            <router-link to="/" class="redirectlink"
              >计算机考试 认证</router-link
            >|
            <router-link to="/" class="redirectlink"
              >管理信息系统(MIS)</router-link
            >|
            <router-link to="/" class="redirectlink"
              >地理信息管理系统（GIS)</router-link
            >|
            <router-link to="/" class="redirectlink"
              >企业软件开发与实施</router-link
            >| <router-link to="/" class="redirectlink">信息安全</router-link>|
            <router-link to="/" class="redirectlink"
              >项目管理 IT人文</router-link
            >|
            <router-link to="/" class="redirectlink"
              >网络电脑杂志——合订本</router-link
            >| <router-link to="/" class="redirectlink">体系结构</router-link>|
            <router-link to="/" class="redirectlink">数码全攻略</router-link>|
            <router-link to="/" class="redirectlink">影印版</router-link>|
            <router-link to="/" class="redirectlink">计算机教材</router-link>|
            <router-link to="/" class="redirectlink"
              >英文原版书-计算机</router-link
            >
          </li>
          <li class="redirectli">
            农业/林业:
            <router-link to="/" class="redirectlink">农业基础科学</router-link>|
            <router-link to="/" class="redirectlink">农业工程</router-link>|
            <router-link to="/" class="redirectlink">农学(农艺学)</router-link>|
            <router-link to="/" class="redirectlink">植物保护</router-link>|
            <router-link to="/" class="redirectlink">农作物</router-link>|
            <router-link to="/" class="redirectlink">园艺</router-link>|
            <router-link to="/" class="redirectlink">林业</router-link>|
            <router-link to="/" class="redirectlink"
              >畜牧/狩猎/蚕/蜂</router-link
            >| <router-link to="/" class="redirectlink">水产/渔业</router-link>|
            <router-link to="/" class="redirectlink">动物医学</router-link>|
            <router-link to="/" class="redirectlink">农林音像</router-link>
          </li>
          <li class="redirectli">
            自然科学:
            <router-link to="/" class="redirectlink">总论</router-link>|
            <router-link to="/" class="redirectlink">数学</router-link>|
            <router-link to="/" class="redirectlink">力学</router-link>|
            <router-link to="/" class="redirectlink">物理学</router-link>|
            <router-link to="/" class="redirectlink">化学</router-link>|
            <router-link to="/" class="redirectlink">天文学</router-link>|
            <router-link to="/" class="redirectlink">地球科学</router-link>|
            <router-link to="/" class="redirectlink">生物科学</router-link>|
            <router-link to="/" class="redirectlink">科技史</router-link>|
            <router-link to="/" class="redirectlink">自然科学类考试</router-link
            >|
            <router-link to="/" class="redirectlink"
              >英文原版书-自然科学</router-link
            >
          </li>
          <li class="redirectli">
            工业技术:
            <router-link to="/" class="redirectlink">一般工业技术</router-link>|
            <router-link to="/" class="redirectlink">机械/仪表工业</router-link
            >| <router-link to="/" class="redirectlink">电工技术</router-link>|
            <router-link to="/" class="redirectlink">电子 通信</router-link>|
            <router-link to="/" class="redirectlink">化学工业</router-link>|
            <router-link to="/" class="redirectlink">冶金工业</router-link>|
            <router-link to="/" class="redirectlink">矿业工程</router-link>|
            <router-link to="/" class="redirectlink"
              >石油/天然气工业</router-link
            >|
            <router-link to="/" class="redirectlink"
              >金属学与金属工艺</router-link
            >| <router-link to="/" class="redirectlink">武器工业</router-link>|
            <router-link to="/" class="redirectlink">能源与动力工程</router-link
            >|
            <router-link to="/" class="redirectlink">原子能技术</router-link>|
            <router-link to="/" class="redirectlink">轻工业/手工业</router-link
            >| <router-link to="/" class="redirectlink">水利工程</router-link>|
            <router-link to="/" class="redirectlink">汽车与交通运输</router-link
            >| <router-link to="/" class="redirectlink">航空/航天</router-link>|
            <router-link to="/" class="redirectlink">环境科学</router-link>|
            <router-link to="/" class="redirectlink">安全科学</router-link>|
            <router-link to="/" class="redirectlink">工具书/标准</router-link>|
            <router-link to="/" class="redirectlink">原版书</router-link>|
            <router-link to="/" class="redirectlink"
              >英文原版书-工业技术</router-link
            >
          </li>
        </div>
        <div v-show="showwhichdirect === 12" class="redirectdiv">
          <li class="redirectli">
            英文原版书:
            <router-link to="/" class="redirectlink">学习 考试</router-link>|
            <router-link to="/" class="redirectlink">小说 Fiction</router-link>|
            <router-link to="/" class="redirectlink"
              >传记 Biographies & Memoirs</router-link
            >| <router-link to="/" class="redirectlink">艺术 Art</router-link>|
            <router-link to="/" class="redirectlink"
              >摄影 Photography</router-link
            >|
            <router-link to="/" class="redirectlink"
              >旅游与地理 Travel Guide</router-link
            >|
            <router-link to="/" class="redirectlink"
              >其他原版书经管类 Business</router-link
            >|
            <router-link to="/" class="redirectlink"
              >人文社科 Non Fiction</router-link
            >|
            <router-link to="/" class="redirectlink"
              >儿童书 Children's book</router-link
            >|
            <router-link to="/" class="redirectlink">语言学习 ELT</router-link>|
            <router-link to="/" class="redirectlink"
              >计算机 Computers & Internet</router-link
            >|
            <router-link to="/" class="redirectlink"
              >科学与技术 Science & Techology</router-link
            >|
            <router-link to="/" class="redirectlink"
              >建筑 Architechture</router-link
            >|
            <router-link to="/" class="redirectlink">医学 Medicine</router-link
            >|
            <router-link to="/" class="redirectlink"
              >工具书 Reference</router-link
            >|
            <router-link to="/" class="redirectlink"
              >家居 Home & Garden</router-link
            >|
            <router-link to="/" class="redirectlink"
              >美食 Cooking, Food & Wine</router-link
            >|
            <router-link to="/" class="redirectlink"
              >健康与心理 Health, Mind & Body</router-link
            >|
            <router-link to="/" class="redirectlink"
              >家庭与育儿 Parenting & Families</router-link
            >
          </li>
          <li class="redirectli">
            港台圖書:
            <router-link to="/" class="redirectlink">文学</router-link>|
            <router-link to="/" class="redirectlink">经济管理</router-link>|
            <router-link to="/" class="redirectlink">生活</router-link>|
            <router-link to="/" class="redirectlink">童书</router-link>|
            <router-link to="/" class="redirectlink">漫画</router-link>|
            <router-link to="/" class="redirectlink">艺术</router-link>|
            <router-link to="/" class="redirectlink">人文社科</router-link>|
            <router-link to="/" class="redirectlink">心理/励志</router-link>|
            <router-link to="/" class="redirectlink">学习/考试</router-link>|
            <router-link to="/" class="redirectlink">科技</router-link>
          </li>
        </div>
        <div v-show="showwhichdirect === 13" class="redirectdiv">
          <li class="redirectli">
            期刊:
            <router-link to="/" class="redirectlink">娱乐时尚</router-link>|
            <router-link to="/" class="redirectlink">男士</router-link>|
            <router-link to="/" class="redirectlink">旅游/人文</router-link>|
            <router-link to="/" class="redirectlink">家居/装饰</router-link>|
            <router-link to="/" class="redirectlink">文化/艺术</router-link>|
            <router-link to="/" class="redirectlink">家庭/美食</router-link>|
            <router-link to="/" class="redirectlink">健康/运动</router-link>|
            <router-link to="/" class="redirectlink">汽车</router-link>|
            <router-link to="/" class="redirectlink">新闻/经管</router-link>|
            <router-link to="/" class="redirectlink">IT/科技</router-link>|
            <router-link to="/" class="redirectlink">文摘 文学</router-link>|
            <router-link to="/" class="redirectlink">特价</router-link>|
            <router-link to="/" class="redirectlink">母婴/育儿</router-link>
          </li>
          <li class="redirectli">
            影视: <router-link to="/" class="redirectlink">电影</router-link>|
            <router-link to="/" class="redirectlink">电视剧</router-link>|
            <router-link to="/" class="redirectlink">卡通</router-link>|
            <router-link to="/" class="redirectlink">戏剧/综艺</router-link>|
            <router-link to="/" class="redirectlink"
              >专题片/专栏节目</router-link
            >| <router-link to="/" class="redirectlink">生活</router-link>|
            <router-link to="/" class="redirectlink">教育</router-link>
          </li>
          <li class="redirectli">
            音乐:
            <router-link to="/" class="redirectlink">华语流行</router-link>|
            <router-link to="/" class="redirectlink">欧美流行</router-link>|
            <router-link to="/" class="redirectlink">日韩流行</router-link>|
            <router-link to="/" class="redirectlink">摇滚</router-link>|
            <router-link to="/" class="redirectlink">世界音乐</router-link>|
            <router-link to="/" class="redirectlink">乡村/民谣</router-link>|
            <router-link to="/" class="redirectlink">爵士/蓝调</router-link>|
            <router-link to="/" class="redirectlink">新世纪音乐</router-link>|
            <router-link to="/" class="redirectlink">民歌民乐</router-link>|
            <router-link to="/" class="redirectlink">进口CD</router-link>|
            <router-link to="/" class="redirectlink">发烧碟</router-link>|
            <router-link to="/" class="redirectlink">轻音乐</router-link>|
            <router-link to="/" class="redirectlink">古典音乐</router-link>|
            <router-link to="/" class="redirectlink">中国交响乐</router-link>|
            <router-link to="/" class="redirectlink">影视音乐</router-link>|
            <router-link to="/" class="redirectlink">音乐DVD/VCD</router-link>|
            <router-link to="/" class="redirectlink">歌舞剧</router-link>|
            <router-link to="/" class="redirectlink">电子音乐</router-link>|
            <router-link to="/" class="redirectlink">DJ/舞曲</router-link>|
            <router-link to="/" class="redirectlink">功能音乐</router-link>|
            <router-link to="/" class="redirectlink">宗教/庆典音乐</router-link
            >| <router-link to="/" class="redirectlink">相声/曲艺</router-link>|
            <router-link to="/" class="redirectlink">戏曲</router-link>|
            <router-link to="/" class="redirectlink">自然音乐</router-link>|
            <router-link to="/" class="redirectlink">儿童音乐</router-link>|
            <router-link to="/" class="redirectlink">音乐教育</router-link>|
            <router-link to="/" class="redirectlink">有声读物</router-link>|
            <router-link to="/" class="redirectlink">音乐周边</router-link>
          </li>
          <li class="redirectli">
            教育音像:
            <router-link to="/" class="redirectlink">英语学习</router-link>|
            <router-link to="/" class="redirectlink">英语考试/考级</router-link
            >|
            <router-link to="/" class="redirectlink">非英语语种</router-link>|
            <router-link to="/" class="redirectlink">少儿英语</router-link>|
            <router-link to="/" class="redirectlink">少儿益智启蒙</router-link>|
            <router-link to="/" class="redirectlink">教材教辅</router-link>|
            <router-link to="/" class="redirectlink">管理培训</router-link>|
            <router-link to="/" class="redirectlink">医学教材</router-link>|
            <router-link to="/" class="redirectlink"
              >计算机学习/考试/考级</router-link
            >|
            <router-link to="/" class="redirectlink">文学 其他</router-link>
          </li>
        </div>
      </div>
    </div>
    <div id="homepage">
      <div
        id="page"
        v-bind:style="{
          backgroundImage: 'url(' + images1[i1] + ')',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
        }"
      >
        <div
          class="idot"
          v-for="index in images1.length"
          v-bind:key="index"
          @click="changepage(index - 1)"
        ></div>
      </div>
      <div id="discount">
        <div
          class="discountDiv"
          v-for="index in images2.length"
          v-bind:key="index"
          v-bind:style="{ backgroundImage: 'url(' + images2[index - 1] + ')' }"
        ></div>
      </div>
    </div>
    <div id="rightpage">
      <img class="" :src="require('@/assets/4-1.jpg')" alt="" />
      <h2 style="margin-left: 10px">最新动态</h2>
      <router-link
        to="/"
        v-for="(trend, index) in trends"
        :key="index"
        class="redirectlink"
        ><li class="trendli">{{ trend }}</li></router-link
      >
    </div>
    <div id="recommend">
      <h2>为你推荐</h2>
      <hr />
      <div class="recommendDiv" v-for="index in i3" v-bind:key="index">
        <router-link :to="'/good/' + index" style="textDecoration: none"
          ><img
            class="recommendImage"
            :src="require('@/assets/3-' + index + '.jpg')"
            alt=""
          />
          <div class="recommendTitle">
            {{
              goods[index - 1].title.length >= 20
                ? goods[index - 1].title.substring(0, 20) + "..."
                : goods[index - 1].title
            }}
          </div>
          <div class="recommendPrice">{{ goods[index - 1].price }}￥</div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  async created() {
    const that = this;
    await this.$axios
      .get('/data.json')
      .then((response) => {
        that.goods = response.data.goods;
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
    that.i3 = that.goods.length;
  },
  data() {
    return {
      i1: 0,
      images1: [
        // eslint-disable-next-line global-require
        require('@/assets/1-1.jpg'),
        // eslint-disable-next-line global-require
        require('@/assets/1-2.jpg'),
        // eslint-disable-next-line global-require
        require('@/assets/1-3.jpg'),
        // eslint-disable-next-line global-require
        require('@/assets/1-4.jpg'),
      ],
      images2: [
        // eslint-disable-next-line global-require
        require('@/assets/2-1.jpg'),
        // eslint-disable-next-line global-require
        require('@/assets/2-2.jpg'),
        // eslint-disable-next-line global-require
        require('@/assets/2-3.jpg'),
        // eslint-disable-next-line global-require
        require('@/assets/2-4.jpg'),
      ],
      i3: 0,
      isshow: false,
      showwhichdirect: 0,
      trends: [
        '童书，每满100减50',
        '学管理，会理财，每满100减50',
        '艺术绘画，人物传记，每满100减50',
      ],
      goods: [],
    };
  },
  methods: {
    changepage(index) {
      this.i1 = index;
    },
    showdirect(index) {
      this.isshow = true;
      this.showwhichdirect = index;
    },
    showdirect1() {
      this.isshow = true;
    },
    noshowdirect() {
      this.isshow = false;
    },
  },
  mounted() {
    const that = this;
    setInterval(() => {
      setTimeout(() => {
        that.i1 = (that.i1 + 1) % that.images1.length;
      }, 0);
    }, 2000);
  },
};
</script>
<style scoped>
#home {
  width: 1200px;
  margin: 0 auto;
}
#direct {
  height: 480px;
  float: left;
  width: 200px;
  background: rgb(250, 249, 249);
}
#direct1 {
  width: 199px;
  height: 488px;
  position: absolute;
  float: left;
  z-index: 200;
  background: rgb(250, 249, 249);
  border: #ccc 1px solid;
}
.directli {
  list-style: none;
  padding-left: 18px;
}
.directli:hover {
  margin-top: -2px;
  margin-right: -2px;
  background: #fff;
  border: 2px solid #ff2832;
  border-right: 0;
  padding-left: 16px;
}
.directlink {
  color: #000;
  text-decoration: none;
  font: 14px/32px "Microsoft Yahei";
}
.directli:hover .directlink {
  color: #ff2832;
  font: 16px/30px "Microsoft Yahei";
  text-decoration: underline;
}
#redirect {
  position: absolute;
  width: 1000px;
  height: 490px;
  background-color: rgb(250, 249, 249);
  z-index: 100;
}
.redirectdiv {
  border: 2px solid #ff2832;
  margin-left: 200px;
  width: 796px;
  height: 486px;
}
.redirectli {
  margin-left: 20px;
  margin-top: 10px;
  list-style: none;
}
.redirectlink:hover {
  text-decoration: underline;
}
.redirectlink {
  text-decoration: none;
  color: #666;
  font-size: 13px;
}
#homepage {
  float: left;
}
#page {
  height: 326px;
  width: 798px;
  margin: 0 auto;
  border: #ccc 1px solid;
}
.idot {
  margin-top: 295px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #ccc;
  opacity: 0.8;
  float: left;
  margin-left: 15px;
  margin-right: 15px;
}
.idot:hover {
  background-color: #444;
}
#discount {
  width: 800px;
  margin: 0 auto;
}
.discountDiv {
  background-repeat: "no-repeat";
  background-size: "100% 100%";
  height: 160px;
  width: 198px;
  float: left;
  background-color: rgb(250, 249, 249, 0.6);
  border: #ccc 1px solid;
}
#rightpage {
  margin-left: 999px;
  background-color: rgb(250, 249, 249);
  width: 202px;
  height: 488px;
  border: #ccc 1px solid;
}
.rightpageimage {
  width: 202px;
  height: 119px;
}
.trendli {
  margin-left: 5px;
  margin-top: 5px;
}
#recommend {
  clear: left;
}
.recommendImage {
  height: 190px;
  width: 190px;
}
.recommendDiv {
  float: left;
  border: white solid 1px;
  padding: 4px 3px 7px 3px;
  width: 190px;
  height: 265px;
}
.recommendDiv:hover {
  box-shadow: 0 0 4px #ddd;
}
.recommendTitle {
  padding: 2px 5px;
  color: #000;
  height: 40px;
}
.recommendTitle:hover {
  color: #ff2832;
}
.recommendPrice {
  padding: 2px 10px;
  color: #ff2832;
  font-size: 20px;
  text-decoration: none;
}
</style>
