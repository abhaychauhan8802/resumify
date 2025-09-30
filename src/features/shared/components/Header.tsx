import { UserButton, UserProfile } from "@clerk/nextjs";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 p-3">
        <Logo />
        <div className="flex items-center gap-3">
          <UserButton
            userProfileMode="navigation"
            userProfileUrl="/profile"
            appearance={{
              elements: {
                avatarBox: {
                  width: 35,
                  height: 35,
                },
              },
            }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
