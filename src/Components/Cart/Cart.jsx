
const Cart = () => {
    return (
        <div className="overflow-x-auto bg-white">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Brand</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr>
                        <td>Cy Ganderton</td>
                        <td>Quality Control Specialist</td>
                        <td>Blue</td>
                        <td>X</td>
                    </tr>
                    {/* row 2 */}
                    <tr className="hover">
                        <td>Hart Hagerty</td>
                        <td>Desktop Support Technician</td>
                        <td>Purple</td>
                        <td>X</td>
                    </tr>
                    {/* row 3 */}
                    <tr>
                        <td>Brice Swyre</td>
                        <td>Tax Accountant</td>
                        <td>Red</td>
                        <td>X</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Cart;