import { PlusIcon, XIcon } from "lucide-react";
import { useState } from "react";
import ButtonGroup from "./components/buttongroup";
import Navbar from "./components/navbar";
import Post from "./components/post";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { ScrollArea } from "./components/ui/scroll-area";
import { Sheet, SheetContent } from "./components/ui/sheet";
import { Textarea } from "./components/ui/textarea";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      username: "John Doe",
      timestamp: "2000-04-27T10:30:00Z",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      url: "http://www.monohonramen.com/",
    },
    {
      id: 2,
      username: "Jane Doe",
      timestamp: "2023-04-26T14:30:00Z",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      url: "https://www.dominos.co.uk/",
    },
    {
      id: 3,
      username: "Fraser",
      timestamp: "2023-04-26T14:30:00Z",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      url: "https://www.phocafe.co.uk/",
    },
    {
      id: 4,
      username: "test",
      timestamp: "2023-04-26T14:30:00Z",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    },
  ]);

  function NewPostSection() {
    const [isopen, setisOpen] = useState(false);
    const handleSubmit = (e) => {
      e.preventDefault();
      const newPost = {
        id: posts.length + 1,
        username: "A test user",
        timestamp: new Date().toISOString(),
        text: e.target.description.value,
        url: e.target.url.value || null,
      };
      setPosts([...posts, newPost]);
      setisOpen(false);
    };
    return (
      <div className="overflow-hidden">
        <Sheet open={isopen}>
          <Button
            className="flex items-center justify-center w-16 h-16 text-4xl text-white bg-yellow-500 rounded-full shadow-lg hover:bg-yellow-700 hover:shadow-xl fixed right-[42%] bottom-4 sm:bottom-8 sm:right-8 z-50"
            onClick={() => setisOpen(!isopen)}
          >
            <PlusIcon />
          </Button>

          <SheetContent size="full">
            <div className="flex flex-col h-full w-full bg-white">
              <div className="p-4 border-b-2 border-gray-200">
                <Button
                  className="text-gray-500 hover:text-gray-600 transition-all ease-in-out duration-200 focus:outline-none"
                  onClick={() => setisOpen(false)}
                >
                  <XIcon />
                </Button>
              </div>
              <div className="flex flex-col h-full">
                <div className="p-4 flex-grow">
                  <h1 className="text-xl font-bold">New Post</h1>
                  <form onSubmit={handleSubmit} className="mt-4">
                    <Textarea
                      className="w-full h-40 resize-none border-2 border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring focus:ring-yellow-500"
                      placeholder="Write your post here"
                      name="description"
                      id="description"
                    />
                    <Input
                      className="w-full h-10 border-2 border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring focus:ring-yellow-500"
                      placeholder="Url (optional)"
                      name="url"
                      id="url"
                      required={false}
                    />
                    <Button
                      className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded-lg transition-all ease-in-out duration-200 focus:outline-none focus:ring focus:ring-yellow-500"
                      type="submit"
                    >
                      Post
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    );
  }
  return (
    <div className="overflow-hidden scrollbar-none ">
      <Navbar />
      <main className="mx-auto pt-32 flex max-h max-w-[1500px]">
        <div className="fixed  h-full flex-col items-center p-2 sm:flex xl:w-[340px] xl:items-start hidden">
          <ButtonGroup />
        </div>
        <div className="max-w-2xl flex-grow overflow-hidden sm:ml-[73px] xl:ml-[370px] ">
          <ScrollArea h-xl>
            {posts.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </ScrollArea>
        </div>
        <div className="ml-8 hidden space-y-5 py-1 lg:inline xl:w-[450px]"></div>
      </main>
      <div className="flex-w-screen">
        <div className="sm:hidden fixed bottom-0 left-0 w-screen mx-auto">
          <ButtonGroup />
        </div>
        <NewPostSection />
      </div>
    </div>
  );
}

export default App;
