import { Inquiry, Media } from "@/types";
import { Table, TableBody, TableHead, TableRow, TableCell } from "../ui/table";
import { formatDistance, formatDistanceToNow, subDays } from "date-fns";
import { useReactTable, getCoreRowModel, ColumnDef, flexRender, } from "@tanstack/react-table";
import { Button } from "../ui/button";
import { Eye, LoaderCircle, Trash } from "lucide-react";
import { Tooltip, TooltipTrigger, TooltipContent } from "../ui/tooltip";
import { FormEvent, useState } from 'react';
import { useForm } from "@inertiajs/react";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { DialogClose, DialogDescription } from "@radix-ui/react-dialog";

const columns: ColumnDef<Inquiry>[] = [

    {
        accessorKey: 'firstname',
        header: "Firstname",
        cell: ({ row }) => <p>{row.getValue('firstname')}</p>
    },
    {
        accessorKey: 'lastname',
        header: "Lastname",
        cell: ({ row }) => <p>{row.getValue('lastname')}</p>
    },
    {
        accessorKey: 'email',
        header: 'Email',
        cell: ({ row }) => <p>{row.getValue('email')}</p>
    },
    {
        accessorKey: 'message',
        header: "Message",
        cell: ({ row }) => {
            const message = row.getValue('message') as string;

            return <p>{message.substring(0, 50)}...</p>
        }
    },
    {
        accessorKey: 'created_at',
        header: 'Date',
        cell: ({ row }) => {
            return <p>{formatDistance(new Date(row.getValue('created_at')), new Date(), { addSuffix: true })}</p>
        }
    },
    {
        header: 'Actions',
        cell: ({ row }) => {
            return <InquiryDialog
                firstname={row.getValue('firstname')}
                lastname={row.getValue('lastname')}
                email={row.getValue('email')}
                message={row.getValue('message')}
                created_at={row.getValue('created_at')}
                id={row.getValue('id')}
            />
        }
    }

];

function InquiryDialog({ firstname, lastname, email, message, created_at, id }: {
    firstname: string;
    lastname: string;
    email: string;
    message: string;
    created_at: string;
    id: number
}) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button size='icon' variant='secondary' >
                    <Eye />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Inquiry by {lastname}, {firstname}</DialogTitle>
                    <p className="text-xs text-gray-500">{formatDistance(new Date(created_at), new Date(), { addSuffix: true })}</p>
                </DialogHeader>
                <div className="space-y-1">
                    <h2><span className="font-semibold">Name: </span> <br />{lastname}, {firstname}</h2>
                    <h3><span className="font-semibold">Email: </span><br />{email}</h3>
                    <p><span className="font-semibold">Message: </span><br />{message}</p>
                </div>
                <DialogFooter>
                    <DialogClose asChild><Button variant='ghost'>Close</Button></DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}


export default function InquiryTable({ inquiries }: { inquiries: Inquiry[] }) {

    const table = useReactTable({
        data: inquiries,
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

