import { BellIcon, BookmarkIcon, HomeIcon, UserIcon } from "lucide-react";
import { Button } from "./ui/button";

function ButtonGroup() {
  return (
    <div className="flex flex-row sm:flex-col items-start justify-between bg-white py-2   ">
      <Button variant="ghost" className="flex items-center">
        <HomeIcon className="sm:mr-2" />
        <span className="hidden sm:block">Home</span>
      </Button>
      <Button variant="ghost" className="flex items-center">
        <BellIcon className="sm:mr-2" />
        <span className="hidden sm:block">Notifications</span>
      </Button>
      <Button variant="ghost" className="flex items-center">
        <BookmarkIcon className="sm:mr-2" />
        <span className="hidden sm:block">Saves</span>
      </Button>

      <Button variant="ghost" className="flex items-center">
        <UserIcon className="sm:mr-2" />
        <span className="hidden sm:block">Profile</span>
      </Button>
    </div>
  );
}

export default ButtonGroup;
