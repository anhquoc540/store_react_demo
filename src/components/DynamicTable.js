import { useState } from "react";
import TableRows from "./TableRows"
function DynamicTalble() {
    const [rowsData, setRowsData] = useState([]);

    const addTableRows = () => {

        const rowsInput = {
            fullName: '',
            emailAddress: '',
            salary: ''
        }
        setRowsData([...rowsData, rowsInput])

    }
    const deleteTableRows = (index) => {
        const rows = [...rowsData];
        rows.splice(index, 1);
        setRowsData(rows);
    }

    const handleChange = (index, evnt) => {

        const { name, value } = evnt.target;
        const rowsInput = [...rowsData];
        rowsInput[index][name] = value;
        setRowsData(rowsInput);



    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Full Name</th>
                                <th>Email Address</th>
                                <th>Salary</th>
                                <th><button className="btn btn-outline-success col-8" onClick={addTableRows} >+</button></th>
                            </tr>
                        </thead>
                        <tbody>
                            <TableRows rowsData={rowsData} deleteTableRows={deleteTableRows} handleChange={handleChange} />
                        </tbody>
                    </table>
                  
                        <div className="col-12 my-5">
                            <button type="button" class="btn btn-success float-end col-3"><i class="far fa-credit-card"></i> Submit
                               
                            </button>
                           
                        </div>





                    
                </div>








            </div>
        </div >
    )
}
export default DynamicTalble