"use client";

import React, { useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  ChevronDown,
  Filter,
  FilterIcon,
  FilterX,
  FilterXIcon,
  Settings,
  SlidersVertical,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar.jsx";
import { Progress } from "@/components/ui/progress.jsx";
import {
  Status,
  StatusIndicator,
  StatusLabel,
} from "@/components/ui/shadcn-io/status/index.jsx";
import { cn } from "@/lib/utils.js";

// ==== ДАННЫЕ ====

const data = [
  {
    id: "m5gr84i9",
    amount: 316,
    companies: "Material Figma Version",
    companiesLogos: "./src/assets/logos/figma.svg",
    members: [
      "./src/assets/avatars/ivanna.svg",
      "./src/assets/avatars/alex.svg",
      "./src/assets/avatars/peter.svg",
      "./src/assets/avatars/emma.svg",
    ],
    budget: "$14,000",
    team: "Design",
    completion: "50%",
  },
  {
    id: "3u1reuv4",
    amount: 242,
    companies: "Launch Mobile App",
    companiesLogos: "./src/assets/logos/github.svg",
    members: [
      "./src/assets/avatars/ivanna.svg",
      "./src/assets/avatars/alex.svg",
      "./src/assets/avatars/john.svg",
      "./src/assets/avatars/peter.svg",
      "./src/assets/avatars/emma.svg",
    ],
    budget: "$20,000",
    team: "Back-end",
    completion: "50%",
  },
  {
    id: "derv1ws0",
    amount: 837,
    companies: "Fix Platform Errors",
    companiesLogos: "./src/assets/logos/discord.svg",
    members: [
      "./src/assets/avatars/ivanna.svg",
      "./src/assets/avatars/alex.svg",
      "./src/assets/avatars/peter.svg",
    ],
    budget: "$5,000",
    team: "Design",
    completion: "50%",
  },
  {
    id: "5kma53ae",
    amount: 874,
    companies: "New Pricing Page",
    companiesLogos: "./src/assets/logos/signal.svg",
    members: [
      "./src/assets/avatars/alex.svg",
      "./src/assets/avatars/john.svg",
      "./src/assets/avatars/peter.svg",
      "./src/assets/avatars/emma.svg",
    ],
    budget: "$2,000",
    team: "Marketing",
    completion: "50%",
  },
  {
    id: "mpa01qoa",
    amount: 837,
    companies: "Accessories Store",
    companiesLogos: "./src/assets/logos/apple.svg",
    members: [
      "./src/assets/avatars/ivanna.svg",
      "./src/assets/avatars/alex.svg",
      "./src/assets/avatars/peter.svg",
      "./src/assets/avatars/emma.svg",
    ],
    budget: "$5,000",
    team: "Front-end",
    completion: "50%",
  },
  {
    id: "nmksow0m",
    amount: 837,
    companies: "Images Store",
    companiesLogos: "./src/assets/logos/pinterest.svg",
    members: [
      "./src/assets/avatars/ivanna.svg",
      "./src/assets/avatars/john.svg",
      "./src/assets/avatars/alex.svg",
      "./src/assets/avatars/peter.svg",
    ],
    budget: "$5,000",
    team: "Design",
    completion: "50%",
  },
  {
    id: "dv1map3c",
    amount: 837,
    companies: "Social Chat",
    companiesLogos: "./src/assets/logos/telegram.svg",
    members: [
      "./src/assets/avatars/ivanna.svg",
      "./src/assets/avatars/alex.svg",
      "./src/assets/avatars/john.svg",
      "./src/assets/avatars/peter.svg",
      "./src/assets/avatars/emma.svg",
    ],
    budget: "$5,000",
    team: "Mobile app",
    completion: "50%",
  },
  {
    id: "df3pf3fv",
    amount: 837,
    companies: "Social Marketing",
    companiesLogos: "./src/assets/logos/facebook.svg",
    members: [
      "./src/assets/avatars/ivanna.svg",
      "./src/assets/avatars/alex.svg",
      "./src/assets/avatars/peter.svg",
    ],
    budget: "$5,000",
    team: "Marketing",
    completion: "50%",
  },
];

// ==== КОЛОНКИ ====

export const columns = [
  {
    id: "select",

    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label='Select row'
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "companies",
    header: "Companies",
    cell: ({ row }) => {
      const logo = row.original.companiesLogos;
      const name = row.getValue("companies");

      return (
        <div className='flex items-center gap-2 text-sm font-medium  w-[200px]'>
          <img src={logo} alt={name} className='w-5 h-5 object-contain' />
          <span className='capitalize'>{name}</span>
        </div>
      );
    },
  },

  {
    accessorKey: "members",
    header: "Members",
    cell: ({ row }) => {
      const members = row.getValue("members") || [];
      return (
        <div className='flex justify-between overflow-hidden gap-0 -space-x-20 w-[87px]'>
          {members.map((src, i) => (
            <div key={i} className='w-8'>
              <Avatar className='w-8 h-8'>
                <AvatarImage src={src} alt={`member-${i}`} />
                <AvatarFallback>{i + 1}</AvatarFallback>
              </Avatar>
            </div>
          ))}
        </div>
      );
    },
  },
  {
    accessorKey: "budget",
    header: "Budget",
    cell: ({ row }) => (
      <div className='capitalize text-sm text-gray-500 roboto-400 w-10'>
        {row.getValue("budget")}
      </div>
    ),
  },
  {
    accessorKey: "team",
    header: "Team",
    cell: ({ row }) => (
      <div className='capitalize w-fit block  text-xs text-gray-950 geist-500 px-2 py-1 border border-gray-200 rounded-sm'>
        {row.getValue("team")}
      </div>
    ),
  },
  {
    accessorKey: "completion",
    header: "Completion",
    cell: ({ row }) => (
      <div className='flex items-center gap-2 text-gray-500 text-xs geist-500 w-[200px]'>
        {row.getValue("completion")}
        <Progress value={50} />
      </div>
    ),
  },
];

// ==== ОСНОВНОЙ КОМПОНЕНТ ====

export function DataTableDemo() {
  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [columnVisibility, setColumnVisibility] = useState({});
  const [rowSelection, setRowSelection] = useState({});

  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 4,
  });

  const table = useReactTable({
    data,
    columns,
    pageCount: undefined,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      pagination,
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onPaginationChange: setPagination,
  });

  return (
    <div className='w-full border border-gray-300 rounded-lg mt-6 py-6'>
      <div className='flex items-center pb-6 mx-6'>
        <div>
          <h2 className='text-lg geist-600'>Projects</h2>
          <Status
            className='text-xs border-0'
            status='online'
            variant='outline'
          >
            <StatusIndicator />
            <StatusLabel className='geist-400'>30 done this month</StatusLabel>
          </Status>
        </div>

        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <Button variant='outline' className='ml-auto '>
              Filter
              <SlidersVertical className='ml-2 h-4 w-4' />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align='end'>
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  className='capitalize'
                  checked={column.getIsVisible()}
                  onCheckedChange={(value) => column.toggleVisibility(!!value)}
                >
                  {column.id}
                </DropdownMenuCheckboxItem>
              ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <Button className='ml-3'>New Project</Button>
      </div>

      <div className='overflow-hidden'>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    className={cn(
                      "uppercase text-xs text-gray-500 geist-400",
                      ["budget", "completion", "team"].includes(
                        header.column.id
                      ) && "text-center"
                    )}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody>
            {table.getPaginationRowModel().rows?.length ? (
              table.getPaginationRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className='h-24 text-center'
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className='flex items-center justify-end mx-6'>
        <div className='text-muted-foreground flex-1 text-sm'>
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </div>
        <div className='space-x-2'>
          <Button
            variant='outline'
            size='sm'
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Prev
          </Button>
          <Button
            variant='outline'
            size='sm'
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
