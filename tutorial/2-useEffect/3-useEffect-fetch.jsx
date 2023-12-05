import React, { useEffect, useState } from "react";

const baseUrl = 'https://api.github.com/users/';
const usernames = ['monalisa octocat', 'user2', 'user3','user4','user5','user6'];  // Add specific usernames or an empty array for all users

function UseEffectFetch() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  const getUsers = async () => {
    try {
      const promises = usernames.map(async (username) => {
        const response = await fetch(`${baseUrl}${username}`);
        const user = await response.json();
        return user;
      });

      const usersData = await Promise.all(promises);
      setUsers(usersData);
    } catch (error) {
      setError('Error fetching data');
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h2>Github users</h2>
      {error && <p>{error}</p>}
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url} target="_blank" rel="noopener noreferrer">
                  Profile
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default UseEffectFetch;
