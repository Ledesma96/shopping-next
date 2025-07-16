import { NextResponse } from 'next/server';

export function middlewareCookie(request) {
    const token = request.cookies.get('token')?.value;

    return NextResponse.next();
}
