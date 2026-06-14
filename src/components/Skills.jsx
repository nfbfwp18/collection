import './Skills.css'

// 软件工具列表
const softwareList = [
  { name: 'Photoshop', short: 'PS', color: '#31A8FF' },
  { name: 'Premiere Pro', short: 'PR', color: '#EA77FF' },
  { name: 'Animate', short: 'AN', color: '#FF7C00' },
  { name: 'Adobe XD', short: 'XD', color: '#FF61F6' },
  { name: 'Audition', short: 'AU', color: '#00E4BB' },
  { name: '3ds Max', short: '3DMAX', color: '#37A5CC' },
  { name: 'Blender', short: 'Blender', color: '#E87D0D' },
  { name: 'After Effects', short: 'AE', color: '#9999FF' },
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
    title: 'AIGC 创作',
    subtitle: 'AI Content Generation',
    level: 92,
    highlight: true,
    desc: '具备完整的 AIGC 内容创作实践能力，熟练运用 AI 工具完成图像生成、视频制作与动画创作，作品《时光里的传承》是 AI 辅助叙事创作的典型实践。',
    tags: ['AI 图像生成', 'AI 视频制作', 'AI 动画', '创意叙事'],
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <rect x="6" y="8" width="36" height="28" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M16 36l8-12 8 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="20" cy="22" r="4" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    title: '图像处理',
    subtitle: 'PS · Adobe Photoshop',
    level: 90,
    desc: '熟练完成视频素材的画面优化、包装设计、色彩调整及素材合成，具备扎实的视觉审美与平面设计能力。',
    tags: ['画面优化', '包装设计', '色彩处理', 'UI 视觉'],
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <rect x="6" y="10" width="36" height="28" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M18 24l-4 4 4 4M30 24l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M22 34l4-16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: '视频剪辑',
    subtitle: 'PR · Premiere Pro',
    level: 80,
    desc: '掌握 Premiere 全流程操作，具备素材管理、精剪、调色及特效添加能力，可独立完成视频脚本整理与项目进度管理。',
    tags: ['精剪调色', '特效制作', '素材管理', '脚本整理'],
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M8 38V16l16-8 16 8v22" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M24 8v10M16 12l8 6 8-6" stroke="currentColor" strokeWidth="2"/>
        <rect x="16" y="26" width="16" height="12" rx="1" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    title: 'UI 设计',
    subtitle: 'XD · Adobe XD',
    level: 78,
    desc: '具备完整的 UI 设计流程能力，可独立完成从用户研究、原型设计到高保真视觉规范的全链路设计，擅长 IP 形象与移动端界面设计。',
    tags: ['用户研究', '原型设计', '视觉规范', 'IP 形象'],
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M24 8l4 8 9 1.3-6.5 6.3 1.5 9L24 28l-8 4.7 1.5-9L11 17.3l9-1.3z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M24 36v5M16 40l4-4M32 40l-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: '动画设计',
    subtitle: 'AN · Adobe Animate',
    level: 75,
    desc: '系统学习网络动画设计与 AN 工具，能完成帧动画、骨骼动画及交互动画制作，蓝桥杯获奖作品《古越酒韵》即为动画设计实践成果。',
    tags: ['帧动画', '骨骼动画', '动效设计', '文化叙事'],
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M12 36V20l12-6 12 6v16l-12 6-12-6z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M24 14v14M12 20l12 8 12-8" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    title: '次世代建模',
    subtitle: '3ds Max · Blender',
    level: 70,
    desc: '系统学习次世代三维建模技术，熟练使用 3ds Max 与 Blender 完成高精度模型创建与 PBR 材质贴图，注重比例把控与细节还原。',
    tags: ['3ds Max', 'Blender', 'PBR 材质', '硬表面建模'],
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2"/>
        <path d="M16 24c0-8 3.2-14.4 8-14.4S32 16 32 24s-3.2 14.4-8 14.4S16 32 16 24z" stroke="currentColor" strokeWidth="2"/>
        <path d="M10 19h28M10 29h28" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    title: '语言 · 沟通',
    subtitle: 'Language',
    level: 80,
    desc: '普通话水平良好，大学英语四级证书，具备良好的中英文书面表达能力；沟通能力强，善于团队协作与项目统筹，曾任学生会干部。',
    tags: ['英语四级', '团队协作', '项目统筹', '文案撰写'],
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
          <h2 className="skills__heading">个人优势</h2>
          <p className="skills__sub">多维技能储备，融合创意与技术</p>
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
