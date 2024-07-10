import { Avatar, ProfileBio, ProfileEdit, ProfileGrid, ProfileMeta } from "./ui/Components";


export default function Profile() {
    return (
        <main>
            <section>
                <Avatar />
                <ProfileMeta />
            </section>
            <section>
                <ProfileBio name="Jacob West" bio="Digital goodies designer @pixsellz 
Everything is designed."/>
            </section>
            <section>
                <ProfileEdit></ProfileEdit>
            </section>
            <section>
                <ProfileGrid />
            </section>
       </main>
    )
}