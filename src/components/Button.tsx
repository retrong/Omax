
export const Button = ({children, styles}: {children: string , styles: string}) => {
  return (
		<button className={`bg-dimWhite hover:bg-dimAsh text-[1.1rem] text-primary hover:text-dimWhite font-bold py-2 px-6 rounded-full cursor-pointer flex items-center border-slate-300 border ${styles} justify-center whitespace-nowrap`}>
			{children}
		</button>
	);
}