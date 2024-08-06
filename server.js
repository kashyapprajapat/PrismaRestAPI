import express, { json } from "express";
import "dotenv/config";
import rateLimit from "express-rate-limit";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json" assert { type: 'json' };

const app = express();
const PORT = process.env.PORT || 7000;
app.use(express.json());

// Set up rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

// Apply the rate limiting middleware to all requests
app.use(limiter);

app.get("/", (req, res) => {
  res.send(`
      <div style="display: flex; justify-content: center; align-items: center; height: 100vh;">
        <div style="text-align: center;">
          <p style="font-size:50px"> Backend 🗄️ is completely Working :) 🎉 </p>
          <p style="font-size:35px">Backend Technology : Express + Prisma 🔺 + Supabase ⚡</p>
          <p style="font-size:35px">For API Documentation hit <a href="/docs">/docs</a></p>
        </div>
      </div>
    `);
});

// Serve Swagger UI
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));


import Routes from "./routes/index.js";
app.use(Routes);

app.listen(PORT, () => {
  console.log(`Server is Running at PORT at ${PORT}`);
});
