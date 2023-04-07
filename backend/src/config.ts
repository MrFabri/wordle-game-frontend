type Config = {
    PORT: number;
    DB: {
        URI: string;
        USERNAME: string;
        PASSWORD: string;
    }
}

const config: Config = {
    PORT: Number(process.env.PORT) || 5080,
    DB: {
        URI: process.env.DB_URI as string,
        USERNAME: process.env.DB_USERNAME as string,
        PASSWORD: process.env.DB_PASSWORD as string
    }
}

export default config;