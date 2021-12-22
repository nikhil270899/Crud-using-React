import { useRef, useState } from "react";
import AddedList from "./AddedList";
import TextField from "@material-ui/core/TextField";

let data = [];

function CrudApp() {
  useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [updatedId, setId] = useState("");

  let [updatedData, setUpdatedData] = useState({});

  const [submitted, formSubmitted] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    const id = updatedData.id ? updatedId : Math.floor(Math.random() * 100);
    const emailEntered = email;
    const nameEntered = name;
    const dobEntered = dob;
    const mobileEntered = mobile;
    const addressEntered = address;
    const enteredDetails = [
      {
        id,
        emailEntered,
        nameEntered,
        dobEntered,
        mobileEntered,
        addressEntered,
      },
    ];
    debugger;
    data.push(
      ...enteredDetails.map((v) => {
        console.log(v.id === updatedId);
        return v.id === updatedId ? { ...v, updatedData } : v;
      })
    );
    console.log(data);
    if (id === updatedId) {
      const x = data.findIndex((v) => v.id === updatedId);
      data.splice(x, 1);
    }
    console.log(data);

    // data.map(, ...updatedData);
    setName("");
    setEmail("");
    setAddress("");
    setMobile("");
    setDob("");
    setId("");
    setUpdatedData({});
    formSubmitted(true);
    console.log(data);
  }

  function deletedData(e, index) {
    console.log(e);
    data.splice(index, 1);
  }

  // function emailHandle(e) {
  //   setEmail(e.target.value);
  // }

  function updateData(dataAvailable, index) {
    dataAvailable.forEach((data) => {
      setId(data.id);
      setEmail(data.emailEntered);
      setName(data.nameEntered);
      setMobile(data.mobileEntered);
      setDob(data.dobEntered);
      setAddress(data.addressEntered);
    });
    setUpdatedData(...dataAvailable);
  }

  return (
    <div>
      <form className="add-form" onSubmit={onSubmit}>
        <b>
          <label className="label-class">Registration Details</label>
        </b>

        <div className="form-control">
          {/* <label>Name</label> */}

          <TextField
            id="standard-basic"
            label="Name"
            value={name}
            onChange={(e) => console.log(setName(e.target.value))}
          />
          {/* <input
            type="text"
            placeholder="Name"
            required
           
            
          /> */}
        </div>
        <div className="form-control">
          <TextField
            id="standard-basic"
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-control">
          <TextField
            id="standard-basic"
            type="date"
            placeholder="D.O.B"
            required
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
          {/* <input
            type="date"
            placeholder="D.O.B"
            required
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          /> */}
        </div>
        <div className="form-control">
          <TextField
            id="standard-basic"
            type="text"
            placeholder="Mobile"
            required
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>
        <div className="form-control">
          <TextField
            id="standard-basic"
            type="text"
            placeholder="Address"
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="submit-class">
          <input type="submit" className="btn" value="Submit" />
        </div>
      </form>
      <div>
        {submitted &&
          (data.length > 0 ? (
            <AddedList
              registeredDetails={data}
              onCancel={(e, index) => deletedData(e, index)}
              onUpdate={(e, index) => updateData(e, index)}
            />
          ) : (
            "No Data Found!"
          ))}
      </div>
    </div>
  );
}

export default CrudApp;
