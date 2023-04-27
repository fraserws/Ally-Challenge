import { formatDistanceToNow } from "date-fns";
import { BookmarkIcon, HeartIcon, MessageSquareIcon } from "lucide-react";
import { ReactTinyLink } from "react-tiny-link";
import * as z from "zod";
import { Button } from "./ui/button";

const postSchema = z.object({
  username: z.string(),
  timestamp: z.string(),
  text: z.string(),
  url: z.string().optional(),
});

function Post({ post }) {
  try {
    postSchema.parse(post);
  } catch {
    return null;
  }

  let urlComponent = null;
  try {
    const url = new URL(post.url);
    urlComponent = (
      <div className="text-blue-500 hover:underline">
        <ReactTinyLink
          cardSize="small"
          showGraphic={true}
          maxLine={2}
          minLine={1}
          url={url.href}
        />
      </div>
    );
  } catch {}

  return (
    <div className="bg-white rounded-xl  p-4 mb-4 border-2">
      <div className="flex items-center mb-2">
        <div className="bg-gray-400 rounded-full h-8 w-8 mr-2"></div>
        <div className="flex flex-col">
          <div className="font-semibold">{post.username}</div>
          <div className="text-gray-400 text-sm ">
            {formatDistanceToNow(new Date(post.timestamp))} ago
          </div>
        </div>
      </div>
      <div className="text-gray-600 mb-2">{post.text}</div>
      {urlComponent}
      <div className="flex h-7 items-center space-x-4 text-sm justify-around my-2 pt-5 border-t ">
        <Button variant="ghost" className="flex items-center">
          <HeartIcon />
          <span className="hidden sm:block">Like</span>
        </Button>
        <hr className="border-gray-300" />
        <Button variant="ghost" className="flex items-center">
          <MessageSquareIcon />
          <span className="hidden sm:block">Comment</span>
        </Button>
        <hr className="border-gray-300" />
        <Button variant="ghost" className="flex items-center">
          <BookmarkIcon />
          <span className="hidden sm:block">Save</span>
        </Button>
      </div>
    </div>
  );
}

export default Post;
