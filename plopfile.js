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
            ];

            return actions;
        },
    });

    plop.setGenerator('Redux Reducer', {
        description: 'Generate a new Redux reducer (reducer, actions, selectors, …)',
        prompts: [
            {
                type: 'prompt',
                name: 'reducerName',
                message: 'Name of your reducer (e.g. "Calendar Event" or "Vehicle")',
            },
        ],
        actions: () => {
            const actions = [
                {
                    type: 'pretty-add',
                    path: './src/shared/store/{{camelCase reducerName}}/actions.ts',
                    templateFile: './config/plop/store/actions.ts.plop',
                },
                {
                    type: 'pretty-add',
                    path: './src/shared/store/{{camelCase reducerName}}/actions.test.ts',
                    templateFile: './config/plop/store/actions.test.js.plop',
                },
                {
                    type: 'pretty-add',
                    path: './src/shared/store/{{camelCase reducerName}}/reducer.ts',
                    templateFile: './config/plop/store/reducer.ts.plop',
                },
                {
                    type: 'pretty-add',
                    path: './src/shared/store/{{camelCase reducerName}}/reducer.test.ts',
                    templateFile: './config/plop/store/reducer.test.js.plop',
                },
                {
                    type: 'pretty-add',
                    path: './src/shared/store/{{camelCase reducerName}}/selectors.ts',
                    templateFile: './config/plop/store/selectors.ts.plop',
                },
                {
                    type: 'pretty-add',
                    path: './src/shared/store/{{camelCase reducerName}}/selectors.test.ts',
                    templateFile: './config/plop/store/selectors.test.js.plop',
                },
                {
                    type: 'pretty-add',
                    path: './src/shared/store/{{camelCase reducerName}}/types.ts',
                    templateFile: './config/plop/store/types.ts.plop',
                },
            ];

            return actions;
        },
    });
};
