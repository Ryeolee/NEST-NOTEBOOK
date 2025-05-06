export type ConfigObject = ReturnType<typeof configuration>;

export const configuration = () => {
  return {
    database: {
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      host: process.env.DB_HOST,
      schema: process.env.DB_SCHEMA,
    },
  };
};
