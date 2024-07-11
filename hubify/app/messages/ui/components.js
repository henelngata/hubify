
const { Avatar } = require("@/app/profile/ui/Components");


function Chat() {
    return (
      <>
        <section>
          <Avatar src="/images/postpic.png" width={56} height={56} />
        </section>
            <section>
                <section>
                    <b>Joshua_j</b>
                    <p>Hahaha told yaaaa</p>
                </section>
                <p>Now</p>
        </section>
      </>
    );
}

function OvalImage() {
return (
<img className={styles.ovalIcon} alt="" src="Oval.png" />);
};


export {
    Chat
}