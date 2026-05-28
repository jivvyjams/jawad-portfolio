function Header() {
  return (
    <header>
      <img
        className="profile"
        src="/src/assets/cool.png"
        alt="grinning smiley face with sunglasses giving thumbs up"
        width="200"
      />
      <div className="title">
        <h1>Jawad Al Bdiwi</h1>
        <p>Hello and welcome to my portfolio page!</p>
      </div>
      <button className="theme-toggle" id="theme-toggle">
        <img src="/src/assets/dark-theme.svg" alt="theme toggle icon" />
      </button>
    </header>
  );
}

export default Header;
