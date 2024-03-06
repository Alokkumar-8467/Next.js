import { connectDb } from "@/helper/db";
import { NextResponse } from "next/server";

connectDb();

export function GET(request){
    const user = [
        {
            name : "alok",
            phone : 3456,
            course : "sql"
        },
        {
            name : "aman",
            phone : 3478,
            course : "java"
        },
    ];
    return NextResponse.json(user);
}

export function DELETE(request){
    console.log("delete api called");
    return NextResponse.json({
        message:"delete !!",
        status : true,
    },
    {status: 201, statusText: "hey Changed text"}
    );
}
export async  function POST(request){
    const body = request.body;
    console.log(body);
    console.log(request.method);
    console.log(request.nextUrl.pathname);    
    console.log(request.nextUrl.searchparam);

    const jsonData = await request.json();
    console.log(jsonData);

    // const textData = await request.text();
    // console.log(textData)



    return NextResponse.json({
        message : "posting user data",
    });

}
export function PUT(){}
export function UPDATE(){}