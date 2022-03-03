import React from "react";
import { useState, useEffect } from "react";
import data from "../../database/data.json";
import Publication from "../Publication/Publication";
import "./styles.css";

function Posts() {
  const [publications, setPublications] = useState([]);
  useEffect(() => {
    setPublications(data.data);
  }, []);

  const handleDelete = (id) => {
    const newPosts = publications.filter(
      (publication) => publication.id !== id
    );
    console.log("deleted publication with id:", id);
    setPublications(newPosts);
  };

  const filterPosts = (number) => {
    switch (number) {
      case 1: {
        const newFiltered = publications.filter(
          (publication) => publication.type === "event"
        );

        setPublications(newFiltered);
        break;
      }
      case 2: {
        const newFiltered = publications.filter(
          (publication) => publication.type === "release"
        );
        setPublications(newFiltered);
        break;
      }
      case 3: {
        const newFiltered = publications.filter(
          (publication) => publication.type === "publication"
        );
        setPublications(newFiltered);
        break;
      }
      default: {
        setPublications(data.data);
        break;
      }
    }
  };

  return (
    <div>
      <div className="title">
        <h1>Endomarketing</h1>
        <div className="postOptions">
          <div className="botaoTipo">
            <select
              className="select"
              onChange={(e) => {
                console.log(publications);
                filterPosts(parseInt(e.target.value));
              }}
            >
              <option value={0}>TIPO</option>
              <option value={1}>EVENTO</option>
              <option value={2}>COMUNICADO</option>
              <option value={3}>PUBLICAÇÃO</option>
            </select>
          </div>
          <div className="botaoCriar">CRIAR +</div>
        </div>
      </div>
      <div>
        {publications.map((publication) => {
          return (
            <>
              <Publication
                title={publication.title}
                type={publication.type}
                date={publication.info.date}
                place={publication.info.place}
                key={publication.id}
                source={publication.file.url}
                confirmation={
                  publication.invited_people // Se existem convidados, exibir quantos confirmaram
                    ? publication.invited_people.length + " CONFIRMAÇÕES DE 15"
                    : ""
                }
                handleDelete={() => {
                  handleDelete(publication.id);
                }}
              />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Posts;
