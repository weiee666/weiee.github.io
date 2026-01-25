
import './App.css'

import Squares from './components/Squares';

function App() {
  return (
    <div className="page-root">
      {/* 背景层（保留用于动效组件） */}
      <div className="background-layer" aria-hidden="true">
  
        <Squares 
        speed={0.5}
        squareSize={40}
        direction='diagonal' // up, down, left, right, diagonal
        borderColor='#fff'
        hoverFillColor='#222'
          direction="diagonal"
          borderColor="#232323"
          hoverColor="#222222"
          size={40}
        />
      </div>

      {/* 前景内容 */}
      <main className="site-content">
        <header className="hero">
          <div className="avatar">
            <img src="/src/assets/hero.png" alt="头像" />
          </div>
          <div className="intro">
            <h1>你好，我是 Weiee</h1>
            <p>前端工程师 · Web 视觉交互 · 喜欢制作有趣的动效和界面</p>
          </div>
        </header>

        <section className="links-grid" aria-label="快速入口">
          <a className="card" href="/posts/post-1">
            <h3>文章一</h3>
            <p>关于前端性能优化的实践</p>
          </a>
          <a className="card" href="/posts/post-2">
            <h3>文章二</h3>
            <p>可访问性与语义化的要点</p>
          </a>
          <a className="card" href="/posts/post-3">
            <h3>文章三</h3>
            <p>动画与微交互的实现</p>
          </a>
          <a className="card" href="/posts/post-4">
            <h3>文章四</h3>
            <p>构建可维护的组件库</p>
          </a>
        </section>
      </main>
    </div>
  )
}

export default App
