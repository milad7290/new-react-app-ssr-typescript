const prettier = require('prettier');

module.exports = (plop) => {
    const prettierConfig = prettier.resolveConfig.sync(__dirname);
    plop.load('plop-prettier', prettierConfig);

    plop.setGenerator('React Component', {
        description: 'Create a new React component',
        prompts: [
            {
                type: 'prompt',
                name: 'componentName',
                message: 'Name of your component:',
            },
        ],
        actions: () => {
            const actions = [
                {
                    type: 'pretty-add',
                    path:
                        './src/shared/components/{{properCase componentName}}/{{properCase componentName}}.tsx',
                    templateFile: './config/plop/component/component.tsx.plop',
                },
                {
                    type: 'pretty-add',
                    path:
                        './src/shared/components/{{properCase componentName}}/{{properCase componentName}}.test.tsx',
                    templateFile: './config/plop/component/component.test.tsx.plop',
                },
                {
                    type: 'add',
                    path:
                        './src/shared/components/{{properCase componentName}}/{{properCase componentName}}.module.css',
                    templateFile: './config/plop/component/component.module.css.plop',
                },
                {
                    type: 'add',
                    path:
                        './src/shared/components/{{properCase componentName}}/{{properCase componentName}}.module.css.d.ts',
                    templateFile: './config/plop/component/component.module.css.d.ts.plop',
                },
            ];

            return actions;
        },
    });

    plop.setGenerator('React Page', {
        description: 'Create a new React page',
        prompts: [
            {
                type: 'prompt',
                name: 'pageName',
                message: 'Name of your page:',
            },
        ],
        actions: () => {
            const actions = [
                {
                    type: 'pretty-add',
                    path: './src/shared/pages/{{properCase pageName}}/{{properCase pageName}}.tsx',
                    templateFile: './config/plop/page/page.tsx.plop',
                },
                {
                    type: 'pretty-add',
                    path:
                        './src/shared/pages/{{properCase pageName}}/{{properCase pageName}}.test.tsx',
                    templateFile: './config/plop/page/page.test.tsx.plop',
                },
                {
                    type: 'add',
                    path:
                        './src/shared/pages/{{properCase pageName}}/{{properCase pageName}}.module.css',
                    templateFile: './config/plop/page/page.module.css.plop',
                },
                {
                    type: 'add',
                    path:
                        './src/shared/pages/{{properCase pageName}}/{{properCase pageName}}.module.css.d.ts',
                    templateFile: './config/plop/page/page.module.css.d.ts.plop',
                },
            ];

            return actions;
        },
    });

    plop.setGenerator('React Model', {
        description: 'Create a new React model',
        prompts: [
            {
                type: 'prompt',
                name: 'modelName',
                message: 'Name of your model:',
            },
        ],
        actions: () => {
            const actions = [
                {
                    type: 'pretty-add',
                    path: './src/shared/models/{{camelCase modelName}}.model.ts',
                    templateFile: './config/plop/model/model.ts.plop',
                },
            ];

            return actions;
        },
    });

    plop.setGenerator('Redux Store', {
        description: 'Generate a new Redux store (reducer, actions, selectors, …)',
        prompts: [
            {
                type: 'prompt',
                name: 'storeName',
                message: 'Name of your store (e.g. "Calendar Event" or "Vehicle")',
            },
        ],
        actions: () => {
            const actions = [
                {
                    type: 'pretty-add',
                    path: './src/shared/store/{{camelCase storeName}}/actions.ts',
                    templateFile: './config/plop/store/actions.ts.plop',
                },
                {
                    type: 'pretty-add',
                    path: './src/shared/store/{{camelCase storeName}}/actions.test.ts',
                    templateFile: './config/plop/store/actions.test.js.plop',
                },
                {
                    type: 'pretty-add',
                    path: './src/shared/store/{{camelCase storeName}}/reducer.ts',
                    templateFile: './config/plop/store/reducer.ts.plop',
                },
                {
                    type: 'pretty-add',
                    path: './src/shared/store/{{camelCase storeName}}/reducer.test.ts',
                    templateFile: './config/plop/store/reducer.test.js.plop',
                },
                {
                    type: 'pretty-add',
                    path: './src/shared/store/{{camelCase storeName}}/selectors.ts',
                    templateFile: './config/plop/store/selectors.ts.plop',
                },
                {
                    type: 'pretty-add',
                    path: './src/shared/store/{{camelCase storeName}}/selectors.test.ts',
                    templateFile: './config/plop/store/selectors.test.js.plop',
                },
                {
                    type: 'pretty-add',
                    path: './src/shared/store/{{camelCase storeName}}/types.ts',
                    templateFile: './config/plop/store/types.ts.plop',
                },
            ];

            return actions;
        },
    });
};
