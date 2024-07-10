import styles from "./index.module.css";

function LogoIcons() {
  return (
    <section className={`${styles.flex} ${styles.logo_icons}`}>
      <img className={styles.i} alt="" src="images/heart.svg" />
      <img className={styles.i} alt="" src="images/msg.svg" />
      <img className={styles.i} alt="" src="images/add.svg" />
    </section>
  );
}
function Logo() {
  return (
    <section className={styles.logoDropdown}>
      <img className={styles.igLogoIcon} alt="" src="/images/ig-logo.svg" />
    </section>
  );
}

function LogoBar() {
	return (
    <section className={styles.flex}>
      <Logo />
      <LogoIcons />
    </section>
  );
}

// Posts component
function UserHeader() {
	return (
    <section className={`${styles.flex}`}>
      <section className={`${styles.flex} ${styles.userheader}`}>
        <section className={styles.userheader_img}>
          <img  className={styles.userheader_img} alt="" src="images/pic.png " />
          <section />
        </section>
        <section>
          <b>Ruffles</b>
          <section>Sponsored</section>
        </section>
      </section>
    </section>
  );
}

function PostImage() {
  return (
    <img className={styles.ashleymatt1Icon} alt="" src="images/postpic.png" />
  );
}

function PostReaction() {
	return (
    <section className={`${styles.reaction} ${styles.flex}`}>
      <section className={`${styles.reaction_lefticons} ${styles.flex}`}>
        <img className={styles.reaction_icons} alt="" src="images/heart.svg" />
        <img
          className={styles.reaction_share}
          alt=""
          src="images/comment.svg"
        />
        <img className={styles.reaction_icons} alt="" src="images/share.svg" />
      </section>
      <section>
        <img
          alt=""
          src="images/bookmark.svg"
        />
      </section>
    </section>
  );
}

function PostCaption() {
  return (
    <section className={styles.usernameLoremIpsumContainer}>
      <span>
        <b className={styles.username}>{`Username `}</b>
        <span
          className={styles.loremIpsumDolor}
        >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt... `}</span>
      </span>
      <span className={styles.loremIpsumDolor}>
        <span>{`more `}</span>
      </span>
    </section>
  );
}

function LikesText() {
  return (
    <b className={styles.likes}>
      <span>{`100 `}</span>
      <span className={styles.likes1}>Likes</span>
    </b>
  );
}

function NavigationBar() {
  return (
    <section className={styles.flex}>
      <img alt="" src="images/home.svg" />
      <img alt="" src="images/search.svg" />
      <img alt="" src="images/vid.svg" />
      <img alt="" src="images/heart.svg" />
      <section>
        <img alt="" src="images/pr.png" />
        <section className={styles.nav_sectionider} />
        <section />
      </section>
    </section>
  );
}

NavigationBar;

function Post() {
  return (
    //    avatar and name
    //image
    //post reaction
    //post caption
    //view comments
    //you comment
    <section className={styles.post}>
      <UserHeader />
      <PostImage />
      <PostReaction />
      <LikesText />
      <PostCaption />
    </section>
  );
}

function Posts() {
	return (
    <section className={styles.post_section}>
      <Post />
      <Post />
      <Post />
    </section>
  );
}

export { LogoBar, Posts, NavigationBar };
