import express from 'express';
import { envs } from './config';
import { GithubController } from './presentation/github/controller';
import { GithubCrypMiddleware } from './presentation/middlewares/github-cryp.middleware';


(() => {
    main();
})();



function main () {

    const app = express();

    const controller = new GithubController();

    app.use( express.json() );

    app.use( GithubCrypMiddleware.verifySignature );

    app.post('/api/github', controller.webhookHandler );

    app.listen( envs.PORT, () => {
        console.log(`App running on port ${ envs.PORT}`);
    })
}