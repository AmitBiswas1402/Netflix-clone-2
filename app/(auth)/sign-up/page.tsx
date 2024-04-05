import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import GithubSignInButton from "@/app/components/GithubSigninButton";
import GoogleSignInButton from "@/app/components/GoogleSigninButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/utils/auth";
import { redirect } from "next/navigation";

export default async function SignUp() {
  const session = await getServerSession(authOptions)

  if(session){
    return redirect('/home')
  }
  
  return (
    <div className=" mt-40 flex items-center justify-center">
      <div className="rounded bg-black/70 py-10 px-6 md:mt-0 md:max-w-sm md:px-14">
        <form>
          <h1 className="text-3xl font-semibold text-white flex items-center justify-center">
            Sign Up
          </h1>
          <div className="space-y-4 mt-5">
            <Input
              type="email"
              name="email"
              placeholder="Email"
              className="bg-[#333] placeholder:text-xl placeholder:text-gray-400 w-full inline-block"
            />
            <Button
              type="submit"
              variant="destructive"
              className="w-full bg-[#e50914]"
            >
              Sign Up
            </Button>
          </div>
        </form>
        <div className="text-gray-500 text-sm mt-2">
          Already have an account? {"  "}
          <Link className="text-white hover:underline" href="/login">
            Log In now!
          </Link>
        </div>

        <div className="flex w-full justify-center items-center gap-x-3 mt-6">
          <GithubSignInButton />
          <GoogleSignInButton />
        </div>

      </div>
    </div>
  );
}
