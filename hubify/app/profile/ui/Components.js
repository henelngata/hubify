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
       <section>
      <b>{ number}</b>
      <p>{ text}</p>
  </section>
    )
   
}


function ProfileMeta(params) {
  return (
    <section className="flex">
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
    <button>
      Edit Profile
    </button>
  )
}

function ProfileGrid() {
  return (
    <section>
      <img src="/images/pr.png" alt="alal" />
      <img src="/images/pr.png" alt="alal" />
      <img src="/images/pr.png" alt="alal" />
      <img src="/images/pr.png" alt="alal" />
      <img src="/images/pr.png" alt="alal" />
      <img src="/images/pr.png" alt="alal" />
      
    </section>
  )
}

export {
  ProfileMeta,
  Avatar,
  ProfileBio,
  ProfileEdit,
  ProfileGrid
}