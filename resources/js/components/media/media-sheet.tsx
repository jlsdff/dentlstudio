import { useState, useEffect } from "react";
import { Button } from "../ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet"
import { Images } from "lucide-react"
import { Media, Paginate } from "@/types";
export default function MediaSheet() {

    const [images, setImages] = useState<Media[]>([]);
    const [nextUrl, setNextUrl] = useState<string | null>(null);
    const [open, setOpen] = useState(false);

    useEffect(() => {

        if (open) {
            fetch('/medias', {
                headers: {
                    Accept: 'application/json'
                }
            })
                .then(res => res.json())
                .then(res => {
                    setNextUrl(res.next_page_url || null);
                    setImages(res.data)
                })
        }

    }, [open])

    console.log("images", images)

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
                <div className="">
                    {
                        images.map(image => (
                            <div className="px-2 my-2 flex justify-center">
                                <img className="w-full aspect-video " src={`/storage/${image.path}`} alt={image.name} />
                            </div>
                        ))
                    }
                </div>
            </SheetContent>
        </Sheet>
    )
}
