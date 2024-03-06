import { NextResponse } from "next/server";

export function DELETE(request,{params}){
    console.log(params);

    const {userId} = params
    console.log("user Id = ", userId)

    return NextResponse.json({
        message : "testing delete Api-route",
    });
}