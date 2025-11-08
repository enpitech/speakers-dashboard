import { resolve } from 'node:path'
import { config } from 'dotenv'
import { PrismaClient } from '../generated/client/client'

// Load environment variables from .env file
config({ path: resolve(process.cwd(), '.env') })

export const prisma = new PrismaClient()