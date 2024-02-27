import { rest } from "msw";

export const Handlers = [
    rest.get("https://rickandmortyapi.com/api/", (req,res,ctx)=>{
        return res(
            ctx.status(200),
            ctx.json([
                {name: 'rishi'},
                {name: 'harish'},
                {name: 'kunal'},
                {name: 'dhruva'}
            ])
        )
    })
]