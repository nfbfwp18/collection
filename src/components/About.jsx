import './About.css'

const stats = [
  { num: 'AIGC', label: 'AI 内容创作', desc: '视频 / 动画生成' },
  { num: 'PS', label: '图像处理', desc: 'Photoshop 熟练' },
  { num: 'PR', label: '视频剪辑', desc: 'Premiere 全流程' },
  { num: '3D', label: '次世代建模', desc: '游戏美术 / 动画' },
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
              我是纪彤，就读于浙江越秀外国语学院数字媒体技术专业（2025—2027），目前寻求 <strong>AI 实习生</strong> 与 <strong>视频剪辑实习生</strong> 机会，可于七月初入职，具备英语四级沟通能力。
            </p>
            <p>
              熟练运用 Photoshop 进行视频素材画面优化与包装设计，掌握 Premiere 剪辑全流程，涵盖素材管理、精剪、调色与特效制作；具备扎实的 AIGC 内容创作能力，作品《时光里的传承》体现了 AI 辅助创作的完整实践。
            </p>
            <p>
              在校系统学习次世代三维建模技术、前端可视化技术、Web3D 可视化技术及数据库原理等课程，具备良好的空间审美与技术复合能力。曾参加第十七届蓝桥杯大赛，团队动画作品《古越酒韵》荣获浙江赛区三等奖。
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
