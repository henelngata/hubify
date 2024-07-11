import { Avatar, ProfileBio, ProfileEdit, ProfileGrid, ProfileMeta } from "./ui/Components";


export default function Profile() {
    return (
        <main>
            <section className=" flex border">
                <Avatar
                    src="/images/postpic.png"
                    width={256}
                    height={256}
                    alt="An avatar profile pic" />
                <ProfileMeta />
            </section>
            <section>
                <ProfileBio name="Jacob West" bio="Digital goodies designer @pixsellz 
Everything is designed.Digital goodies designer @pixsellz 
Everything is designed.Digital goodies designer @pixsellz 
Everything is designed.Digital goodies designer @pixsellz 
Everything is designed.Digital goodies designer @pixsellz 
Everything is designed."/>
            </section>
            <section>
                <ProfileEdit></ProfileEdit>
            </section>
            <section>
                <section>
                    <img alt="" src="grid-tab.svg" />
                </section>
                <ProfileGrid />
            </section>
           
       </main>
    )
}