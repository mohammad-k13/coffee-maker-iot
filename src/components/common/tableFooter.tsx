import { useSearchParams } from "react-router-dom";
import { Button } from "~/components/KIT";
import ReactPaginate from "react-paginate";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useGeneralStore } from "~/store/general";
import { LANGUAGE_KEY } from "~/store/constants";
import { dir } from "i18next";

const TableFooter = ({
  count,
  onChange,
}: {
  count: number;
  onChange?: (e: number) => void;
}) => {
  const { [LANGUAGE_KEY]: lng } = useGeneralStore();
  let [searchParams, setSearchParams] = useSearchParams();
  const limit = Number(searchParams.get("limit")) || 10;
  const currentPage = Number(searchParams.get("page")) || 1;

  const gotoPage = (page: number) => {
    if (onChange) onChange(page);
    searchParams.set("page", String(page));
    setSearchParams(searchParams.toString());
  };

  return (
    <div className={`w100 flex alignCenter justifyCenter px2 py1`}>
      <div className="flex alignCenter">
        <ReactPaginate
          pageCount={Math.ceil(Number(count / limit))}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          onPageChange={(e) => gotoPage(e.selected + 1)}
          breakLabel={<Button className="filled icon small">...</Button>}
          nextLabel={
            <Button className="outlined primary icon small">
              {
                dir(lng) === 'ltr' ? (
                  <MdChevronRight />
                ) : (
                  <MdChevronLeft />
                )
              }
              {/* <MdChevronLeft /> */}
            </Button>
          }
          previousLabel={
            <Button className="outlined primary icon small">
              {
                dir(lng) === 'ltr' ? (
                  <MdChevronLeft />
                ) : (
                  <MdChevronRight />
                )
              }
              {/* <MdChevronRight /> */}
            </Button>
          }
          className="flex alignCenter listStyleNone pr0 m0 gap-1"
          pageLabelBuilder={(e) => (
            <Button
              className={`icon small ${currentPage === e ? "contained primary" : "filled"
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

export default TableFooter;
