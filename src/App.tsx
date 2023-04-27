import { PlusIcon, XIcon } from "lucide-react";
import { useState } from "react";
import ButtonGroup from "./components/buttongroup";
import Navbar from "./components/navbar";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { ScrollArea } from "./components/ui/scroll-area";
import { Sheet, SheetContent } from "./components/ui/sheet";
import { Textarea } from "./components/ui/textarea";

function PostCard({ post }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 mb-4">
      <div className="flex items-center mb-2">
        <div className="bg-gray-400 rounded-full h-8 w-8 mr-2"></div>
        <div className="font-semibold">{post.username}</div>
      </div>
      <div className="text-gray-600 mb-2">{post.text}</div>
      {post.url && (
        <div className="text-blue-500 hover:underline">
          <a href={post.url} target="_blank" rel="noopener noreferrer">
            {post.url}
          </a>
        </div>
      )}
      <div className="text-gray-400 text-sm mt-2">
        {new Date(post.timestamp).toLocaleString()}
      </div>
    </div>
  );
}

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      username: "John Doe",
      timestamp: "2023-04-27T10:30:00Z",
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
  ]);

  function NewPostButton() {
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
      <>
        <Sheet open={isopen}>
          <Button
            className=" flex h-10 w-10  sm:h-16 sm:w-16 items-center justify-center rounded-full bg-yellow-500 text-4xl text-white drop-shadow-lg hover:bg-yellow-700 hover:drop-shadow-2xl"
            onClick={() => setisOpen(!isopen)}
          >
            <PlusIcon />
          </Button>
          <SheetContent size="full">
            <Button
              className="absolute top-0 right-0 mt-2 mr-2"
              onClick={() => setisOpen(!isopen)}
              variant="ghost"
            >
              <XIcon />
            </Button>

            <div className="flex flex-col mx-auto items-center justify-center h-screen bg-white">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col items-center justify-center">
                  <h1 className="text-xl text-bold">New Post</h1>
                  <Textarea
                    className="mt-2"
                    placeholder="Write your post here"
                    name="description"
                    id="description"
                  />
                  <Input
                    className="mt-2"
                    placeholder="Url (optional)"
                    name="url"
                    id="url"
                    required={false}
                  />
                  <Button className="mt-2" type="submit">
                    Post
                  </Button>
                </div>
              </form>
            </div>
          </SheetContent>
        </Sheet>
      </>
    );
  }
  return (
    <div className="w-screen  bg-background">
      <Navbar />
      <main className="mx-auto flex max-h-screen max-w-[1500px]">
        <div className="fixed  h-full flex-col items-center p-2 sm:flex xl:w-[340px] xl:items-start hidden">
          <ButtonGroup />
        </div>
        <div className="max-w-2xl flex-grow overflow-hidden sm:ml-[73px] xl:ml-[370px] ">
          <ScrollArea h-xl>
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </ScrollArea>
        </div>
        <div className="ml-8 hidden space-y-5 py-1 lg:inline xl:w-[450px]"></div>
      </main>
      <div className="sm:hidden fixed bottom-0 left-0 w-screen mx-auto">
        <ButtonGroup />
      </div>
      <div className="block  fixed bottom-2 sm:bottom-10 md:right-[10%] right-[45%] z-50 ">
        <NewPostButton />
      </div>
    </div>
  );
}

export default App;
