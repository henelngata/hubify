import Link from "next/link";
import { Logo, SignUpForm } from "../ui/components";

export default function SignUp() {
    // insta logo
    // form
    //links to other pages
    return (
      <main>
        <section className="width-60 margin-auto">
          <Logo />
        </section>
        <section>
          <SignUpForm />
          <p>
            Have an account? <Link href="./login">Log in</Link>
          </p>
        </section>
      </main>
    );
}