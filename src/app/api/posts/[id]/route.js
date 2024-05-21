import { getDataFromToken } from "@/helpers/getDataFromToken";
import { NextResponse, NextRequest } from "next/server";
import { connect } from "../../../../dbConfig/dbConfig";
import Post from "../../../../models/postModel";


connect();

export async function GET(request, { params }) {
  try {
    const { id } = params;    
    const post = await Post.findById(id);
    return NextResponse.json({ post }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
