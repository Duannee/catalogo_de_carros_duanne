import { app } from "./app";

const PORT: number = Number(process.env.PORT);

app.listen(PORT, () => console.log(`Application is running on PORT ${PORT}`));
