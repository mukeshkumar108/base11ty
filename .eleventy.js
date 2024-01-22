module.exports = {
    dir: {
        input: 'src/pages',
        output: 'dist',
        includes: '../',
        layouts: '../layouts',
        flatten: 'true'
    },
    watch: {
        paths: ['./src/scss/'],
    }
}