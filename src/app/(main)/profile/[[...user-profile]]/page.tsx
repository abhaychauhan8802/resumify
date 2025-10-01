import { UserProfile } from "@clerk/nextjs";

const Page = () => {
  return (
    <div className="mt-10 flex min-h-screen justify-center">
      <UserProfile />
    </div>
  );
};

export default Page;
