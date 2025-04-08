import React from 'react';

const Table = ({ data }) => {
    const getBadgeClasses = (status) => {
        switch (status) {
            case 'New':
                return 'badge rounded-pill text-primary bg-primary bg-opacity-10';
            case 'In-progress':
                return 'badge rounded-pill text-warning bg-warning bg-opacity-10';
            case 'Completed':
                return 'badge rounded-pill text-success bg-success bg-opacity-10';
            default:
                return 'badge rounded-pill bg-secondary';
        }
    };

    return (
        <div className="table-responsive">
            <table className="table align-middle">
                <thead>
                    <tr>
                        <th scope="col"><input type="checkbox" /></th>
                        <th scope="col">Customer Name</th>
                        <th scope="col">Company</th>
                        <th scope="col">Order Value</th>
                        <th scope="col">Order Date</th>
                        <th scope="col">Status</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((order) => (
                        <tr key={order.id}>
                            <td><input type="checkbox" /></td>
                            <td>
                                <div className="d-flex align-items-center">
                                    <img
                                        src={order.avatar}
                                        alt={order.customerName}
                                        className="rounded-circle me-2"
                                        style={{ width: '32px', height: '32px' }}
                                    />
                                    <span>{order.customerName}</span>
                                </div>
                            </td>
                            <td>{order.company}</td>
                            <td>${order.orderValue}</td>
                            <td>{order.orderDate}</td>
                            <td>
                                <span className={getBadgeClasses(order.status)}>
                                    {order.status}
                                </span>
                            </td>
                            <td>
                                <button className="btn btn-link p-0">
                                    <img src="../imgs/create.png" alt="" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};


export default Table;
