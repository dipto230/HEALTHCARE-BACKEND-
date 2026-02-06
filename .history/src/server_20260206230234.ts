import app from "./app"
import { envVars } from "./config/env";
import { envVars } from './../.history/src/config/env_20260206225627';


const bootstrap = () => {
    try {
        app.listen(envVars.PORT, () => {
              console.log(`server is running on http://localhost:{envVars}`);
        })
    } catch (error) {
        console.log('Failed to start server:', error)
    }
}

bootstrap();
