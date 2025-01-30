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
  Column,
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  PaginationState,
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
  Match,
  Show,
  Switch,
  createMemo,
  createSignal,
  splitProps,
} from "solid-js";

import {TbChevronLeft, TbChevronRight, TbChevronsLeft, TbChevronsRight, TbDots, TbEye, TbEyeCog, TbFlag3, TbProgress, TbProgressAlert, TbProgressBolt, TbProgressCheck, TbProgressX, TbTrashX} from "solid-icons/tb";
import {Service} from "@/types/app.type";
import {format} from "date-fns";
import {cn} from "@/libs/cn";
import {ServiceIcons} from "@/utils/consts";
import {Dynamic} from "solid-js/web";
import {SERVICE_TYPES, STATUS_LIST, URGENCY_LIST} from "@/utils/const";
import utils from "@/utils/utils";
import {createRandomServiceRequests} from "@/libs/faker";
import {ColumnFilter, TableColumnHeader} from "@/components/Dashboard/table-controls";
import ServiceHistorySheet from "@/components/Dashboard/Manager/service-history-sheet.manager";


const columns: ColumnDef<Service>[] = [
  {
    id: 'label',
    accessorKey: "label",
    header: (props) => <TableColumnHeader column={props.column} table={props.table} title="Label" />,
    cell: (props) => (
      <div class="">
        <Badge variant="outline" class="pl-2">
          <span class="text-gray-600">
            <Dynamic component={ServiceIcons[props.row.original.serviceType]} />
          </span>
          {props.row.original.serviceType}
        </Badge>
      </div>
    ),
    filterFn: (row, id, value) => {
      return Array.isArray(value) && value.includes(row.getValue(id));
    },
    enableSorting: false,
  },
  {
    accessorKey: "subject",
    header: (props) => (
      <TableColumnHeader column={props.column} table={props.table} title="Subject" />
    ),
    cell: (props) => (
      <div class="flex pl-1">
        <span class="w-[250px] truncate font-medium">
          {props.row.getValue("subject")}
        </span>
      </div>
    ),
    enableHiding: false,
  },
  {
    id: 'assigned-date',
    accessorKey: "time",
    header: (props) => <TableColumnHeader column={props.column} table={props.table} title="Assigned Date" />,
    cell: (props) => (
      <div class="w-[100px] text-gray-600">{format(props.row.original.assignedTime, "MMM dd, yyyy")}</div>
    ),
  },
  {
    id: 'closed-date',
    accessorKey: "endTime",
    header: (props) => <TableColumnHeader column={props.column} table={props.table} title="Closed Date" />,
    cell: (props) => (
      <div class="w-[100px] text-gray-600">{props.row.original.endTime && format(props.row.original.endTime, "MMM dd, yyyy")}</div>
    ),
  },
  {
    accessorKey: "urgency",
    header: (props) => <TableColumnHeader column={props.column} table={props.table} title="Urgency" />,
    cell: (props) => (
      <div class={"w-[70px]"}>
        <Badge urgency={props.row.original.urgency} class=" font-medium pl-1.5 pr-2">
          <TbFlag3 size={16} class=" text-gray-600" />
          {props.row.getValue("urgency")}
        </Badge>
      </div>
    ),
    filterFn: (row, id, value) => {
      return Array.isArray(value) && value.includes(row.getValue(id));
    },
    enableSorting: false,
  },
  {
    accessorKey: "status",
    header: (props) => (
      <TableColumnHeader column={props.column} table={props.table} title="Status" />
    ),
    cell: (props) => (
      <div class={cn("flex w-[100px] items-center", props.row.getValue('status') === 'completed' ? 'text-primary' : 'text-[#E74C3C]')}>
        <Switch>
          <Match when={props.row.original.status === "pending"}>
            <TbProgress class="mr-2" />
          </Match>
          <Match when={props.row.original.status === "assigned"}>
            <TbProgressAlert class="mr-2" />
          </Match>
          <Match when={props.row.original.status === "in-progress"}>
            <TbProgressBolt class="mr-2" />
          </Match>
          <Match when={props.row.original.status === "cancelled"}>
            <TbProgressX class="mr-2" />
          </Match>
          <Match when={props.row.original.status === "completed"}>
            <TbProgressCheck class="mr-2" />
          </Match>
        </Switch>
        <span class={cn("capitalize text-sm")}>{props.row.getValue('status')}</span>
      </div>
    ),
    filterFn: (row, id, value) => {
      return Array.isArray(value) && value.includes(row.getValue(id));
    },
    enableSorting: false,
  },

  {
    id: "actions",
    cell: (props) => {
      const [isOpen, setIsOpen] = createSignal(false)

      return (
        <DropdownMenu placement="bottom-end">
          <DropdownMenuTrigger class="flex items-center justify-center hover:bg-gray-200/70 size-5 data-[expanded]:bg-gray-200/80 rounded-sm">
            <TbDots />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => setIsOpen(true)}>
              <TbEye class="mr-2" size={16} />
              View Details
            </DropdownMenuItem>
            <DropdownMenuItem class="text-destructive hover:!text-destructive">
              <TbTrashX class="mr-2" size={16} />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
          <ServiceHistorySheet isOpen={isOpen()} setIsOpen={setIsOpen} serviceData={props.row.original} />
        </DropdownMenu>
      )
    },
  },
];


const data = Array.from({length: 100}, createRandomServiceRequests).filter(service => service.status === 'completed' || service.status === 'cancelled');

const TaskHistoryTable = () => {
  // const [rowSelection, setRowSelection] = createSignal({});
  const [columnVisibility, setColumnVisibility] = createSignal<VisibilityState>(
    {},
  );
  const [columnFilters, setColumnFilters] = createSignal<ColumnFiltersState>(
    [],
  );
  const [sorting, setSorting] = createSignal<SortingState>([{
    id: 'request-date',
    desc: true,
  }]);


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
              placeholder="Search subject..."
              class="h-8"
              value={(table.getColumn("subject")?.getFilterValue() as string) ?? ""}
              onInput={(e) =>
                table.getColumn("subject")?.setFilterValue(e.currentTarget.value)
              }
            />
          </TextFieldRoot>
          <ColumnFilter columnName="label" buttonLabel="Service" options={SERVICE_TYPES} table={table} />
          <ColumnFilter columnName="urgency" buttonLabel="Urgency" options={URGENCY_LIST} table={table} />
          <ColumnFilter columnName="status" buttonLabel="Status" options={STATUS_LIST.filter(v => v === 'completed' || v === 'cancelled')} table={table} />
        </div>
        <div class="flex items-center gap-2">
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
                <TableRow class="bg-muted/70 hover:bg-muted/70">
                  <For each={headerGroup.headers}>
                    {(header, idx) => {
                      return (
                        <TableHead class={cn(" text-gray-700", idx() === 0 && 'pl-3')}>
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
                        <TableCell>
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

export default TaskHistoryTable;
