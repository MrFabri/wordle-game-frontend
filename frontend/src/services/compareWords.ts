export default async (data: { id: string, guess: string }) => {

    const res = await fetch("/api/compare-words", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    return await res.json();
}