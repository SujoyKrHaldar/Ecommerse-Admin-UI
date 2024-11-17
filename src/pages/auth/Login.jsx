import LoginForm from "../../components/ui/forms/LoginForm";
import { MetaTags } from "../../components/shared";
import Logo from "../../assets/svg/Logo";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <MetaTags
        title="Login • Ecommerse"
        description="Login to your account"
        conicalRoute="/login"
      />

      <section className="bg-zinc-100 w-full py-16 h-screen">
        <div className="relative w-full h-full flex items-center justify-center ">
          <div className="w-full max-w-md p-10 bg-white border border-zinc-400">
            <div className="flex flex-col justify-center items-center mb-8">
              <div className="opacity-20">
                <Logo />
              </div>
              <h1 className="text-[2.5rem] font-semibold mt-2 -mb-1">
                Welcome back
              </h1>
              <p>
                Please login to access the{" "}
                <Link className="text-[1rem]" to="/">
                  Dashboard
                </Link>
              </p>
            </div>

            <LoginForm className="space-y-4 mt-4 mb-4" />

            <p className="text-sm text-center">
              By continuing, I agree to the Terms of Use & Privacy Policy
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
