import Link from "next/link";
import { LoginForm, Logo } from "../ui/components";

export default function Login(){
  return (
      <main>
        <section className="width-60 margin-auto">
          <Logo />
        </section>
        <section>
          <LoginForm />
          <p>
            Dont have an account? <Link href="./signup">Sign up</Link>
          </p>
        </section>
      </main>
    );
}