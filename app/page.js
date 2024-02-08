import Image from "next/image";
import EllipseImg_67 from "../public/images/Ellipse-67.svg";
import EllipseImg_70 from "@/public/assets/images/Ellipse-70.png";
import EllipseImg_72 from "@/public/assets/images/Ellipse-72.svg";
import PngwingImg_2 from "@/public/assets/images/pngwing-2.png";
import PngwingImg_1 from "@/public/assets/images/pngwing-1.png";
export default function Home() {
  return (
    <main>
      <section className="container max-w-7xl px-4">
        <div className="flex justify-center mt-32">
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="73"
              height="73"
              viewBox="0 0 73 73"
              fill="none"
            >
              <circle cx="36.5" cy="36.5" r="36.5" fill="#FFAF00" />
            </svg>
            <div className="absolute top-0 left-0 right-0">
              <Image src={EllipseImg_67} />
            </div>
          </div>
        </div>
        <div className="md:flex gap-4">
          {/* hero section left */}
          <div className="my-5 md:my-0 w-full md:w-3/5">
            <h1 className="beauty-product-title mt-12 text-4xl md:text-7xl">
              True
              <span> Beauty</span>
            </h1>
            <h2 className="beauty-product-slogan mt-3 text-2xl md:text-5xl">
              can radiste your uniqueness
            </h2>
            <p className="beauty-product-message mt-12">
              k-Beauty got us hooked one korean BB Cremas and jelly cleanswrs.
              J-Beauty convinced us of the benefites Japanese essences and sake
              ingredients. Probably we were bound to grap our beauty passports
              and move onto another country.And so we did:Now there’s G-Beauty.
            </p>
            <div className="flex gap-0 md:gap-4 mt-10">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="167"
                  height="40"
                  viewBox="0 0 167 40"
                  fill="none"
                >
                  <path
                    d="M148.381 37.4974C147.488 39.0459 145.837 40 144.049 40L4.99998 40C2.23857 40 2.13266e-07 37.7614 4.76342e-07 35L3.33439e-06 5C3.59747e-06 2.23858 2.23857 1.80042e-06 5 2.02195e-06L161.346 1.45645e-05C165.193 1.48732e-05 167.599 4.16409 165.677 7.49742L148.381 37.4974Z"
                    fill="black"
                  />
                  <text
                    x="40"
                    y="50%"
                    dy=".35em"
                    display="flex"
                    fontFamily="Inter"
                    fontSize="14px"
                    fontWeight="500"
                    fill="white"
                  >
                    View Details
                  </text>
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="167"
                  height="40"
                  viewBox="0 0 167 40"
                  fill="none"
                >
                  <path
                    d="M18.6191 2.5026C19.5119 0.954131 21.1634 0 22.9508 0L162 0C164.761 0 167 2.23858 167 5L167 35C167 37.7614 164.761 40 162 40L5.65425 40C1.80658 40 -0.599203 35.8359 1.32263 32.5026L18.6191 2.5026Z"
                    fill="#FFAF00"
                  />
                  <text
                    x="40"
                    y="50%"
                    dy=".35em"
                    display="flex"
                    fontFamily="Inter"
                    fontSize="14px"
                    fontWeight="500"
                    fill="white"
                  >
                    Add To cart
                  </text>
                </svg>
              </div>
            </div>
          </div>
          {/* hero section right */}
          <div className="mt-16 md:my-0 w-full md:w-2/5">
            <div className="flex gap-4">
              <div className="hero-right-image ms-10">
                <div className="relative -ms-7 -mt-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="218"
                    height="245"
                    viewBox="0 0 218 245"
                    fill="none"
                  >
                    <path
                      d="M1.5 244.187L1.50002 26.1871C1.50002 12.38 12.6929 1.18712 26.5 1.18712L218 1.18713"
                      stroke="#5F5454"
                      stroke-width="2"
                    />
                  </svg>
                  <div className="absolute bottom-0 -ms-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="14"
                      viewBox="0 0 13 14"
                      fill="none"
                    >
                      <ellipse
                        cx="6.5"
                        cy="6.68713"
                        rx="6.5"
                        ry="6.5"
                        transform="rotate(-90 6.5 6.68713)"
                        fill="#FFAF00"
                      />
                    </svg>
                  </div>
                  <div className="absolute top-0 ms-52 -mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <circle
                        cx="7.40642"
                        cy="6.5936"
                        r="6.5"
                        transform="rotate(-179.169 7.40642 6.5936)"
                        fill="black"
                      />
                    </svg>
                  </div>
                </div>
                <div className="relative mt-16 ms-20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="218"
                    height="244"
                    viewBox="0 0 218 244"
                    fill="none"
                  >
                    <path
                      d="M216.5 0V218C216.5 231.807 205.307 243 191.5 243H0"
                      stroke="#5F5454"
                      stroke-width="2"
                    />
                  </svg>
                  <div className="absolute bottom-0 -mb-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="14"
                      viewBox="0 0 13 14"
                      fill="none"
                    >
                      <ellipse
                        cx="6.5"
                        cy="6.68713"
                        rx="6.5"
                        ry="6.5"
                        transform="rotate(-90 6.5 6.68713)"
                        fill="#FFAF00"
                      />
                    </svg>
                  </div>
                  <div className="absolute top-0 ms-52 -mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <circle
                        cx="7.40642"
                        cy="6.5936"
                        r="6.5"
                        transform="rotate(-179.169 7.40642 6.5936)"
                        fill="black"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="relative mt-5 m-2 hidden md:block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="73"
                  height="73"
                  viewBox="0 0 73 73"
                  fill="none"
                >
                  <circle cx="36.5" cy="36.5" r="36.5" fill="#FFAF00" />
                </svg>
                <div className="absolute top-0 left-0 right-0">
                  <Image src={EllipseImg_70} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container max-w-7xl px-4 mt-10 md:mt-5">
          <div className="md:flex gap-4">
            <div className="my-1 md:my-0 w-full md:w-1/4">
              <h3 className="meterial-care-title">Meterial</h3>
              <p className="meterial-care-paragraph mt-4">
                K-Beauty got us hooked on korean BB Creams and jelly cleansers
              </p>
            </div>
            <div className="my-1 md:my-0 w-full md:w-1/4">
              <h3 className="meterial-care-title">Care</h3>
              <p className="meterial-care-paragraph mt-4">
                K-Beauty got us hooked on korean BB Creams and jelly cleansers
              </p>
            </div>
            <div className="my-1 md:my-0 w-full md:w-1/2">
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="73"
                  height="73"
                  viewBox="0 0 73 73"
                  fill="none"
                >
                  <circle cx="36.5" cy="36.5" r="36.5" fill="#FFAF00" />
                </svg>
                <div className="absolute top-0 left-0 right-0">
                  <Image src={EllipseImg_72} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#FAFBFF] my-28">
        <div className="flex justify-between items-center">
          <div>
            <Image src={PngwingImg_2} />
          </div>
          <div className="container max-w-7xl px-4 py-12">
            <div className="md:flex gap-4">
              <div className="my-1 md:my-0 w-full md:w-2/3">
                <h2 className="company-age-and-client max-w-xl text-xl md:text-3xl">
                  Trusted By Over <span>400,000</span>+<span>client</span>{" "}
                  worldwide since <span>2002</span>
                </h2>
              </div>
              <div className="my-1 md:my-0 w-full md:w-1/3">
                <div className="flex gap-20">
                  <div>
                    <h3 className="flex justify-center rating-point">4.6</h3>
                    <p className="flex justify-center mt-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="92"
                        height="16"
                        viewBox="0 0 92 16"
                        fill="none"
                      >
                        <path
                          d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
                          fill="#FFAF00"
                        />
                        <path
                          d="M27 0L28.7961 5.52786H34.6085L29.9062 8.94427L31.7023 14.4721L27 11.0557L22.2977 14.4721L24.0938 8.94427L19.3915 5.52786H25.2039L27 0Z"
                          fill="#FFAF00"
                        />
                        <path
                          d="M46 0L47.7961 5.52786H53.6085L48.9062 8.94427L50.7023 14.4721L46 11.0557L41.2977 14.4721L43.0938 8.94427L38.3915 5.52786H44.2039L46 0Z"
                          fill="#FFAF00"
                        />
                        <path
                          d="M65 0L66.7961 5.52786H72.6085L67.9062 8.94427L69.7023 14.4721L65 11.0557L60.2977 14.4721L62.0938 8.94427L57.3915 5.52786H63.2039L65 0Z"
                          fill="#FFAF00"
                        />
                        <path
                          d="M84 0L85.7961 5.52786H91.6085L86.9062 8.94427L88.7023 14.4721L84 11.0557L79.2977 14.4721L81.0938 8.94427L76.3915 5.52786H82.2039L84 0Z"
                          fill="#FFAF00"
                        />
                      </svg>
                    </p>
                    <p className="flex justify-center ratings ">3500 Ratings</p>
                  </div>
                  <div>
                    <h3 className="flex justify-center rating-point">6M+</h3>
                    <p className="flex justify-center ratings mt-4 max-w-40 text-center">
                      Worldwide Product sale per year
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Image src={PngwingImg_1} />
          </div>
        </div>
      </section>
    </main>
  );
}
