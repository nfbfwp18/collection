import './Skills.css'

// 软件工具列表
const softwareList = [
  { name: 'Premiere Pro', short: 'PR', color: '#EA77FF' },
  { name: 'Photoshop', short: 'PS', color: '#31A8FF' },
  { name: 'After Effects', short: 'AE', color: '#9999FF' },
  { name: 'Audition', short: 'AU', color: '#00E4BB' },
  { name: 'Animate', short: 'AN', color: '#FF7C00' },
  { name: 'Adobe XD', short: 'XD', color: '#FF61F6' },
  { name: '剪映', short: '剪映', color: '#00FFF0' },
  { name: '3ds Max', short: '3DMAX', color: '#37A5CC' },
  { name: 'Blender', short: 'Blender', color: '#E87D0D' },
  { name: 'Word / Excel / PPT', short: 'Office', color: '#D83B01' },
]

const skills = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M24 6c-2 0-4 2-6 6l-8 4c-2 1-3 3-2 5l3 8-3 8c-1 2 0 4 2 5l8 4c2 4 4 6 6 6s4-2 6-6l8-4c2-1 3-3 2-5l-3-8 3-8c1-2 0-4-2-5l-8-4c-2-4-4-6-6-6z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
        <circle cx="24" cy="24" r="5" stroke="currentColor" strokeWidth="1.8"/>
      </svg>
    ),
    title: 'AIGC 内容创作',
    subtitle: 'AI Generated Content',
    level: 92,
    highlight: true,
    desc: '熟练运用多套 AI 生图工具进行画面抽卡与素材生成，具备从脚本策划、AI 素材产出到后期剪辑的完整 AIGC 短剧制作链路；导演 AIGC 精品短剧《捡漏未来摄政王，我只想发财》，抖音播放 30W+、红果短剧热度 4000W+。',
    tags: ['AI 图像生成', 'AI 抽卡', '短剧导演', '内容策划'],
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <rect x="6" y="10" width="36" height="28" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M18 24l-4 4 4 4M30 24l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M22 34l4-16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: '短视频剪辑 · 后期包装',
    subtitle: 'PR · 剪映 · AE',
    level: 88,
    desc: '熟练掌握 Premiere 全流程剪辑，涵盖脚本规划、精剪、节奏把控、调色、字幕包装及音效合成；熟悉抖音、小红书等平台内容调性，可独立产出符合短视频平台审美的成片内容。',
    tags: ['Premiere', '剪映', '精剪调色', '后期包装', '节奏把控'],
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M8 36V14l16-8 16 8v22" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <circle cx="24" cy="26" r="6" stroke="currentColor" strokeWidth="2"/>
        <path d="M14 36h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: '拍摄策划 · 脚本创作',
    subtitle: 'Shooting & Script',
    level: 82,
    desc: '具备独立完成短视频脚本策划与分镜设计能力，擅长结合热点梗与平台调性进行内容创意；有短剧导演经验，熟悉从选题、脚本到拍摄执行的完整创作链路。',
    tags: ['脚本策划', '分镜设计', '热点捕捉', '创意构思'],
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <rect x="6" y="8" width="36" height="28" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M16 36l8-12 8 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="20" cy="22" r="4" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    title: '物料设计 · 图像处理',
    subtitle: 'PS · Adobe Photoshop',
    level: 85,
    desc: '熟练运用 Photoshop 完成海报设计、物料包装、画面精修与视觉优化，可独立产出宣传物料、封面图及短视频配套平面素材，具备良好的色彩审美与排版能力。',
    tags: ['海报设计', '物料包装', '画面精修', '色彩处理'],
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2"/>
        <path d="M24 12v12l8 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M24 6v4M24 38v4M6 24h4M38 24h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: '新媒体运营 · 网感',
    subtitle: 'New Media Sense',
    level: 80,
    desc: '长期活跃于抖音、小红书等短视频平台，对热点话题与流量逻辑有敏锐感知；了解短视频内容的传播规律与用户喜好，具备内容选题、账号运营与粉丝维护的基础能力。',
    tags: ['抖音运营', '小红书', '热点追踪', '内容敏感'],
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2"/>
        <path d="M16 24c0-8 3.2-14.4 8-14.4S32 16 32 24s-3.2 14.4-8 14.4S16 32 16 24z" stroke="currentColor" strokeWidth="2"/>
        <path d="M10 19h28M10 29h28" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    title: '沟通协作 · 执行力',
    subtitle: 'Teamwork & Execution · CET-6',
    level: 88,
    desc: '执行力强、上手速度快，能快速学习新工具新玩法；大学英语六级，具备良好的英文读写与沟通能力；有虚拍制片统筹经验，熟悉项目进度管理、成本把控与跨团队协作；曾任学生会干部，组织协调过多场校园活动，责任心强、抗压力好。',
    tags: ['英语六级', '团队协作', '项目统筹', '成本控制', '责任心强', '学习快'],
  },
]

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="skills__header">
          <div className="skills__eyebrow">
            <span className="skills__eyebrow-line" />
            <span>MY STRENGTHS</span>
          </div>
          <h2 className="skills__heading">核心能力</h2>
          <p className="skills__sub">短视频创作 + AIGC + 新媒体，打造有网感的内容生产力</p>
        </div>

        {/* 技能卡片 */}
        <div className="skills__grid">
          {skills.map((skill, i) => (
            <div key={i} className={`skill-card ${skill.highlight ? 'skill-card--highlight' : ''}`}>
              <div className="skill-card__icon">{skill.icon}</div>
              <div className="skill-card__top">
                <div>
                  <h3 className="skill-card__title">{skill.title}</h3>
                  <span className="skill-card__subtitle">{skill.subtitle}</span>
                </div>
                <span className={`skill-card__level ${skill.highlight ? 'skill-card__level--hot' : ''}`}>
                  {skill.level}%
                </span>
              </div>
              <div className="skill-card__bar">
                <div className="skill-card__bar-fill" style={{ width: `${skill.level}%` }} />
              </div>
              <p className="skill-card__desc">{skill.desc}</p>
              <div className="skill-card__tags">
                {skill.tags.map(tag => (
                  <span key={tag} className="skill-card__tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 软件工具条 */}
        <div className="skills__software">
          <div className="skills__software-label">熟练软件工具</div>
          <div className="skills__software-list">
            {softwareList.map(sw => (
              <div key={sw.short} className="skills__sw-item">
                <div
                  className="skills__sw-dot"
                  style={{ background: sw.color }}
                />
                <span className="skills__sw-short">{sw.short}</span>
                <span className="skills__sw-name">{sw.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
