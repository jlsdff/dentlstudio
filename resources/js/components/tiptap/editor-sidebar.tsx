import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

interface EditorSidebarProps {
    description: string;
    setDescription: (desc: string) => void;
    coverImage: string;
    setCoverImage: (url: string) => void;
}
export default function EditorSidebar({ description, setDescription, coverImage, setCoverImage }: EditorSidebarProps) {
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
            <div className="flex justify-between items-center mb-3">
                <h2 className="text-sm font-semibold mb-2">Tags</h2>
                <Button size='sm' variant='ghost'>
                    <Plus />
                </Button>
            </div>

        </section>
    )
}

