/* eslint-disable */
const escape = require('shell-quote').quote;

const esc = (args) => {
    if (process.platform === 'linux') {
        return escape(args);
    } else {
        return args
            .map((filename) => filename.replace(new RegExp('\\[|\\]', 'g'), '*'))
            .join(' ');
    }
};

console.log(process.platform);

module.exports = {
    './**/*.{js,jsx,ts,tsx}': [
        (filenames) => filenames.map((filename) => `prettier --write "${esc([filename])}"`),
        'eslint -c .eslintrc-staged',
        'git add',
    ],
};
