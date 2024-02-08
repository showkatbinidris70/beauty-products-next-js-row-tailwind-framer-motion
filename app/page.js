import Image from 'next/image';
import EllipseImg_67 from '../public/images/Ellipse-67.svg'
export default function Home() {
    return (
        <main>
            <section className="container max-w-7xl px-4">
                <div className='flex justify-center mt-32'>
                    <div className='relative'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="73" height="73" viewBox="0 0 73 73" fill="none">
                            <circle cx="36.5" cy="36.5" r="36.5" fill="#FFAF00"/>
                        </svg>
                        <div className='absolute top-0 left-0 right-0'>
                            <Image src={EllipseImg_67}/></div>
                    </div>
                </div>
                <div className="md:flex gap-4">
                    <div className="my-1 md:my-0 w-full md:w-3/5">
                        <h1 className='beauty-product-title'>True
                            <span>Beauty</span>
                        </h1>
                        <h2 className='beauty-product-slogan'>can radiste your uniqueness</h2>
                        <p className='beauty-product-message mt-12'>k-Beauty got us hooked  one korean BB Cremas and jelly cleanswrs. J-Beauty
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    convinced us of the benefites Japanese essences and sake ingredients.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    Probably we were bound to grap our beauty passports and move onto
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    another country.And so we did:Now there’s G-Beauty.</p>
                        <div className='flex gap-4 mt-10'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="167" height="40" viewBox="0 0 167 40" fill="none">
                                    <path d="M148.381 37.4974C147.488 39.0459 145.837 40 144.049 40L4.99998 40C2.23857 40 2.13266e-07 37.7614 4.76342e-07 35L3.33439e-06 5C3.59747e-06 2.23858 2.23857 1.80042e-06 5 2.02195e-06L161.346 1.45645e-05C165.193 1.48732e-05 167.599 4.16409 165.677 7.49742L148.381 37.4974Z" fill="black"/>
                                    <text x="40" y="50%" dy=".35em" display="flex" fontFamily='Inter' fontSize="14px" fontWeight="500" fill="white">View Details</text>
                                </svg>

                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="167" height="40" viewBox="0 0 167 40" fill="none">
                                    <path d="M18.6191 2.5026C19.5119 0.954131 21.1634 0 22.9508 0L162 0C164.761 0 167 2.23858 167 5L167 35C167 37.7614 164.761 40 162 40L5.65425 40C1.80658 40 -0.599203 35.8359 1.32263 32.5026L18.6191 2.5026Z" fill="#FFAF00"/>
                                    <text x="40" y="50%" dy=".35em" display="flex" fontFamily='Inter' fontSize="14px" fontWeight="500" fill="white">Add To cart</text>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="my-1 md:my-0 w-full md:w-2/5">
                        <div className='relative'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="218" height="245" viewBox="0 0 218 245" fill="none">
                                <path d="M1.5 244.187L1.50002 26.1871C1.50002 12.38 12.6929 1.18712 26.5 1.18712L218 1.18713" stroke="#5F5454" stroke-width="2"/>
                            </svg>
                            <div className='absolute bottom-0'
                                style={
                                    {marginLeft: "-5px"}
                            }>
                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none">
                                    <ellipse cx="6.5" cy="6.68713" rx="6.5" ry="6.5" transform="rotate(-90 6.5 6.68713)" fill="#FFAF00"/>
                                </svg>
                            </div>
                            <div className='absolute top-0 ms-52'
                                style={
                                    {marginTop: "-5px"}
                            }>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <circle cx="7.40642" cy="6.5936" r="6.5" transform="rotate(-179.169 7.40642 6.5936)" fill="black"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
