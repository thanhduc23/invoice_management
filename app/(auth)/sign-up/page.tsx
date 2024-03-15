import SignUp from "@/components/shared/SignUpForm";

const SignUpPage = () => {
  return (
    <div className="flex items-center justify-center flex-col p-10  ">
      <h1 className="text-3xl font-bold mb-5">Sign up</h1>
      <SignUp />
    </div>
  );
};

export default SignUpPage;
