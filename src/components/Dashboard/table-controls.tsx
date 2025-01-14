import {Button} from "@/components/ui/button";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Select, SelectContent, SelectItem, SelectTrigger} from "@/components/ui/select";
import {cn} from "@/libs/cn";
import {Service} from "@/types/app.type";
import {DropdownMenuTriggerProps} from "@kobalte/core/dropdown-menu";
import {SelectTriggerProps} from "@kobalte/core/select";
import {Column, Table} from "@tanstack/solid-table";
import {TbArrowNarrowDown, TbArrowNarrowUp, TbArrowsSort, TbFilterCog} from "solid-icons/tb";
import {createSignal, Match, Show, splitProps, Switch, VoidProps} from "solid-js";

export const TableColumnHeader = <TData, TValue> (
  props: VoidProps<{column: Column<TData, TValue>; title: string, table: Table<any>}>,
) => {
  const [local] = splitProps(props, ["column", "title", "table"]);

  return (
    <Show
      when={local.column.getCanSort()}
      fallback={<span class="text-sm font-medium">{local.title}</span>}
    >
      <div class="flex items-center space-x-2">
        <DropdownMenu>
          <DropdownMenuTrigger
            as={(props: DropdownMenuTriggerProps) => (
              <Button
                aria-label={
                  local.column.getIsSorted() === "desc"
                    ? "Sorted descending. Click to sort ascending."
                    : local.column.getIsSorted() === "asc"
                      ? "Sorted ascending. Click to sort descending."
                      : "Not sorted. Click to sort ascending."
                }
                variant="ghost"
                class="-ml-4 h-8 data-[expanded]:bg-gray-200/60"
                {...props}
              >
                <span>{local.title}</span>
                <div class="ml-1">
                  <Switch
                    fallback={<TbArrowsSort />}
                  >
                    <Match when={local.column.getIsSorted() === "asc"}>
                      <TbArrowNarrowUp />
                    </Match>
                    <Match when={local.column.getIsSorted() === "desc"}>
                      <TbArrowNarrowDown />
                    </Match>
                  </Switch>
                </div>
              </Button>
            )}
          />
          <DropdownMenuContent>
            <Show when={local.column.getCanSort()}>
              <DropdownMenuItem
                aria-label="Sort ascending"
                onClick={() => {
                  local.table.resetSorting(),
                    local.column.toggleSorting(false, true)
                }}
              >
                <TbArrowNarrowUp class="mr-2 text-muted-foreground" />
                Asc
              </DropdownMenuItem>
              <DropdownMenuItem
                aria-label="Sort descending"
                onClick={() => {
                  local.table.resetSorting(),
                    local.column.toggleSorting(true, true)
                }}
              >
                <TbArrowNarrowDown class="mr-2 text-muted-foreground" />
                Desc
              </DropdownMenuItem>
            </Show>
            {/* 
            <Show when={local.column.getCanSort() && local.column.getCanHide()}>
              <DropdownMenuSeparator />
            </Show>

            <Show when={local.column.getCanHide()}>
              <DropdownMenuItem
                aria-label="Hide column"
                onClick={() => local.column.toggleVisibility(false)}
              >
                <BiRegularHide class="mr-2 text-muted-foreground/70" />
                Hide
              </DropdownMenuItem>
            </Show> */}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </Show>
  );
};


export const ColumnFilter = ({columnName, buttonLabel, options, table}: {
  // column: Column<any, unknown>,
  columnName: string
  buttonLabel: string
  options: string[]
  table: Table<any>
}) => {
  // const paddedOptions = createMemo(() => ['all', ...options])
  const [selected, setSelected] = createSignal(options)

  return (
    <Select
      onChange={(value) => {
        setSelected(value)
        table
          .getColumn(columnName)
          ?.setFilterValue(value.map((v) => v));
      }}
      placement="bottom-start"
      sameWidth={false}
      value={selected()}
      options={options}
      multiple
      closeOnSelection={false}
      itemComponent={(props) => (
        <SelectItem item={props.item} class="capitalize">
          {props.item.rawValue}
        </SelectItem>
      )}
    >
      <SelectTrigger
        as={(props: SelectTriggerProps) => (
          <Button
            {...props}
            aria-label="Filter status"
            variant="outline"
            class={cn("relative flex h-8 w-full gap-2 [&>svg]:hidden", (selected().length < options.length) && "border-primary/60 bg-primary/10")}
          >
            <div class="flex items-center">
              <TbFilterCog class="mr-2" />
              {buttonLabel}
            </div>
          </Button>
        )}
      />
      <SelectContent class="top-[-4px]" />
    </Select>
  )
}
