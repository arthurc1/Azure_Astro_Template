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
- TODO Add

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
