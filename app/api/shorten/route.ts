import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'

import { nanoid } from 'nanoid'

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
	const { url } = await request.json()

	if (!url) {
		return NextResponse.json({ error: 'URL is required' }, { status: 400 })
	}


	const short = nanoid(6)

	
	const newUrl = await prisma.url.create({
		data: {
			original: url,
			short,
		},
	})

	return NextResponse.json({ short: newUrl.short })
}
