import { globalCss } from '@ignite-ui/react'

export const globalStyles = globalCss({
   '*': {
    boxSizing: 'border-box',
    paddung: 0,
    margin: 0
   },

   body: {
    backgroundColor: '$gray900'
   }
})