import './About.css'

const stats = [
  { num: 'AIGC', label: 'AI 内容创作', desc: '短剧 / 短视频生成' },
  { num: '剪', label: '视频剪辑', desc: 'Premiere 全流程' },
  { num: '拍', label: '拍摄策划', desc: '脚本 / 分镜 / 后期包装' },
  { num: 'PS', label: '物料设计', desc: 'Photoshop 平面包装' },
]

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container about__inner">

        {/* 左侧：人物区 */}
        <div className="about__left">
          <div className="about__photo-wrap">
            <div className="about__photo-frame">
              <img src="/avatar.png" alt="纪彤" className="about__photo-img" />
            </div>
            <div className="about__photo-deco" />
          </div>

          {/* 联系卡片 */}
          <div className="about__contact-card">
            <h4 className="about__contact-title">联系方式</h4>
            <ul className="about__contact-list">
              <li>
                <span className="about__contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </span>
                <a href="tel:13375822570" style={{color:'inherit', textDecoration:'none'}}>13375822570</a>
              </li>
              <li>
                <span className="about__contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </span>
                <span>3036404446@qq.com</span>
              </li>
              <li>
                <span className="about__contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                </span>
                <span>七月初到岗</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 右侧：文字区 */}
        <div className="about__right">
          <div className="about__eyebrow">
            <span className="about__eyebrow-line" />
            <span>ABOUT ME</span>
          </div>

          <h2 className="about__heading">
            用视觉讲述故事<br/>
            <span className="about__heading-accent">让每一帧都有温度</span>
          </h2>

          <div className="about__bio">
            <p>
              我是纪彤，就读于浙江越秀外国语学院数字媒体技术专业（2025—2027），目前寻求 <strong>宣传策划 / 拍摄剪辑 / 新媒体运营方向实习</strong> 机会，每周可到岗 4 天以上，实习周期 6 个月以上，具备英语四级沟通能力。
            </p>
            <p>
              拥有 AIGC 短剧导演与剪辑实战经验，导演作品《捡漏未来摄政王，我只想发财》抖音播放 30W+、红果热度 4000W+；熟练运用 Photoshop 进行画面优化与物料包装，掌握 Premiere 全流程剪辑，涵盖脚本规划、精剪、调色、特效与后期包装，可独立产出符合抖音等平台调性的短视频内容。
            </p>
            <p>
              对新媒体传播与音乐娱乐行业充满热情，持续关注抖音、小红书等平台热点，具备较强的网感与内容敏感度；执行力强、有责任心，在校担任学生会干部，积累了团队协作与活动统筹经验；曾获第十七届蓝桥杯视觉艺术设计赛浙江赛区三等奖。
            </p>
          </div>

          {/* 数据格子 */}
          <div className="about__stats-grid">
            {stats.map(s => (
              <div key={s.num} className="about__stats-item">
                <span className="about__stats-num">{s.num}</span>
                <span className="about__stats-label">{s.label}</span>
                <span className="about__stats-desc">{s.desc}</span>
              </div>
            ))}
          </div>

          {/* 教育经历 */}
          <div className="about__edu">
            <div className="about__edu-item">
              <div className="about__edu-dot" />
              <div className="about__edu-content">
                <span className="about__edu-date">2025 — 2027</span>
                <h4>浙江越秀外国语学院</h4>
                <p>数字媒体技术 · 本科在读</p>
                <div className="about__edu-courses">
                  <span>数据库原理与应用</span>
                  <span>前端可视化技术</span>
                  <span>次世代三维建模技术</span>
                  <span>Web3D 可视化技术</span>
                  <span>网络动画设计</span>
                  <span>图像处理技术</span>
                </div>
                <p className="about__edu-note">学生会干部 · 协助策划图书馆书展活动 · 负责歌手比赛后台及院校篮球赛工作人员统筹协调</p>
              </div>
            </div>
          </div>

          {/* 实习经历 */}
          <div className="about__exp">
            <div className="about__exp-header">
              <div className="about__exp-eyebrow">
                <span className="about__exp-eyebrow-line" />
                <span>EXPERIENCE</span>
              </div>
              <h3 className="about__exp-title">实习经历</h3>
            </div>

            {/* 实习 1 */}
            <div className="about__exp-item">
              <div className="about__exp-dot" />
              <div className="about__exp-content">
                <div className="about__exp-top">
                  <span className="about__exp-date">2026.07 — 2026.09</span>
                  <span className="about__exp-badge">AIGC 精品短剧</span>
                </div>
                <h4>AIGC 抽卡师 / 导演 · 剪辑后期</h4>
                <p className="about__exp-company">AI 短剧内容制作团队</p>
                <ul className="about__exp-list">
                  <li>独立负责 AIGC 精品短剧从内容策划、AI 画面抽卡到剪辑后期的全流程制作，把控整体视觉风格与叙事节奏</li>
                  <li>以导演身份主导上线作品《捡漏未来摄政王，我只想发财》，全程参与脚本分镜设计、AI 素材筛选与后期精剪调色</li>
                  <li>作品成绩亮眼：抖音平台播放量突破 <strong>30 万+</strong>，红果短剧平台热度超 <strong>4000 万</strong>，收藏量突破 <strong>2 万+</strong></li>
                  <li>熟练运用多套 AI 生图工具进行画面抽卡与素材优化，结合 Premiere 完成精剪、包装与音效合成，高效交付成片</li>
                </ul>
                <div className="about__exp-tags">
                  <span>AIGC 创作</span>
                  <span>短剧导演</span>
                  <span>视频剪辑</span>
                  <span>后期包装</span>
                  <span>Premiere</span>
                </div>
              </div>
            </div>

            {/* 实习 2 */}
            <div className="about__exp-item">
              <div className="about__exp-dot" />
              <div className="about__exp-content">
                <div className="about__exp-top">
                  <span className="about__exp-date">2026.09 — 2026.10</span>
                  <span className="about__exp-badge">虚拟制片</span>
                </div>
                <h4>虚拍制片 · 项目统筹</h4>
                <p className="about__exp-company">虚拟拍摄制作团队</p>
                <ul className="about__exp-list">
                  <li>统筹虚拟拍摄项目全流程管理，制定每日拍摄计划与任务拆解，确保项目按节点高效推进</li>
                  <li>担任跨部门沟通枢纽，协调导演、技术、美术等多团队需求，保障信息同步与协作顺畅</li>
                  <li>负责项目预算管控与成本优化，合理分配人力与技术资源，在保证品质前提下有效控制制作成本</li>
                  <li>跟进拍摄进度与质量把控，及时处理现场突发问题，保障项目按期高质量交付</li>
                </ul>
                <div className="about__exp-tags">
                  <span>项目统筹</span>
                  <span>跨部门沟通</span>
                  <span>成本控制</span>
                  <span>进度管理</span>
                </div>
              </div>
            </div>
          </div>

          {/* 获奖证书 */}
          <div className="about__award">
            <div className="about__award-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <div className="about__award-body">
              <span className="about__award-title">蓝桥杯全国大学生软件和信息技术大赛</span>
              <span className="about__award-sub">视觉艺术设计赛 — 动画设计类 · 浙江赛区三等奖</span>
              <span className="about__award-work">作品：《古越酒韵》· 第十七届 · 团队参赛 · 2026.05</span>
            </div>
            <a href="/certificate.png" target="_blank" className="about__award-cert">
              查看证书
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
