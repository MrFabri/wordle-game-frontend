import ISettings from "../interfaces/settings.interface";

export default async (settings: ISettings) => {

    const res = await fetch("/api/new-game", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(settings),
    });

    return await res.json();
}