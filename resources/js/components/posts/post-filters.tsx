import { FormEventHandler } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { LoaderCircle, Search } from "lucide-react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";
import { useForm } from "@inertiajs/react";

interface Selection {
    id: number;
    value: string;
    label: string;
}

interface StatusSelectProps {
    selected: Selection;
    setSelected: (selection: Selection) => void
}

export default function PostFilters() {

    const { data, setData, get, reset, processing } = useForm({
        name: "",
        selected: { id: 1, value: "all", label: "All" }
    })

    const onSubmit: FormEventHandler = (e) => {
        e.preventDefault()
        get(route("post.index", {
            search: data.name,
            status: data.selected.value !== 'all' ? data.selected.value : null,
        }), {
            preserveScroll: true,
            preserveState: true,
        });
    }

    return (
        <form className="flex items-end gap-2" onSubmit={onSubmit}>
            <div className="flex-1">
                <Label htmlFor="name">Search Posts</Label>
                <Input placeholder="Post title" id="name" value={data.name} onChange={(e) => setData('name', e.target.value)} />
            </div>
            <div>
                <StatusSelect selected={data.selected} setSelected={(value) => setData('selected', value)} />
            </div>
            <Button size="icon" disabled={processing}>
                {processing ? <LoaderCircle className="animate-spin" /> : <Search />}
            </Button>
        </form>
    )
}


function StatusSelect({ selected, setSelected }: StatusSelectProps) {

    const selection: Selection[] = [
        { id: 1, value: "all", label: "All" },
        { id: 2, value: "draft", label: "Drafted" },
        { id: 3, value: "published", label: "Published" }
    ]

    return (
        <Select value={selected.value} onValueChange={(value) => {
            const selectedValue = selection.find(s => s.value === value) || selection[0]
            setSelected(selectedValue)
        }} >

            <SelectTrigger>
                <SelectValue placeholder="Post Status" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Status</SelectLabel>
                    {
                        selection.map(select => (
                            <SelectItem value={select.value} key={select.id}>{select.label}</SelectItem>
                        ))
                    }
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}

