const ProjectCard = ({ pic, title, body, source, site }) => {
  return (
    <div className="card p-2">
      <img src={pic} alt="" className="card-img-top" />
      <div>
        <div className="card-body">
          <a
            href={site}
            target="_blank"
            className="text-decoration-none text-black fs-2">
            {title}
          </a>
          <p className="card-text">{body}</p>
        </div>
        <div className="d-flex flex-column">
          <a
            href={site}
            target="_blank"
            className="btn btn-danger text-decoration-none text-white mb-2">
            Go to the site!
          </a>
          <a
            href={source}
            target="_blank"
            className="btn btn-outline-danger text-decoration-none text-danger">
            Go to the code!
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
