import Header from './../components/header/Header';

const Home = () => {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Front-End Developer</h2>
              <p>
                HTML5, CSS3 & SCSS, JavaScript, ReactJS, PHP-basic, GiT & GiTHuB, NPM, BEM, Figma &
                Photoshop
              </p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;
