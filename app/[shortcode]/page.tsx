import { prisma } from "@/lib/prisma"
import { redirect } from "next/navigation"

interface RedirectPageProps {
	params: { shortcode: string }
}

export default async function RedirectPage({ params }: RedirectPageProps) {
   
    const {shortcode} =  params 
    console.log(shortcode)

    const url = await prisma.url.findUnique({
        where: {short: shortcode}
    })

    if(!url){
        return <div>404 - Nie znaleziono Linku</div>
    }
    await prisma.url.update({
     where:{ id: url.id},
     data:{views: {increment: 1}}  
    })
	redirect(url.original)
}
