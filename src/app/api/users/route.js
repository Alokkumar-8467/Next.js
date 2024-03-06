import { NextResponse } from "next/server";

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
export function POST(){}
export function PUT(){}
export function UPDATE(){}