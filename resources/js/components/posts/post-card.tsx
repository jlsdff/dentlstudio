import { Post, SharedData } from "@/types"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardAction, CardFooter } from "../ui/card";
import { EllipsisVertical, Trash } from 'lucide-react'
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { format } from "date-fns";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";
import { router } from "@inertiajs/react";
import { toast } from "sonner";
import { useState } from "react";
import { SquarePen, BookCheck, BookDashed } from 'lucide-react';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../ui/alert-dialog";

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
                                <p>Published on <span className="underline">{format(new Date(post?.published_at ?? ""), "PPPP")}</span> </p>
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
                        <Badge key={tag.id}>{tag.name}</Badge>
                    ))
                }
            </CardFooter>
        </Card >
    )
}

function CardActionPopover({ post }: { post: Post }) {

    const [open, setOpen] = useState(false);

    const handleEdit = () => {
        router.visit(`/post/${post.slug}/edit`)
    }

    const handleChangePublish = () => {
        router.patch(route('post.update', post.id), {
            change_status: post.status === 'published' ? 'draft' : 'published'
        }, {
            onError: () => {
                toast.error("Something went wrong")
            },
            onFinish: () => {
                setOpen(false)
            }
        });
    }

    const handleDelete = () => {
        router.delete(route('post.destroy', post.id), {
            onFinish: () => {
                setOpen(false)
            }
        });
    }


    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger>
                <EllipsisVertical />
            </PopoverTrigger>
            <PopoverContent className="bg-background shadow-md p-2 rounded-md flex flex-col gap-2 max-w-[125px]" align="start" side="right">
                <Button size="sm" variant='ghost' onClick={() => handleEdit()} className="flex items-center justify-start">
                    <SquarePen />
                    Edit
                </Button>
                <Button size="sm" variant='ghost' onClick={() => handleChangePublish()} className="flex items-center justify-start">
                    {post.status === 'published' ? <><BookDashed /> Unpublish</> : <><BookCheck /> Publish</>}
                </Button>
                <DeleteButton handleDelete={handleDelete} />
            </PopoverContent>
        </Popover>
    )
}

function DeleteButton({ handleDelete }: { handleDelete: () => void }) {

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button size="sm" variant='destructive' className="flex items-center justify-start " >
                    <Trash />
                    Delete
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete the post and remove from the servers.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => handleDelete()}>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

