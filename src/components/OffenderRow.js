
const OffenderRow = ({ offender, index }) => {
   return (
        <tr>
            <td>{ index }</td>
            <td>{ offender.date }</td>
            <td>{ (offender.distance / 1000).toFixed(2) }m</td>
            <td>{ offender.pilotId }</td>
            <td>{ offender.firstName }</td>
            <td>{ offender.lastName }</td>
            <td>{ offender.email }</td>
            <td>{ offender.phoneNumber }</td>
        </tr>
    )
}

export default OffenderRow;