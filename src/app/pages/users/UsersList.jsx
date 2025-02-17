import User from "./User"; 

const UserList = (props) => {
  return (
    <ul>
      {props.users.map((user) => (
        <User
          key={user._id}
          _id={user._id}
          username={user.username}
          name={user.name}
          lastname={user.lastname}
          email={user.email}
        />
      ))}
    </ul>
  );
};

export default UserList;
