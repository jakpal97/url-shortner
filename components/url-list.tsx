import Link from 'next/link'
import { Button } from './ui/button'
import { CopyIcon, EyeIcon } from 'lucide-react'

export default function UrlList() {
	return (
		<div>
			<h2 className="text-2xl font-bold mb-2">Ostatnie linki</h2>
			<ul className="space-y-2">
				<li className="flex items-center gap-2 justify-between">
					<Link href="#" target='_blank' className='text-blue-500'>Jakis tam link</Link>
					<div className='flex items-center gap-3'>
						<Button variant="ghost" size="icon" className="text-muted-foreground hover:bg-muted">
							<CopyIcon className="w-4 h-4"></CopyIcon>
							<span className="sr-only">Copy Url</span>
						</Button>
						<span className='flex items-center'>
							<EyeIcon className='h-4 w-4'/>
							100views
						</span>
					</div>
				</li>
			</ul>
		</div>
	)
}
