import { useState } from "react";

export function BindObj() {

    const products = [
        { Name: "TV", Price: 5624.00, stock: true },
        { Name: "Mobile", Price: 56245.20, stock: false },
        { Name: "Laptop", Price: 568542.55, stock: true }
    ];
    const [product, setProduct] = useState(products)
    return (
        <div className="container-fluid">
            <table className="table table-hover border border-1  m-2">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th>Product Stock</th>
                    </tr>
                </thead>

                <tbody>

                    {
                       product.map(pro=>{
                          return <tr key={pro.Name}>

                               <td>{pro.Name}</td>
                               <td>{pro.Price}</td>
                               <td>{pro.stock ? "Avalable" : "Not Avalable"}</td>
                           </tr>
                       })
                    }
                </tbody>
            </table>
        </div>
    )
}