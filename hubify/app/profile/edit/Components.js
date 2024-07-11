import { Avatar } from "../ui/Components";
import {styles} from "./edit.module.css"
function TextInputBox({ label, type, name, placeholder }) {
  return (
    <section className="flex pd-1">
      <p>{label}</p>
      <input type={type} name={name} placeholder={placeholder} />
    </section>
  );
}


function ProfileEdit(params) {
  return (
    <form>
      <section  >
        <Avatar src="/images/postpic.png" width={90} height={90} />
        <button>Change Profile Pic</button>
      </section>
      <TextInputBox
        label="First Name"
        type="text"
        name="first"
        placeholder="First Name"
      />
      <TextInputBox
        label="Last Name"
        type="text"
        name="last"
        placeholder="Last Name"
      />
      <TextInputBox
        label="username"
        type="text"
        name="username"
        placeholder="username"
      />
      <TextInputBox label="Bio" type="text" name="Bio" placeholder="Bio ..." />

      <Buttons />
    </form>
  );
}

function Buttons(params) {
  return (
    <>
      <button type="reset">Cancel</button>
      <button type="submit">Done</button>
    </>
  );
}

export { ProfileEdit };
