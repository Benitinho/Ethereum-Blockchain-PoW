import { Outlet, Link } from "react-router-dom";

export function Home() {
   return <div className="container"> 
        <div className="text-end p-3 border">
            <Link to="/products">Products</Link>
            <Link className="mx-2" to="/transfers">Transfers</Link>
            <Link to="/cart">Cart</Link>
        </div>
        <div className="p-5 border">
        <Outlet></Outlet>
    </div>
    </div>
}


