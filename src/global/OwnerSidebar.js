export default function OwnerSidebar(){
    return (
        <div className="sidebar">
            <div className="sidebar-header">
            </div>
            <ul className="sidebar-menu">
                <li>
                    <a href="/owner/products">Manage Products</a>
                </li>
                <li>
                    <a href="/owner/vouchers">Manage Vouchers</a>
                </li>
                <li>
                    <a href="/owner/events">Manage Events</a>
                </li>
                <li>
                    <a href="/owner/reports">Manage Reports</a>
                </li>
                <li>
                    <a href="/owner/decide-reports">Decide Reports</a>
                </li>
                <li>
                    <a href="/owner/dashboard">Dashboard</a>
                </li>
            </ul>
        </div>
    )
}