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

<pre>
  import DesignSystem from '@fintechos-com/ftos-design-system';
  
  DesignSystem.getMode()
</pre>

<pre>
  import { Base } from '@fintechos-com/ftos-design-system';
  
  <Base.FtosButton>Send mail</Base.FtosButton>
</pre>

<pre>
  import { JourneyDesigner: { JDButton } } from '@fintechos-com/ftos-design-system';
  
  <JDButton>Send mail</JDButton>
</pre>
