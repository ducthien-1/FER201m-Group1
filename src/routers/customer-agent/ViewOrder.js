import Table from 'react-bootstrap/Table'
import { useContext } from 'react'
import { userContext } from '../../layout/CustomerAgent'

export default function ViewOrder() {
    const indexUser = useContext(userContext)
    const orders = indexUser.orders
    console.log(typeof orders)


    return (
        <>
            <Table striped bordered hover >
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Order Id</th>
                        <th>Date</th>
                        <th>Product</th>
                        <th>Total price</th>
                    </tr>
                </thead>
                <tbody>
                    {orders && orders.map((orderId, index) => (
                        <tr key={orderId}>
                            <td>{index + 1}</td>
                            <td>{orderId}</td>
                            <td>Date Value</td>
                            <td>Product Value</td>
                            <td>Total Price Value</td>
                        </tr>
                    ))}

                    {/* <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                    </tr> */}
                </tbody>
            </Table>
        </>
    )
}