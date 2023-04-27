import { BellIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

function Navbar() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="relative flex justify-between lg:gap-8 xl:grid xl:grid-cols-12">
        <div className="flex md:absolute md:inset-y-0 md:left-0 lg:static xl:col-span-2">
          <div className="flex flex-shrink-0 items-center">
            <a href="/" className="">
              <span
                style={{
                  boxSizing: "border-box",
                  display: "inline-block",
                  overflow: "hidden",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: 1,
                  border: "0px none",
                  margin: "0px",
                  padding: "0px",
                  position: "relative",
                  maxWidth: "100%",
                }}
              >
                <span
                  style={{
                    boxSizing: "border-box",
                    display: "block",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: "0px none",
                    margin: "0px",
                    padding: "0px",
                    maxWidth: "100%",
                  }}
                >
                  <img
                    style={{
                      display: "block",
                      maxWidth: "100%",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: "0px none",
                      margin: "0px",
                      padding: "0px",
                    }}
                    alt=""
                    aria-hidden="true"
                    src="https://getally.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fally-circle.948b8c0c.png&w=48&q=75"
                  />
                </span>
              </span>
            </a>
          </div>
        </div>
        <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
          <div className="flex items-center px-6 py-4 md:mx-auto md:max-w-3xl lg:mx-0 lg:max-w-none xl:px-0">
            <div className="w-full">
              <Input
                placeholder="Search"
                className="w-full"
                type="search"
                aria-label="Search"
              />
            </div>
          </div>
        </div>
        <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4 gap-8">
          <Button variant="ghost" className="flex items-center">
            <BellIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
