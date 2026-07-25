import { Logo } from '../icons'
import './ReklamaFooter.css'

export default function ReklamaFooter() {
  return (
    <footer className="rk-footer">
      <div className="container rk-footer-inner">
        <div className="rk-footer-brand">
          <Logo height={30} />
          <span className="rk-footer-made">
            Made by <strong>nosleephouse™</strong>
          </span>
        </div>
        <div className="rk-footer-links">
          <a href="/gdpr">GDPR</a>
          <span className="rk-footer-dot" aria-hidden="true">·</span>
          <a href="mailto:nosleephouse@gmail.com">nosleephouse@gmail.com</a>
        </div>
      </div>
    </footer>
  )
}
