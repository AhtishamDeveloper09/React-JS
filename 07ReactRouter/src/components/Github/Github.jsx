import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/AhtishamDeveloper09")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log("Data:", data);
  //         setData(data);
  //       });
  //   }, []);

  return (
    <div className="bg-gray-600 text-center m-4 text-white p-4 text-3xl">
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt="Github Picture" width={300} />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  let response = await fetch("https://api.github.com/users/AhtishamDeveloper09");
  return response.json();
};
