import './style.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Hi, my name is <em>Serhii</em>
          </strong>
          <br />a Front-End developer
        </h1>
        <div className="header__text">
          <p className="header__text-desc">
            I'm a Junior Front-End developer specializing in ReactJS, TypeScript, JavaScript, HTML5,
            CSS3, Styled-components, with a metallurgical engineering degree who successfully
            transitioned from a leadership role in a production facility to software development. My
            main passion is to create and improve products making people's lives better.
          </p>
        </div>
        <a
          href="https://github.com/fcprime?tab=repositories"
          className="btn">
          Link to my GitHub
        </a>

        <a
          href="https://drive.google.com/file/d/1mMsWvL2Jx7zaXaBGesuFj30oCvn0WV5G/view?usp=sharing"
          className="btn btn-cv">
          Download my CV
        </a>
      </div>
    </header>
  );
};

export default Header;
