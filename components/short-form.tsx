'use client'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { useState } from 'react'

export default function ShortForm() {
    const [url, setUrl] = useState<string>('')
    const handleOnSubmit= (e: React.FormEvent)=> {
        e.preventDefault()
        console.log(url)
    }
	return (
		<form onSubmit={handleOnSubmit} className='mb-4'>
			<div className="space-y-4">
				<Input value={url} onChange={(e) => setUrl(e.target.value)} className='h-12' type='url' placeholder='Wprowadź url do skrócenia' required/>
				<Button className="w-full p-2" type='submit'>Skróć Swój link</Button>
			</div>
		</form>
	)
}
