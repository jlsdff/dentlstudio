import { Plus, Search, Check, X } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import React, { useEffect, useRef, useState } from "react";
import { Popover } from "../ui/popover";
import { PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import { Command, CommandInput } from "../ui/command";
import { CommandEmpty, CommandGroup, CommandItem, CommandList } from "cmdk";
import { Tag } from "@/types";
import { Badge } from "../ui/badge";

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

interface ComboBoxProps {
    tags: Tag[];
    setTags: React.Dispatch<React.SetStateAction<Tag[]>>;
    selectedTags: Tag[];
    setSelectedTags: React.Dispatch<React.SetStateAction<Tag[]>>;
}

export default function EditorSidebar({
    description,
    setDescription,
    coverImage,
    setCoverImage,
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
                <h2 className="text-sm font-semibold mb-2">Tags</h2>
                <TagBox
                    tags={tags}
                    selectedTags={selectedTags}
                    setSelectedTags={setSelectedTags}
                />
            </div>

        </section>
    )
}

type TagBoxProps = {
    tags: Tag[];
    selectedTags: Tag[];
    setSelectedTags: React.Dispatch<React.SetStateAction<Tag[]>>;
};

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
// function TagComboBox({ tags, setTags, selectedTags, setSelectedTags }: ComboBoxProps) {
//
//     const [open, setOpen] = useState(false)
//     const timeout = useRef<NodeJS.Timeout>(null)
//
//     const select = (tag: { id: number, name: string }) => {
//         const exist = selectedTags.some(t => t.id === tag.id)
//         if (exist) {
//             setSelectedTags((prev) => prev.filter(t => t.id !== tag.id))
//         } else {
//             setSelectedTags((prev) => [...prev, { id: tag.id, name: tag.name }])
//         }
//     }
//
//     return (
//         <div>
//             <Command>
//                 <CommandInput placeholder="Add tags"
//                     onBlur={() => {
//                         setTimeout(() => {
//                             setOpen(false)
//                         }, 2000)
//                     }}
//                     onFocus={() => setOpen(true)}
//                 />
//                 <CommandList>
//                     <CommandGroup className={`${open ? "block" : "hidden"}`} >
//                         {
//                             tags.map(tag => {
//
//                                 const rename = { id: tag.id, value: tag.name }
//                                 console.log("Tag", tag)
//
//                                 return (
//                                     <CommandItem
//                                         className="px-2 py-1 border my-2 rounded-md hover:bg-gray-300/50 cursor-pointer"
//                                         key={rename.id}
//                                         onSelect={() => select(tag)}
//                                     >
//                                         {rename.value}
//                                     </CommandItem>
//                                 )
//
//                             })
//                         }
//                     </CommandGroup>
//                 </CommandList>
//             </Command>
//             <div>
//                 {
//                     selectedTags.map(tag => (
//                         <Badge key={tag.id}>{tag.name}</Badge>
//                     ))
//                 }
//             </div>
//         </div>
//     )
// }
