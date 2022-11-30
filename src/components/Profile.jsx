import styles from "./Profile.module.css";

const Profile = (props) => {
  let userId = location.pathname.split("/")[2];
  let user = props.function(userId);
  
  // console.log(user);
  return (
    <div className="row">
      <div className="col-sm-3">
        <img src={user.avatar} alt="" width={"100%"}/>
      </div>
      <div className="col-sm-9">
        <h1 style={{backgroundColor: "lightblue"}}>{user.name} {user.lastname}</h1>
        <h2 className={styles.about}>{user.about}</h2>
        <p className={styles.email}>E-mail: {user.email}</p>
        <p style={{fontWeigth: "700"}}>Id: {user.id}</p>
        <p className={styles.paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium animi, officiis repellat saepe perspiciatis dolorum adipisci iure hic sequi aperiam. Iusto, rem recusandae minima facilis quibusdam accusantium quo excepturi vitae.</p>
      </div>
    </div>
  );
};

export default Profile;