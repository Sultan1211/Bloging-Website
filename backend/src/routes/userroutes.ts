import { PrismaClient } from '@prisma/client/edge';

import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign } from "hono/jwt";

export const userRouter = new Hono<{ Bindings: { DATABASE_URL: string, secret: string } }>();

userRouter.post('/signup', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    
    const body = await c.req.json();
    const user = await prisma.user.create({
        data: {
            email: body.email,
            password: body.password,
            name: body.name
        },
    });
    const token = await sign({ id: user.id }, c.env.secret)
    return c.json({
        jwt: token
    })
})
userRouter.get('/allUsers',async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const all = await prisma.user.findMany();
    return c.json({
        all:all
    })


})

userRouter.post('/signin', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    
  

    const body = await c.req.json();
    const user = await prisma.user.findFirst({
        where: {
            email: body.email,
            password: body.password
        }
    })
    if (!user) {
        return c.json({
            msg: "User not Found"
        })
    }

    const token = await sign({ id: user.id }, c.env.secret)
    return c.json({
        jwt: token
    })
})
