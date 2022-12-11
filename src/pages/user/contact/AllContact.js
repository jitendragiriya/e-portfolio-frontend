import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useTable, useSortBy, usePagination } from "react-table";
// import { useTable, useSortBy, usePagination } from "react-table";

import { AiOutlinePlus, AiFillDelete, AiFillEdit } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { getAllContactAdmin } from "../../../Redux/actions/admin/adminContactAction";

const AllContact = () => {
  const dispatch = useDispatch();
  const { loading, allcontact } = useSelector((state) => state.allContact);
  const [contact, setContact] = useState([]);

  useEffect(() => {
    dispatch(getAllContactAdmin());
  }, [dispatch]);

  useEffect(() => {
    if (allcontact) {
      setContact(allcontact);
    }
  }, [allcontact]);

   const deleteProject = (id) => {
    //  dispatch(deleteUserProjectAction(id));
   };
  const data = useMemo(() => [...contact], [contact]);
  const columns = useMemo(
    () =>
      contact[0]
        ? Object.keys(contact[0]).map((key) => {
            // modifiying the fields
            if (key === "createdAt") {
              return {
                Header: "Send ",
                accessor: key,
                Cell: ({ value }) => <>{value.slice(0, 10)}</>,
              };
            }
            if (key === "updatedAt") {
              return {
                Header: "Last Send ",
                accessor: key,
                Cell: ({ value }) => <>{value.slice(0, 10)}</>,
              };
            }
            if (key === "message") {
              return {
                Header: "message ",
                accessor: key,
                Cell: ({ value }) => <>{value[0].msg}</>,
              };
            }
            if (key === "__v") {
              return {
                Header: "message ",
                accessor: key,
                Cell: ({ value }) => (
                  <>
                    <Link to="/"></Link>
                  </>
                ),
              };
            }
            if (key === "actionId") {
              return {
                Header: "",
                accessor: key,
                Cell: ({ value }) => (
                  <>
                    <div className=" cursor-pointer w-full flex items-center justify-end px-2">
                      <Link
                        to={`/admin/project/update/${value}`}
                        className="text-xl text-black mr-2 dark:text-white"
                      >
                        <AiFillEdit />
                      </Link>
                      <span className="text-xl">
                        <AiFillDelete onClick={() => deleteProject(value)} />
                      </span>
                    </div>
                  </>
                ),
              };
            }

            return { Header: key, accessor: key };
          })
        : [],
    [contact]
  );

  const initialState = { hiddenColumns: ["__v"] };
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    previousPage,
    nextPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    pageCount,
    gotoPage,
    setPageSize,
    state: { pageIndex, pageSize },
    state,
  } = useTable({ columns, data, initialState }, useSortBy, usePagination);
  return (
    <div className="p-4 bg-[#f9f9f9] dark:bg-[#181818] flex flex-col lg:p-8 min-h-vh">
      <div className="flex flex-col w-full overflow-x-auto relative max-w-5xl mx-auto">
        <div className="text-center text-2xl w-full font-medium mb-4 relative overflow-x-auto">
          <h2>All Bookings</h2>
          <div className="absolute top-1/2 -translate-y-1/2 right-0 p-1 bg-orange-500 text-white">
            <Link to="/admin/contact/add">
              <AiOutlinePlus />
            </Link>
          </div>
        </div>

        <div className="w-full overflow-x-auto bg-white dark:bg-[#383838] max-w-full">
          {contact && (
            <table {...getTableProps()} className="w-full relative ">
              <thead>
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th
                        {...column.getHeaderProps(
                          column.getSortByToggleProps()
                        )}
                        className="border border-gray-300 dark:border-[#585858] py-2 w-96  min-w-fit last:min-w-fit"
                      >
                        {column.isSorted
                          ? column.isSortedDesc
                            ? "▼  "
                            : "▲  "
                          : "▲  ▼ "}
                        {column.render("Header")}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {page.map((row) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell) => {
                        return (
                          <td
                            {...cell.getCellProps()}
                            className="border border-gray-300 dark:border-[#585858] p-2 w-96 first:text-right first:w-fit last:justify-end items-center last:min-w-fit  whitespace-nowrap max-w-[210px] overflow-hidden last:w-20"
                          >
                            {cell.render("Cell")}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
          <div className="border border-t-0 border-gray-300 dark:border-[#585858] p-2">
            {pageOptions.length > 1 ? (
              <div className="global-react-table-pagination">
                <button
                  onClick={() => previousPage()}
                  disabled={!canPreviousPage}
                  className="btn-pagination"
                >
                  {"prev"}
                </button>
                <button
                  onClick={() => gotoPage(0)}
                  disabled={!canPreviousPage}
                  className="btn-pagination"
                >
                  {"1"}
                </button>
                <button className="btn-pagination">
                  <BsThreeDots />
                </button>
                <button
                  onClick={() => gotoPage(pageCount - 1)}
                  disabled={!canNextPage}
                  className="btn-pagination"
                >
                  {pageCount - 1}
                </button>
                <button
                  onClick={() => nextPage()}
                  disabled={!canNextPage}
                  className="btn-pagination"
                >
                  {"next"}
                </button>
              </div>
            ) : (
              <div></div>
            )}
            <div className="how-Much-show-On-Page">
              <select
                value={pageSize}
                onChange={(e) => setPageSize(Number(e.target.value))}
              >
                {[5, 10, 25, 50, 100].map((element) => (
                  <option key={element} value={element}>
                    show {element}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllContact;
