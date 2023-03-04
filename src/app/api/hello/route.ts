import db from "@/utils/db"

export async function GET(request: Request) {
  db.connectDb();
  db.disconnectedDb();
  return new Response('Hello, Next.js!')
}
