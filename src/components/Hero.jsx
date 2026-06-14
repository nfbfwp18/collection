import { useEffect, useRef } from 'react'
import './Hero.css'

export default function Hero() {
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {})
    }
  }, [])

  return (
    <section className="hero" id="home">
      {/* 视频背景 */}
      <div className="hero__bg">
        <video
          ref={videoRef}
          className="hero__video"
          autoPlay
          muted
          loop
          playsInline
          poster=""
        >
          {/* 占位：后续替换为真实视频 */}
        </video>
        {/* 渐变遮罩 */}
        <div className="hero__overlay" />
      </div>

      {/* 内容 */}
      <div className="hero__content container">
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          <span>浙江越秀外国语学院 · 数字媒体技术 · 蓝桥杯浙江省三等奖</span>
        </div>

        <h1 className="hero__title">
          <span className="hero__title-line hero__title-line--small">AI 实习生 · 视频剪辑实习生</span>
          <span className="hero__title-line hero__title-line--large">纪彤</span>
          <span className="hero__title-line hero__title-line--en">JI TONG</span>
        </h1>

        <p className="hero__sub">
          AIGC 创作 · 视频剪辑 · 3D 建模 · Web 可视化 · Photoshop / Premiere
        </p>

        <div className="hero__actions">
          <a href="#projects" className="hero__btn hero__btn--primary">
            查看作品
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </a>
          <a href="#contact" className="hero__btn hero__btn--ghost">
            与我联系
          </a>
        </div>

        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-num">蓝桥杯</span>
            <span className="hero__stat-label">浙江省三等奖</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-num">七月初</span>
            <span className="hero__stat-label">可以到岗</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-num">四级</span>
            <span className="hero__stat-label">大学英语证书</span>
          </div>
        </div>
      </div>

      {/* 滚动提示 */}
      <div className="hero__scroll-hint">
        <div className="hero__scroll-line" />
        <span>SCROLL</span>
      </div>
    </section>
  )
}
