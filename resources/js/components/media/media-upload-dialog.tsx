import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTrigger
} from "@/components/ui/dialog";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { Upload, ImageUp, LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FormEvent, useState } from "react";
import { useForm } from "@inertiajs/react";
import { toast } from "sonner";
import { Input } from "../ui/input";
import InputError from "../input-error";

const filetypes = ['JPG', 'PNG', 'JPEG'];

export default function MediaDialog() {

    const [preview, setPreview] = useState<string | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    const { data, setData, post, reset, processing, errors } = useForm({
        image: null as File | null,
        name: ""
    });

    const onClose = () => {
        setIsOpen(false)
        reset()
        setPreview(null)
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        post(route('media.store'), {
            onSuccess: () => {
                toast.success("Uploading image successfull")
                reset()
                setIsOpen(false)
            },
            onError: () => {
                toast.error("Error uploading image")
            }
        })
    }

    const onOpenChange = (bool: boolean) => {
        if (!bool) {
            setIsOpen(false)
            reset()
            setPreview(null)
        }
        setIsOpen(bool)
    }

    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange} >
            <DialogTrigger>
                <Button variant='default' type="button">
                    <Upload />
                    Upload photo
                </Button>
            </DialogTrigger>
            <DialogContent>
                <form onSubmit={handleSubmit} action="/medias" method="post" encType="multipart/form-data">
                    <DialogHeader>
                        <DialogTitle>
                            Upload an image
                        </DialogTitle>
                        <DialogDescription>
                            Upload a new image for your blogs.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="my-4">
                        <div className="mb-2">
                            <label className="text-xs ">Name</label>
                            <Input type="text" name="name" id="name" value={data.name} onChange={e => setData('name', e.target.value)} required />
                            <InputError message={errors.name} className="mt-2" />
                        </div>
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
                        <p className="text-orange-500 text-xs">Maximum of 8mb.</p>
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button onClick={() => onClose()} type="button" variant="ghost" >Close</Button>
                        </DialogClose>
                        <Button type="submit" disabled={processing}>
                            {
                                processing && <LoaderCircle className="animate-spin" />
                            }
                            Upload</Button>
                    </DialogFooter>
                </form >
            </DialogContent >
        </Dialog >
    )
}
