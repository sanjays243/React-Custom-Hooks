import useFetch from "../Hooks/useFetch";

function UserList() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) return <h3>Loading...</h3>;

  if (error) return <h3>{error}</h3>;

  return (
    <div>
     <hr />
     <center> <h1>Custom User List </h1></center>

      {data.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default UserList;