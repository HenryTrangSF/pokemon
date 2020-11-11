module.exports = function(eleventyConfig) {
    // Passthrough assets folder
    eleventyConfig.addPassthroughCopy("src/assets");

    return {
        // Sets the input and output folder
        dir: {
            input: "src",
            output: "dist"
        }
    };
}