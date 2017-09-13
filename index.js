const { _builtinLibs } = require('repl');
const slug = require('speakingurl');

const errors = require('./errors');

const isValidPackageName = str => {
  // rules from npm last checked on September 7, 2017
  // <https://docs.npmjs.com/files/package.json#name>

  // ensure it's a string
  if (typeof str !== 'string') return errors.notString;

  // first trim it
  if (str !== str.trim()) return errors.trim;

  // can't be > 214 characters
  if (str.length > 214) return errors.maxLength;

  // can't start with a dot or underscore
  if (['.', '_'].includes(str.substring(0, 1))) return errors.dotUnderscore;

  // no uppercase letters
  if (str !== str.toLowerCase()) return errors.uppercase;

  //
  // name can be prefixed by a scope, e.g. @myorg/package
  //

  // must have @
  if (str.indexOf('@') !== -1) {
    // must have @ at beginning of string
    if (str.indexOf('@') !== 0) return errors.atFirst;

    // must have only one @
    if (str.indexOf('@') !== str.lastIndexOf('@')) return errors.extraAt;

    // must have /
    if (str.indexOf('/') === -1) return errors.noSlash;

    // must have only one /
    if (str.indexOf('/') !== str.lastIndexOf('/')) return errors.extraSlash;

    // validate scope
    const arr = str.split('/');
    const scope = arr[0].substring(1);
    const isValidScopeName = isValidPackageName(scope);

    if (isValidScopeName !== true) return isValidScopeName;

    // validate name again
    return isValidPackageName(arr[1]);
  }

  // don't use the same name as a core Node module
  // <https://stackoverflow.com/a/35825896/3586413>
  if (_builtinLibs.includes(str)) return errors.builtIn;

  // no non-URL-safe characters
  // <https://github.com/lovell/limax/issues/24>
  const safeStr = slug(str);
  if (str !== safeStr)
    return `${errors.nonURLSafe}, try using "${safeStr}" instead`;

  //
  // *EXEMPTION*: due to the sheer number of npm package name squatters
  //
  // don't put "js" or "node" in the name
  //

  return true;
};

module.exports = isValidPackageName;
