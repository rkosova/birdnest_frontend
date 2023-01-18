import { useEffect } from "react"; 

import OffenderRow from "./OffenderRow";


const OffenderTable = ({ offenders }) => {

    return (
        <table className='offenderTable'>
            <thead>
                <tr>
                    <th></th>
                    <th>Snapshot</th>
                    <th>Distance</th>
                    <th>Pilot ID</th>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                </tr>  
            </thead>
            <tbody>
                { offenders.map((offender, i) => {
                    return (
                    <OffenderRow 
                        offender={ offender } 
                        index = { i } 
                        key={ offender.id }
                    />
                    );
                }) }
            </tbody>
      </table>
    );
}

export default OffenderTable;