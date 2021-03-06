import { addBabelPlugin } from 'customize-cra'

const styledJsx = (options?: any) => config => {
  const plugin = ['styled-jsx/babel', options]
  const newConfig = addBabelPlugin(plugin)(config)
  return newConfig
}

export default styledJsx
