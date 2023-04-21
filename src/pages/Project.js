import { useParams } from 'react-router-dom';
import BtnGitHub from '../components/btnGitHub/BtnGitHub';
import BtnProject from '../components/btnProject/BtnProject';
import { projects } from './../helpers/projectsList';

const Project = () => {
  const { id } = useParams();
  const project = projects[id];

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{project.title}</h1>

          <img
            src={project.imgBig}
            alt={project.title}
            className="project-details__cover"
          />

          <div className="project-details__desc">
            <p>
              In this project i used: <br /> {project.skills}
            </p>
            <p>{project.text}</p>
          </div>
          <BtnProject link={project.linkProject} />
          <BtnGitHub link={project.gitHubLink} />
        </div>
      </div>
    </main>
  );
};

export default Project;
