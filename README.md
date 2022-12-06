# materialui-ds

## Dev locally

`npm pack`

- This creates fintechos-com-ftos-design-system-0.0.11.tgz
  copy the tgz archive to the repo where to be installed and tested :

`npm install ./fintechos-com-ftos-design-system-0.0.11.tgz`

### typings fix

- The types are not yet publish
- To fix the compilation errors in projects that use typescripts add `declare module '@fintechos-com/ftos-design-system';` in the `index.d.ts`
