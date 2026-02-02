import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { faSlash } from "@fortawesome/free-solid-svg-icons/faSlash";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav
        className="
        w-full
        flex flex-row-reverse items-center justify-between lg:justify-around
        fixed top-5
        px-8 py-4 rounded-full
        backdrop-blur-lg
        border border-white/1"
      >
        <div className="flex flex-row-reverse gap-8 items-center">
          <a href="#" className="nav-a text-2xl font-bold">
            إتقان
          </a>

          <ul className="lg:flex gap-4 hidden">
            <li>
              <a href="#" className="nav-a text">
                الرئيسية
              </a>
            </li>
            <li>
              <a href="#" className="nav-a">
                الدورات
              </a>
            </li>
            <li>
              <a href="#" className="nav-a">
                من نحن
              </a>
            </li>
            <li>
              <a href="#" className="nav-a">
                تواصل معنا
              </a>
            </li>
          </ul>
        </div>
        <a href="#" className="nav-a hidden lg:block">
          <button className="nav-button">تسجيل الدخول</button>
        </a>

        <div className="lg:hidden" onClick={() => setMenuOpen(true)}>
          <FontAwesomeIcon
            icon={faBarsStaggered}
            className="text-2xl cursor-pointer"
          />
        </div>
      </nav>

      {menuOpen && (
        <div className="mobile-menu fixed inset-0 z-100 bg-black/1 backdrop-blur-lg flex flex-col gap-10 justify-center items-center">
          <ul className="flex flex-col gap-10 text-2xl text-center">
            <li>
              <a
                href="#"
                className="nav-a text"
                onClick={() => setMenuOpen(false)}
              >
                الرئيسية
              </a>
            </li>
            <li>
              <a href="#" className="nav-a" onClick={() => setMenuOpen(false)}>
                الدورات
              </a>
            </li>
            <li>
              <a href="#" className="nav-a" onClick={() => setMenuOpen(false)}>
                من نحن
              </a>
            </li>
            <li>
              <a href="#" className="nav-a" onClick={() => setMenuOpen(false)}>
                تواصل معنا
              </a>
            </li>
          </ul>
          <a href="#" className="nav-a" onClick={() => setMenuOpen(false)}>
            <button className="nav-button bg-teal-400 text-white px-6 py-4 border-0">
              تسجيل الدخول
            </button>
          </a>

          <FontAwesomeIcon
            icon={faSlash}
            onClick={() => setMenuOpen(false)}
            className="absolute top-10 right-10 text-2xl"
          />
        </div>
      )}
    </>
  );
}

export default Nav;
