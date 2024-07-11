import Image from "next/image";
import styles from "./messages.module.css"
import Link from "next/link";
const { Avatar } = require("@/app/profile/ui/Components");

function SearchBar() {
  return (
    <section className={`${styles.search} flex align_center`}>
      <Image
        className={styles.search_icon}
        src="/images/search-icon.svg"
        width={14}
        height={14}
        alt="the search icon"
      />
      <input
        className={styles.search_input}
        type="text"
        name="search"
        placeholder="search"
      ></input>
    </section>
  );
    
}


function Chat() {
    return (
      <>
        <section className={`${styles.chat} flex align_center`}>
          <section>
            <OvalImage />
          </section>
          <section className={`${styles.chat_text}  flex align_center`}>
            <section>
              <b>Joshua_j</b>
              <p>Hahaha told yaaaa</p>
            </section>
            <p>Now</p>
          </section>
        </section>
      </>
    );
}

function OvalImage() {
return (
<img className={styles.ovalIcon} alt="" src="images/postpic.png" />);
};

function TopBar() {
  return (
    <section className="border flex">
      <p>Username</p>
      <Link href="#"> <img src="images/add-chat.svg" alt="add icon" width={20} height={20}/></Link>
    </section>
  )
}
export {
  Chat,
  SearchBar,
  TopBar
}