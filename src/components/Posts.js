import React from "react";
import { useState, useEffect } from "react";
import data from "../database/data.json";
import Publication from "./Publication";

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

  return (
    <div>
      <div>
        <h2>Endomarketing</h2>
        <div>tipo</div>
        <div>criar</div>
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
