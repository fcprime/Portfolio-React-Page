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
            Thanks to the creation of this site. <br /> I began to use React technology
            professionally, gained a lot of experience, figured out many bugs
          </p>
        </div>
        <a href="https://github.com/fcprime?tab=repositories" className="btn">
          Link to my GitHub
        </a>

        <a
          href="https://drive.google.com/file/d/1n3vqdSkCc2rqKuXqDEH46w3prvKP_Ar_/view?usp=share_link"
          className="btn btn-cv">
          Download my CV
        </a>
      </div>
    </header>
  );
};

export default Header;
