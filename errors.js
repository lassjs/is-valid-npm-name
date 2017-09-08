module.exports = {
  notString: 'package name must be a String',
  trim: 'remove trailing spaces from start and end of package name',
  maxLength: 'package name cannot be more than 214 characters',
  dotUnderscore: 'package name cannot start with a dot nor underscore',
  uppercase: 'package name cannot have uppercase letters',
  atFirst: 'scoped package name must start with "@" character',
  extraAt: `scoped package name has an extra "@" character`,
  noSlash: 'scoped package name must be in the format of @myorg/package',
  extraSlash: `scoped package name has an extra "/" character`,
  builtIn: 'package name cannot use built-in core Node module name',
  nonURLSafe: 'package name had non-URL-safe characters'
};
