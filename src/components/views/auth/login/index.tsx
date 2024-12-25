import Link from "next/link";
import Styles from "./Login.module.scss";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";

import { signIn } from "next-auth/react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

const LoginView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { push, query } = useRouter();
  const callbackUrl: any = query.callbackUrl || "/";
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");
    const form = event.target as HTMLFormElement;
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: form.email.value,
        password: form.password.value,
        callbackUrl: callbackUrl,
      });

      if (!res?.error) {
        setIsLoading(false);
        form.reset();
        push(callbackUrl);
      } else {
        setIsLoading(false);
        setError("Email Atau Password Salah");
        form.reset();
      }
    } catch (error) {
      setIsLoading(false);
      setError("Terjadi Kesalahan Pada Server");
    }
  };
  return (
    <div className={Styles.login}>
      <h1 className={Styles.login__title}>Login</h1>
      {error && <p className={Styles.login__error}>{error}</p>}
      <div className={Styles.login__form}>
        <form onSubmit={handleSubmit}>
          <Input label="Email" name="email" type="email" />
          <Input label="Password" name="password" type="password" />
          <Button
            type="submit"
            variant="primary"
            className={Styles.login__form__button}
          >
            {" "}
            {isLoading ? "Loading" : " login"}
          </Button>
        </form>
        <hr className={Styles.login__form__divider} />
        <div className={Styles.login__form__other}>
          <Button
            type="button"
            className={Styles.login__form__button}
            onClick={() => signIn("google", { callbackUrl, redirect: false })}
          >
            {" "}
            <i className="bx bxl-google" /> Login With Google
          </Button>
        </div>
      </div>
      <p className={Styles.login__link}>
        Belum Punya Akun ? <Link href="/auth/register">Daftar</Link>
      </p>
    </div>
  );
};

export default LoginView;
