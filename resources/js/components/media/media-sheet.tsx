import { useState, useEffect } from "react";
import { Button } from "../ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet"
import { Images, LoaderCircle } from "lucide-react"
import { Media, Paginate } from "@/types";
import useMedia from "@/hooks/use-media";
import { Editor } from "@tiptap/react";

export default function MediaSheet({ editor }: { editor: Editor | null }) {

    const [open, setOpen] = useState(false);

    const { images, nextUrl, isProcessing, getNextPage } = useMedia();

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant='ghost' >
                    <Images />
                </Button>
            </SheetTrigger>
            <SheetContent className="w-full sm:w-2xl">
                <SheetHeader>
                    <SheetTitle>Images</SheetTitle>
                    <SheetDescription>Select images to import.</SheetDescription>
                </SheetHeader>
                <div className="overflow-auto">
                    {
                        images.map(image => (
                            <div className="px-2 my-2 flex justify-center"
                                key={image.id}
                                role="button"
                                onClick={() => {
                                    setOpen(false)
                                    editor?.chain().focus().setImage({
                                        src: `/storage/${image.path}`,
                                        alt: image.name,
                                        title: image.name
                                    }).run()
                                }}>
                                <img className="w-full aspect-video object-contain rounded-md overflow-hidden hover:bg-gray-300/50"
                                    src={`/storage/${image.path}`}
                                    alt={image.name}
                                />
                            </div>
                        ))
                    }
                    <div className="flex justify-center mb-2">
                        <Button
                            variant={nextUrl ? 'default' : 'ghost'}
                            size="sm"
                            disabled={isProcessing || !nextUrl}
                            onClick={() => getNextPage()}
                        >
                            {isProcessing && <LoaderCircle className="animate-spin" />}
                            {nextUrl ? "Load more" : "No more images"}
                        </Button>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}
