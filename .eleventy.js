const Image = require('@11ty/eleventy-img');

module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy({"src/assets": "assets"});

    eleventyConfig.addNunjucksAsyncShortcode('image', async (src, alt, sizes) => {
        let metadata = await Image(src, {
            widths: [300, 600, 1200],
            formats: ['avif', 'jpeg'],
            urlPath: '/assets/images/',
            outputDir: './dist/assets/images/'
        });
        let imageAttributes = {
            alt,
            sizes,
            loading: 'lazy',
            decoding: 'async'
        };
        return Image.generateHTML(metadata, imageAttributes);        
    })

    return {
        dir: {
            input: 'src/pages',
            output: 'dist',
            includes: '../partials',
            layouts: '../layouts',
            flatten: 'true'
        },
        watch: {
            paths: ['./src/scss/'],
        }
    }

}