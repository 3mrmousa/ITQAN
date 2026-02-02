import HeroImage from "../assets/wmremove-transformed (1)-Photoroom.png";

import img1 from "../assets/cards/Gemini_Generated_Image_bmi9x0bmi9x0bmi9-Photoroom.png";
import img2 from "../assets/cards/unnamed (2)-Photoroom (1).png";
import img3 from "../assets/cards/unnamed (3)-Photoroom.png";
import img4 from "../assets/cards/unnamed (4)-Photoroom.png";
import img5 from "../assets/cards/unnamed (5)-Photoroom.png";
import img6 from "../assets/cards/unnamed (6)-Photoroom.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import Carousel from "./object&arrays/explore";

function Hero() {
  return (
    <>
      <div dir="rtl">
        <section className="hero flex flex-col items-center justify-center min-h-screen px-6">
          <div className="hero-content w-full flex flex-col lg:flex-row items-center justify-evenly">
            <div className="image">
              <img
                src={HeroImage}
                alt="Hero Image"
                className="hero-image w-sm"
              />
            </div>
            <div className="content flex flex-col gap-6">
              <p className="hero-title text-6xl font-bold max-w-100">
                أتقن مهارات المستقبل{" "}
                <span className="text-teal-800">بلغتك</span>
              </p>
              <p className="hero-subtitle text-md max-w-120">
                منصة تعليمية عربية تهدف إلى تقديم محتوى تعليمي عالي الجودة في
                مجالات البرمجة وتطوير الويب.
              </p>
              <div className="buttons flex flex-row-reverse justify-center gap-5">
                <a href="#" className="nav-a">
                  <button className="primary-button">ابدأ التعلم الآن</button>
                </a>
                <a href="#" className="nav-a">
                  <button className="secondary-button">اكتشف الدورات</button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="features">
          <div className="features-content flex flex-col items-center justify-center px-6 py-20 gap-10">
            <h2 className="h2">
              لماذا تختار منصة <span className="text-teal-800">إتقان</span>
            </h2>
            <div className="cards grid grid-col-1 md:grid-cols-2 gap-6">
              <div className="card">
                <img src={img1} alt="" className="w-20" />
                <h3 className="h3">مدربون محترفون</h3>
                <p>
                  خبراء في مجالاتهم يقدمون شروحات عملية ومبسطة لتساعدك على إتقان
                  المهارات بسرعة.
                </p>
              </div>
              <div className="card">
                <img src={img4} alt="" className="w-20" />
                <h3 className="h3">دورات عملية</h3>
                <p>
                  دورات تركز على التطبيق العملي والمشاريع الواقعية لتجهيزك لسوق
                  العمل مباشرة.
                </p>
              </div>
              <div className="card">
                <img src={img3} alt="" className="w-20" />
                <h3 className="h3">تعلم في أي وقت</h3>
                <p>
                  يمكنك الوصول إلى المحتوى التعليمي من أي مكان وفي أي وقت بما
                  يناسب جدولك.
                </p>
              </div>
              <div className="card">
                <img src={img2} alt="" className="w-20" />
                <h3 className="h3">شهادات معتمدة</h3>
                <p>
                  احصل على شهادات رسمية معترف بها لتعزيز فرصك في التوظيف والتقدم
                  المهني.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="roadmap lg:my-25">
          <div className="roadmap-content flex flex-col items-center justify-center px-6 py-20 gap-10">
            <h2 className="h2">
              كيف تبدأ <span className="text-teal-800">رحلتك</span> التعليمية؟
            </h2>
            <ul className="steps-list flex flex-col lg:flex-row gap-6">
              <li className="">
                <img src={img5} alt="اختر المسار" className="w-25" />
                <h3 className="h3">أختار المسار</h3>
                <p className="max-w-90">
                  حدد المجال الذي ترغب في احترافه من بين مجموعة واسعة من
                  التخصصات.
                </p>
              </li>

              <li className="lg:hidden">
                <FontAwesomeIcon
                  icon={faArrowDown}
                  className="text-teal-800 text-3xl mr-8"
                />
              </li>

              <li className="hidden lg:flex justify-center items-center">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-teal-800 text-3xl mr-8"
                />
              </li>

              <li className="">
                <img src={img6} alt="ابدأ التعلم" className="w-25" />
                <h3 className="h3">ابدأ التعلم</h3>
                <p className="max-w-90">
                  ابدأ دراسة الدورات العملية وفق جدولك واستفد من الموارد
                  التعليمية المصممة بعناية.
                </p>
              </li>

              <li className="lg:hidden">
                <FontAwesomeIcon
                  icon={faArrowDown}
                  className="text-teal-800 text-3xl mr-8"
                />
              </li>

              <li className="hidden lg:flex justify-center items-center">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-teal-800 text-3xl mr-8"
                />
              </li>

              <li className="">
                <img src={img2} alt="احصل على شهادتك" className="w-25" />
                <h3 className="h3">احصل على شهادتك</h3>
                <p className="max-w-90">
                  بعد إكمال الدورات، احصل على شهادة معتمدة تعزز فرصك في سوق
                  العمل.
                </p>
              </li>
            </ul>
          </div>
        </section>

        <section className="explore">
          <div className="explore-content flex flex-col items-center justify-center px-6 py-20 gap-6">
            <h2 className="h2">
              استكشف أحدث <span className="text-teal-800">المسارات</span> التعليمية
            </h2>
            <p className="text-md max-w-100 text-center">
              انضم إلى آلاف المتعلمين الذين بدأوا رحلتهم التعليمية معنا. اختر من
              بين مئات الدورات المصممة لتلبية احتياجاتك وتطوير مهاراتك.
            </p>
          </div>
          <Carousel />
        </section>
      </div>
    </>
  );
}


export default Hero;
