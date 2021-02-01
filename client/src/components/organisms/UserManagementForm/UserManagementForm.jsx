import React, { useEffect } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import Button from "../../atoms/Button";

import "./UserManagementForm.scss";

/**
 * @typedef {Object} UserFormData
 *
 * @property {string} llId
 * @property {string} name
 * @property {string} email
 * @property {string} role
 * @property {string} id
 */

/**
 * @typedef {Object} UserManagementFormProps
 *
 * @property {UserFormData} userFormData
 * @property {boolean} editMode
 * @property {string} customError
 */

/**
 *
 * @param {UserManagementFormProps} props
 */
const UserManagementForm = (props) => {
  const { userFormData, userDataSubmit, editMode, customError } = props;

  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      llId: userFormData && userFormData.llId ? userFormData.llId : "",
      email: userFormData && userFormData.email ? userFormData.email : "",
      name: userFormData && userFormData.name ? userFormData.name : "",
      role: userFormData && userFormData.role ? userFormData.role : "",
    },
  });

  return (
    <form
      onSubmit={handleSubmit(userDataSubmit)}
      className="UserManagementForm-root"
    >
      <div className="UserManagementForm-Control">
        <label htmlFor="llId" className="UserManagementForm-Control-Label">
          LLID
        </label>
        <input
          type="text"
          name="llId"
          placeholder="LLID"
          ref={register({
            required: { value: true, message: "LLID cannot be left blank" },
          })}
          className={classnames([
            "UserManagementFormContol-Input",
            customError ? "UserManagementFormControl-CustomError" : null,
          ])}
          disabled={editMode}
        />
      </div>
      <div className="UserManagementForm-Control">
        <label htmlFor="email" className="UserManagementForm-Control-Label">
          Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          ref={register({
            required: { value: true, message: "Email cannot be left blank" },
            pattern: {
              value: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
              message: "Not a valid mail id",
            },
          })}
          className="UserManagementFormContol-Input"
          disabled={editMode}
        />
      </div>
      <div className="UserManagementForm-Control">
        <label htmlFor="name" className="UserManagementForm-Control-Label">
          Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          ref={register({
            required: { value: true, message: "Name cannot be blank" },
          })}
          className="UserManagementFormContol-Input"
          disabled={editMode}
        />
      </div>
      <div className="UserManagementForm-Control">
        <label htmlFor="role" className="UserManagementForm-Control-Label">
          Role
        </label>
        <select
          name="role"
          ref={register({
            required: { value: true, message: "Role cannot be left blank" },
          })}
          className="UserManagementFormContol-Input"
        >
          <option value="">Select...</option>
          <option value="SUPERADMIN">SUPERADMIN</option>
          <option value="ADMIN">ADMIN</option>
          <option value="REVIEWER">REVIEWER</option>
          <option value="COLLABORATOR">COLLABORATOR</option>
          <option value="MEMBER">MEMBER</option>
        </select>
      </div>

      {Object.keys(errors).length > 0 && (
        <div className="UserManagementFormControl-Errors">
          <ol>
            {Object.keys(errors).map((error) => (
              <li key={error}>{errors[error]["message"]}</li>
            ))}
          </ol>
        </div>
      )}
      {customError && (
        <div className="UserManagementFormControl-Errors">{customError}</div>
      )}
      <div className="UserManagementFormControl-Actions">
        <Button
          color="primary"
          type="submit"
          onClick={handleSubmit(userDataSubmit)}
          className="UserManagementFormControl-Actions-spacer"
        >
          Submit
        </Button>
        <Button color="default" type="reset">
          Cancel
        </Button>
      </div>
    </form>
  );
};

UserManagementForm.propTypes = {
  /**
   * @type {boolean}
   */
  editMode: PropTypes.bool,
};

export default UserManagementForm;
