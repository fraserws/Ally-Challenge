import { BellIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "./ui/menubar";

function Hamburger() {
  return (
    <div>
      <Menubar className="border-none">
        <Button variant="ghost">
          <BellIcon />
        </Button>
        <MenubarMenu>
          <MenubarTrigger>
            <Avatar>
              <AvatarImage
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd1muf25xaso8hp.cloudfront.net%2Fhttps%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1579307395773x896318573488014000%2F157930731729444037.png%3Fw%3D%26h%3D%26auto%3Dcompress%26dpr%3D1%26fit%3Dmax&f=1&nofb=1&ipt=e4c37948691c61d4bc26e99712d7e74f15b59aa39ff45f4bde92903774ad0ce7&ipo=images"
                alt="@shadcn"
              />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
          </MenubarTrigger>
          <MenubarContent className="sm:max-w-xs w-screen bg-white">
            <MenubarItem>Your Profile</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Settings</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Sign out</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
}

export default Hamburger;
