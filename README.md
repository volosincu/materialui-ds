# materialui-ds

## Dev locally

Source code in `materialui-ds/components`

Build
`npm run build` - output in folder `lib`

To test changes without release try installing the package build with:  
`npm pack`

- This creates materialui-ds-0.0.YY.tgz
  copy the tgz archive to the repo where to be installed and tested :
  `npm install ~/github/materialui-ds/materialui-ds-0.0.YY.tgz`

If install from `.tgz` doesn't work, use the `build-copy` utility to copy directly the package content in destination project `node_modules`.
Example:

1. `npm run build`
2. `node ./build-copy.mjs --in ./lib --out /c/Users/bogdan.volosincu/projects/my-app/node_modules/materialui-ds/lib`

---

Install released version

`npm i materialui-ds --force`

---

Usage examples:

<code>
  import DesignSystem from 'materialui-ds';
  
  DesignSystem.getMode()
</code>

<code>
  import { Base } from 'materialui-ds';
  
  <Base.FtosButton>Send mail</Base.FtosButton>
</code>

<code>
  import DesignSystem from 'materialui-ds';
  <DesignSystem.UploadComponent
      onErr={onErr}
      onChange={handleUpload}
    />
</code>
