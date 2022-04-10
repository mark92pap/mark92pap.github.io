import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GithubApi from "../apis/github";
import { Spinner } from "../components/icons";

import "./Projects.css";
import "../utilities.css";

const Projects = () => {
  const { id } = useParams();
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  const GetProjects = async () => {
    var repos = await GithubApi.get("/repos");

    repos = repos.data.sort((a, b) => {
      if (a.created_at > b.created_at) {
        return -1;
      }
      return 1;
    });

    repos = repos.map((repo) => {
      return {
        id: repo.id,
        name: repo.name,
        url: repo.url,
        description: repo.description,
        languages_url: repo.languages_url,
        ...repo,
      };
    });
    setRepos(repos);
    setLoading(false);
  };

  useEffect(() => {
    GetProjects();
  }, []);

  const RenderProject = (id) => {
    var repo = repos.find((repo) => {
      return String(repo.id) === id;
    });
    return (
      <>
        <h2>{repo.name}</h2>
      </>
    );
  };

  const RenderProjectList = () => {
    return (
      <>
        <section className="projects-sub-head bg-light py-3">
          <div className="container">
            <h1 className="md">Latest Projects</h1>
            <h4>More coming soon . . .</h4>
          </div>
        </section>
        <section className="m-2">
          <h2>My Public GitHub Repos</h2>
          <div className="grid p-2">
            {repos.map((r) => {
              return (
                <section className="card flex align-start" key={r.id}>
                  <div className="container grow">
                    <h2
                      className="md gh-link"
                      onClick={() => {
                        window.open(
                          r.html_url,
                          "_blank",
                          "noopener,noreferrer"
                        );
                      }}
                    >
                      {r.name}
                    </h2>
                    <span className="xs left">
                      <i>
                        {r.language} - Created: {formatDate(r.created_at)}
                      </i>
                    </span>
                    <p>{r.description}</p>
                  </div>
                </section>
              );
            })}
          </div>
        </section>

        <div className="projects-foot"></div>
      </>
    );
  };

  const formatDate = (date) => {
    return date.replace(/T.*/, "");
  };

  return (
    <section>
      {loading ? (
        <div className="loading">
          <div>{Spinner}</div>
        </div>
      ) : id ? (
        RenderProject(id)
      ) : (
        RenderProjectList()
      )}
    </section>
  );
};

export default Projects;
