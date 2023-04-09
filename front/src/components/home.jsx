import { Outlet, Link } from "react-router-dom";

export function Home() {
    return <div className="container">
        <div>
            Private Ethereum Blockchain
            <Link to="/products">Products</Link>
            <Link to="/transfers">Transfers</Link>
            <Link to="/cart">Cart</Link>
        </div>
        <Outlet></Outlet>
    </div>
}