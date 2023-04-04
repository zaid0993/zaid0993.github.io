class Translate{
    constructor(){

        document.getElementById("arabic").addEventListener("click",()=>{
            this.translate("arabic");
        });

        document.getElementById("english").addEventListener("click",()=>{
            this.translate("english");
        });
        this.translate(localStorage.getItem("Language"));


    }
    translate(language){
        if(language == "arabic"){
            document.getElementById("Follow_us").innerHTML = "تابعنا على :";
             document.getElementById("Call_Us").innerHTML ="تواصل معنا على";
             document.getElementById("home").innerHTML ="الصفحة الرئيسية";
             document.getElementById("about").innerHTML ="من نحن";
             document.getElementById("services").innerHTML ="خدماتنا";
             document.getElementById("products").innerHTML ="منجاتنا";
             document.getElementById("contact").innerHTML ="معلومات الاتصال";
            //  document.getElementById("read_more4").innerHTML ="قرأة المزيد";

             document.getElementById("about_us").innerHTML ="<br>من و مذاق متنوع ساحر .<br> يدير Zaid Restaurant فريق من المهنيين ذوي المهارات العالية مع خبرة واسعة في الفنادق والمطاعم والخدمات الغذائية";  
             document.getElementById("about_us1").innerHTML ="نحن نجعل حياتك مدهشة";  
             document.getElementById("title_about_us").innerHTML ="  //  من نحن";
             document.getElementById("Corporate_Events").innerHTML ="فعاليات الشركات";
             document.getElementById("Government_Events").innerHTML ="الفعاليات الحكومية";
             document.getElementById("launches_seminars").innerHTML ="الندوات والمؤتمرات";
             document.getElementById("school_oriented").innerHTML ="المناسبات المدرسية";
             document.getElementById("shows_conventions").innerHTML ="الاحداث والمناسبات العلمية";
             document.getElementById("family_functions").innerHTML ="وجبات صحية";

             //Vascos Co Products
             document.getElementById("Vascos_Co_Products").innerHTML =" // منتجاتنا";
             document.getElementById("explore_the_categories").innerHTML ="اكتشف اصناف ومنتجات";
             document.getElementById("outdoor_catering").innerHTML ="Outdoor Catering";
             document.getElementById("buffet_lunch").innerHTML ="Buffet Lunch";
             document.getElementById("coffee_break").innerHTML ="Coffee Break";


             // catering

            

             document.getElementById("catering").innerHTML ="  //  ادارة المطاعم";
             document.getElementById("if_you_are").innerHTML ="إذا كنت صاحب مطعم ولديك تحديات وليس لديك وقت لإدارته ، أو حتى تفكر في إنشاء مطعم جديد ولا تعرف من أين تبدأ !! <br>  متخصص في إدارة المطاعم ليكون في المقدمة ، حتى إنشاء مطعم من الفكرة إلى الواقع بأفكار جديدة ومتقدمة.";



             //  Our Services 
             document.getElementById("title_our_services").innerHTML ="// خدماتنا";
             document.getElementById("hence_vasco").innerHTML ="نحن نساعد عملائنا على اختيار أفضل طعام من العشاء وحفلات الزفاف وأعياد الميلاد من خلال مطاعمنا.<br>ونحن ملتزمون:";
             document.getElementById("providing_the_widest").innerHTML =" تقديم أوسع تشكيلة من المأكولات بأفضل جودة.";
             document.getElementById("providing_a_dedicated").innerHTML =" توفير فريق خدمة مخصص على مدار 24 ساعة لضمان أسرع خدمة وأكثرها استجابة.";
             document.getElementById("providing_the_most").innerHTML =" تقديم أفضل الأسعار التنافسية في السوق.";

            
             //offer

             document.getElementById("Offer_For_You").innerHTML ="ما هي العروض التي نقدمها لك؟  ";
             document.getElementById("Marketing_and_promotion").innerHTML ="التسويق والترويج  للمطعم إلى الشركات الحكومية والخاصة.";
             document.getElementById("Organizing_annual_contracts").innerHTML ="تنظيم عقود سنوية مع الشركات الحكومية والخاصة خاص بموظفين الشركات.";
             document.getElementById("Managing_the_restaurant").innerHTML ="إدارة المطعم بالنيابة عن المالك – مقابل نسبة من الأرباح.";
             document.getElementById("Increase_Sales").innerHTML ="زيادة المبيعات. ";
             document.getElementById("Organizing_purchases_through").innerHTML ="تنظيم المشتريات من خلال المفاضلة بين الأفضل بالجودة والسعر.";
             document.getElementById("Reducing_expenses_and").innerHTML ="تخفيض النفقات ومنع الهدر للمواد الأولية.";
             document.getElementById("Determine_the_cost").innerHTML ="تحديد التكلفة وعمل وصفات دقيقة لكل منتج.";
             document.getElementById("Maintenance_of_the").innerHTML ="صيانة المطعم من جميع الأعطال بتعريف المطعم بأفضل شركات الصيانة.";
             document.getElementById("Organizing_and_auditing").innerHTML ="تنظيم حسابات وتدقيق حسابات جداول الميزانية شهرية.";
             document.getElementById("Create_a_restaurant").innerHTML ="إنشاء مطعم من فكرة إلى حقيقة.";
             document.getElementById("Recruit_and_find").innerHTML ="توظيف وإيجاد أفضل الموظفين.";
             document.getElementById("Training_employees_on").innerHTML ="تدريب الموظفين على مفاهيم الصحة والسلامة الغذائية حسب متطلبات الرقابة الغذائية.";
             document.getElementById("Creating_and_managing").innerHTML ="انشاء وإدارة صفحات التواصل الإجتماعية وعمل خطة تسويقية.";
             document.getElementById("Designing_and_printing").innerHTML ="تصميم و طباعة المنيو والبروشورات.";
             document.getElementById("Marketing_services_through").innerHTML ="خدمات تسويقية عن طريق التواصل الاجتماعي ، الرسائل القصيرة أو واتس أب.";

            //  offers end

            // services
            document.getElementById("services_For_You").innerHTML ="ما هي الخدمات التي نقدمها لك؟  ";


            // services end

            //our customer
            document.getElementById("our_customers").innerHTML ="// عملائنا";
            document.getElementById("more_than_200+").innerHTML ="نحن نفخر بجودة طعامنا ، وذلك لأننا نحب الطعام الجيد ونتفهم أهميته لذلك نفتخر بوجود أكثر من 200+ شركة ومؤسسة وعميل يثقون بنا";

            //Company Address
            document.getElementById("company_address").innerHTML ="العنوان";
            document.getElementById("location").innerHTML ="الخالدية – برج رماح – طابق ( 01 )";


            //Quick access
            document.getElementById("quick_access").innerHTML ="الوصول السريع";
            document.getElementById("home1").innerHTML ="الصفحة الرئيسية";
             document.getElementById("about1").innerHTML ="من نحن";
             document.getElementById("services1").innerHTML ="خدماتنا";
             document.getElementById("catering1").innerHTML ="ادارة المطاعم";
             document.getElementById("catering2").innerHTML ="ادارة المطاعم";

             document.getElementById("products1").innerHTML ="منجاتنا";
             document.getElementById("contact1").innerHTML ="معلومات الاتصال";
             document.getElementById("photo_gallery").innerHTML ="معرض الصور";
             document.getElementById("all_right_reserved").innerHTML ="جميع الحقوق محفوظة";




			
             document.getElementById("taste_of_the_world1").innerHTML ="taste the world";
             document.getElementById("taste_of_the_world2").innerHTML ="taste the world";
             document.getElementById("taste_of_the_world3").innerHTML ="taste the world";
             document.getElementById("years_experience").innerHTML ="سنين الخبرة";
             document.getElementById("skilled_professionals").innerHTML ="المهنين الخبرة";
             document.getElementById("total_products").innerHTML ="عدد الاصناف";
             document.getElementById("order_everyday").innerHTML ="عدد الطلبات اليومية";

             
             
        }
        else if(language ="english"){
            document.getElementById("Follow_us").innerHTML = "Follow us:";
             document.getElementById("Call_Us").innerHTML ="Call Us";
             document.getElementById("home").innerHTML ="Home";
             document.getElementById("about").innerHTML ="About";
             document.getElementById("services").innerHTML ="Services";
             document.getElementById("catering1").innerHTML ="Catering";
             document.getElementById("products").innerHTML ="Products";
             document.getElementById("contact").innerHTML ="Contact";

             //Vascos Co Products
             document.getElementById("Vascos_Co_Products").innerHTML ="// Our Products";
             document.getElementById("explore_the_categories").innerHTML ="Explore The Categories Of Our Zaid Restaurant Co Products";
             document.getElementById("outdoor_catering").innerHTML ="Outdoor Catering";
             document.getElementById("buffet_lunch").innerHTML ="Buffet Lunch";
             document.getElementById("coffee_break").innerHTML ="Coffee Break";

             // catering
             document.getElementById("catering").innerHTML ="// Catering";
             document.getElementById("if_you_are").innerHTML ="If you are a restaurant owner and you have challenges and do not have time to manage it, or even thinking about setting up a new restaurant and don't know where to start!!<br> Zaid Restaurant specializes in managing restaurants to be at the fore, even creating a restaurant from idea to reality with new and advanced ideas.";


             //  Our Services 
             document.getElementById("title_our_services").innerHTML ="// Our Services";
             document.getElementById("hence_vasco").innerHTML ="we are helping our customers to choose the best food from dinners, weddings and birthdays through our restaurants.<br>we are committed to";
             document.getElementById("providing_the_widest").innerHTML =" providing the widest selection of cuisines with the finest quality.";
             document.getElementById("providing_a_dedicated").innerHTML =" providing a dedicated 24-hour service team to ensure the fastest and most responsive service.";
             document.getElementById("providing_the_most").innerHTML =" providing the most competitive prices in the market";


            //  document.getElementById("read_more4").innerHTML ="Read More";
             document.getElementById("about_us").innerHTML ="z.<br>Zaid Restaurant is managed by a team of highly skilled professionals with vast experience in hotels catering and food service";
             document.getElementById("about_us1").innerHTML ="We Make Your Life Awesome";  
             document.getElementById("title_about_us").innerHTML ="// ABOUT US";
             document.getElementById("Corporate_Events").innerHTML ="Corporate Events";
             document.getElementById("Government_Events").innerHTML ="Government Events";
             document.getElementById("launches_seminars").innerHTML ="Launches Seminars Conference Road";
             document.getElementById("school_oriented").innerHTML ="School Oriented";
             document.getElementById("shows_conventions").innerHTML ="Shows Conventions";
             document.getElementById("family_functions").innerHTML ="Family Functions <br> Wedding / Birthdays";

             
          
             //offer
             document.getElementById("Offer_For_You").innerHTML ="  What Do We Offer For You?";
             document.getElementById("Marketing_and_promotion").innerHTML ="Marketing and promotion of the restaurant to government and private companies.";
             document.getElementById("Organizing_annual_contracts").innerHTML ="Organizing annual contracts with government and private companies for corporate employees.";
             document.getElementById("Managing_the_restaurant").innerHTML ="Managing the restaurant on behalf of the owner - in return for a percentage of the profits.";
             document.getElementById("Increase_Sales").innerHTML ="Increase Sales.";
             document.getElementById("Organizing_purchases_through").innerHTML ="Organizing purchases through the comparison between the best in quality and price.";
             document.getElementById("Reducing_expenses_and").innerHTML ="Reducing expenses and preventing waste of raw materials.";
             document.getElementById("Determine_the_cost").innerHTML ="Determine the cost and make accurate recipes for each product.";
             document.getElementById("Maintenance_of_the").innerHTML ="Maintenance of the restaurant from all malfunctions by introducing the restaurant to the best maintenance companies.";
             document.getElementById("Organizing_and_auditing").innerHTML ="Organizing and auditing accounts and making monthly budget schedules.";
             document.getElementById("Create_a_restaurant").innerHTML ="Create a restaurant from idea to reality.";
             document.getElementById("Recruit_and_find").innerHTML ="Recruit and find the best staff.";
             document.getElementById("Training_employees_on").innerHTML ="Training employees on the concepts of health and food safety according to the requirements of food control.";
             document.getElementById("Creating_and_managing").innerHTML ="Creating and managing social media pages and making a marketing plan.";
             document.getElementById("Designing_and_printing").innerHTML ="Designing and printing menus and brochures.";
             document.getElementById("Marketing_services_through").innerHTML ="Marketing services through social media, SMS or WhatsApp.";
             //  offers end

             //services
             document.getElementById("services_For_You").innerHTML ="  What Do We Service For You?";

             //services end


             //our customer
            document.getElementById("our_customers").innerHTML ="// Our Customers";
            document.getElementById("more_than_200+").innerHTML ="We Take Great Pride In The Quality Of Our Food, And Thats Because We Love Good Food And Understand Its Importance For That We Have More Than 200+ Customers Agencies & Companies Trusted Us";
            
            //Company Address
            document.getElementById("company_address").innerHTML ="Company Address";
            document.getElementById("location").innerHTML ="Tower - Floor (01)";


            //Quick access
            document.getElementById("quick_access").innerHTML ="Quick access";
            document.getElementById("home1").innerHTML ="Home";
            document.getElementById("about1").innerHTML ="About";
             document.getElementById("catering1").innerHTML ="Catering";
             document.getElementById("catering2").innerHTML ="Catering";
            document.getElementById("services1").innerHTML ="Services";
            document.getElementById("products1").innerHTML ="Products";
            document.getElementById("contact1").innerHTML ="Contact";
            document.getElementById("photo_gallery").innerHTML ="Photo Gallery";
            document.getElementById("all_right_reserved").innerHTML ="All Right Reserved";


				
             document.getElementById("taste_of_the_world1").innerHTML ="taste the world";
             document.getElementById("taste_of_the_world2").innerHTML ="taste the world";
             document.getElementById("taste_of_the_world3").innerHTML ="taste the world";
             document.getElementById("years_experience").innerHTML ="Years Experience";
             document.getElementById("skilled_professionals").innerHTML ="Skilled Professionals";
             document.getElementById("total_products").innerHTML ="Total Products";
             document.getElementById("order_everyday").innerHTML ="Order Everyday";


             
             

        }
        localStorage.setItem("Language",language);

    }
}
 onload = new Translate();



(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Fixed Navbar
    $('.fixed-top').css('top', $('.top-bar').height());
    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $('.fixed-top').addClass('bg-dark').css('top', 0);
        } else {
            $('.fixed-top').removeClass('bg-dark').css('top', $('.top-bar').height());
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        loop: true,
        nav: true,
        dots: false,
        items: 1,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });

    

    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    
})(jQuery);

