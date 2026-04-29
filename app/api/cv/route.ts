import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const locale =
      url.searchParams.get("locale") || url.searchParams.get("lang") || "en";

    const safeLocale = locale === "pt" ? "pt" : "en";

    const fileName =
      safeLocale === "pt" ? "joisson(pt).pdf" : "joisson(en).pdf";
    const filePath = path.resolve(process.cwd(), "app", "cv", fileName);

    const data = await fs.readFile(filePath);

    return new NextResponse(data, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Length": String(data.byteLength),
        "Content-Disposition": `attachment; filename="${fileName}"`,
      },
    });
  } catch {
    // file not found or read error
    return NextResponse.json({ error: "File not found" }, { status: 404 });
  }
}
