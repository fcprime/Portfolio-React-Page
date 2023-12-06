import Header from './../components/header/Header';

const Home = () => {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Skills</h2>
              <p>
                ReactJ, Typescript, JavaScript, HTML5, CSS3 & SCSS, Styled-component, BEM, Figma,
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
