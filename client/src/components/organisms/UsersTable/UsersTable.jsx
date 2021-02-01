import React, { useState, useCallback, useEffect } from "react";
import Table from "../../molecules/Table/Table";
import TableHead from "../../molecules/TableHead/TableHead";
import TableBody from "../../molecules/TableBody";
import TableRow from "../../molecules/TableRow";
import TableCell from "../../molecules/TableCell";
import IconButton from "../../molecules/IconButton";
import TablePagination from "../../molecules/TablePagination";

/**
 * @typedef {Object} UserData
 *
 * @property {string} _id
 * @property {string} llId
 * @property {string} email
 * @property {string} name
 * @property {string} role
 */

/**
 * @typedef {Object} UserTableProps
 *
 * @property {Array<string>} headerData
 * @property {Array<UserData>} userTableData
 * @property {(id) => any} userDetailsEditClick
 */

/**
 * @function UsersTable
 *
 * @param {UserTableProps} props
 *
 * @returns {JSX.Element}
 */
const UsersTable = (props) => {
  const { headerData, userTableData, userDetailsEditClick } = props;

  const [currentPage, setCurrentPage] = useState(0);
  const [totalRecordCount, setTotalRecordCount] = useState(0);
  const [pageSize] = useState(5);

  useEffect(() => {
    if (userTableData && userTableData.length > 0) {
      setTotalRecordCount(userTableData.length);
    }
  }, [userTableData]);

  const changeCurrentPage = useCallback((newValue) => {
    setCurrentPage(newValue);
  }, []);

  const editRowClick = (id) => {
    userDetailsEditClick(id);
  };

  return (
    <React.Fragment>
      <Table>
        <TableHead tableHeadData={headerData} />
        <TableBody>
          {userTableData && userTableData.length > 0 ? (
            userTableData
              .slice(currentPage * pageSize, currentPage * pageSize + pageSize)
              .map((el) => (
                <TableRow key={el._id}>
                  <TableCell>{el.llId}</TableCell>
                  <TableCell>{el.email}</TableCell>
                  <TableCell>{el.name}</TableCell>
                  <TableCell>{el.role}</TableCell>
                  <TableCell>
                    <IconButton
                      title="edit"
                      iconType="icon-pencil"
                      onClick={() => editRowClick(el.llId)}
                    />
                  </TableCell>
                </TableRow>
              ))
          ) : (
            <TableRow>No Data To Display</TableRow>
          )}
        </TableBody>
      </Table>
      <TablePagination
        currentPage={currentPage}
        pageSize={pageSize}
        totalRecordCount={totalRecordCount}
        onChange={changeCurrentPage}
      />
    </React.Fragment>
  );
};

export default UsersTable;
