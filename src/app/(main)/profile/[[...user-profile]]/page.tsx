import { UserProfile } from "@clerk/nextjs";

const ProfilePage = () => {
  return (
    <div className="mt-10 flex min-h-screen justify-center">
      <UserProfile />
    </div>
  );
};

export default ProfilePage;
