import PropTypes from "prop-types";
import React from "react";

const LogTable = (props) => {
  return (
    <div className="log-box antialiased ">
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr className="font-bold">
              <th>Level</th>
              <th>Description</th>
              <th>Intervention</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-bold text-debug">DEBUG</td>
              <td>meaningful for developers, it, sysadmin</td>
              <td>no</td>
              <td>-</td>
            </tr>
            <tr>
              <td className="font-bold text-info">INFO</td>
              <td>useful information to have</td>
              <td>no</td>
              <td>start or stop service, configuration</td>
            </tr>
            <tr>
              <td className="font-bold text-warn">WARNING</td>
              <td>
                can potentially cause application oddities, but will
                automatically recover
              </td>
              <td>no</td>
              <td>
                switching from a primary to backup server, retrying an operation
              </td>
            </tr>
            <tr>
              <td className="font-bold text-error">ERROR</td>
              <td>
                any error fatal to the operation, but not the service or
                application
              </td>
              <td>yes</td>
              <td>can't open a required file, missing data</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

LogTable.propTypes = {};

export default LogTable;