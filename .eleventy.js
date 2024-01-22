module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy({"src/assets": "assets"});

    return {
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
}