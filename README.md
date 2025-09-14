# Astro & Azure Template with Tailwind CSS and Daisy UI

## Running
* `git clone...`
* `npm install`
* From /api/ directory make sure Functions are setup:
* `func start` - Then select dotnet (isolated worker model)
* Once the server is running succesfully, you can end the process
* `swa start`
* `http://localhost:4280/` - should see Astro welcome page, and Azure Function response test.

## Debugging Functions in C#
* From Run & Debug tab in VS.Code
* Run: `Attach to .NET Functions`
* `swa start --api-location http://localhost:7071`

## Deploying to Azure
* Ensure that both Azure Static Web Apps and Azure Functions extensions are installed in VS Code.
* In the Azure extension tab, go to Static Web Apps and click Create Static Web App.
* Choose a name and server location. For the app location, enter \. For the build location, enter \dist.
* This will create and push a .github\workflows\{app-name}.yml file, which triggers a GitHub Action to deploy your new static web app. You can find the deployed app’s URL in the Azure dashboard or by expanding the app under Static Web Apps in the Azure extension in VS Code.
* The process will also automatically create a test Azure Function named HttpTrigger. You can confirm this by expanding the Functions node under your new Static Web App.
* Visit the deployed URL and verify:
    * You see the Astro demo page.
    * The Azure Function API call at the top of the page returns a successful response.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `swa start`               | Starts static web app and Functions server       |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
