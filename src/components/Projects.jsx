import { useState, useRef } from 'react'
import './Projects.css'

// 视频作品（置顶）
const featuredVideos = [
  {
    id: 'v1',
    title: '《古越酒韵》',
    category: '动画设计 · 蓝桥杯获奖作品',
    award: '🏆 第十七届蓝桥杯 · 浙江赛区三等奖',
    tags: ['动画设计', '视觉艺术', '团队参赛', '蓝桥杯'],
    desc: '参加第十七届蓝桥杯全国大学生软件和信息技术大赛视觉艺术设计赛，以古越绍兴黄酒文化为主题，深度挖掘非遗文化内涵进行动画创作，团队作品荣获浙江赛区三等奖。',
    year: '2026',
    src: '/guyue.mp4',
  },
  {
    id: 'v2',
    title: '《时光里的传承》',
    category: 'AIGC 创作 · AI 辅助视频',
    award: '✦ AIGC 内容创作实践',
    tags: ['AIGC', 'AI 创作', '视频剪辑', '文化叙事'],
    desc: '以 AI 生成技术为核心工具，结合传统文化叙事脉络，完成从脚本策划、素材生成到后期剪辑的全流程创作，探索 AIGC 辅助视频内容生产的完整实践路径。',
    year: '2026',
    src: '/shiguang.mp4',
  },
]

// UI 展板数据
const uiBoards = [
  { src: '/ui1.png', label: '项目背景 · 用户画像 · 原型设计' },
  { src: '/ui2.png', label: '色彩规范 · 图标规范 · 界面分析' },
  { src: '/ui3.png', label: '文创地图 · 活动页面 · IP 文创产品' },
]

function VideoCard({ v, index }) {
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  const handlePlay = () => {
    if (!playing) {
      videoRef.current?.play()
      setPlaying(true)
    } else {
      videoRef.current?.pause()
      setPlaying(false)
    }
  }

  return (
    <div className={`video-card ${index === 0 ? 'video-card--first' : ''}`}>
      <div className="video-card__award-tag">{v.award}</div>
      <div className="video-card__media" onClick={handlePlay}>
        <video
          ref={videoRef}
          src={v.src}
          className="video-card__video"
          loop
          playsInline
          preload="metadata"
        />
        <div className={`video-card__play-mask ${playing ? 'video-card__play-mask--playing' : ''}`}>
          {!playing ? (
            <div className="video-card__play-btn">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
            </div>
          ) : (
            <div className="video-card__pause-btn">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
            </div>
          )}
        </div>
      </div>
      <div className="video-card__body">
        <div className="video-card__meta">
          <span className="video-card__year">{v.year}</span>
          <span className="video-card__category">{v.category}</span>
        </div>
        <h3 className="video-card__title">{v.title}</h3>
        <p className="video-card__desc">{v.desc}</p>
        <div className="video-card__tags">
          {v.tags.map(tag => (
            <span key={tag} className="video-card__tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

// UI 展板灯箱组件
function UIGallery() {
  const [lightbox, setLightbox] = useState(null)

  return (
    <div className="ui-gallery">
      {/* 展板缩略图列表 */}
      <div className="ui-gallery__grid">
        {uiBoards.map((b, i) => (
          <div
            key={i}
            className="ui-gallery__item"
            onClick={() => setLightbox(i)}
          >
            <img src={b.src} alt={`UI展板${i + 1}`} className="ui-gallery__img" />
            <div className="ui-gallery__hover">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
              </svg>
              <span>查看大图</span>
            </div>
            <div className="ui-gallery__label">
              <span className="ui-gallery__num">0{i + 1}</span>
              <span>{b.label}</span>
            </div>
          </div>
        ))}
      </div>

      {/* 灯箱 */}
      {lightbox !== null && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <div className="lightbox__inner" onClick={e => e.stopPropagation()}>
            <button className="lightbox__close" onClick={() => setLightbox(null)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>
            <button
              className="lightbox__nav lightbox__nav--prev"
              onClick={() => setLightbox((lightbox + uiBoards.length - 1) % uiBoards.length)}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>
            <img src={uiBoards[lightbox].src} alt="" className="lightbox__img" />
            <button
              className="lightbox__nav lightbox__nav--next"
              onClick={() => setLightbox((lightbox + 1) % uiBoards.length)}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
            <div className="lightbox__caption">
              <span className="lightbox__index">{lightbox + 1} / {uiBoards.length}</span>
              <span>{uiBoards[lightbox].label}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default function Projects() {
  const [modelLightbox, setModelLightbox] = useState(false)

  return (
    <section className="projects" id="projects">
      <div className="container">

        {/* 标题 */}
        <div className="projects__header">
          <div className="projects__eyebrow">
            <span className="projects__eyebrow-line" />
            <span>SELECTED WORKS</span>
          </div>
          <h2 className="projects__heading">精选作品</h2>
          <p className="projects__sub">每一帧都是视觉表达的尝试，每个项目都承载着创作的温度</p>
        </div>

        {/* ★ 视频作品 ★ */}
        <div className="projects__section-label">
          <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
          视频 · 动画作品
        </div>
        <div className="projects__videos">
          {featuredVideos.map((v, i) => (
            <VideoCard key={v.id} v={v} index={i} />
          ))}
        </div>

        {/* ★ UI 设计 ★ */}
        <div className="projects__section-label projects__section-label--light" style={{marginTop: '80px'}}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="13" height="13">
            <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
          </svg>
          UI 设计 · 梅好桃仙汇 APP
        </div>
        <div className="projects__ui-intro">
          <div className="projects__ui-intro-text">
            <h3>梅好桃仙汇 — 乡村特产自助 APP</h3>
            <p>以文化产业赋能为核心，深度融合樱桃、杨梅等地方特产与乡村旅游资源，完成从用户研究、产品规划到视觉落地的完整 UI 设计流程，包含 IP 形象设计、低保真原型、色彩规范、图标规范及高保真界面。</p>
            <div className="projects__ui-tags">
              <span>Adobe XD</span><span>Photoshop</span><span>IP 形象设计</span>
              <span>用户研究</span><span>原型设计</span><span>视觉规范</span>
            </div>
          </div>
          <div className="projects__ui-stat">
            <div><span>3</span><em>张设计展板</em></div>
            <div><span>16</span><em>个设计模块</em></div>
            <div><span>完整</span><em>UI 设计流程</em></div>
          </div>
        </div>
        <UIGallery />

        {/* ★ 3D 建模 ★ */}
        <div className="projects__section-label projects__section-label--light" style={{marginTop: '80px'}}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="13" height="13">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
          次世代建模 · 3D 场景作品
        </div>
        <div
          className="projects__modeling"
          onClick={() => setModelLightbox(true)}
        >
          <img src="/modeling.png" alt="次世代建模作品" className="projects__modeling-img" />
          <div className="projects__modeling-overlay">
            <div className="projects__modeling-info">
              <span className="projects__modeling-tag">3ds Max · Blender · PBR 材质</span>
              <h3>科幻舱门场景建模</h3>
              <p>运用次世代建模技术制作高精度科幻风格场景，配合 PBR 材质系统完成金属、发光等多层材质贴图，展现工业硬表面建模能力。</p>
            </div>
            <div className="projects__modeling-zoom">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
              </svg>
              点击查看大图
            </div>
          </div>
        </div>

        {/* 建模灯箱 */}
        {modelLightbox && (
          <div className="lightbox" onClick={() => setModelLightbox(false)}>
            <div className="lightbox__inner" onClick={e => e.stopPropagation()}>
              <button className="lightbox__close" onClick={() => setModelLightbox(false)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
                  <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
              </button>
              <img src="/modeling.png" alt="建模作品" className="lightbox__img" />
              <div className="lightbox__caption">
                <span>科幻舱门场景建模 · 次世代建模技术 · PBR 材质</span>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  )
}
