import styles from "./style";

export default function Footer() {
  return (
    <section className={`w-full h-auto py-4 sm:py-8`}>
        <div className="flex sm:justify-between sm:flex-row flex-col gap-4 justify-center items-center sm:w-auto w-full">
            <div className="mr-16 max-w-[250px] flex flex-col flex-wrap gap-2">
                <h1 className={`font-roboto font-bold xs:text-[50px] text-[36px] text-dimWhite leading-[56.4px] xs:leading-[44px] w-full  flex justify-start`}>
                    Prime <span className="text-red-500">Max</span>
                </h1>
                <h3 className="font-roboto font-semibold xs:text-[18px] text-[16px] text-dimWhite leading-[18.4px] xs:leading-[16px] w-full  flex justify-start">Pre Workout protein powder</h3>
                <p className="font-roboto font-normal xs:text-[16px] text-[16px] text-dimWhite leading-[16.4px] xs:leading-[16px] w-full  flex justify-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste odit incidunt consectetur repellat labore dicta harum porro vel error ratione.</p>
            </div>

            <div className="flex flex-col justify-start px-4">
                <div>
                    <h2 className="font-roboto font-bold xs:text-[24px] text-[26px] text-dimWhite leading-[34px] xs:leading-[30px] w-full">Contact Us</h2>
                    <span className="border border-green w-[50px] flex my-4"></span>

                </div>

                <div>
                    <h4 className="font-roboto font-normal xs:text-[18px] text-[18px] text-dimWhite leading-[20px] xs:leading-[22px] w-full mb-2">Open Office Hours:</h4>
                    <p className="contact-us-text mb-2">Mon - Fri: 9:00 - 6:00</p>
                    <p className="contact-us-text mb-2">Saturday: 10:00 - 4:00</p>
                </div>

                <div className="">
                    <span className="border border-gray-500 w-full flex"></span>
                    <p className="contact-us-text my-4">primemaxprotein@gmail.com</p>
                    <span className="border border-gray-500 w-full flex"></span>
                </div>
                
                

            </div>

        </div>
        <div className="w-full items-center pt-6 mt-4 border-t-2 border-t-dimAsh flex justify-end">
            <p className=" font-mono text-[16px] sm:text-[16px] leading-[18px] sm:leading-[16px] text-dimWhite">With <span className=" text-green"> love</span> from retrong </p>
        </div>
    </section>
  )
}
