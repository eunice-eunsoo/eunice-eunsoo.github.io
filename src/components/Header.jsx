function Header() {
  return (
    <header className="site-header">
      <div className="content-container header-inner">
        <a className="wordmark" href="#top" aria-label="Eunice Lee, home">EL<span className="wordmark-dot">●</span></a>
        <nav aria-label="Primary navigation">
          <a href="#featured">Selected work</a>
          <a href="#archive">Archive</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
