import { Hono } from "hono";


export const blogRouter = new Hono<{ Bindings: { DATABASE_URL: string, secret: string } }>()
app.use('/api/v1/blog/*', async (c, next) => {
    const header = c.req.header("Authorization") || "";
    const token = header.split(" ")[1];
    const ver = await verify(token, c.env.secret);
    if (ver.id) {
        await next()
    }
    else {
        c.status(403)
        return c.json({
            error: "Unauthorized"
        })
    }

})


app.post('/api/v1/blog', (c) => {
    return c.text('Hello Hono!')
})
app.put('/api/v1/blog', (c) => {
    return c.text('Hello Hono!')
})
app.get('/api/v1/blog/:id', (c) => {
    return c.text('Hello Hono!')
})
