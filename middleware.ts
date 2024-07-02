import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest, res: NextResponse) {

    // const cookie = req.cookies
    // req.cookies.delete('auth')
    // console.log('isAuth?', req.cookies.has('auth'))
    // console.log('cookie', cookie)

    // res.cookies.set('vrau', 'vrau2')
    // console.log('res', res.cookies)
    const response = NextResponse.next()
    response.cookies.set('vra', 'vravalue')
    return response
}
export const config = {
    matcher: '/'
}