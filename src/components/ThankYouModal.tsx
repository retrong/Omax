import Image from "next/image";
import { check } from "../../public";

const ThankYouModal = ({isOpen, closeModal}) => {
  return (
		<div className={`modal ${isOpen ? 'open' : ''}`}>
			<div className=" shadow-2xl rounded-lg modal-content">
				<div className="px-8 py-4 bg-white">
					<div className="flex justify-center flex-col flex-1 w-[300px] h-[300px]">
						<div className="flex justify-center">
							<Image
								src={check}
								alt="Confirmation Image"
								className="w-[120px] h-[120px] object-contain"
							/>
						</div>

						<div className="py-2">
							<h3 className="font-roboto font-semibold text-[18px] sm:text-[20px] leading-[18px] text-secondary mb-4 text-center">
								Thank you your order has been confirmed!
							</h3>
							<h4 className="font-roboto font-normal text-[16px] sm:text-[16px] leading-[18px] text-secondary mb-2 text-center">
								A Customer care representative will be in touch in 24 - 48 hours
								to deliver your order.
							</h4>
						</div>
						<div className="flex justify-center align-middle mt-2">
							<button
								onClick={closeModal}
								className="bg-secondary hover:bg-white hover:border-2 hover:border-black font-light leading-[18px] text-[18px] text-white hover:text-black py-4 px-2 rounded-full cursor-pointer w-[170px] flex items-center justify-center"
							>
								Close
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ThankYouModal;
