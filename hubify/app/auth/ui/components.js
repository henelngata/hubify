import styles from "./signup.module.css";
function Logo() {
  return (
    <section>
      <img alt="" src="/images/ig-logo.svg" />
    </section>
  );
}

function InputTextBox({ type, placeholder, name }) {
  return (
    <input
      className={styles.input}
      type={type}
      placeholder={placeholder}
      name={name}
    />
  );
}

function Button({name}) {
  return (
    <button className={styles.button} type="submit">
     {name}
    </button>
  );
}

function SignUpForm() {
  return (
    <form>
      <InputTextBox type="email" placeholder="enter email" name="email" />
      <InputTextBox
        type="password"
        placeholder="enter password"
        name="password"
      />
      <InputTextBox
        type="password"
        placeholder="confirm password"
        name="pass"
      />
      <Button name="Sign up" />
    </form>
  );
}

function LoginForm(params) {
  return (
    <form>
      <InputTextBox type="email" placeholder="enter email" name="email" />
      <InputTextBox
        type="password"
        placeholder="enter password"
        name="password"
      />
      <Button name="Log in" />
    </form>
  );
}
export { Logo, SignUpForm, LoginForm};
