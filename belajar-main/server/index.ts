import "dotenv/config";
import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  app.post("/api/ai", express.json(), async (req, res) => {
    const apiKey = process.env.OPENAI_API_KEY || process.env.BUILT_IN_FORGE_API_KEY;
    const configuredUrl = process.env.OPENAI_API_URL;
    const forgeUrl = process.env.BUILT_IN_FORGE_API_URL;
    const apiUrl = (configuredUrl || (forgeUrl ? `${forgeUrl}/v1/chat/completions` : "https://api.openai.com/v1/chat/completions")).replace(/\/$/, "");
    if (!apiKey) {
      res.status(503).json({ error: "OPENAI_API_KEY belum dikonfigurasi. Isi file .env lalu restart server." });
      return;
    }
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
        body: JSON.stringify(req.body),
      });
      res.status(response.status).type("application/json").send(await response.text());
    } catch {
      res.status(502).json({ error: "Layanan AI tidak dapat dihubungi." });
    }
  });

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
