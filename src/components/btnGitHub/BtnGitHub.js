import gitHubIcon from './gitHub-black.svg';
import './style.css';

const BtnGitHub = ({ link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="btn-outline">
      <img
        src={gitHubIcon}
        alt=""
      />
      Link to Project in GitHub
    </a>
  );
};

export default BtnGitHub;
