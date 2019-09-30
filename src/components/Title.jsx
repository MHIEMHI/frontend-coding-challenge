import React from 'react'

export default function Title({name, title})
{
	return (
		<div className='text-center text-title'>
			<h1 className='text-style'>
				{name} <strong className='text-blue'>
					{title}	
				</strong>
			</h1>
		</div>
	)
}
