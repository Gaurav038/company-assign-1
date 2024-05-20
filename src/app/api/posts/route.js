import { NextResponse, NextRequest } from "next/server";
import Post from "../../../models/postModel";
import { connect } from "../../../dbConfig/dbConfig";
import moment from "moment";
import { getDataFromToken } from "@/helpers/getDataFromToken";

connect();

export async function POST(request) {
  try {
    await getDataFromToken(request);
    const { content } = await request.json();
    const weekdayName = moment(new Date()).format("dddd");
    await Post.create({ content, currentDay: weekdayName });
    return NextResponse.json({ message: "Post Created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

export async function GET(req) {
  const { searchParams } = req.nextUrl;
  const days = searchParams.get("days");

  const dayFilter = days ? days.split(",") : [];
  const filter = dayFilter.length > 0 ? { currentDay: { $in: dayFilter } } : {};
  const posts = await Post.find(filter);
  return NextResponse.json({ posts });
}

export async function DELETE(request) {
  try {
    await getDataFromToken(request);
    const id = request.nextUrl.searchParams.get("id");
    await Post.findByIdAndDelete(id);
    return NextResponse.json({ message: "Post deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
