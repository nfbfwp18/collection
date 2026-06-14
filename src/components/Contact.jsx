import './Contact.css'

export default function Contact() {
  return (
    <footer className="contact" id="contact">
      <div className="contact__bg">
        <div className="contact__bg-shape contact__bg-shape--1" />
        <div className="contact__bg-shape contact__bg-shape--2" />
      </div>

      <div className="container contact__inner">
        {/* 顶部文字 */}
        <div className="contact__top">
          <div className="contact__eyebrow">
            <span className="contact__eyebrow-line" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="contact__heading">
            期待与你<br/>
            <span className="contact__heading-accent">共同创作</span>
          </h2>
          <p className="contact__sub">
            无论是视频项目合作、实习机会，还是一次创意交流，
            <br />都欢迎通过以下方式联系我。
          </p>
        </div>

        {/* 联系方式卡片组 */}
        <div className="contact__cards">
          <a href="tel:13375822570" className="contact__card">
            <div className="contact__card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
            </div>
            <div className="contact__card-body">
              <span className="contact__card-label">电话</span>
              <span className="contact__card-value">133 7582 2570</span>
            </div>
            <div className="contact__card-arrow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M7 17L17 7M17 7H7M17 7v10"/>
              </svg>
            </div>
          </a>

          <a href="mailto:3036404446@qq.com" className="contact__card">
            <div className="contact__card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </div>
            <div className="contact__card-body">
              <span className="contact__card-label">邮箱</span>
              <span className="contact__card-value">3036404446@qq.com</span>
            </div>
            <div className="contact__card-arrow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M7 17L17 7M17 7H7M17 7v10"/>
              </svg>
            </div>
          </a>

          <div className="contact__card contact__card--location">
            <div className="contact__card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <div className="contact__card-body">
              <span className="contact__card-label">状态</span>
              <span className="contact__card-value">随时可到岗</span>
            </div>
            <div className="contact__card-badge">招募中</div>
          </div>
        </div>

        {/* 分割线 */}
        <div className="contact__divider" />

        {/* 底部版权 */}
        <div className="contact__bottom">
          <div className="contact__brand">
            <span className="contact__brand-cn">纪彤</span>
            <span className="contact__brand-en">JI TONG · Digital Media & Video Production</span>
          </div>
          <div className="contact__meta">
            <span>浙江越秀外国语学院 · 数字媒体技术 · 2023—2027</span>
            <span className="contact__copy">© 2026 纪彤 Portfolio</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
