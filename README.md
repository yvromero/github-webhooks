# github-webhooks
A Node.js app for practicing the use of GitHub and Discord webhooks. It also creates a Discord channel to receive server messages and enables image sending to Discord.


# Steps to execute

1. Clone the repository
2. Clone .env.template to .env
3. Configure the environment variable by copying the Webhook URL. From the Discord app: Server Settings > Overview > Integrations > Webhooks
4. Run `npm install`
5. Expose the port using the command `ngrok http port`
6. Copy the generated URL from ngrok and update the Payload URL of the assigned repository on GitHub. Add the route. Example: url/api/github
6. Run `npm run dev`
