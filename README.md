# Remove Latest Dependencies From Lock File

This library is designed to be included in your project's `devDependencies` to automatically remove lock version in `package-lock.json` for all `dependencies` that use `latest` version.

## How to use
Just include this library in your `devDependecies` list.
```
npm i -D remove-latest-dependencies-from-lock-file
```

then run 
```
node node_modules/remove-latest-dependencies-from-lock-file
```

in your project's postinstall script