// import './style.css';

const BtnProject = ({ link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="btn-outline btn-link">
      Link to Project
    </a>
  );
};

export default BtnProject;
