import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import {decode, sign, verify} from 'hono/jwt';



const app = new Hono<{ Bindings: { DATABASE_URL: string, secret: string } }>()
app.router("/api/v1/user",userRouter)
app.router("/api/v1/blog",blogRouter)


export default app
