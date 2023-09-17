const resolve = dir => require('path').join(__dirname, dir);
const path =require('path');


const alias = (prefix = `src`) => ({
    '@envelope': `${prefix}/@envelope`,
    '@history': `${prefix}/@history`,
    '@lodash': `${prefix}/@lodash`,
});


const aliases = alias('./src');



const resolvedAliases = Object.fromEntries(
    Object.entries(aliases).map(([key, value]) => [key, path.resolve(__dirname, value)])
);

console.log(resolvedAliases)

module.exports = {
    alias: resolvedAliases
}