import type {DropdownMenuTriggerProps} from "@kobalte/core/dropdown-menu";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuGroupLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {TextField, TextFieldRoot} from "@/components/ui/textfield";
import type {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
} from "@tanstack/solid-table";
import {
  createSolidTable,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
} from "@tanstack/solid-table";
import {
  For,
  Show,
  createSignal,
} from "solid-js";

import {TbChevronLeft, TbChevronRight, TbChevronsLeft, TbChevronsRight, TbDots, TbEye, TbEyeCog, TbTrashX} from "solid-icons/tb";
import {Worker} from "@/types/app.type";
import {cn} from "@/libs/cn";
import {ServiceIcons} from "@/utils/consts";
import {Dynamic} from "solid-js/web";
import {SERVICE_TYPES, WORKER_STATUS_LIST} from "@/utils/const";
import utils, {matchSubString} from "@/utils/utils";
import {generateRandomWorker} from "@/libs/faker";
import {ColumnFilter, TableColumnHeader} from "@/components/Dashboard/table-controls";

const data = Array.from({length: 25}, generateRandomWorker);
console.log(data)
const columns: ColumnDef<Worker>[] = [
  {
    accessorKey: "_id",
    header: (props) => (
      <TableColumnHeader column={props.column} table={props.table} title="ID" />
    ),
    cell: (props) => (
      <div class="">
        {props.row.getValue("_id")?.split('-')[0]}
      </div>
    ),
    enableSorting: false,
  },
  {
    accessorKey: "firstname",
    header: (props) => (
      <TableColumnHeader column={props.column} table={props.table} title="Name" />
    ),
    cell: (props) => (
      <div class="flex gap-3 items-center">
        <img src={props.row.original.profileImgUrl} class="rounded-full border size-[35px]" />
        <span class="w-[250px] truncate font-medium">
          {props.row.getValue("firstname")} {props.row.original.lastname}
        </span>
      </div>
    ),
    filterFn: (row, id, value: string) => {
      return matchSubString(row.original.firstname + " " + row.original.lastname, value) || matchSubString(row.original._id, value);
    },
    enableHiding: false,
  },

  {
    accessorKey: "expertise",
    header: (props) => <TableColumnHeader column={props.column} table={props.table} title="Expertise" />,
    cell: (props) => (
      <div class="w-[100px]">
        <Badge variant="outline" class="pl-2">
          <span class="text-gray-600">
            <Dynamic component={ServiceIcons[props.row.original.expertise]} />
          </span>
          {props.row.original.expertise}
        </Badge>
      </div>
    ),
    filterFn: (row, id, value) => {
      return Array.isArray(value) && value.includes(row.getValue(id));
    },
    enableSorting: false,
  },
  {
    accessorKey: "phone",
    header: (props) => (
      <TableColumnHeader column={props.column} table={props.table} title="Phone" />
    ),
    cell: (props) => (
      <div class="text-gray-600">
        {props.row.getValue("phone")}
      </div>
    ),
    enableSorting: false,
  },
  {
    accessorKey: "email",
    header: (props) => (
      <TableColumnHeader column={props.column} table={props.table} title="Email" />
    ),
    cell: (props) => (
      <div class="max-w-[200px] truncate text-gray-600">
        {props.row.getValue("email")}
      </div>
    ),
    enableSorting: false,
  },

  {
    accessorKey: "status",
    header: (props) => (
      <TableColumnHeader column={props.column} table={props.table} title="Status" />
    ),
    cell: (props) => (
      <div class="w-[100px] capitalize ">
        <Badge workerStatus={props.row.original.status}>
          {props.row.getValue("status")}
        </Badge>
      </div>
    ),
    filterFn: (row, id, value) => {
      return Array.isArray(value) && value.includes(row.getValue(id));
    },
    enableSorting: false,
  },
  {
    id: 'actions',
    cell: () => (
      <DropdownMenu placement="bottom-end">
        <DropdownMenuTrigger class="flex items-center justify-center hover:bg-gray-200/70 data-[expanded]:bg-gray-200/80 size-5 rounded-sm">
          <TbDots />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <TbEye class="mr-2" size={16} />
            View Details
          </DropdownMenuItem>
          <DropdownMenuItem class="text-destructive hover:!text-destructive">
            <TbTrashX class="mr-2" size={16} />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }

];


const ManageWorkerTable = () => {
  // const [rowSelection, setRowSelection] = createSignal({});
  const [columnVisibility, setColumnVisibility] = createSignal<VisibilityState>(
    {},
  );
  const [columnFilters, setColumnFilters] = createSignal<ColumnFiltersState>(
    [],
  );
  const [sorting, setSorting] = createSignal<SortingState>([]);


  const table = createSolidTable({
    get data () {
      return data;
    },
    columns,
    initialState: {
      pagination: {
        pageIndex: 0,
        pageSize: 25,
      },
    },
    state: {
      get sorting () {
        return sorting();
      },
      get columnVisibility () {
        return columnVisibility();
      },
      // get rowSelection () {
      //   return rowSelection();
      // },
      get columnFilters () {
        return columnFilters();
      },
    },
    // enableRowSelection: true,
    // onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div class="w-full space-y-2.5">
      <div class="flex items-center justify-between gap-2">
        <div class="flex items-center gap-2">
          <TextFieldRoot>
            <TextField
              type="text"
              placeholder="Search workers..."
              class="h-8"
              value={(table.getColumn("firstname")?.getFilterValue() as string) ?? ""}
              onInput={(e) => {
                table.getColumn("firstname")?.setFilterValue(e.currentTarget.value)
              }
              }
            />
          </TextFieldRoot>
          <ColumnFilter columnName="expertise" buttonLabel="Expertise" options={SERVICE_TYPES} table={table} />
          <ColumnFilter columnName="status" buttonLabel="Status" options={WORKER_STATUS_LIST} table={table} />
          {/* </div> */}
          {/* <div class="flex items-center gap-2"> */}
          <DropdownMenu placement="bottom-end">
            <DropdownMenuTrigger
              as={(props: DropdownMenuTriggerProps) => (
                <Button
                  {...props}
                  aria-label="Toggle columns"
                  variant="outline"
                  class="flex h-8"
                >
                  <TbEyeCog class="mr-2" size={16} />
                  Columns
                </Button>
              )}
            />
            <DropdownMenuContent class="w-40">
              <DropdownMenuGroup>
                <DropdownMenuGroupLabel>Toggle columns</DropdownMenuGroupLabel>
                <DropdownMenuSeparator />
                <For
                  each={table
                    .getAllColumns()
                    .filter(
                      (column) =>
                        typeof column.accessorFn !== "undefined" &&
                        column.getCanHide(),
                    )}
                >
                  {(column) => (
                    <DropdownMenuCheckboxItem
                      class="capitalize"
                      checked={column.getIsVisible()}
                      onChange={(value) => column.toggleVisibility(value)}
                    >
                      <span class="truncate">{utils.dashToSentenceCase(column.id)}</span>
                    </DropdownMenuCheckboxItem>
                  )}
                </For>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div class="relative rounded-md border max-h-[calc(100vh-14rem)] overflow-auto custom-scroll">
        <Table>
          <TableHeader class="">
            <For each={table.getHeaderGroups()}>
              {(headerGroup) => (
                <TableRow class="bg-muted/70 hover:bg-muted/70 ">
                  <For each={headerGroup.headers}>
                    {(header, idx) => {
                      return (
                        <TableHead class={cn(" text-gray-700 p-1.5 px-3", idx() === 0 && 'pl-3')}>
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                              header.column.columnDef.header,
                              header.getContext(),
                            )}
                        </TableHead>
                      );
                    }}
                  </For>
                </TableRow>
              )}
            </For>
          </TableHeader>
          <TableBody class="">
            <Show
              when={table.getRowModel().rows?.length}
              fallback={
                <TableRow>
                  <TableCell colSpan={columns.length} class="h-24 text-center">
                    No results.
                  </TableCell>
                </TableRow>
              }
            >
              <For each={table.getRowModel().rows}>
                {(row) => (
                  <TableRow data-state={row.getIsSelected() && "selected"}>
                    <For each={row.getVisibleCells()}>
                      {(cell) => (
                        <TableCell class="p-2 px-3">
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext(),
                          )}
                        </TableCell>
                      )}
                    </For>
                  </TableRow>
                )}
              </For>
            </Show>
          </TableBody>
        </Table>
      </div>
      <div class="flex w-full flex-col-reverse items-center justify-between gap-4 overflow-auto px-2 py-1 sm:flex-row">
        <div class="flex-1 whitespace-nowrap text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div class="flex flex-col-reverse items-center gap-4 sm:flex-row">
          <div class="flex items-center space-x-2">
            <p class="whitespace-nowrap text-sm font-medium">Rows per page</p>
            <Select
              value={table.getState().pagination.pageSize}
              onChange={(value) => value && table.setPageSize(value)}
              options={[25, 50, 100, 200]}
              itemComponent={(props) => (
                <SelectItem item={props.item}>{props.item.rawValue}</SelectItem>
              )}
            >
              <SelectTrigger class="h-8 w-[4.5rem]">
                <SelectValue<string>>
                  {(state) => state.selectedOption()}
                </SelectValue>
              </SelectTrigger>
              <SelectContent />
            </Select>
          </div>
          <div class="flex items-center justify-center whitespace-nowrap text-sm font-medium">
            Page {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </div>
          <div class="flex items-center space-x-2">
            <Button
              aria-label="Go to first page"
              variant="outline"
              class="flex size-8 p-0"
              onClick={() => table.setPageIndex(0)}
              disabled={!table.getCanPreviousPage()}
            >
              <TbChevronsLeft />
            </Button>
            <Button
              aria-label="Go to previous page"
              variant="outline"
              size="icon"
              class="size-8"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              <TbChevronLeft />
            </Button>
            <Button
              aria-label="Go to next page"
              variant="outline"
              size="icon"
              class="size-8"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              <TbChevronRight />
            </Button>
            <Button
              aria-label="Go to last page"
              variant="outline"
              size="icon"
              class="flex size-8"
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              disabled={!table.getCanNextPage()}
            >
              <TbChevronsRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageWorkerTable;
