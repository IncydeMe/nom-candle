import Image from "next/image";

import HeroImage from "../../public/images/Image_1.png";

import Category_1 from "../../public/images/CategoryImage1.png";
import Category_2 from "../../public/images/CategoryImage2.png";
import Category_3 from "../../public/images/CategoryImage3.png";
import Category_4 from "../../public/images/CategoryImage4.png";

import Blog_1 from "../../public/images/Blog_Image_1.png";
import Blog_2 from "../../public/images/Blog_Image_2.png";
import Blog_3 from "../../public/images/Blog_Image_3.png";

import Logo from "../../public/images/sample_logo.png";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#FFEDD7] w-screen overflow-x-hidden">
      <main>
        <section className="flex justify-center items-center gap-x-20">
          <span className="w-[320px] text-[#C6613D] leading-10">
            <strong>“Nơm”</strong> là một sự kết hợp hài hòa giữa{" "}
            <em className="font-semibold">“Nến”</em> và{" "}
            <em className="font-semibold">“Thơm”</em>.<br />
            Kết hợp với những gam màu ấm vào thiết kế sản phẩm để khách hàng cảm
            nhận được một bầu không khí nhẹ nhàng và thư giãn.
          </span>
          <Image
            priority
            src={HeroImage}
            alt="Hero Image"
            className="w-[560px] h-[360px] object-cover rounded-[12px]"
          />
        </section>
        <section className="flex justify-center items-center gap-x-8 mt-8">
          <hr className="w-[560px] border-t-[3px] border-[#C6613D]"></hr>
          <h4 className="text-2xl font-semibold text-[#C6613D]">Sản phẩm</h4>
          <hr className="w-[560px] border-t-[3px] border-[#C6613D]"></hr>
        </section>
        <section className="flex justify-center gap-x-8 my-10">
          <div className="relative">
            <Image
              src={Category_1}
              alt="Category 1"
              className="w-[360px] h-[240px] object-cover rounded-[8px]"
            />
            <p className="uppercase font-semibold text-[#C6613D] absolute bottom-1 left-[34%]">
              Nến thơm
            </p>
            <Image
              src={Logo}
              alt="Logo"
              className="w-[60px] h-[60px] object-cover rounded-[8px] absolute top-0.5 left-0.5"
            />
          </div>
          <div className="relative">
            <Image
              src={Category_2}
              alt="Category 2"
              className="w-[360px] h-[240px] object-cover rounded-[8px]"
            />
            <p className="uppercase font-semibold text-[#C6613D] absolute bottom-1 left-[35.5%]">
              Sáp thơm
            </p>
            <Image
              src={Logo}
              alt="Logo"
              className="w-[60px] h-[60px] object-cover rounded-[8px] absolute top-0.5 left-0.5"
            />
          </div>
          <div className="relative">
            <Image
              src={Category_3}
              alt="Category 3"
              className="w-[360px] h-[240px] object-cover rounded-[8px]"
            />
            <p className="uppercase font-semibold text-[#C6613D] absolute bottom-1 left-[32%]">
              Room Sprays
            </p>
            <Image
              src={Logo}
              alt="Logo"
              className="w-[60px] h-[60px] object-cover rounded-[8px] absolute top-0.5 left-0.5"
            />
          </div>
          <div className="relative">
            <Image
              src={Category_4}
              alt="Category 4"
              className="w-[360px] h-[240px] object-cover rounded-[8px]"
            />
            <p className="uppercase font-semibold text-[#C6613D] absolute bottom-1 left-[18%]">
              Khuếch tán tinh dầu
            </p>
            <Image
              src={Logo}
              alt="Logo"
              className="w-[60px] h-[60px] object-cover rounded-[8px] absolute top-0.5 left-0.5"
            />
          </div>
        </section>
        <section className="flex justify-center items-center gap-x-8 mt-8">
          <hr className="w-[560px] border-t-[3px] border-[#C6613D]"></hr>
          <h4 className="text-2xl font-semibold text-[#C6613D]">Blog Nơm</h4>
          <hr className="w-[560px] border-t-[3px] border-[#C6613D]"></hr>
        </section>
        <section className="flex justify-center gap-x-8 my-10">
          <div className="relative">
            <div>
              <Image
                src={Blog_1}
                alt="Blog_1"
                className="w-[360px] h-[420px] object-cover rounded-[4px]"
              />
              <Image
                src={Logo}
                alt="Logo"
                className="w-[60px] h-[60px] object-cover rounded-[8px] absolute top-0.5 left-0.5"
              />
            </div>
            <span className="w-[360px] pt-2 text-[12px] flex justify-between items-end">
              <p className="text-[12px] w-2/3 uppercase font-semibold text-[#C6613D]">
                Nến thơm là gì, cách nhận biết nến thơm an toàn.
              </p>
              <Link href={"#"} className="pt-4">
                <span className="flex items-center gap-x-2">
                  <em className="text-[#C6613D] transition-all ease-in-out duration-500 hover:font-semibold hover:underline">
                    Đọc thêm
                  </em>
                  <i className="border-[#C6613D] border-r-[1px] border-b-[1px] inline-block p-1 -rotate-45"></i>
                </span>
              </Link>
            </span>
          </div>
          <div className="relative">
            <div>
              <Image
                src={Blog_2}
                alt="Blog_1"
                className="w-[360px] h-[420px] object-cover rounded-[4px]"
              />
              <Image
                src={Logo}
                alt="Logo"
                className="w-[60px] h-[60px] object-cover rounded-[8px] absolute top-0.5 left-0.5"
              />
            </div>
            <span className="w-[360px] pt-2 text-[12px] flex justify-between items-end">
              <p className="text-[12px] w-2/3 uppercase font-semibold text-[#C6613D]">
                Nến thơm là gì, cách nhận biết nến thơm an toàn.
              </p>
              <Link href={"#"} className="pt-4">
                <span className="flex items-center gap-x-2">
                  <em className="text-[#C6613D] transition-all ease-in-out duration-500 hover:font-semibold hover:underline">
                    Đọc thêm
                  </em>
                  <i className="border-[#C6613D] border-r-[1px] border-b-[1px] inline-block p-1 -rotate-45"></i>
                </span>
              </Link>
            </span>
          </div>
          <div className="relative">
            <div>
              <Image
                src={Blog_3}
                alt="Blog_1"
                className="w-[360px] h-[420px] object-cover rounded-[4px]"
              />
              <Image
                src={Logo}
                alt="Logo"
                className="w-[60px] h-[60px] object-cover rounded-[8px] absolute top-0.5 left-0.5"
              />
            </div>
            <span className="w-[360px] pt-2 text-[12px] flex justify-between items-end">
              <p className="text-[12px] w-2/3 uppercase font-semibold text-[#C6613D]">
                Nến thơm là gì, cách nhận biết nến thơm an toàn.
              </p>
              <Link href={"#"} className="pt-4">
                <span className="flex items-center gap-x-2">
                  <em className="text-[#C6613D] transition-all ease-in-out duration-500 hover:font-semibold hover:underline">
                    Đọc thêm
                  </em>
                  <i className="border-[#C6613D] border-r-[1px] border-b-[1px] inline-block p-1 -rotate-45"></i>
                </span>
              </Link>
            </span>
          </div>
        </section>
      </main>
    </main>
  );
}
