import { AxiosError } from "axios";
import React, { useState, useCallback, useEffect } from "react";
import { useSnackbar } from "react-simple-snackbar";
import PageLayout from "../../template/PageLayout";
import MainCanvas from "../../template/MainCanvas";

import Tabs from "../../molecules/Tabs";
import Tab from "../../molecules/Tab";
import TabPanel from "../../molecules/TabPanel";
import UsersTable from "../../organisms/UsersTable";
import {
  getUsers,
  updateRole,
  createNewUser,
  searchUser,
} from "../../../data/API";
import Dialog from "../../molecules/Dailog";
import UserManagementForm from "../../organisms/UserManagementForm";
import UserSearchAdd from "../../organisms/UserSearchAdd";

const UserManagement = () => {
  const USERS_TABLE_HEAD_DATA = ["LLID", "Name", "Email", "Role", ""];

  const [tab, setTab] = useState("Users");
  const [userData, setUserData] = useState([]);
  const [showDialog, setShowDialog] = useState(false);
  const [updateUser, setUpdateUser] = useState({
    id: null,
    llId: null,
    name: null,
    role: null,
  });
  const [createNewUserDialog, setCreateNewUserDialog] = useState(false);
  const [customCreateUserError, setCustomCreateUserError] = useState("");
  const [resetSearchValue, setResetSearchValue] = useState(false);
  const [openSnackBar] = useSnackbar();

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    await getUsers().then((response) => {
      const { data } = response;

      /**
       * @type {Array<{_id: string, llid: string, email: string, name: string, role: string}>}
       */
      let tempUserData = [];

      data.forEach((element) => {
        tempUserData.push({
          _id: element._id,
          email: element.email,
          llId: element.llId,
          name: element.name,
          role: element.role,
        });
      });

      setUserData(tempUserData);
    });

    return Promise.resolve();
  };

  const handleTabChange = useCallback((event, newValue) => {
    setTab(newValue);
  }, []);

  const handleUserEditClick = (id) => {
    const getUser = userData.find((el) => el.llId === id);
    setUpdateUser({
      ...getUser,
    });
    setShowDialog(true);
  };

  const onDialogClose = useCallback(() => {
    setShowDialog(false);
  }, []);

  /**
   * @function updateUserData
   *
   * @param {{llId: string, role: string, name: string, email: string}} data
   *
   * @returns {void}
   */
  const updateUserData = (data) => {
    updateRole(updateUser.llId, { role: data.role })
      .then((response) => {
        return getAllUsers();
      })
      .then(() => {
        setShowDialog(false);
      })
      .catch((error) => console.error(error));
  };

  const createNewUserDialogCloseHandler = useCallback(() => {
    setCustomCreateUserError(null);
    setCreateNewUserDialog(false);
  }, []);

  const addNewUser = useCallback(() => {
    setCreateNewUserDialog(true);
  }, []);

  const createNewUserHandler = (data) => {
    createNewUser({ ...data })
      .then((response) => {
        return getAllUsers();
      })
      .then(() => {
        setCreateNewUserDialog(false);
        openSnackBar("Added New User");
      })
      .catch(
        /**
         * @param {AxiosError} error
         */
        (error) => {
          setCustomCreateUserError(error.response.data.error);
        }
      );
  };

  const searchUserByID = (data) => {
    if (!data.search) return;

    setResetSearchValue(false);
    searchUser(data.search)
      .then((response) => {
        const { data } = response;

        setUserData([
          {
            _id: data._id,
            email: data.email,
            llId: data.llId,
            name: data.name,
            role: data.role,
          },
        ]);
      })
      .catch((error) => {
        setUserData([]);
        console.error("--- ERROR WHILE SEARCHING USER ---", error);
      });
  };

  const resetSearch = useCallback(() => {
    getAllUsers().then(() => {
      setResetSearchValue(true);
    });
  }, []);

  return (
    <PageLayout headerName="User Management">
      <MainCanvas>
        <Tabs value={tab} onTabClick={handleTabChange}>
          <Tab title="Users" value="Users" />
          <Tab title="Roles" value="Roles" />
        </Tabs>
        <TabPanel tabValue={tab} panelValue="Users">
          <Dialog open={showDialog} title="User Update" onClose={onDialogClose}>
            <UserManagementForm
              userFormData={updateUser}
              userDataSubmit={updateUserData}
              editMode
            />
          </Dialog>
          <Dialog
            title="Create New User"
            open={createNewUserDialog}
            onClose={createNewUserDialogCloseHandler}
          >
            <UserManagementForm
              userDataSubmit={createNewUserHandler}
              customError={customCreateUserError}
            />
          </Dialog>
          <UserSearchAdd
            search={searchUserByID}
            resetSearch={resetSearch}
            addNewUserClick={addNewUser}
            resetSearchValue={resetSearchValue}
          />
          <UsersTable
            headerData={USERS_TABLE_HEAD_DATA}
            userTableData={userData}
            userDetailsEditClick={handleUserEditClick}
          />
        </TabPanel>
        <TabPanel tabValue={tab} panelValue="Roles">
          {" "}
          Showing Roles Data{" "}
        </TabPanel>
      </MainCanvas>
    </PageLayout>
  );
};

export default UserManagement;
