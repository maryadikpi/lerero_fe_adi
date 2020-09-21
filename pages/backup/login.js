import Header from "../components/header";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();

  const onLogin = e => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <>
      <Header />
      <input placeholder="Username" />
      <input placeholder="Password" type="password" />
      <button onClick={onLogin} type="button">
        Log in
      </button>
    </>
  );
};

export default Login;
