import { Link } from "react-router-dom";

function Register() {
  return (
    <main
      dir="rtl"
      className="flex flex-col justify-center bg-radial to-teal-50 from-teal-700 py-35 min-h-screen"
    >
      <div className="p-5 w-3/4 md:w-2/4 lg:w-1/4 mx-auto bg-white/70 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-black mb-4">إنشاء حساب</h1>

        <form className="flex flex-col gap-4">
          <label className="text-lg text-black">الاسم:</label>
          <input
            type="text"
            className="p-2 border border-gray-300 rounded w-full"
            placeholder="أدخل اسمك"
          />

          <label className="text-lg text-black">البريد الإلكتروني:</label>
          <input
            type="email"
            className="p-2 border border-gray-300 rounded w-full"
            placeholder="أدخل بريدك الإلكتروني"
          />

          <label htmlFor="password" className="text-lg text-black">
            كلمة المرور:
          </label>
          <input
            id="password"
            type="password"
            className="p-2 border border-gray-300 rounded w-full"
            placeholder="أدخل كلمة المرور"
          />

          <button type="submit" className="primary-button">
            إنشاء حساب
          </button>

          <Link to="/login" className="secondary-button text-center">
            لديك حساب؟ تسجيل الدخول
          </Link>
        </form>
      </div>
    </main>
  );
}

export default Register;
