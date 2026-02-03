import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { faSlash } from "@fortawesome/free-solid-svg-icons/faSlash";
import { Link } from "react-router-dom";

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
          <div className="flex">
            <Link to="/" className="text-teal-900 text-2xl font-bold">
              إتقان
            </Link>
            <img
              src="/src/assets/unnamed (14)-Photoroom.png"
              className="w-8"
              alt=""
            />
          </div>

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
              <Link to="/about-us" className="nav-a">
                من نحن
              </Link>
            </li>
            <li>
              <a href="#" className="nav-a">
                تواصل معنا
              </a>
            </li>
          </ul>
        </div>

        <div className="lg:flex hidden justify-center items-center gap-4">
          <Link
            to="/signup"
            className="nav-a"
            onClick={() => setMenuOpen(false)}
          >
            <button className="bg-teal-200 text-teal-900 font-semibold rounded-xl p-2 shadow-2xl transform duration-300 hover:bg-teal-400 hover:text-black hover:scale-125 cursor-pointer ">
              إنشاء حساب
            </button>
          </Link>
          <Link
            to="/login"
            className="nav-a"
            onClick={() => setMenuOpen(false)}
          >
            <button className="primary-button">تسجيل الدخول</button>
          </Link>
        </div>

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
              <Link
                to="/about-us"
                className="nav-a"
                onClick={() => setMenuOpen(false)}
              >
                من نحن
              </Link>
            </li>
            <li>
              <a href="#" className="nav-a" onClick={() => setMenuOpen(false)}>
                تواصل معنا
              </a>
            </li>
          </ul>
          <div className="flex flex-col justify-center items-center gap-4">
            <Link
              to="/login"
              className="nav-a"
              onClick={() => setMenuOpen(false)}
            >
              <button className="primary-button">تسجيل الدخول</button>
            </Link>
            <Link
              to="/signup"
              className="nav-a"
              onClick={() => setMenuOpen(false)}
            >
              <button className="bg-teal-200 text-teal-800 font-semibold rounded-xl p-2 shadow-2xl transform duration-300 hover:bg-teal-400 hover:text-black hover:scale-125 cursor-pointer ">
                إنشاء حساب
              </button>
            </Link>
          </div>

          <FontAwesomeIcon
            icon={faSlash}
            onClick={() => setMenuOpen(false)}
            className="absolute top-10 right-10 text-2xl cursor-pointer hover:scale-110 transform duration-300"
          />
        </div>
      )}
    </>
  );
}

export default Nav;
