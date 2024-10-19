import { NextRequest , NextResponse } from "next/server";

const Data = [
    {
        id: "1",
        namaBarang : "Sepatu",
        price : 100000
    },
    {
        id: "2",
        namaBarang : "Sepatu Lama",
        price : 100000
    },
]

export async function GET(request:NextRequest){
    // console.log(request)
    const {searchParams} = new URL(request.url)
    const id = searchParams.get("id")
    console.log(id)
    return NextResponse.json({
        status:200,
        message : "success",
        Data
    })
}