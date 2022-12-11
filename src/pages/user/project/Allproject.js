import React, { useEffect, useState, useMemo } from "react";
import { useTable, useSortBy, usePagination } from "react-table";
import { Link } from "react-router-dom";
import {
  AiOutlinePlus,
  AiFillDelete,
  AiFillEdit,
  AiOutlineEye,
} from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUserProjectAction,
  getUserAllProjectAction,
  clearError,
} from "../../../Redux/actions/user/userProjectAction";
import TopLoadingBar from "../../../components/loader/TopLoadingBar";
import { DELETE_PROJECT_U_RESET } from "../../../Redux/constants/user/userProjectConstant";
import { notifySuccess } from "../../../utils/alerts";
import MetaData from "../../../utils/MetaData";
import CommingSoon from "../../../components/soon/CommingSoon";

const Allproject = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { allproject, error, progress } = useSelector(
    (state) => state.userAllProject
  );
  const {
    isdeleted,
    message: deleMsg,
    error: deleError,
  } = useSelector((state) => state.deleteUserProject);
  const [project, setProject] = useState([]);

  useEffect(() => {
    dispatch(getUserAllProjectAction());
  }, [dispatch]);

  useEffect(() => {
    if (allproject) {
      setProject(allproject);
    }
  }, [allproject]);

  const deleteProject = async (id) => {
    dispatch(deleteUserProjectAction(id));
  };

  useEffect(() => {
    if (isdeleted) {
      dispatch({ type: DELETE_PROJECT_U_RESET });
      notifySuccess(deleMsg);
      dispatch(getUserAllProjectAction());
    }
  }, [isdeleted]);

  //clearing errors
  useEffect(() => {
    dispatch(clearError());
  }, [error, deleError]);

  const data = useMemo(() => [...project], [project]);
  const columns = useMemo(
    () =>
      project[0]
        ? Object.keys(project[0]).map((key) => {
            if (key === "createdAt" || key === "updatedAt") {
              return {
                Header: key,
                accessor: key,
                Cell: ({ value }) => <>{value.slice(0, 10)}</>,
              };
            }

            if (key === "projectUrl") {
              return {
                Header: "View",
                accessor: key,
                Cell: ({ value }) => (
                  <a
                    href={`${value}`}
                    target={"_blank"}
                    className="text-blue-600 capitalize text-2xl flex justify-center"
                  >
                    <AiOutlineEye />
                  </a>
                ),
              };
            }
            if (key === "_id") {
              return {
                Header: "Action",
                accessor: key,
                Cell: ({ value }) => (
                  <div className="flex justify-end">
                    <Link
                      to={`/${user && user.username}/project/update/${value}`}
                      className="mx-4 text-blue-600 text-xl"
                    >
                      <AiFillEdit />
                    </Link>
                    <button
                      className="text-blue-600 text-xl hover:text-red-500"
                      onClick={() => deleteProject(value)}
                    >
                      <AiFillDelete />
                    </button>
                  </div>
                ),
              };
            }

            return { Header: key, accessor: key };
          })
        : [],
    [project]
  );

  const initialState = {
    hiddenColumns: ["images", "__v", "user"],
  };

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
    <>
      <TopLoadingBar loaded={progress} />
      <MetaData title={`${user && user.username} all projects`} />
      <div className="bg-[#f9f9f9] dark:bg-[#181818] flex flex-col min-h-vh">
        {project.length > 0 ? (
          <div className="flex flex-col w-full relative mx-auto max-w-fit">
            <div className="text-center text-2xl w-full font-medium mb-4 relative p-4">
              <h2>My Projects</h2>
              {user && user.username && (
                <div className="absolute top-1/2 -translate-y-1/2 right-4 p-1 bg-orange-500 text-white">
                  <Link to={`/${user.username}/addproject`}>
                    <AiOutlinePlus />
                  </Link>
                </div>
              )}
            </div>

            <div className="w-full md:p-8">
              <div className="w-full overflow-x-auto relative bg-white dark:bg-[#383838] max-w-full">
                {project && (
                  <table {...getTableProps()} className="w-full relative">
                    <thead>
                      {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                          {headerGroup.headers.map((column) => (
                            <th
                              {...column.getHeaderProps(
                                column.getSortByToggleProps()
                              )}
                              className="border first:border-l-0 last:border-r-0 md:first:border-l md:last:border-r py-2 w-96"
                            >
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
                                  className="border first:border-l-0 last:border-r-0 md:first:border-l md:last:border-r p-2 w-96 whitespace-nowrap overflow-hidden"
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
                <div className="border border-t-0 w-full sticky left-0 flex items-center flex-wrap">
                  {pageOptions.length > 1 ? (
                    <div className="flex items-center my-2">
                      <button
                        onClick={() => previousPage()}
                        disabled={!canPreviousPage}
                        className="h-8 w-8 bg-[#585858] text-white mx-2 rounded-full text-sm"
                      >
                        {"prev"}
                      </button>
                      <button
                        onClick={() => gotoPage(0)}
                        disabled={!canPreviousPage}
                        className="h-8 w-8 bg-[#585858] text-white mx-2 rounded-full"
                      >
                        {"1"}
                      </button>
                      <button className="h-8 w-8 bg-[#585858] text-white mx-2 rounded-full flex items-center justify-center">
                        <BsThreeDots />
                      </button>
                      <button
                        onClick={() => gotoPage(pageCount - 1)}
                        disabled={!canNextPage}
                        className="h-8 w-8 bg-[#585858] text-white mx-2 rounded-full"
                      >
                        {pageCount - 1}
                      </button>
                      <button
                        onClick={() => nextPage()}
                        disabled={!canNextPage}
                        className="h-8 w-8 bg-[#585858] text-white mx-2 rounded-full text-sm"
                      >
                        {"next"}
                      </button>
                    </div>
                  ) : (
                    <div></div>
                  )}
                  {project && project.length > 5 && (
                    <div className="m-2">
                      <select
                        value={pageSize}
                        onChange={(e) => setPageSize(Number(e.target.value))}
                        className="outline-none  bg-white dark:bg-black p-1"
                      >
                        {[5, 10, 25, 50, 100].map((element) => (
                          <option key={element} value={element}>
                            show {element}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full min-h-vh flex items-center justify-center">
            <CommingSoon top={"There are no projects"} bottom={"Please uplaod projects..."} />
          </div>
        )}
      </div>
    </>
  );
};

export default Allproject;
