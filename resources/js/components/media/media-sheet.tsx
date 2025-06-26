import React, { useState, useEffect, FormEventHandler } from "react";
import { Button } from "../ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet"
import { Images, LoaderCircle, ImageUp } from "lucide-react"
import { Media } from "@/types";
import useMedia from "@/hooks/use-media";
import { Editor } from "@tiptap/react";
import { Input } from "../ui/input";
import InputError from "../input-error";
import { useForm } from "@inertiajs/react";
import { toast } from "sonner";

export default function MediaSheet({ editor }: { editor: Editor | null }) {

    const [open, setOpen] = useState(false);
    const [newImage, setNewImage] = useState(false)

    const { images, nextUrl, isProcessing, getNextPage, setImages } = useMedia();

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
                    <div className="px-2 w-full">
                        <Button
                            onClick={() => setNewImage(!newImage)}
                            variant="ghost"
                            className="w-full mb-2">
                            {newImage ? "Close" : "Upload Image"}
                        </Button>
                        {
                            <div className={`${newImage ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"} overflow-y-hidden ease-in-out duration-300 transition-all`}>
                                <MediaForm setImages={setImages} />
                            </div>
                        }
                    </div>
                    {
                        images.map(image => (
                            <div className="px-2 mb-2 flex justify-center"
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

function MediaForm({ setImages }: { setImages: React.Dispatch<React.SetStateAction<Media[]>> }) {

    const [preview, setPreview] = useState<string | null>(null)

    const { data, setData, post, reset, processing, errors } = useForm({
        image: null as File | null,
        name: '',
        back: true
    })

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault()
        post(route('media.store'), {
            onSuccess: ({ props }: any) => {
                const image = props.flash?.success;
                toast.success("Uploading image successfull")
                setImages(images => [image, ...images]);
                reset()
            },
            onError: (error) => {
                toast.error(error.message || "Error uploading image")
            }
        })
    }

    return (
        <form onSubmit={handleSubmit} className="p-2 border rounded-md space-y-2">
            <div className="mb-2">
                <label className="text-xs ">Name</label>
                <Input type="text" name="name" id="name" value={data.name} onChange={e => setData('name', e.target.value)} required />
                <InputError message={errors.name} className="mt-2" />
            </div>
            <div>
                <label htmlFor="image" className="w-full flex justify-between items-center border-2 border-dashed border-gray-900 rounded-md p-4 cursor-pointer" >
                    <input
                        required
                        className="hidden"
                        type="file"
                        name="image"
                        accept=".png, .jpg, .jpeg"
                        id="image" onChange={(e) => {
                            const file = e.target.files?.[0]
                            if (file) {
                                setData('image', file);
                                setPreview(URL.createObjectURL(file));
                            }
                        }} />
                    {
                        data.image ? (
                            <div className="flex justify-between items-center w-full">
                                <img src={`${preview}`} alt="preview" className="w-full max-h-[300px] object-contain" />
                            </div>
                        ) : (
                            <>
                                <div>
                                    <div className="flex gap-2 items-center">
                                        <ImageUp size={18} />
                                        <span className="text-xs">Upload your photos here</span>
                                    </div>
                                </div>
                                <div className="text-xs">JPG, JPEG, PNG</div>
                            </>
                        )
                    }
                </label>
                <InputError message={errors.image} className="mt-2" />
            </div>
            <div>
                <Button type="submit" className="w-full" disabled={processing}>
                    {
                        processing && <LoaderCircle className="animate-spin" />
                    }
                    Upload
                </Button>
            </div>

        </form>
    )
}
