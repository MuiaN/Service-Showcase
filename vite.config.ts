import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'handle-quote-api',
        configureServer(server) {
          server.middlewares.use(async (req, res, next) => {
            if (req.url === '/api/send-quote' && req.method === 'POST') {
              let body = '';
              req.on('data', chunk => { body += chunk; });
              req.on('end', async () => {
                try {
                  const data = JSON.parse(body);
                  const { name, email, phone, budget, service, subService, message } = data;

                  const transporter = nodemailer.createTransport({
                    host: env.SMTP_HOST || "mail.tytantech.co.ke",
                    port: parseInt(env.SMTP_PORT || "465"),
                    secure: true,
                    auth: {
                      user: env.SMTP_USER || "creativestudio@tytantech.co.ke",
                      pass: env.SMTP_PASSWORD,
                    },
                  });

                  await transporter.sendMail({
                    from: env.SMTP_USER || "creativestudio@tytantech.co.ke",
                    to: "creativestudio@tytantech.co.ke",
                    subject: `New Quote Request from ${name} (${subService || service})`,
                    html: `
                      <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
                        <h2 style="color: #6366f1;">New Quote Request from Website</h2>
                        <p><strong>Client Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
                        <p><strong>Approx. Budget:</strong> ${budget || 'Not specified'}</p>
                        <p><strong>Service Category:</strong> ${service}</p>
                        <p><strong>Specific Requirement:</strong> ${subService || 'N/A'}</p>
                        <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
                        <p><strong>Message:</strong></p>
                        <p style="white-space: pre-wrap; background: #f9f9f9; padding: 15px; border-radius: 8px; border: 1px solid #eee;">${message}</p>
                      </div>
                    `,
                  });

                  res.statusCode = 200;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ success: true, message: 'Quote request sent successfully!' }));
                } catch (error: any) {
                  console.error('API Error:', error);
                  res.statusCode = 500;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ success: false, message: 'Failed to send quote request.', error: error.message }));
                }
              });
              return;
            }
            next();
          });
        }
      }
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    root: path.resolve(__dirname),
    build: {
      outDir: "dist",
      emptyOutDir: true,
    },
    server: {
      host: "0.0.0.0",
      port: 5173,
      allowedHosts: true,
    },
  };
});
