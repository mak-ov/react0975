import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <div className="row">
      <div className="col-sm-3">
        <img src="https://www.seekpng.com/png/full/356-3562377_personal-user.png" alt="" width={"100%"}/>
      </div>
      <div className="col-sm-9">
        <h1 style={{backgroundColor: "lightblue"}}>Фамилия и Имя</h1>
        <h2 className={styles.about}>О себе</h2>
        <p>E-mail: ivan@ya.ru</p>
        <p>Id: 2</p>
        <p className={styles.paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium animi, officiis repellat saepe perspiciatis dolorum adipisci iure hic sequi aperiam. Iusto, rem recusandae minima facilis quibusdam accusantium quo excepturi vitae.</p>
      </div>
    </div>
  );
};

export default Profile;