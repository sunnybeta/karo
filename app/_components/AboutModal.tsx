const AboutModal:React.FC = ():JSX.Element => {
	return (
		<article className='fixed z-50 w-1/3 left-1/3 right-1/3 top-1/4 h-[300px] flex items-center justify-center p-10 overflow-hidden border-2 border-black rounded-[30px] shadow-[4px_6px_1px] bg-lime-200'>
			<div>
				<h1 className='text-2xl font-dyna-puff uppercase'>ABOUT</h1>
				<p className='text-xl mt-3 font-poppins'>
					This is my ToDo list manager in NextJS.
					<br/>
					For feedbacks, please <a href='https://github.com/liminalminds/jdi' target='_blank' className='underline'>raise an issue</a> or write a quick <a href='mailto:liminalminds@protonmail.com' target='_blank' className='underline'>email</a>.
					<br/>
					Happy Tasking.
				</p>
			</div>
		</article>
	)
}

export default AboutModal
