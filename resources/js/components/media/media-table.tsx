import { Media } from "@/types";
import { Table, TableBody, TableHead, TableRow, TableCell } from "../ui/table";
import { formatDistanceToNow } from "date-fns";
import { useReactTable, getCoreRowModel, ColumnDef, flexRender, } from "@tanstack/react-table";
import { Button } from "../ui/button";
import { LoaderCircle, Trash } from "lucide-react";
import { Tooltip, TooltipTrigger, TooltipContent } from "../ui/tooltip";
import { FormEvent, useState } from 'react';
import { useForm } from "@inertiajs/react";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTrigger } from "../ui/dialog";
import { DialogClose, DialogDescription } from "@radix-ui/react-dialog";

const columns: ColumnDef<Media>[] = [

    {
        accessorKey: 'image',
        header: "Image",
        cell: ({ row }) => <img className="max-w-[50px] aspect-square object-contain overflow-hidden" src={`/storage/${row.getValue('path')}`} alt={`${row.getValue('name')}`} />
    },
    {
        accessorKey: 'path',
        header: "Path",
        cell: ({ row }) => <p>{`/storage/${row.getValue('path')}`}</p>
    },
    {
        accessorKey: 'name',
        header: 'Name',
        cell: ({ row }) => <p>{row.getValue('name')}</p>
    },
    {
        accessorKey: 'created_at',
        header: "Upload Date",
        cell: ({ row }) => <p>{formatDistanceToNow(new Date(row.getValue('created_at')))} ago</p>
    },
    {
        accessorKey: 'id',
        header: 'Actions',
        cell: ({ row }) => {
            return (<DeleteButton id={`${row.original.id}`} />)
        }
    }

];

function DeleteButton({ id }: { id: string }) {

    const { delete: deleteMedia, processing, reset } = useForm();
    const [isOpen, setIsOpen] = useState(false);

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        deleteMedia(route('media.destroy', id), {
            onSuccess: () => {
                toast.success('Delete successfully');
                setIsOpen(false)
                reset();
            },
            onError: () => {
                toast.error('Something went wrong.');
            }
        });
    };

    return (
        <Tooltip>
            <TooltipTrigger>
                <Dialog open={isOpen} onOpenChange={(bool: boolean) => setIsOpen(bool)}>
                    <DialogTrigger>
                        <Button size="icon" variant="destructive">
                            {processing ? <LoaderCircle className="animate-spin" /> : <Trash />}
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <form onSubmit={onSubmit} action={`/medias/${id}`} method="POST">
                            <DialogHeader className="font-bold">
                                Delete this image
                            </DialogHeader>
                            <DialogDescription>
                                Are you sure you want to delete this image?
                            </DialogDescription>
                            <DialogFooter className="my-4">
                                <DialogClose>
                                    <Button type={'button'} variant="ghost">Close</Button>
                                </DialogClose>
                                <Button type="submit" variant="destructive" disabled={processing}>
                                    {processing ? <LoaderCircle className="animate-spin" /> : 'Delete'}
                                </Button>
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>
            </TooltipTrigger>
            <TooltipContent>
                <p>Delete Image</p>
            </TooltipContent>
        </Tooltip>
    );
}

export default function MediaTable({ medias }: { medias: Media[] }) {

    const table = useReactTable({
        data: medias,
        columns,
        getCoreRowModel: getCoreRowModel()
    });

    return (
        <section className="w-full">
            <Table className="w-full">
                {
                    table.getHeaderGroups().map(headerGroup => (
                        <TableRow key={headerGroup.id}>
                            {
                                headerGroup.headers.map(header => (
                                    <TableHead key={header.id}>{
                                        flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )
                                    }</TableHead>
                                ))
                            }

                        </TableRow>
                    ))
                }
                <TableBody>
                    {
                        table.getRowModel().rows.map(row => (
                            <TableRow key={row.id}>
                                {row.getVisibleCells().map(cell => (
                                    <TableCell key={cell.id}>
                                        {
                                            flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )
                                        }
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </section>
    )
}

