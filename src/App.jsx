import './App.css'

import Squares from './components/Squares'
import GlassIcons from './components/GlassIcons'
import { BarChart2, Heart, Linkedin, FileText } from 'lucide-react'

function App() {
  return (
    <div className="page-root">
      {/* 背景层（保留用于动效组件） */}
      <div className="background-layer" aria-hidden="true">
        <Squares
          speed={0.5}
          size={40}
          direction="diagonal"
          borderColor="#232323"
          hoverColor="#222222"
        />
      </div>

      {/* 前景内容：上半屏为 hero，下半屏为可滑动卡片视窗 */}
      <main className="site-content">
        <header className="hero">
          <div className="avatar">
            <img src="src/assets/hero.png" alt="头像" />
          </div>
          <div className="intro">
            <h1>Hello, I'm Weiee</h1>
            <p>Financial Product Manager | Technically Savvy | FinTech</p>
          </div>
        </header>


        {/* four glass icons for quick links */}
        {
          (() => {
            const items = [
              { icon: <BarChart2 size={24} color="#9aa0a6" />, color: '#9aa0a6', label: 'My Tableau Public', href: 'https://public.tableau.com/shared/SZSD2D7DJ?:display_count=n&:origin=viz_share_link' },
              { icon: <Heart size={24} color="#6b6f73" />, color: '#6b6f73', label: 'My Red Book', href: 'https://www.xiaohongshu.com/user/profile/60fbc33200000000010007e5' },
              { icon: <Linkedin size={24} color="#6b6f73" />, color: '#6b6f73', label: 'My LinkedIn', href: 'https://www.linkedin.com' },
              { icon: <FileText size={24} color="#9aa0a6" />, color: '#9aa0a6', label: 'My Blog', href: '/posts' }
            ];

            return (
              <div className="glass-section">
                <GlassIcons items={items} className="glass-grid" />
              </div>
            );
          })()
        }
      </main>
    </div>
  )
}

export default App
