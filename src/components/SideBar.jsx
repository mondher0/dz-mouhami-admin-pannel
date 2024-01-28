import { MessageCircleWarning, ShoppingCart, Store, User } from "lucide-react";
import "../css/side-bar.css";
import Link from "next/link";

const SideBar = () => {
  const style = {
    textDecoration: "none",
    color: "white",
  };

  return (
    <aside className="sidebar flex gap-36">
      <img src="/logo.svg" alt="Logo" width={150} className="mt-5" />
      <ul className="links gap-5">
        <Link href="/" style={style}>
          <li>
            <div className="link dashboard">
              <User />
              <p>Loyers</p>
            </div>
          </li>
        </Link>
        <Link href="/users" style={style}>
          <li>
            <div className="link dashboard">
              <User />
              <p>Users</p>
            </div>
          </li>
        </Link>
      </ul>
    </aside>
  );
};

export default SideBar;
