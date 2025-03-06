import React, { useEffect, useMemo, useState } from "react";
import {
  getCoreRowModel,
  useReactTable,
  flexRender,
  SortingState,
  getSortedRowModel,
} from "@tanstack/react-table";
import type { ColumnDef } from "@tanstack/react-table";
import { nanoid } from "nanoid";
import Skeleton from "react-loading-skeleton";
import { TbDatabaseOff } from "react-icons/tb";
import { useTranslation } from "react-i18next";
import ReactPaginate from "react-paginate";
import { Button } from "../KIT";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export interface ReactTableProps<T extends object> {
  data: T[];
  columns: ColumnDef<T>[];
  showFooter?: boolean;
  className?: string;
  loading?: boolean;
  onSort?: (column: any) => void;
}
const DATA_PER_PAGE = 10;

const Table = React.memo(
  <T extends object>({
    className = "",
    data,
    columns,
    showFooter,
    loading,
    onSort,
  }: ReactTableProps<T>) => {
    const [sorting, setSorting] = React.useState<SortingState>([]);

    useEffect(() => {
      onSort && onSort(sorting);
    }, [sorting]);
    const { t } = useTranslation();

    const [page, setPage] = useState(1);
    const onChangePage = (page: number) => {
      setPage(page);
    };
    const tableData = useMemo(() => {
      if (!data) return [];
      return data.slice((page - 1) * DATA_PER_PAGE, page * DATA_PER_PAGE);
    }, [data, page]);

    const table = useReactTable({
      data: tableData,
      columns,
      state: {
        sorting,
      },
      onSortingChange: setSorting,
      getCoreRowModel: getCoreRowModel(),
      getSortedRowModel: getSortedRowModel(),
    });
    return (
      <div className={`xr-table-wrapper ${className}`}>
        <table className="">
          <thead className="">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <th
                      key={header.id}
                      {...{
                        className: header.column.getCanSort()
                          ? "cursorPoint"
                          : "",
                        // onClick: header.column.getToggleSortingHandler(),
                      }}
                      style={{
                        width: header.column.columnDef.size,
                        minWidth: header.column.columnDef.minSize,
                        maxWidth: header.column.columnDef.maxSize,

                        // textAlign: header.column.columnDef.,
                      }}
                    >
                      <div className={`flex`}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                        {{
                          asc: " 🔼",
                          desc: " 🔽",
                        }[header.column.getIsSorted() as string] ?? null}
                      </div>
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody
            className="relative"
            style={{ height: tableData.length === 0 && !loading ? "12em" : "" }}
          >
            {tableData.length === 0 && !loading ? (
              <div className="absolute inset-0 flex column alignCenter justifyCenter">
                <TbDatabaseOff size="2.5em" style={{ opacity: "0.5" }} />
                <h6 className="textSecondary mt3 fs-sm">{t("no_data")}</h6>
              </div>
            ) : (
              ""
            )}
            {loading
              ? new Array(data.length || 5).fill(1).map((_n) => (
                  <tr key={nanoid()}>
                    {columns.map((_column) => (
                      <td
                        key={nanoid()}
                        style={{
                          width: _column.size,
                          minWidth: _column.minSize,
                        }}
                      >
                        <Skeleton />
                      </td>
                    ))}
                  </tr>
                ))
              : table.getRowModel().rows.map((row) => (
                  <tr key={row.id} className="">
                    {row.getVisibleCells().map((cell) => (
                      <td
                        className=""
                        key={cell.id}
                        style={{
                          width: cell.column.columnDef.size,
                          minWidth: cell.column.columnDef.minSize,
                          // textAlign: header.column.columnDef.,
                        }}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
          </tbody>
          {showFooter ? (
            <tfoot className="">
              {table.getFooterGroups().map((footerGroup) => (
                <tr key={footerGroup.id}>
                  {footerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      style={{
                        width: header.column.columnDef.size,
                        minWidth: header.column.columnDef.minSize,
                        // textAlign: header.column.columnDef.,
                      }}
                      colSpan={header.colSpan}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.footer,
                            header.getContext()
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </tfoot>
          ) : null}
        </table>
        <TableFooter count={data.length} onChange={onChangePage} />
      </div>
    );
  }
);

export default Table;

const TableFooter = ({
  count,
  onChange,
}: {
  count: number;
  onChange?: (e: number) => void;
}) => {
  const [page, setPage] = useState(1);

  const gotoPage = (page: number) => {
    setPage(page);
    if (onChange) onChange(page);
  };

  return (
    <div className={`w100 flex alignCenter justifyCenter px2 py1`}>
      <div className="flex alignCenter">
        <ReactPaginate
          pageCount={Math.ceil(Number(count / DATA_PER_PAGE))}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          onPageChange={(e) => gotoPage(e.selected + 1)}
          breakLabel={<Button className="filled icon small">...</Button>}
          nextLabel={
            <Button className="outlined primary icon small">
              <MdChevronLeft />
            </Button>
          }
          previousLabel={
            <Button className="outlined primary icon small">
              <MdChevronRight />
            </Button>
          }
          className="flex alignCenter listStyleNone pr0 m0 gap-1"
          pageLabelBuilder={(e) => (
            <Button
              className={`icon small ${
                page === e ? "contained primary" : "filled"
              }`}
            >
              {e}
            </Button>
          )}
          disabledClassName="buttonDisabled"
          nextClassName="flex"
          previousClassName="flex"
          nextLinkClassName="flex"
          previousLinkClassName="flex"
          // disabledLinkClassName="buttonDisabled"
        />
      </div>
    </div>
  );
};
// export default ClientTable;
