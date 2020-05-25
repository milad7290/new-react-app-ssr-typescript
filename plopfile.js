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
                // {
                //     type: 'pretty-add',
                //     path:
                //         './src/shared/components/{{properCase componentName}}/{{properCase componentName}}.module.css',
                //     templateFile: './config/plop/component/component.module.css.plop',
                // },
                // {
                //     type: 'pretty-add',
                //     path:
                //         './src/shared/components/{{properCase componentName}}/{{properCase componentName}}.module.css.d.ts',
                //     templateFile: './config/plop/component/component.module.css.d.ts.plop',
                // },
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
                // {
                //     type: 'pretty-add',
                //     path:
                //         './src/shared/pages/{{properCase pageName}}/{{properCase pageName}}.module.css',
                //     templateFile: './config/plop/page/page.module.css.plop',
                // },
                // {
                //     type: 'pretty-add',
                //     path:
                //         './src/shared/pages/{{properCase pageName}}/{{properCase pageName}}.module.css.d.ts',
                //     templateFile: './config/plop/page/page.module.css.d.ts.plop',
                // },
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
                    path: './src/shared/models/{{dashCase modelName}}.model.ts',
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
                    path: './src/shared/models/{{dashCase storeName}}.model.ts',
                    templateFile: './config/plop/model/model.ts.plop',
                },
                {
                    type: 'pretty-add',
                    path: './src/shared/store/{{dashCase storeName}}/actions.ts',
                    templateFile: './config/plop/store/actions.ts.plop',
                },
                {
                    type: 'pretty-add',
                    path: './src/shared/store/{{dashCase storeName}}/actions.test.ts',
                    templateFile: './config/plop/store/actions.test.js.plop',
                },
                {
                    type: 'pretty-add',
                    path: './src/shared/store/{{dashCase storeName}}/reducer.ts',
                    templateFile: './config/plop/store/reducer.ts.plop',
                },
                {
                    type: 'pretty-add',
                    path: './src/shared/store/{{dashCase storeName}}/reducer.test.ts',
                    templateFile: './config/plop/store/reducer.test.js.plop',
                },
                {
                    type: 'pretty-add',
                    path: './src/shared/store/{{dashCase storeName}}/selectors.ts',
                    templateFile: './config/plop/store/selectors.ts.plop',
                },
                {
                    type: 'pretty-add',
                    path: './src/shared/store/{{dashCase storeName}}/selectors.test.ts',
                    templateFile: './config/plop/store/selectors.test.js.plop',
                },
                {
                    type: 'pretty-add',
                    path: './src/shared/store/{{dashCase storeName}}/types.ts',
                    templateFile: './config/plop/store/types.ts.plop',
                },
                {
                    type: 'modify',
                    path: './src/shared/store/root.types.ts',
                    pattern: /(import.*;)/,
                    template:
                        "$1\nimport { {{pascalCase storeName}}ActionTypes, {{pascalCase storeName}}Actions, {{camelCase storeName}}InitialState } from './{{dashCase storeName}}/types';\n",
                },
                {
                    type: 'modify',
                    path: './src/shared/store/root.types.ts',
                    pattern: /(export const rootInitialState: RootState = {)/,
                    template: '$1\n{{camelCase storeName}}: {{camelCase storeName}}InitialState,',
                },
                {
                    type: 'modify',
                    path: './src/shared/store/root.types.ts',
                    pattern: /(export const RootActionTypes = Object\.assign\((.|\n)*{},)/,
                    template: '$1 {{pascalCase storeName}}ActionTypes,',
                },
                {
                    type: 'modify',
                    path: './src/shared/store/root.types.ts',
                    pattern: /(export type RootActions =)/,
                    template: '$1 {{pascalCase storeName}}Actions |',
                },
                {
                    type: 'modify',
                    path: './src/shared/store/root.reducer.ts',
                    pattern: /(import.*;)/,
                    template:
                        "$1\nimport {{camelCase storeName}} from './{{dashCase storeName}}/reducer';\n",
                },
                {
                    type: 'modify',
                    path: './src/shared/store/root.reducer.ts',
                    pattern: /(export default combineReducers\({)/,
                    template: '$1\n{{camelCase storeName}},',
                },
            ];
            return actions;
        },
    });
};
