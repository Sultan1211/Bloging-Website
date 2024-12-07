import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";


export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        secret: string;
    };
    Variables: {
        userId: string;
    };
}>();

blogRouter.use('/*', async (c, next) => {
    const header = c.req.header("Authorization") || "";
    const token = header.split(" ")[1];

    try {
        const user = await verify(token, c.env.secret);
        if (user && user.id) {
            c.set("userId", user.id as string); // Set userId in context variables
            await next(); // Ensure the next middleware/handler is executed
        } else {
            c.status(403);
            return c.json({ error: "Unauthorized" });
        }
    } catch (error) {
        c.status(403);
        return c.json({ error: "Invalid Token" });
    }
});



blogRouter.post('/', async (c) => {
    const authorId = c.get("userId");
    const body = await c.req.json();
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());

    const post = await prisma.post.create({
        data: {
            title: body.title,
            content: body.content,
            authorId: authorId
        }
    })

    return c.json({
        id: post.id
    })
})
blogRouter.put('/', async (c) => {
    const body = await c.req.json();

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());
    const upd = await prisma.post.update({
        where: { id: body.id },
        data: {
            title: body.title,
            content: body.content
        }
    })

    return c.json({
        id: upd.id
    })
})
blogRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());
    try {
        const blogs = await prisma.post.findMany();

        return c.json({
            blogs: blogs
        })

    }
    catch (e) {
        c.status(411)
        return c.json({
            msg: "fetching error"
        })
    }
})

blogRouter.get('/:id', async (c) => {
    const id =  c.req.param("id");
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());
    try {
        const blog = await prisma.post.findUnique({
            where: {
                id: id
            }
        })
        return c.json({
            blog
        })
    } catch (e) {
        c.status(411);
        c.json({
            msg: "Error occured while fetching"
        })
    }
})

