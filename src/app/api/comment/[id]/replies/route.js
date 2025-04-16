import db from "../../../../../../prisma/db";

export async function GET(_request, { params }) {
    const id = parseInt(params.id);

    if (isNaN(id)) {
        return new Response(JSON.stringify({ error: 'Invalid ID' }), { status: 400 });
    }

    const replies = await db.comment.findMany({
        where: {
            parentId: id
        },
        include: {
            author: true
        }
    });

    return Response.json(replies);
}
