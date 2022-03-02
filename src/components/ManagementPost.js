import React, { useState, useEffect } from "react";
import data from "../database/management.json";

function ManagementPost(props) {
  const [managementPost, setManagementPost] = useState([]);

  useEffect(() => {
    setManagementPost(data.data[0].boards);
  }, []);
  console.log(managementPost);

  return (
    <div>
      <h2 className="managementTitle">
        {managementPost.map((post) => {
          return (
            <div>
              <div>
                <h4>{post.title}</h4>
              </div>
              <div className="managementContent">
                <img
                  className="managementImage"
                  src={post.resume_files[0].file}
                ></img>
                <img
                  className="managementImage"
                  src={post.resume_files[1].file}
                ></img>
                <img
                  className="managementImage"
                  src={post.resume_files[2].file}
                ></img>
                <img
                  className="managementImage"
                  src={post.resume_files[3].file}
                ></img>
              </div>
            </div>
          );
        })}
      </h2>
    </div>
  );
}

export default ManagementPost;
