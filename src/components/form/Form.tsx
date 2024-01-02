"use client"

import { addDataToFirestore } from '@/server/firebase/firebase.utli';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import ThankYouModal from '../ThankYouModal';
import './formStyle.css';

export default function Form () {
    const {handleSubmit, register, reset , formState: {errors}} = useForm();
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);


    const onSubmit = async (data: any) => {
        try {
            await addDataToFirestore(' YourCollection', data);
            console.log(data);

            // Opens the modal after successful form submission
            openModal();

        reset();
        }catch (error) {
            console.error('Error adding document: ', error)
        }
    }

  return (
		<div>
			<form
				action=""
				onSubmit={handleSubmit(onSubmit)}
				className="flex flex-col gap-4 form-group"
			>
				<div>
					<label htmlFor="fullName">Full Name</label>
					<input 
						type="text"
						placeholder="Eg John Doe"
						id="fullName"
						className=""
						{...register('fullName', {
							required: true,
							minLength: 3,
						})}
					/>
					{errors.fullName?.type == "required" && (
						<span className="error px-2">fullname is required</span>
					)}
					{errors.fullName?.type == "minLength" && (
						<span className="error px-2">Name should be more than 3 characters</span>
					)}
				</div>
				<div>
					<label htmlFor="email">Email</label>
					<input
						type="email"
						placeholder="johndoe@mail.com"
						id="email"
						className=""
						{...register('email', { required: true })}
					/>
					{errors.email && (
						<span className="error px-2">email is required</span>
					)}
				</div>

				<div>
					<label htmlFor="number">Phone Number</label>
					<input
						type="tel"
						placeholder="+234 1321383112"
						maxLength={15}
						minLength={11}
						id="num"
						className=""
						{...register('number', {
							required: true, pattern:/[0-9]/ 
						})}
					/>
					{errors.number && (
						<span className="error px-2">number is required</span>
					)}
					<p className=" text-[13px] font-semibold text-gray-400 leading-[12px] mt-1">
						Keep 11 digit format with no space and dashes.
					</p>
				</div>
				<div>
					<label htmlFor="address">Address</label>
					<input
						type="text"
						placeholder="123 address str"
						id="address"
						className=""
						{...register('address', { required: true })}
					/>
					{errors.address && (
						<span className="error px-2">address is required</span>
					)}
				</div>

				<div className="country-state gap-6 sm:gap-4">
					<div className="flex flex-col flex-wrap">
						<label htmlFor="state" className="">
							State
						</label>
						<input
							type="text"
							placeholder="State"
							id="state"
							className=""
							{...register('state', { required: true })}
						/>
						{errors.state && (
							<span className="error px-2">state is required</span>
						)}
					</div>

					<div className="flex flex-col">
						<label htmlFor="country">Country</label>
						<select
							id="country"
							placeholder="country"
							className=" border-1"
							{...register('country', {required: true})}
						>
                            <option value="null" className='text-black'>Choose Country</option>
							<option value="Nigeria">Nigeria</option>
							<option value="United Kingdom">United Kingdom</option>
							<option value="United States">United States</option>
						</select>
					</div>
				</div>

				<div>
					<label htmlFor="product-size">Choose Product Size</label>
					<select
						id="product-size"
						placeholder="Product-size"
						{...register('size', { required: true })}
					>
						<option value="null" className='text-gray-400'>Choose Product Size</option>
						<option value="500g">500g</option>
						<option value="1000g">1000g (1kg)</option>
						<option value="1.5kg">1.5kg</option>
					</select>
				</div>
				<div>
					<label htmlFor="qty">Product quantity</label>
					<input
						type="number"
						placeholder="eg 5"
						max="9999"
						min="1"
						id="qty"
						{...register('qty', { required: true })}
					/>
					{errors.qty && (
						<span className="error px-2">product quantity is required</span>
					)}
				</div>

				<div className="">
					<div className="flex flex-row align-middle">
						<label
							htmlFor="newsletter"
							className=" justify-center font-normal text-[16px] text-blue-700"
						>
							subscribe to newsletter{' '}
							<input
								type="checkbox"
								placeholder="newsletter"
								id="newsletter"
								className="item-center w-[10px] h-[10px]"
								{...register('newsletter')}
							/>
						</label>
					</div>
					<span className="mb-2 font-mono text-[12px] opacity-70 text-black-400">
						Subscribe to newsletter to get more info on products and services
					</span>

                        {/* modified form button component to fit edit on main page */}
                    <div className='flex justify-center align-middle mt-5 mb-20'>
                        <button
                            type="submit"
                            className="submit-form border-2 rounded-md py-2 px-4 border-primary hover:bg-secondary hover:text-white cursor-pointer w-[100%]"
                        >
                            {' '}
                            Confirm Order
                        </button>
                    </div>
				</div>
			</form>



            <div>
                <ThankYouModal isOpen={isModalOpen} closeModal={closeModal} />
            </div>
		</div>
	);
}

/* product option- muscle mass or lean powder */

