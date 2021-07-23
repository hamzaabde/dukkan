export default {
    plugin: ['@snowpack/plugin-react-refresh'],

    mount: {
        public: '/',
        src: '/dist',
    },

    routes: [
        {
            match: 'routes',
            src: '.*',
            dest: '/index.html',
        },
    ],
}
