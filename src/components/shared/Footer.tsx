function Footer() {
  return (
    <>
      <footer dir="rtl" className="bg-[#0e2334] p-4">
        <div className="footer-content text-white grid grid-cols-1 lg:grid-cols-5 px-6 py-10 gap-6">
          <div className="col-span-2">
            <h3 className="h3 text-white mb-4">إتقان</h3>
            <p className="text-md max-w-100">
              منصة تعليمية عربية تهدف إلى تقديم محتوى تعليمي في مجالات البرمجة
              وتطوير الويب.
            </p>
          </div>
          <div>
            <h3 className="h3 text-white mb-4">روابط سريعة</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="#" className="text-sm hover:text-teal-400">
                  الرئيسية
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-teal-400">
                  الدورات
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-teal-400">
                  من نحن
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-teal-400">
                  تواصل معنا
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="h3 text-white mb-4">المساعدة</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="#" className="text-sm hover:text-teal-400">
                  الأسئلة الشائعة
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-teal-400">
                  دعم العملاء
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="h3 text-white mb-4">سياستنا</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="#" className="text-sm hover:text-teal-400">
                  سياسة الخصوصية
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-teal-400">
                  شروط الاستخدام
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="p-2" />
        <p className="text-white">منصة إتقان جميع الحقوق محفوظة.</p>
      </footer>
    </>
  );
}

export default Footer;
