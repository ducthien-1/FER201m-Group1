export default function AdminSidebar(){
    return (
        <div className="sidebar">
            <div className="sidebar-header">
            </div>
            <ul className="sidebar-menu">
                <li>
                    <a href="/admin/products">Manage Products</a>
                </li>
                <li>
                    <a href="/admin/categories">Manage Categories</a>
                </li>
                <li>
                    <a href="/admin/brands">Manage Brands</a>
                </li>
                <li>
                    <a href="/admin/accounts">Manage Accounts</a>
                </li>
            </ul>
        </div>
    )
}