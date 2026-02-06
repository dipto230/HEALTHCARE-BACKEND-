import app from "./app"
import { envVars } from "./config/env";


const bootstrap = () => {
    try {
        app.listen(envVars., () => {
              console.log(`server is running on http://localhost:5000`);
        })
    } catch (error) {
        console.log('Failed to start server:', error)
    }
}

bootstrap();
