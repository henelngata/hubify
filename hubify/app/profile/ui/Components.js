import Image from "next/image";
import styles from "@/app/profile/ui/components.module.css"
function Avatar({ src, width, height }) {
  return (
    <section className={styles.avatar}>
      <Image
        src={src}
        width={width}
        height={height}
        alt="An avatar profile pic"
      />
    </section>
  );
}

function ProfileMetaText({ number, text }) {
  return (
       <section className={`${styles.profile_text}  `}>
      <b>{ number}</b>
      <p>{ text}</p>
  </section>
    )
   
}


function ProfileMeta(params) {
  return (
    <section className="flex align_center  width-60">
      <ProfileMetaText number={54} text="Posts" />
      <ProfileMetaText number={834} text="Followers" />
      <ProfileMetaText number={54} text="Following" />
      
    </section>
  )
}
function ProfileBio({name, bio}) {
    return (
        <section>
        <b>{ name}</b>
        <p>{ bio}</p>
        </section>
    )
}

function ProfileEdit() {
  return (
    <button className={styles.rectangle}>
      Edit Profile
    </button>
  )
}

function ProfileGrid() {
  return (
    <>
      <Image className={styles.gridTabIcon} src="images/grid-tab.svg" width={50} height={50} alt="girf tab" />
    <section className={styles.grid}>
      <PostPic src="/images/postpic.png" width={124} height={124}/>
      <PostPic src="/images/postpic.png" width={124} height={124} />
      <PostPic src="/images/postpic.png" width={124} height={124}/>
      <PostPic src="/images/postpic.png" width={124} height={124} />
      <PostPic src="/images/postpic.png" width={124} height={124}/>
      <PostPic src="/images/postpic.png" width={124} height={124} />
      
      </section>
      </>
  )
}
function PostPic({src, width, height}) {
  return (
    <Image
      src={src}
      alt="your pics"
      width={width}
      height={height}
    />
  )
 

}
export {
  ProfileMeta,
  Avatar,
  ProfileBio,
  ProfileEdit,
  ProfileGrid
}