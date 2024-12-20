import Link from "next/link";
import Styles from "./Register.module.scss";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const RegisterView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { push } = useRouter();
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");
    const form = event.target as HTMLFormElement;
    const data = {
      email: form.email.value,
      fullname: form.fullname.value,
      phone: form.phone.value,
      password: form.password.value,
    };

    const result = await fetch("/api/user/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (result.status === 200) {
      form.reset();
      setIsLoading(false);
      push("/auth/login");
      alert("Registration successful!");
    } else {
      setIsLoading(false);
      setError("Email Sudah Terdaftar");
    }
  };
  return (
    <div className={Styles.register}>
      <h1 className={Styles.register__title}>Register</h1>
      {error && <p className={Styles.register__error}>{error}</p>}
      <div className={Styles.register__form}>
        <form onSubmit={handleSubmit}>
          <div className={Styles.register__form__item}>
            <label htmlFor="">Fullname</label>
            <input
              type="text"
              name="fullname"
              id="fullname"
              className={Styles.register__form__item__input}
            />
          </div>
          <div className={Styles.register__form__item}>
            <label htmlFor="">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className={Styles.register__form__item__input}
            />
          </div>
          <div className={Styles.register__form__item}>
            <label htmlFor="">Phone Number</label>
            <input
              type="text"
              name="phone"
              id="phone"
              className={Styles.register__form__item__input}
            />
          </div>
          <div className={Styles.register__form__item}>
            <label htmlFor="">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className={Styles.register__form__item__input}
            />
          </div>
          <button type="submit" className={Styles.register__form__button}>
            {isLoading ? "Loading" : " Register"}
          </button>
        </form>
      </div>
      <p className={Styles.register__link}>
        Sudah Punya Akun ? <Link href="/auth/login">Login</Link>
      </p>
    </div>
  );
};

export default RegisterView;
