import classes from "../component/AddedList.module.css";
import Button from "@material-ui/core/Button";
import { useState } from "react";
function AddedList(props) {
  console.log(props);

  let [det, setDet] = useState([]);
  det = props.registeredDetails;

  function updateDetails(enterdIdDetails) {
    det = props.registeredDetails.filter((v, i) => {
      return v.id === enterdIdDetails;
    });
    props.onUpdate(det);
  }
  function deleteDetails(mobile) {
    det = props.registeredDetails.filter((v, i) => {
      return v.mobileEntered !== mobile;
    });

    props.onCancel(det);
    setDet(det);
    console.log(det);
    console.log(setDet(det));
  }
  return (
    <div className={classes.addedClass}>
      <h2>Details :</h2>
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Dob</th>
          <th>Mobile</th>

          <th>Address</th>
          <th>Edit User</th>
        </tr>

        {det.map((v) => {
          return (
            <tr>
              <td key={v.nameEntered}> {v.nameEntered}</td>
              <td key={v.emailEntered}> {v.emailEntered}</td>
              <td key={v.dobEntered}> {v.dobEntered}</td>
              <td key={v.mobileEntered}> {v.mobileEntered}</td>
              <td key={v.addressEntered}> {v.addressEntered}</td>
              <td key={v.id}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => updateDetails(v.id)}
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  id={classes.deleteId}
                  onClick={() => deleteDetails(v.mobileEntered)}
                >
                  <span className={classes.span}>Delete</span>
                </Button>
              </td>
            </tr>
          );
        })}

        {/* <td>Jill</td>
        <td>Smith</td>
        <td>50</td> */}
      </table>
    </div>
  );
}

export default AddedList;
