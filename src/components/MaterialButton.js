/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import { Button } from '@mui/material'

const MaterialButton = () => {
    const font = css`
      text-transform: none;
    `



    return (
        <>
          <Button variant="text" css={font}>1. Text</Button>
          <Button variant="contained">2</Button>
          <Button variant="outlined">3</Button>
        </>
    )
}

export default MaterialButton
