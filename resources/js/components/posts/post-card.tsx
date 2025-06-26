import { Post } from "@/types"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardAction, CardFooter } from "../ui/card";
import { EllipsisVertical } from 'lucide-react'
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { format } from "date-fns";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";

interface PostCardProps {
    post: Post;
}

export default function PostCard({ post }: PostCardProps) {

    return (
        <Card >
            <CardHeader>
                <CardTitle className="line-clamp-2">
                    {post.title}
                </CardTitle>
                <CardDescription >
                    <p className="line-clamp-1 font-semibold">{post.description}</p>
                    <div className="text-sm ">
                        {
                            post.status === 'published' ? (
                                <p>Published on {format(new Date(post?.published_at ?? ""), "PPPP")}</p>
                            ) : <p>Drafted on <span className="underline">{format(new Date(post.created_at), "PPPP")}</span></p>
                        }
                    </div>
                </CardDescription>
                <CardAction>
                    <div>
                        <CardActionPopover post={post} />
                    </div>
                </CardAction>
            </CardHeader>
            <CardContent>

                <div className="w-full">
                    <img src={post.cover_image} className="object-contain aspect-video" />
                </div>
            </CardContent>
            <CardFooter className="flex gap-1">
                {
                    post.tags?.map(tag => (
                        <Badge>{tag.name}</Badge>
                    ))
                }
            </CardFooter>
        </Card >
    )
}

function CardActionPopover({ post }: { post: Post }) {

    return (
        <Popover>
            <PopoverTrigger>
                <EllipsisVertical />
            </PopoverTrigger>
            <PopoverContent className="bg-background shadow-md p-2 rounded-md flex flex-col gap-2 max-w-[125px]" align="start" side="right">
                <Button size="sm" variant='ghost'>Edit</Button>
                <Button size="sm" variant='ghost'>{post.status === 'published' ? "Unpublish" : "Publish"}</Button>
                <Button size="sm" variant='destructive'>Delete</Button>
            </PopoverContent>
        </Popover>
    )
}

