import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { fullName, email, phone, city } = body

    // Validation
    if (!fullName || !email || !city) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Check if email already exists
    const existingSignup = await prisma.comingSoonSignup.findUnique({
      where: { email },
    })

    if (existingSignup) {
      return NextResponse.json(
        { error: "Email already registered" },
        { status: 409 }
      )
    }

    // Create new signup
    const signup = await prisma.comingSoonSignup.create({
      data: {
        fullName,
        email,
        phone: phone || null,
        city,
      },
    })

    return NextResponse.json(
      { success: true, data: signup },
      { status: 201 }
    )
  } catch (error) {
    console.error("Signup error:", error)
    return NextResponse.json(
      { error: "Failed to create signup" },
      { status: 500 }
    )
  }
}
