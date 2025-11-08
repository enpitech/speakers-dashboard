import { resolve } from 'node:path'
import { defineConfig, env } from "prisma/config";
import { config } from 'dotenv'

// Load environment variables from .env file
config({ path: resolve(process.cwd(), '.env') })

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  datasource: {
    url: env("DATABASE_URL"),
  },
});
