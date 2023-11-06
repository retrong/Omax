"use client"

import { SubmitHandler, useForm } from 'react-hook-form';
import './formStyle.css';

export default function Form() {
    const {handleSubmit, register, formState: {errors}} = useForm();

    function onSubmit(data: any) {
        console.log(data)
    };
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
						maxLength={11}
						minLength={11}
						id="num"
						className=""
						{...register('number', {
							required: true,
						})}
					/>
					{errors.number && (
						<span className="error px-2">number is required</span>
					)}
					<p className=" text-[13px] font-semibold text-gray-400 leading-[12px] mt-1">
						Keep 10 digit format with no space and dashes.
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
					<div className="flex flex-col">
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
							{...register('country')}
						>
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
						<option value="-">-</option>
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
					<label className="mb-2 font-mono text-[12px] opacity-70 text-black-400">
						Subscribe to newsletter to get more info on products and services
					</label>
					<button
						type="submit"
						className=" border-2 rounded-sm py-2 px-4 border-primary  cursor-pointer"
					>
						{' '}
						Confirm Order
					</button>
				</div>
			</form>
		</div>
	);
}

/* product option- muscle mass or lean powder */

