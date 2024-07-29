import { defineConfig } from 'cypress';
import fs from 'fs';
import createBundler from '@bahmutov/cypress-esbuild-preprocessor';
import { addCucumberPreprocessorPlugin, afterSpecHandler } from '@badeball/cypress-cucumber-preprocessor';
import { createEsbuildPlugin } from '@badeball/cypress-cucumber-preprocessor/esbuild';
import Endpoint from './cypress/fixtures/endpoint.json';

module.exports = defineConfig({
    e2e: {
        projectId: "vspc29",
        baseUrl: Endpoint.baseUrl,
        specPattern: '**/*.feature',
        async setupNodeEvents(on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions): Promise<Cypress.PluginConfigOptions> {
            await addCucumberPreprocessorPlugin(on, config);
            on(
                'file:preprocessor',
                createBundler({
                    plugins: [createEsbuildPlugin(config)],
                })
            );
            on('after:spec', async (spec: Cypress.Spec, results: CypressCommandLine.RunResult) => {
                await afterSpecHandler(config, spec, results);
                if (results && results.video) {
                    const failures = results.tests.some((test) => test.attempts.some((attempt) => attempt.state === 'failed'));
                    if (!failures) {
                        fs.unlinkSync(results.video);
                    }
                }
            });
            return config;
        },
        video: true,
        screenshotsFolder: 'cypress/screenshots',
        screenshotOnRunFailure: true,
    }
});
