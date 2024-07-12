const { Avatar } = require("@/app/profile/ui/Components");
import styles from "./search.module.css"
function SearchCard() {
    return (
      <section className={`${styles.search_card} flex align_center`}>
        <section>
          <Avatar src="/images/postpic.png" width={100} height={100} />
        </section>
        <section>
          <b>username</b>
          <p>Full name</p>
        </section>
      </section>
    );
}

export {
    SearchCard
}