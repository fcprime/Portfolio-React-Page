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
            My goal is to bring user interfaces to life. I have a passion for creating appealing and
            user-friendly websites that deliver an exceptional user experience. My skillset includes
            a understanding of HTML, CSS, and JavaScript, as well as experience with a framework
            such as React. <br />
            In my portfolio, you'll find examples of projects that showcase my abilities to develop
            responsive websites. In addition to my technical skills, I am also a strong communicator
            and collaborator. <br /> My portfolio demonstrates my ability to work on projects
            ranging from simple landing pages to complex web applications. I am constantly learning
            and staying up-to-date with the latest technologies and trends in front-end development.
          </p>
        </div>
        <a
          href="https://github.com/fcprime?tab=repositories"
          className="btn">
          Link to my GitHub
        </a>

        <a
          href="https://drive.google.com/file/d/1lX6j2hctBhlL42r0QlPiPhL2LHWdXS8T/view?usp=share_link"
          className="btn btn-cv">
          Download my CV
        </a>
      </div>
    </header>
  );
};

export default Header;
