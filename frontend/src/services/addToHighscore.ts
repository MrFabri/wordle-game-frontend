export default async (data: { id: string, name: string }) => {
    const res = await fetch("/api/highscore/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    return await res.json();
}