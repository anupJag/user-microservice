import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

import "./UserSearchAdd.scss";
import Button from "../../atoms/Button";
import IconButton from "../../molecules/IconButton";

const UserSearchAdd = (props) => {
  const { addNewUserClick, search, resetSearch, resetSearchValue } = props;

  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    reset();
  }, [resetSearchValue === true]);

  return (
    <div className="UserSearch-root">
      <form onSubmit={handleSubmit(search)} className="UserSearch-form">
        <input
          type="text"
          ref={register()}
          placeholder="Search by LLID"
          name="search"
          className="UserSearch-input"
        />
        <IconButton
          iconType="icon-close"
          className="UserSearch-close"
          onClick={resetSearch}
        />
      </form>
      <div>
        <Button color="primary" title="Add New User" onClick={addNewUserClick}>
          Add New User
        </Button>
      </div>
    </div>
  );
};

export default UserSearchAdd;
