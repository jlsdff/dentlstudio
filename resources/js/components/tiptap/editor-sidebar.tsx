import { Plus, Search } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useEffect, useState } from "react";
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
    setTags: (tags: Tag[]) => void;
    selectedTags: Tag[];
    setSelectedTags: (tags: Tag[]) => void;
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
                <TagComboBox />
            </div>

        </section>
    )
}

function TagComboBox() {

    const [open, setOpen] = useState(false)

    useEffect(() => {
        fetch('/tags', {
            method: 'GET',
            headers: {
                Accept: 'application/json'
            }
        })
            .then(res => res.json())
            .then(res => {
                setTags(res.map((tag: { id: number, name: string }) => ({ id: tag.id, value: tag.name })))
            })
    }, []);


    return (
        <div>
            <Command>
                <CommandInput placeholder="Add tags"
                    onBlur={() => setOpen(false)}
                    onFocus={() => setOpen(true)}
                />
                <CommandList>
                    <CommandGroup className={`${open ? "block" : "hidden"}`} >
                        {
                            tags.map(tag => (
                                <CommandItem
                                    className="px-2 py-1 border my-2 rounded-md hover:bg-gray-300/50 cursor-pointer"
                                    key={tag.id}>
                                    <div onClick={() => tagSelect(tag)}>
                                        {tag.value}
                                    </div>
                                </CommandItem>
                            ))
                        }
                    </CommandGroup>
                </CommandList>
            </Command>
            <div>
                {
                    selected.map(sel => (
                        <Badge>{sel.value}</Badge>
                    ))
                }
            </div>
        </div>
    )
}
