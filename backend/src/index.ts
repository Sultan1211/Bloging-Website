import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import {decode, sign, verify} from 'hono/jwt';
import { userRouter } from './routes/userroutes';
import { blogRouter } from './routes/blogRouter';

import  {cors } from 'hono/cors';



const app = new Hono();
app.use("api/*",cors());
app.route("/api/v1/user",userRouter)
app.route("/api/v1/blog",blogRouter)


export default app
