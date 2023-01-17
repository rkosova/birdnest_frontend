
const OffenderRow = (offender, index) => {
    return (
        <tr>
            <td>{ index }</td>
            <td>{ offender.serialNumber }</td>
            <td>{ offender.distance }</td>
            <td>{ offender.firstName }</td>
            <td>{ offender.lastName }</td>
            <td>{ offender.phoneNumber }</td>
            <td>{ offender.email }</td>
        </tr>
    )
}