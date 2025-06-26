import { Plus, Check, X, LoaderCircle } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import React, { FormEventHandler, useState } from "react";
import { Popover } from "../ui/popover";
import { PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import { Command, CommandInput } from "../ui/command";
import { CommandEmpty, CommandItem, CommandList } from "cmdk";
import { Tag } from "@/types";
import { Badge } from "../ui/badge";
import { useForm } from "@inertiajs/react";
import InputError from "../input-error";
import { toast } from "sonner";

interface EditorSidebarProps {
    description: string;
    setDescription: (desc: string) => void;
    coverImage: string;
    setCoverImage: (url: string) => void;
    tags: Tag[];
    setTags: React.Dispatch<React.SetStateAction<Tag[]>>;
    selectedTags: Tag[];
    setSelectedTags: React.Dispatch<React.SetStateAction<Tag[]>>;
}

interface TagPopover {
    setTags: React.Dispatch<React.SetStateAction<Tag[]>>;
    setSelectedTags: React.Dispatch<React.SetStateAction<Tag[]>>;
}

type TagBoxProps = {
    tags: Tag[];
    selectedTags: Tag[];
    setSelectedTags: React.Dispatch<React.SetStateAction<Tag[]>>;
};

export default function EditorSidebar({
    description,
    setDescription,
    coverImage,
    tags,
    setTags,
    selectedTags,
    setSelectedTags
}: EditorSidebarProps) {
    return (
        <section>
            <h2 className="text-sm font-semibold my-2">Post Short Description</h2>
            <Textarea
                placeholder="Post Excerpt"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="mb-3"
            />
            {
                coverImage && (
                    <img src={`/storage/${coverImage}`} />
                )
            }
            <div className="w-full mb-3">
                <div className="flex justify-between items-center">
                    <h2 className="text-sm font-semibold mb-2">Tags</h2>
                    <AddTagPopover
                        setTags={setTags}
                        setSelectedTags={setSelectedTags}
                    />
                </div>
                <TagBox
                    tags={tags}
                    selectedTags={selectedTags}
                    setSelectedTags={setSelectedTags}
                />
            </div>

        </section>
    )
}

export function AddTagPopover({ setTags, setSelectedTags }: TagPopover) {

    const { data, setData, post, processing, reset, errors } = useForm({
        'name': ''
    })

    const onSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('tag.store'), {
            preserveScroll: true,
            onSuccess: ({ props }) => {

                const flash = (props as { flash?: { success?: { id: number; name: string } } }).flash;

                if (!flash?.success) return;

                const tag = {
                    id: flash.success.id,
                    name: flash.success.name,
                };

                setTags(prev => [...prev, tag]);
                setSelectedTags(prev => [...prev, tag]);
                toast.success('New Tag Created');
                reset();
            },
            onError: () => {
                toast.error('Error creating new tag.')
            }
        })
    }

    return (
        <Popover>
            <PopoverTrigger>
                <Plus size={18} />
            </PopoverTrigger>
            <PopoverContent className="p-4 border bg-[var(--background)] rounded-md shadow-md"
                side="right"
                align="start"
                sideOffset={4}
            >
                <form className="" onSubmit={onSubmit}>
                    <h2 className="text-sm font-semibold mb-1">Add new tag</h2>
                    <Input
                        placeholder="Enter tag here"
                        required
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                    />
                    <InputError message={errors.name} className="text-red-500 text-xs mt-2" />
                    <Button className="mt-2 w-full">
                        {processing && <LoaderCircle className="animate-spin" />}
                        Create New Tag
                    </Button>
                </form>
            </PopoverContent>
        </Popover>
    )
}

export function TagBox({ tags, selectedTags, setSelectedTags }: TagBoxProps) {
    const [open, setOpen] = useState(false);

    const toggleTag = (tag: Tag) => {
        const exists = selectedTags.some((t) => t.id === tag.id);
        if (exists) {
            setSelectedTags((prev) => prev.filter((t) => t.id !== tag.id));
        } else {
            setSelectedTags((prev) => [...prev, tag]);
        }
    };

    const removeTag = (id: number) => {
        setSelectedTags((prev) => prev.filter((tag) => tag.id !== id));
    };

    const isSelected = (tag: Tag) => selectedTags.some((t) => t.id === tag.id);

    return (
        <div className="space-y-2">
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        className="w-full justify-start overflow-hidden text-ellipsis whitespace-nowrap"
                    >
                        {selectedTags.length > 0
                            ? selectedTags.map((t) => t.name).join(", ")
                            : "Select tags"}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[300px] p-0 "
                    side="right"
                    align="start"
                    sideOffset={4}
                >
                    <Command className="shadow-md border p-4 rounded-md">
                        <CommandInput placeholder="Search tags..." />
                        <CommandList>
                            <CommandEmpty>No tags found.</CommandEmpty>
                            {tags.map((tag) => (
                                <CommandItem
                                    key={tag.id}
                                    onSelect={() => toggleTag(tag)}
                                    className="flex  cursor-pointer hover:underline items-center justify-between"
                                >
                                    <span>{tag.name}</span>
                                    {isSelected(tag) && <Check className="w-4 h-4 text-primary" />}
                                </CommandItem>
                            ))}
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>

            <div className="flex flex-wrap gap-2">
                {selectedTags.map((tag) => (
                    <Badge key={tag.id} variant="secondary" className="flex items-center gap-1">
                        {tag.name}
                        <button
                            type="button"
                            onClick={() => removeTag(tag.id)}
                            className="ml-1 hover:text-destructive"
                        >
                            <X className="w-3 h-3" />
                        </button>
                    </Badge>
                ))}
            </div>
        </div>
    );
}
