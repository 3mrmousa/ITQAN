import img2 from "../assets/about-us/unnamed (13)-Photoroom.png";

function AboutUs() {
  return (
    <>
      <div
        dir="rtl"
        className="about-us pt-30 pb-30 flex justify-center bg-linear-to-r from-[#e6f6f2] via-[#9edfd3] to-[#e6f6f2]"
      >
        <div className="about-us-content flex flex-col lg:flex-row gap-10 lg:gap-40 px-5">
          <div className="flex flex-col gap-20">
            <div className="dialog shadow-lg p-3 rounded-lg">
              <h2 className="about-us-title h2">من نحن</h2>
              <p className="about-us-description text-lg max-w-200">
                إتقان هي منصة تعليمية تهدف إلى تمكين الأفراد من اكتساب مهارات
                جديدة في مجالات التكنولوجيا المختلفة. نحن نقدم دورات تدريبية
                عالية الجودة تغطي مواضيع مثل تطوير الويب، علوم البيانات، الذكاء
                الاصطناعي، وتطوير التطبيقات المحمولة. فريقنا من الخبراء ملتزم
                بتقديم محتوى تعليمي محدث وشامل يساعد المتعلمين على تحقيق أهدافهم
                المهنية والشخصية.
              </p>
            </div>
            <div className="dialog shadow-lg p-3 rounded-lg">
              <h2 className="about-us-title h2">رؤيتنا</h2>
              <p className="about-us-description text-lg max-w-200">
                رؤيتنا هي أن نصبح المنصة التعليمية الرائدة في العالم العربي،
                معترف بها بجودة محتواها التعليمي وتأثيرها الإيجابي على حياة
                المتعلمين.
              </p>
            </div>
            <div className="dialog shadow-lg p-3 rounded-lg">
              <h2 className="about-us-title h2">مهمتنا</h2>
              <p className="about-us-description text-lg max-w-200">
                مهمتنا في إتقان هي توفير تعليم عالي الجودة ومتاح للجميع، مما
                يمكن الأفراد من تطوير مهاراتهم وتحقيق طموحاتهم المهنية في عالم
                التكنولوجيا سريع التغير.
              </p>
            </div>
          </div>
          <img src={img2} alt="" className="w-80" />
        </div>
      </div>
    </>
  );
}

export default AboutUs;
